---
layout: default
title: All Posts
permalink: /posts/
---

<h1>All posts</h1>
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | absolute_url }}">{{ post.title }}</a>
      <small>{{ post.date | date: '%Y-%m-%d' }}</small>
    </li>
  {% endfor %}
  {% if site.posts == empty %}
    <li>No posts yet.</li>
  {% endif %}
</ul>


