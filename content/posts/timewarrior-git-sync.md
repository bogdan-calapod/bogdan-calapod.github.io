---
title: "⌚ Syncing TimeWarrior files via Git"
date: 2023-07-07T22:52:23+02:00
draft: false
tags:
  - Workflow
---

I've recently started using [TimeWarrior](https://www.timewarrior.net/) to track my time. Having everything in the terminal makes it very easy to link up things to do multiple stuff. For example, I have aliases set up to automatically create a branch and start time tracking based on a JIRA issue number, as well as updating the tracked time to JIRA.

One of the limitations I have found with TimeWarrior though is the fact that it has no simple native sync method. It has a specialized server, but I didn't want to go through the hassle of keeping a VPC up just for tracking my time.

The openness of Android though means that I can use the [Termux](https://termux.com/) app to set up a more spartan sync method via `git`. This article shows my initial setup, and I'll update it as I improve on it.

# 📁 TimeWarrior's files

TimeWarrior keeps all its data in the `~/.timewarrior/` folder. This means that setting up a git repo here should be pretty straightforward for uploading the data somewhere.

Because I mostly use TimeWarrior through custom aliases, this means that the syncing can also be done seamlessly, as long as I do not overlap weirdly between devices.

# 📱 Phone sync

The phone syncing method is basically copying the aliases on the `Termux` installation and using the same aliases there. With the same git repo configured, it should be good enough for personal use.

This is a bit hacky, but it works.
