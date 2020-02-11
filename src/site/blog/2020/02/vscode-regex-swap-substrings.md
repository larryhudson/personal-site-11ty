---
title: "Handy trick: Swapping two substrings in VS Code with regular expressions"
date: 2020-02-11
tags: ['post', 'vs code', 'regex']
---

I've always been a little bit scared of regular expressions - it always feels like the struggle to learn how to use them will outweigh the benefits. Usually I'd rather just spend a bit longer manually editing code. But today I learned a handy trick!

I had a list of book recommendations from [Frank Chimero's blog](https://frankchimero.com/reading/) that I wanted to add to my [Roam](/blog/tags/roam) notes. They were all formatted as `<Title> by <Author>`. I wanted them to be formatted as `[[<Author> - <Title>]]`.

In VS Code, the way to go is to use find and replace:
```
Find:       (*.) by (*.)
Replace:    [[$2 - $1]]
```

Pretty simple! This is how it works:
- The (parentheses) are creating **capture groups** - let's call them group 1 and 2.
- `*.` means any number of character. If the 'by' wasn't there as the separator, the expression wouldn't know where to stop.
- Because the 'by' is not inside a pair of (parentheses), it's not in a capture group. This means it won't show up in my 'replace' phrase.
- In the replace line, `$2` means group 2 and `$1` means group 1.

If you're learning Ruby, [Russ Olsen's book Eloquent Ruby](https://www.amazon.com/Eloquent-Ruby-Addison-Wesley-Professional/dp/0321584104) has a great chapter on regular expressions. It makes it much less intimidating!