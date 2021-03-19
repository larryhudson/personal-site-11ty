---
title: Escaping Nunjucks in Markdown code blocks (Eleventy)
tags: ['post', 'web development', 'eleventy']
date: 2020-02-08
---

When I was writing [my other post about chaining template filters in Eleventy](/blog/2020/02/eleventy-chain-template-filters/), I came across a tricky problem.

A bit of context: I write these posts in Markdown files, but because Nunjucks is my templating language, Eleventy allows me to use Nunjucks inside my Markdown.

In the other post, I had code blocks demonstrating Nunjucks code:

```
{% raw %}
<ul>
    {% for tag in tags %}
        <li><a href="/blog/tags/{{tag}}">{{tag}}</a></li>
    {{% endfor %}
</ul>
{% endraw %}
```

But writing the code above between \``` and \``` did not work, because it was trying to execute the Nunjucks `for` loop.

I found a similar issue on GitHub, but it didn't have 

### The solution

The solution I've found is to wrap the Nunjucks tags (anything with either {{ "`{% %}` or `{{ }}`" | escape }}) in quotes, then in \{\{ \}\} brackets with the `escape` filter. This tells Nunjucks to deal with the content as a string, rather than as an actual Nunjucks directive.

I'm going to insert a screenshot of the code, because making it appear here would require some Inception-level double escaping:
![Screenshot of escaped Nunjucks code inside Markdown](/images/escaping-nunjucks-in-eleventy.png)
<p class="text-sm">Note: <a href="https://www.github.com/larryhudson/personal-site-11ty">If you can't see the screenshot above, here is the source code on GitHub</a></p>

This isn't ideal because the code examples become much harder to read and edit.

There is probably a better way - maybe there is some setting to turn off Nunjucks parsing inside Markdown? If I could do that for only some templates, that would be great.

I'll update this if I find a better way - for now, the above works OK for simple examples.



