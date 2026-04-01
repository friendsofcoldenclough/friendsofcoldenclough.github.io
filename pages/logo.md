---
layout: page
title: Logo
permalink: /logo/
section: about
---

{% for logo in site.data.logo %}
<article class="post-list-item">
    <figure>
        <a href="{{ site.url }}{{ site.baseurl }}/assets/logo/{{ logo.filename }}">
            <img src="{{ site.url }}{{ site.baseurl }}/assets/logo/{{ logo.filename }}" alt="{{ logo.name }}">
        </a>
    </figure>
    <div class="post-list-item-content">
        <h2><a href="{{ site.url }}{{ site.baseurl }}/assets/logo/{{ logo.filename }}">{{ logo.name }}</a></h2>
        <p>{{ logo.description }}</p>
    </div>
</article>
{% endfor %}