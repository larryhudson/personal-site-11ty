---
title: Learning Rails
date: 2020-01-17
tags: ['post', 'web development', 'rails']
---

Over the Christmas break I started playing around with [Ruby on Rails](https://rubyonrails.org/). I hadn't used it, or even the Ruby programming language before, so it was quite a challenge, but I'm really enjoying it.

When I first started learning programming, I started making web apps with Django. Django has a similar mindset to Rails - it's an MVC framework that focuses on 'convention over configuration' to help you focus on what you really want to make. I've worked on quite a few Django projects, both in my own time and at work, so I wasn't a complete beginner coming to Rails.

I mostly gave Rails a shot because I'd seen a few David Heinemeier Hansson (DHH) videos on YouTube and I find him really charismatic. I love the way that he talks about programming. This conference video from 2014, [Writing Software](https://www.youtube.com/watch?v=9LfmrkyP81M), was particularly powerful for me. In it, he argues against test-driven development (TDD) and encourages us to think of ourselves as software **writers** and focus on clarity.

### Scaffolding

One of the things that jumped out at me when I was starting with Rails was its scaffolding feature. This lets you create a new model, and it generates basic views for listing, creating, updating and deleting instances of that model.

For example, I could create a scaffold for a 'post' model, which lets me see a list of my posts, create a new one, update existing posts, and delete existing posts.

I think this is a really important tool for when you have an idea to make something, and just want to get something barebones running. It lets you make the idea quickly, rather than getting stuck in database migrations and wiring up views over and over again.

### Database migrations - harder than expected

I actually found Rails' database tool, ActiveRecord, harder to deal with than expected. Coming from Django, I thought I would be able to edit a 'models' file and have Rails generate the migrations for me.

Rails expects you to have a pretty strong knowledge of database associations to
