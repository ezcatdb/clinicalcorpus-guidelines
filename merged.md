---
layout: minimal
title: Enzyme reaction annotation guidelines
---

<h1 style="font-size:32px">Entities</h1>

{% assign sorted = site.entity | sort: 'order' %}
{% for i in sorted %}
## {{ i.title }}{% if i.shortdef %}: {{ i.shortdef }}{% endif %}
{{ i.content }}
{% endfor %}

<h1 style="font-size:32px">Events</h1>

The events can be categorized into reaction events and other events
such as interactions, which will be described below.

{% assign sorted = site.event | sort: 'order' %}
{% for i in sorted %}
## {{ i.title }}{% if i.shortdef %}: {{ i.shortdef }}{% endif %}
{% if i.category %}**Category: {{ i.category }}**{% endif %}
{{ i.content }}
{% endfor %}

<h1 style="font-size:32px">Relations</h1>

In addition to the relations between event triggers and their
arguments (*Agent*, *Theme*, etc.), five types of relations were
defined. In the example below, typical examples of relations are
indicated.

{% include image.html name="relation-examples.jpg" width="100%" %}

Those relations are defined as follows:

{% assign sorted = site.relation | sort: 'order' %}
{% for i in sorted %}
## {{ i.title }}{% if i.shortdef %}: {{ i.shortdef }}{% endif %}
{{ i.content }}
{% endfor %}

<h1 style="font-size:32px">Speculation attributes and Certainty levels for Speculation cues</h1>

{% assign sorted = site.attribute | sort: 'order' %}
{% for i in sorted %}
## {{ i.title }}{% if i.shortdef %}: {{ i.shortdef }}{% endif %}
{{ i.content }}
{% endfor %}
