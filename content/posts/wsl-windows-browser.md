---
title: "Make WSL links open in the default Windows browser"
date: 2023-06-08T09:14:23+02:00
draft: false
tags:
  - 💡 Tips
---

A nice thing with WSL in Windows 11 is the fact that graphical applications are supported natively without too much fuss. However, this means that, if you have a browser installed in WSL, that browser will open by default whenever you trigger a link click from your WSL installation (for example, when using [`lazygit`](https://github.com/jesseduffield/lazygit)'s 'Create PR' option).

I just ran over [`wslview`](https://wslutiliti.es/wslu/man/wslview.html), which is a fake browser that just triggers your default Windows browser when called. I found that most apps follow the `BROWSER` environment variable, so you can just place the following in your `.bashrc` and you're good to go:

```bash
export BROWSER=wslview
```

To install `wslview`, you can just get it from `apt-get`:

```bash
sudo apt-get install wslview
```
