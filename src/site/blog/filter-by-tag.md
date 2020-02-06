---
pagination:
  data: collections
  size: 1
  alias: tag
  filter:
    - all
    - nav
    - post
    - posts
    - tagList
  addAllPagesToCollections: true
layout: layouts/page.njk
renderData:
  title: Tagged “{{ tag }}”
permalink: /blog/tags/{{ tag }}/
---

{% include 'partials/tag-list.njk' %}

<h2>Posts about {{ tag }}</h2>

{% set postlist = collections[ tag ] %}
{% include "partials/filtered-posts.njk" %}