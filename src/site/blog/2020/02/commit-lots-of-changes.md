---
title: git commit -m "lots of changes"
date: 2020-02-10
tags: ['post', 'web development', 'git']
---

I use Git for most of my projects. I'm on board with the general idea of careful version control, and I'm pretty comfortable with the basic commands.

But when I'm working on a project by myself, I often find myself working on a project for a few hours, fixing a bunch of different things, then typing:
```
$ git add .
$ git commit -m "lots of changes"
$ git push
```

This is the wrong approach. I'm a cowboy coder!

I need to be more thoughtful about:
- what I'm working on - fix one thing at a time
- what is added to a commit - only add the files that work towards the goal.

I need to move away from "ok I'm done, let's hit Control+S and get out of here".

I need to build commits that describes what I'm working on in case anyone else wants to review.

Anyway, this is just me convincing myself to care more about this.

### Strategies for getting better at this
- Use VS Code's 'Changes' view to review what has changed and carefully stage them.
- Review the actual changes and write a nice message describing what has changed.

If you have any helpful tips, send them my way. Or even better, share them publicly on [Twitter](https://twitter.com/larryhudson).