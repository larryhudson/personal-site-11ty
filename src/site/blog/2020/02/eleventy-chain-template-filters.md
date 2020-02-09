---
title: Chaining template filters in Eleventy
date: 2020-02-08
tags: ['post', 'web development', 'eleventy']
description: How to use Eleventy template filters and chain them together for readable, concise code
---

This week I've been making the blog section of this site a little more sophisticated. Using Eleventy's [collections](https://www.11ty.dev/docs/collections/), I've added post categories so you can filter posts by topic.

I wanted to show the post's tags in a single line, each linking to a page where you can see posts about that topic, separated by a comma. You can see what I wanted to achieve above, below the post title.

To display a list of the current page's tags, you use the `tags` variable from the frontmatter. To display a list of tags in a `<ul>` element, you could do something like this:
```
<ul>
    {{ "{% for tag in tags %}" | escape }}
        <li><a href="/blog/tags/{{ "{{tag}}" | escape }}">{{ "{{tag}}" | escape }}</a></li>
    {{ "{% endfor %}" | escape }}
</ul>
```

This wasn't good enough for my use case because:
- Posts also have the tag 'post' (so they end up in the posts collection). This needs to be filtered out.
- I want the tags to be in a single line, separated by a comma. This would be tricky to do using `for` in Nunjucks.

## Template filters to the rescue

Eleventy's template filters make it easy to do little tweaks to your content. These are added to the `.eleventy.js` config file so you can use them throughout your project. A good example of this is `readableDate`, which takes a date object and returns a nice string:
```
eleventyConfig.addFilter('readableDate', dateObj => {
  return DateTime.fromJSDate(dateObj, {
    zone: 'utc'
  }).toFormat('d LLLL y');
});
```

## Chaining filters together

Something really cool about these filters is that you can chain them together, passing the output from one filter to the next. This means you can solve more complicated problems without writing more complicated code.

This means that I could solve my tags list problem in a readable, concise way. This is the code in my Nunjucks template:

```
<p>Tagged with {{ "{{ tags | withoutPostTag |
  transformToLinks | joinWithComma | safe }}" | escape }}</p>
```

Below, I'll explain what each filter does and show you the code.

### `withoutPostTag`

This filter returns the same array, without the post tag.

In `.eleventy.js`:
```
eleventyConfig.addFilter('withoutPostTag', tags => {
  return tags.filter(t => t !== "post")
})
```

### `transformToLinks`

This filter takes the array of tags and uses the `map` function to return an array of `<a>` elements with the proper href attribute.

In `.eleventy.js`:
```
eleventyConfig.addFilter('transformToLinks', tags => {
  return tags.map(tag => {
    const tagUrl = `/blog/tags/${tag}`
    return `<a href="${tagUrl}">${tag}</a>`
  })
})
```

### `joinWithComma`
This filter takes the array of links and returns a string of the elements, separated by a comma.

In `.eleventy.js`:
```
eleventyConfig.addFilter('joinWithComma', strings => {
  return strings.join(", ")
})
```

### `safe`
This is a built in Nunjucks filter that tells Nunjucks not to escape the content.

### Pros and cons of this approach

I like this approach because:
- it's a nice way to deal with things that are too complicated to do in a templating language.
- writing these filters 'just worked' and felt natural - it fits the way my brain works
- because you are writing JavaScript functions, you don't need to worry about whether your templating language can do something.
- these filters are reusable throughout your project
- chaining a few small, 'utility' filters together lets you compose more powerful filters

I can see a couple of limitations:
- in the `transformToLinks` filter, I'm hard-coding the URLs and I can't easily add classes to style the links.
- because we're adding filters to `.eleventy.js`, there's a long distance between writing the filters and using them. Ideally our filters would be located closer to where are they used (see [Kent C. Dodd's post about colocation](https://kentcdodds.com/blog/colocation)).
- if you had a complex site, and you used a lot of these, you might be worried about changing a filter in case it breaks in other places it's used. You need to be sparing in the way you declare these, similar to how you architect your CSS.

What do you think about this pattern? I'm keen to hear if there's a better way, or more limitations I haven't considered.