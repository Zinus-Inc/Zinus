# Zinus Tech Blog

Tech blog for the Zinus engineering team, deployed via GitHub Pages.

## Local development

Requires Ruby and Bundler.

```bash
gem install bundler
bundle install
bundle exec jekyll serve --livereload
```

Open `http://localhost:4000` in your browser.

## Writing posts

- Create `_posts/YYYY-MM-DD-title.md`.
- Sample front matter:

```markdown
---
title: Post title
description: Short summary
tags: [tag1, tag2]
---

Content...
```

## Structure

- `index.html`: Home
- `posts/`: Posts listing
- `about.md`: About page
- `_layouts/`: Layout templates
- `_includes/`: Header/Footer/Head includes
- `assets/`: CSS/JS/icons

