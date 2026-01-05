---
title: "💽 Fixing Toshiba external USB sleeping in Proxmox"
date: 2026-01-05T10:30:00+01:00
draft: false
---

In my homelab setup I have a quirky Toshiba external HDD which doesn't use a standard SATA connector, instead having a custom logic board that directly links it to the `microUSB` connector.

I've been noticing that after a while it randomly shuts off, which is kind of annoying. At first I thought that [this article from Daniel](https://dbren.uk/blog/proxmox-fix-usb-disconnect/) would address my issue, which involved adding the following in the `/etc/grub/default` file:

```
GRUB_CMDLINE_LINUX_DEFAULT="quiet usbcore.autosuspend=-1"
```

This did change the issue - while before it would spew out `Input/output error` when it would go to sleep, now it would just... do nothing 🙃

I didn't dive deep into `journalctl` to see what caused it to die, but I did find a hacky workaround:

```
# crontab -e 
*/5 * * * * /bin/touch /mnt/chase/.keepalive >/dev/null 2>&1
```

This basically keeps the drive online every 5 minutes (`/mnt/chase` is my mount point) to fool the drive into not getting to sleep.


## Just to be safe

I also forced the power management controller to keep the devices online by running:

```
echo on > /sys/bus/usb/devices/usbX/power/control
```

Ran this command for each `usb1, usb2, etc` file in the `/sys/bus/usb/devices` folder. This basically disables the power save features for the USB bus - the homelab is plugged in 24/7 so we don't really need that, do we ? 😅

