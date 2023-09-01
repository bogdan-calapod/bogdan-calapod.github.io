---
title: "🐧 Setting up WSL2 from scratch"
date: 2023-09-01
draft: true
tags:
  - WSL2
  - Tutorial
---

I do prefer working with the Windows Subsystem for Linux as my development environment. This allows me to both use all the Windows apps I need, while benefiting from the development tools which a Unix OS provides. While macOS would also work, I also like to game from time to time, as well as not really feeling comfortable with the price and "syntheticity" of Apple products.

That being said, WSL2 is not perfect, and I see a lot of tutorials which contradict themselves on what is the best setup and tools to use them. This is by no means a definitive, "this is the best" way guide to set up WSL2, but it suits me very well and I hope it helps you to at least get some hints on how you can improve your setup.

That being said, let's begin!

> Note: This guide is a work in progress

# 📥 Install WSL2

In order to install WSL2, simply go to the Microsoft Store, search for Windows Subsystem for Linux, install it, and then choose a distro. I prefer Ubuntu, but you can choose whatever suits you. This guide does assume Ubuntu (or Debian) so keep that in mind.

After installing, you'll see that this will add an `Ubuntu` app to your Start menu. You can either use that or, my preference, the Windows Terminal app. If you do not have it installed for some reason (it should be installed by default on Windows 11) you can get it from the Microsoft Store. This is a much better terminal emulator and it improves a lot on the UX of living in the terminal.

> Side note: I love the efficiency of living in the terminal, as well as helping a lot when switching between devices or even operating systems. This guide will focus a lot on CLI apps/alternatives.

## 🔡 Fonts

Usually we don't think too much on what fonts we use. Well, the terminal changes our perspective on this - fonts mean a lot more than just letters and numbers in the terminal, being able to provide items such as icons, borders, separators and more. You can find fonts which include all these things on the [nerdfonts](https://www.nerdfonts.com) website. I prefer the JetBrains Mono one, but pick whichever you like. To install, simply extract the files, select them in Windows Explorer, right click and click Install.

After installing the font, we'll need to configure it into Windows Terminal. To do this:

- Open Windows Terminal
- Hit `Ctrl + Shift + P`
- Type `Setting`
- Select your profile on the left (for example, `Ubuntu`)
- Go to `Appearance`
- In the dropdown, select your preferred font
- Hit `Save`

That's it - now you have access to all the goodies that `Nerd Fonts` provide.
