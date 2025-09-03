---
title: n8n on self-hosted servers to auto-cancel bot-generated warranty‑only Shopify orders
description: Replacing Shopify Flow with n8n using GraphQL to cancel $0 or low‑value protection plan orders (Mulberry, Route) created by bots
tags: [shopify, n8n, automation, graphql, anti-fraud]
authors:
  - name: Junkuk Kim
    role: DevOps Engineer, Zinus
    url: https://www.linkedin.com/in/junkukkim/
  - name: Bobby Hudgins
    role: Software Engineer, Zinus
    url: https://www.linkedin.com/in/thebobhudgins/
---

This project documents how we built a self‑hosted n8n workflow to automatically cancel malicious orders that contain only non-public warranty products (e.g., Mulberry, Route) or low‑value $3 protection plans. Attackers were repeatedly creating these orders to pollute our sales signals and downstream operations. The workflow runs reliably in production and replaces a previous attempt with Shopify Flow.

## Why n8n instead of Shopify Flow

- Shopify Flow cannot cancel orders in our scenario.
- Our SAP integration sometimes pushes tracking first and marks orders as Fulfillment in progress, which blocks Flow from cancelling/refunding.
- Conflicts with Shopify's built‑in High‑risk auto‑cancel flow created race conditions and inconsistent states.
- n8n lets us orchestrate retries and call Shopify GraphQL directly, including fulfillment cancellation before order cancellation.

## High‑level behavior

- Detect orders via Shopify `orders/create` webhook and a scheduled backfill (every 30 minutes).
- Inspect line items; if all items are tagged `SEARCHANISE_IGNORE`, treat the order as a warranty‑only/bot order.
- Attempt `orderCancel` via GraphQL.
- If the order has outstanding fulfillments, call `fulfillmentCancel`, wait briefly, then retry `orderCancel`.
- Send an operational email once handled.

## Mermaid diagram

```mermaid
%%{init: {'flowchart': {'htmlLabels': false}}}%%
flowchart TD
  subgraph Triggers
    A[Shopify orders/create webhook]
    B[Schedule trigger (every 30m) → Get recent orders]
  end

  A --> C[Get order]
  B --> D[Loop over recent orders]
  D --> C

  C --> E[Split line items]
  E --> F[Fetch product for each item]
  F --> G{Product tags include: SEARCHANISE_IGNORE?}
  G -->|yes| H[Mark item as __skip]
  G -->|no| I[Keep item]
  H --> J[Batch complete]
  I --> J

  J --> K{All items skipped? (warranty-only)}
  K -->|no| L[Do nothing]
  K -->|yes| M[GraphQL: orderCancel]

  M --> N{Error: outstanding fulfillments?}
  N -->|yes| O[GraphQL: fulfillmentCancel]
  O --> P[Wait 1–5s]
  P --> Q[GraphQL: orderCancel (retry)]
  N -->|no| R[Done]
  Q --> S{Errors remain?}
  S -->|yes| T[Escalate / log]
  S -->|no| R

  R --> U[Send email via Outlook node]
```

## Key implementation notes

- The workflow file in this repository shows the exact node graph: `Shopify - Cancel SEARCHANISE_IGNORE Only Orders.json`.
- We use Shopify GraphQL API `2025-07` with header‑auth in n8n.
- Core mutations:

```graphql
mutation OrderCancel(
  $orderId: ID!,
  $notifyCustomer: Boolean,
  $refundMethod: OrderCancelRefundMethodInput!,
  $restock: Boolean!,
  $reason: OrderCancelReason!,
  $staffNote: String
) {
  orderCancel(
    orderId: $orderId,
    notifyCustomer: $notifyCustomer,
    refundMethod: $refundMethod,
    restock: $restock,
    reason: $reason,
    staffNote: $staffNote
  ) {
    userErrors { field message }
    orderCancelUserErrors { field message code }
  }
}
```

```graphql
mutation fulfillmentCancel($id: ID!) {
  fulfillmentCancel(id: $id) {
    fulfillment { id status }
    userErrors { field message }
  }
}
```

- Warranty/auxiliary products are identified by product tags that include `SEARCHANISE_IGNORE`.
- Throttling: brief waits between cancellation calls to avoid API rate limits.
- Notification: the Outlook node emails a summary to the operations mailbox.

## Outcomes

- Malicious warranty‑only orders are cancelled quickly and consistently, without blocking on fulfillment states.
- No more conflicts with Shopify High‑risk auto‑cancel flows.
- Lower manual review load for support and finance.


