---
title: "Join Mp3 files with cat"
date: 2023-08-05
draft: false
tags:
  - QuickBits
  - Tips
---

The `cat` command is useful for con`cat`enating (get it ?) various text files.

But did you know you can also join MP3 files with it ?

Just do something like this:

```bash
cat file1.mp3 file2.mp3 > file3.mp3
```

This will result in `file3.mp3` containing the joined audio from `file1` and `file2`.
