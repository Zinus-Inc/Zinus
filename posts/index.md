---
layout: default
title: All Posts
permalink: /posts/
---

<h1>All posts</h1>

<div class="post-controls">
  <input type="search" id="post-search" placeholder="Search posts…" aria-label="Search posts"/>
  <input type="date" id="post-start-date" class="date-input" placeholder="Start date" aria-label="Start date"/>
  <input type="date" id="post-end-date" class="date-input" placeholder="End date" aria-label="End date"/>
  <div id="tag-filters" class="tag-filters" aria-label="Filter by tag">
    {% assign all_tags = site.posts | map: 'tags' | compact | join: ',' | split: ',' | uniq | sort %}
    {% for tag in all_tags %}
      {% if tag and tag != '' %}
        <button class="tag-filter" data-tag="{{ tag }}">#{{ tag }}</button>
      {% endif %}
    {% endfor %}
  </div>
  <button id="clear-filters" class="clear-filters" type="button">Clear</button>
  <div id="post-count" class="post-count" aria-live="polite"></div>
  <hr/>
</div>

<ul id="post-list" class="post-list">
  {% for post in site.posts %}
    <li class="post-item" data-title="{{ post.title | downcase }}" data-tags="{{ post.tags | join: ' ' | downcase }}" data-date="{{ post.date | date: '%Y-%m-%d' }}">
      <a href="{{ post.url | absolute_url }}">{{ post.title }}</a>
      <small>{{ post.date | date: '%Y-%m-%d' }}</small>
      {% if post.tags %}
        <span class="tag-list-inline">{% for tag in post.tags %}<span class="tag">#{{ tag }}</span>{% endfor %}</span>
      {% endif %}
    </li>
  {% endfor %}
  {% if site.posts == empty %}
    <li>No posts yet.</li>
  {% endif %}
</ul>


