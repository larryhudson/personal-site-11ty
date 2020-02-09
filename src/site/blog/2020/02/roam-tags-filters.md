---
title: Using hashtags and filters to organise lists in Roam 
date: 2020-02-08
tags: ['post', 'roam', 'thinking']
---

I'm a huge fan of [Roam](https://roamresearch.com/) - it's a note-taking tool with some really unique features that make it more like a second brain.

While Roam has a bunch of powerful features, you don't need to use it like a power user. For the last month or so, I've been mostly using it as a place for daily notes, branching off to a separate page where it felt natural.

I've been trying to organise lists of things I want to read, but I'm still working out the best way to do this.

### First attempt

My first attempt to organise lists was to:
- create a new page for the list (eg. 'Books to read')
- add a new line on this page with the name of the book
- come back to this page whenever I had a new book to add

This felt natural, but it wasn't flexible:
- what happens when I read something? Do I just delete it from the list?
- what if I find a list of books, like a 'best of 2019' list? Do I make a page for that list and nest it?
- what about articles I want to read? Do I make an 'Articles to read' page?


### Moving away from hierarchy
The main problem with my first attempt is that I'm creating a hierarchy, just like creating a folder called 'Books to read' and adding files to it.

One of Roam's most powerful features, and the thing that makes it like a brain, is the *lack* of hierarchy. There are no parent-child relationships, only bidirectional links.

This can feel like a limitation at first, but if you shift the way you write notes, it's really powerful.

### Two ways to make links in Roam
There are two ways to make links in Roam:
- wrapping text in `[[ ]]` brackets - these look like regular inline links.
- adding `#hashtags` - these appear as grey text.

Apart from the requirement that there are no spaces in hashtags, these links are the same - writing `[[ToRead]]` and `#ToRead` links to the same page.

### Using hashtags to categorise things
Using hashtags, we can solve my problem of organising the things I want to read.

Say I saw a review of the new Ezra Klein book, and I wanted to add it to my list of books to read.

I would:
- create a new page titled `[[Ezra Klein - Why We're Polarized]]`
- at the top of this page, I would categorise this page by adding #Book and #ToRead

That's it! Rather than nesting the book in a list of books, I'm just creating a page in Roam's graph network, and linking it to 'Book' and 'ToRead'.

### Filtering linked references

Because links are bidirectional, you can see where other pages are linking to the current page. For example, on the 'ToRead' page, I can see all the places where I've added `#ToRead`. These are called linked references.

(inserted Linked references screenshot)

Roam makes it easy to filter these references. When I'm looking at the linked references, I can choose to include another page to see the overlap. For example, on the 'ToRead' page I can include 'Book' to see pages that link to both.

This solves my problem! Now I have a flexible way to organise the things I want to read. I can answer my own questions from above:

#### What happens when I read something?
I would remove '#ToRead' and add '#HaveRead'.

#### What if I find a list of books, like a 'best of 2019' list? Do I make a page for that list and nest it?
Yes, I would make a page for the 'best of 2019' list, and on that page, have a link to individual Roam pages for each book in the list. Then, on each book page, add '#Book' and '#ToRead'. This way:
- the book page has the 'best of 2019' list in its linked references
- the book will still show up in your '#ToRead #Book' filter.

#### What about articles I want to read?
I would simply tag these as #Article #ToRead. You can apply this to any type of content.

I still feel like I'm not making the most of Roam's powerful features, but I'm keen to continue tinkering. Let me know if you have any tips!