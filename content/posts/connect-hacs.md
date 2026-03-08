---
title: "🔌 Connect Hacs"
date: 2026-03-08T10:57:12+02:00
draft: false
---

I am a huge fan of [HomeAssistant](https://www.home-assistant.io/) - if you like automations and making your whole life smart, it's the thing to get! I'll be following up with some articles on that soon 😅

Since I am working at [PDQ](https://pdq.com) and their [Connect](https://www.pdq.com/pdq-connect/) product has a nice API available, I whipped up a quick [HomeAssistant integration](https://github.com/bogdan-calapod/connect-hacs) for it. It adds a few sensor entities you can use in all kinds of automations, or just to show them nicely in a neat Dashboard.

The integration is based on their [OpenAPI](https://app.pdq.com/v1/docs) definition, and supports all entities it exposes. I'll make sure to expand it as the API support expands as well.

> [!NOTE]
> API usage requires a *Connect Premium* subscription

The integration is written in Python, and loosely based on another useful HomeAssistant integration for [Hidroelectrica](https://github.com/cnecrea/hidroelectrica), a Romanian power supply company.

It was built with the help of Claude Code, manually reviewed as well, but don't expect state of the art code here yet - this was more of a quick personal project 😅

Give it a spin and let me know what you think!
