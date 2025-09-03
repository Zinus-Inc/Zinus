# Zinus Tech Blog

This repository hosts the Zinus engineering blog. It’s a lightweight, Jekyll‑based site deployed with GitHub Pages for sharing engineering notes, project write‑ups, and internal learnings that are safe to make public.

## Local development

Prerequisites: Ruby and Bundler.

```bash
gem install bundler
bundle install
bundle exec jekyll serve --livereload
```

Then open:
- Project site path: `http://127.0.0.1:4000/Zinus/`
- Or serve at root locally: `bundle exec jekyll serve --livereload --baseurl ""` → `http://127.0.0.1:4000/`

## Writing posts

- Create a file: `_posts/YYYY-MM-DD-title.md`
- Minimal front matter:

```markdown
---
title: Post title
description: Short summary
tags: [tag1, tag2]
---

Content here…
```

Tips:
- Use fenced code blocks for examples. For diagrams, fence with `mermaid` and keep labels plain text.
- Add tags for better filtering/search.

## Repository structure

- `index.html` – Home (latest posts + quick filters)
- `posts/` – All posts page (search + tag filters)
- `about.md` – About page
- `_posts/` – Markdown posts
- `_layouts/`, `_includes/` – Jekyll layouts/partials
- `assets/css/main.css`, `assets/js/site.js` – Theme, Mermaid rendering, search
- `assets/favicon.svg` – Favicon

## Deployment

GitHub Pages → Source: Deploy from branch → `main` / `(root)`.

For this project site, links and assets use:
- `_config.yml`: `url: https://zinus-inc.github.io`, `baseurl: /Zinus`

## Troubleshooting

- If the site looks unstyled on GitHub Pages, check `url/baseurl` and hard‑refresh.
- If links 404, ensure they’re built with Jekyll filters (`relative_url`/`absolute_url`).
- If Mermaid shows text, verify the block starts with ```mermaid and labels don’t contain HTML.

