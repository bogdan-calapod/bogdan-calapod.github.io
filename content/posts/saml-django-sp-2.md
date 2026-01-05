---
title: "🔑 Configuring SAML2 in Django with React - Part 2: Configuring Django"
date: 2025-01-25
draft: true
toc: true
tags:
  - Guides
  - Tips
  - SAML
---

In the [last part](https://bogdan-calapod.github.io/posts/saml-django-sp-1/), I
went through how I got into implementing Django as an IdP at work, and how I'm
writing this up more as a note to self that might also be useful to others.

{{< notice info >}}
Note: As mentioned in the first post, this series describes my understanding
of how SAML works, and the process in which I implemented it in a Django +
React app.

I might be wrong on some things, as SAML is a complicated topic and I may have
gotten some things wonky or misunderstood. 🤓 I'll update this post as soon as
I find out that something's wrong or incorrect.
{{< /notice >}}

## 📥 Required packages

I'm going to assume you already have a Django server installed and configured.
If you don't, follow the [official quick start guide](https://www.djangoproject.com/start/)
to get one.

Apart from that, we're gonna need these packages as well:

- [Django REST Framework](https://www.django-rest-framework.org/tutorial/quickstart/)
  - We're gonna use this to turn our Django app in a [REST](https://restfulapi.net/)
    server
- [Django SAML2 Auth library](https://github.com/grafana/django-saml2-auth)
  - This is the binding that provides us with the SAML2 authentication logic
- `xmlsec1`
  - This is needed for the SAML package to encrypt and decrypt the SAML
    assertions.
  - Depending on your OS, you can find install instructions:
    - Linux: `sudo apt install libxmlsec1-dev pkg-config`
    - macOS: `brew install libxml2 libxmlsec1`
    - Windows:
- Time
  - This is gonna take a while

You can install all required stuff by running this command::
