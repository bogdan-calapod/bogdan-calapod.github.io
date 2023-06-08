---
title: "📋 Sharing NeoVim Clipboard with WSL/Windows"
date: 2023-06-07T22:52:23+02:00
draft: false
tags:
  - Development
---

I recently switched my VSCode with RemoteWSL workflow to NeoVim with [LazyVim](https://www.lazyvim.org/). While I'm still working out the quirks and features, it has helped my typing and navigation speed a lot, nevermind the fact that the editor loads in an instant.

I am working on integrating terminal tools as best as possible with native Windows features though, and as a beginner in `vim` configurations and the `lua` language, I have found myself pretty confused by most basic `vim` configuration stuff, but I am slowly going through the weeds.

This is a pretty basic thing to do, but I always find myself looking for this when I need it, so I decided to just place it here for posterity. So, here is the basic config you need to add in order to enable `neovim` <> `Windows Clipboard` communication:

```lua
-- WSL2 Clipboard Sync
vim.g.clipboard = {
  name = "WslClipboard",
  copy = {
    ["+"] = { "clip.exe" },
    ["*"] = { "clip.exe" },
  },
  paste = {
    ["+"] = {
      "/mnt/c/Windows/System32/WindowsPowerShell/v1.0///powershell.exe",
      "-c",
      '[Console]::Out.Write($(Get-Clipboard -Raw).tostring().replace("`r", ""))',
    },
    ["*"] = {
      "/mnt/c/Windows/System32/WindowsPowerShell/v1.0///powershell.exe",
      "-c",
      '[Console]::Out.Write($(Get-Clipboard -Raw).tostring().replace("`r", ""))',
    },
  },
  cache_enabled = false,
}
```

If you're using `LazyVim`, just place the above in the `~/.config/nvim/lua/config/options.lua` file and it should work automatically.

What it basically does is call a PowerShell method to read the clipboard whenever you paste in `NeoVim`, and call `clip.exe` whenever you `yank` something.
