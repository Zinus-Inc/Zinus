---
title: Keeping Outlook Mailboxes Lean with n8n: Our “Self-Cleaning Sent Items” Workflow
description: A nightly n8n workflow that enforces Outlook mailbox quotas—deleting the oldest Sent Items until usage drops below 49%, preventing 100% lockups, and emailing a tidy report.
tags: [outlook, n8n, microsoft-graph, automation, email, quota-management, workflows]
authors:
  - name: Junkuk Kim
    role: DevOps Engineer, Zinus
    url: https://www.linkedin.com/in/junkukkim/
  - name: Bobby Hudgins
    role: Software Engineer, Zinus
    url: https://www.linkedin.com/in/thebobhudgins/
---

> **TL;DR:** We built an n8n workflow that runs nightly, checks an Outlook mailbox’s storage, and—if usage is above 50%—permanently deletes the oldest messages from **Sent Items** until usage drops below 49%. It then emails a status report. Zero manual cleanup. Zero drama.

---

## Why we built this

Mailbox quotas shouldn’t be a part-time job. We send a *lot* of automated emails, which means **Sent Items** can quietly balloon and tip an otherwise healthy mailbox over quota. We wanted a simple, deterministic guardrail that:

- Enforces a **hard ceiling** on mailbox growth  
- Requires **no manual intervention**  
- Leaves **inbox and critical folders untouched**

n8n was a perfect fit: visual, automatable, and great at orchestrating API calls with guardrails.

---

## What the workflow does (at a glance)

1. **Runs nightly at midnight** via `Schedule` trigger.  
2. **Checks mailbox usage** through Microsoft Graph (read-only usage metrics).  
3. **If usage ≥ 50%**, it:
   - Pulls **oldest Sent Items** in batches
   - Permanently deletes those messages
   - Re-checks usage and repeats until **< 49%**  
4. **Sends a completion email** with the final usage and how many messages were deleted.

We intentionally use **49%** as the target to avoid bobbling around the threshold on the next run.

---

## Why high utilization hurts

- **At 100% quota, mail flow stops.** Hitting the maximum quota typically blocks **sending** and can block **receiving** as well—exactly the kind of outage we don’t want.  
- **Client performance degrades.** Large stores make desktop and mobile clients slower to start, search, and sync; local caches (OST/PST) swell and get more error-prone.  
- **Search & discovery slow down.** Bigger mailboxes increase indexing time and make eDiscovery/compliance searches more expensive and sluggish.  
- **Risk of missed automations.** If quotas block mail, downstream processes that rely on email (alerts, approvals, receipts) can silently fail.  
- **Operational overhead spikes.** Backups and restores take longer; support escalations go up; users resort to manual triage instead of real work.

---

## Node-by-node tour

> Naming below mirrors the canvas, with sensitive values abstracted.

- **Schedule Trigger** – Fires at `00:00` every day.  
- **Get All Folders** → **Get usage** – Looks up folder IDs and retrieves usage stats (no secrets hard-coded).  
- **Check if > 50%** – Branches on usage. If false, we short-circuit: log + notify.  
- **Get Sent Items** → **Get Items List** – Locates **Sent Items** and fetches a **sorted oldest-first** batch of IDs.  
- **Batch Emails** → **Permanent Delete Emails** – Deletes in controlled chunks; a brief **Wait (0.1s)** smooths bursts and avoids throttling.  
- **Get updated usage** – Re-reads usage to see if we’ve crossed below **49%**.  
- **Return input / chooseBranch** – Loop if still above threshold and no errors; otherwise summarize.  
- **Previous usage & Deleted Emails & Errors…** → **Get deleted count** → **Send a message** – Aggregates usage, deletion counts, and errors into a tidy status email.

> There’s also a small safety branch labeled **“If Usage > 40% & No Errors”** that keeps the loop resilient to transient reads and exits cleanly if anything looks off.

---

## The control loop (Mermaid flowchart)

```mermaid
flowchart TD
  A[Schedule Trigger @ 00:00 daily] --> B[Get mailbox usage]
  B -->|usage < 50%| C[Send status email: All good]:::done
  B -->|usage ≥ 50%| D[Init total_deleted = 0]

  D --> E[Fetch oldest Sent Items batch]
  E --> F{Any IDs?}
  F -->|No| G[Send status email: No items to delete]:::done
  F -->|Yes| H[Hard delete batch]

  H --> I[Wait 100 ms]
  I --> J[Re-check mailbox usage]
  J --> K{usage ≥ 49%?}
  K -->|Yes| E
  K -->|No| L[Send status email: Cleanup complete]:::done

  classDef done fill:#e8f5e9,stroke:#2e7d32,color:#2e7d32;
  ```

---

## Guardrails & good manners

- **Read-only before write-heavy**: We don’t touch messages unless usage demands it.
- **Batching + back-off**: Fixed-size deletes + a tiny pause keep API usage smooth and throttle-friendly.
- **Folder-scoped deletes only**: Only **Sent Items** is pruned. Inbox and critical folders stay untouched.
- **Safe thresholds**: The `50%/49%` band avoids thrash and keeps runs short.
- **Minimal permissions**: Graph scopes are limited to what’s required for folder read + message delete.
- **Idempotent by design**: If a run is interrupted, the next one simply re-evaluates usage and continues.

## Closing thoughts

This is one of those *“small but mighty”* automations: it quietly removes a class of operational noise. n8n made it simple to build a safe, auditable, and repeatable mailbox hygiene policy—without wiring up a bespoke service or doing cron yoga.

If you’re already using n8n for internal automations, this pattern `(measure → batch → verify → report)` is reusable well beyond email. And if you’re not… consider this your sign.