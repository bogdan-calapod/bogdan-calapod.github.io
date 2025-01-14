---
title: "🎨 Design Mode - Edit your page directly in the browser"
date: 2025-01-14
draft: false
tags:
  - Tips
  - JavaScript
---

Ok so [this](https://www.reddit.com/r/webdev/comments/1i173hd/15_years_as_a_webdev_only_just_found_out_about/)
reddit post taught me that there is a
[design mode](https://developer.mozilla.org/en-US/docs/Web/API/Document/designMode)
in the browser. As per MDN:

> `document.designMode` controls whether the entire document is editable.
> Valid values are "on" and "off". According to the specification,
> this property is meant to default to "off". Firefox follows this standard.
> The earlier versions of Chrome and IE default to "inherit". Starting in
> Chrome 43, the default is "off" and "inherit" is no longer supported.
> In IE6-10, the value is capitalized.

What this does is basically turn any web page you're viewing into an editable
document. Really useful for testing your design easily with different values
or editing quick values for a screenshot!
