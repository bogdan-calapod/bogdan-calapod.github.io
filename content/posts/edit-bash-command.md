---
title: "📌 Edit your terminal command in editor"
date: "2023-07-26T10:00:00"
author: "Bogdan Marius Calapod"
authorTwitter: "bogdanmariuscalapod"
tags: ["quickbits"]
keywords: ["shell", "tips"]
showFullContent: true
---

Just found out from [this short video by Web Dev with Matt](https://www.youtube.com/watch?v=f9eVam6d_No) that you can edit your current command in your editor easily by hitting `Ctrl + X` followed by `Ctrl + E`.

For example, let's say that my shell looks like this:

```bash
$ ls
```

Hitting the above keys will open your default editor (check `echo $EDITOR` to see which is it) with the command. Save it, close it and your edits will be available in your shell.

## Why would I use this ?

There are many times when we have a long unwieldy command that we would like to edit somewhere in the middle, or reword part of it. This helps you quickly change what you want to do, all in the comfort of your editor.
