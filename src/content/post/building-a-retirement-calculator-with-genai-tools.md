---
publishDate: 2024-09-24T18:27:22Z
author: Kamal Gaur
title: Building a retirement calculator with GenAI tools 
excerpt: They say retirement planning is one of the most complex problems to solve since it involves a lot of moving parts – Known variables Unknown… 
category: General
tags:
  - finance
  - genAI
---

They say retirement planning is one of the most complex problems to solve since it involves a lot of moving parts –

Known variables

1. retirement age
2. current monthly expenses
3. current corpus size

Unknown variables

1. life expectancy
2. expected rate of inflation
3. expected rate of growth of corpus

Typically, people use Known.1&2&3 and estimate Unknown.1&2&3 to arrive at Future Corpus Size that will be needed to comfortably retire. But that’s the typical approach that everyone takes – the idea I had was to build a tool that does the same thing, but in reverse… which is by providing Current Corpus Size (Known.3), could you calculate what should be your Future Monthly Expenses Budget?

I decided to take Claude AI for a spin and was blown away by how quickly it was able to create code that does what you need it to do. Turns out, I was able to create a functional tool to answer exactly that in less than an hour – and this hour went in tinkering with what I wanted built, plus some troubleshooting, plus some cosmetic formatting.

This is what the tool finally looked like – 

[![](https://kamalgaur.com/wp-content/uploads/2024/09/v3.9-1024x842.png)](https://kamalgaur.com/wp-content/uploads/2024/09/v3.9.png)

Feel free to [take it for a spin](https://claude.site/artifacts/0a673300-656a-4b16-8123-3854e5fcb4e8), and let me know your thoughts in the comments below.
