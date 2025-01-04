---
title: "🔑 Configuring SAML2 in Django with React - Part 1: Theory"
date: 2025-01-04
draft: false
toc: true
tags:
  - Guides
  - Tips
  - SAML
---

Recently I've had to implement the SAML Service Provider logic in Django.
Since it's been a bit woozy, I thought of writing down the gotchas I've been
through here for both future reference but also for anyone else who may be
interested.

This is gonna be a multi-parter, with this one covering the theory of it.

{{< notice info >}}
Note: This blog post describes my understanding of how SAML works, and the
process in which I implemented it in a Django + React app.

I might be wrong on some things, as SAML is a complicated topic and I may have
gotten some things wonky or misunderstood. 🤓 I'll update this post as soon as
I find out that something's wrong or incorrect.
{{< /notice >}}

## 🤔 What is SAML ?

```goat
 .------------------.         .-------------------.
|  Service Provider  | <---> |  Identity Provider  |
 '------------------'         '-------------------'
```

If you ever used one of those fancy `Log in with Google` buttons on a website,
you either used OpenID Connect (OIDC) or SAML. What both of these protocols do
is basically allow you to log in to a website with an account created on another
website. Magic, right ?
{{< notice note >}}
You'll also see this mentioned as `SSO`, or `Single Sign-On`. Both SAML and OIDC
are SSO Protocols.
{{< /notice >}}
SSO is a great thing to have in any app, simplifying the user experience (and
avoiding the need for users to have _yet another password_ they can forget).

Some terms you'll see _very_ often when looking into SAML specifically, but
also SSO generally, are _Service Provider_ and _Identity Provider_:

- 🛒 **Service Provider (SP)**: Is the application that, well, provides a service.
  If you are developing your own app, this is usually you!
- 💳 **Identity Provider (IdP)**: This is the service which tells you who's
  interacting with your service. This is usually some big service like Google
  or Microsoft, but you can also implement _your own IdP_ pretty easily-ish
  (expect an article on that soon).

There are also some peculiarities on SAML that you ain't gonna see in usual
modern web protocols:

- 📄 **XML Everywhere**: Yeah, no JSON here 🤪 SAML is pretty old, dating back
  to the [SOAP](https://en.wikipedia.org/wiki/SOAP) protocol era.
- 🔄 **Re-implementing some concepts**: You'd think that with SAML being used
  via HTTP, you'd make use of stuff like HTTP methods and encryption. SAML does
  not really enforce anything here, and even has a way to provide a certificate
  in the messages itself, as an extra encryption method.
- 💬 **Very verbose**: As all XML protocols tend to be, SAML is _very chatty_.
  A simple SAML message (usually called `assertion`) is pretty big compared to,
  for example, a simple JWT token.
- 🔧 **Very configurable**: SAML can do more than just authentication (but
  we'll only talk about that here) - it can also provide role information,
  user groups or even preferences on login - as long as your application
  implements them and your IdP provides them.

The SP and IdP are the main players here. Let's see how they work together,
shall we ?

## 🔀 The flow

SAML has two ways of working, depending on there the user ends up first:

- 💳 **IdP-initiated flow** - this is where the user goes on a main page, for
  example a "portal" type app, and then can select any number of apps to use.
  All those various apps are gonna automatically know who logs in, so no extra
  credentials are needed.
- 🛒 **SP-initiated flow** - this is the more typical `Login with XYZ` buttons
  you see in various applications on the internet.

{{< notice tip >}}
The SP-initiated flow has some extra steps, but afterwards they are basically
identical.
{{< /notice >}}

This flowchart shows the main steps in a SP-initiated flow. For the user,
this is mostly seamless:

- Click on the `🔑 Login with XYZ` button
  - If the user isn't logged into XYZ, then log in
- 🕒 Wait a bit while there are some page changes
- ✨ User is logged in

What happens in the background isn't that much complicated, it's just some
messages being passed around via URL redirects:

```goat
 .------.                   .-------------------.
|  User  | - Clicks on --> |  🔑 Login with XYZ   | -------------+
 '------'                   '-------------------'                |
                                                                 |
                                                       SP generates assertion
                                                                 |
                                                                 |
                                                    Redirects to IdP + assertion
                                                                 |
                                                                 |
                                                                 v
                                                        .--------------------.
Redirects to SP + assertion ------ User logs in -----  | IdP shows login page |
             |                                          '--------------------'
             |                                                   ^
             |                                                   |
             |                                                   |
             |                                          IdP flow starts here
             |
             |
             |        .------------------------------------------------.
             +-----> |  ✅ SP checks the assertion and logs in the user  |
                      '------------------------------------------------'
```

{{< notice note >}}
Of course, this is just the happy path. Errors and extra checks can happen,
but we're keeping this as simple as we can.
{{< /notice >}}

If the user were to go to the **IdP-initiated flow**, then the flow would start
at the `IdP shows login page` step, and instead of the IdP automatically
redirecting to the service provider (the app), the user has to select which
app to use from, for example, a list of icons. Think Google's Apps menu where
you can go to Drive, Docs, YouTube, etc. for example.

## 📜 What's an assertion ?

An assertion is basically a message containing some SAML data. For example:

- The SP info
  - Usually this includes the URL of the app the user wants to log into
  - This is mandatory, as the IdP has a _whitelist_ of allowed SPs
  - It can also include other info, such as an access key or requested permissions
- The login response from the IdP
  - This is sent back to the SP after the IdP logged in successfully
  - It includes user info, at a minimum a name or field on which the SP can
    match the user with its database
  - This is very flexible, so exact fields may vary from app to app

## ✨ Conclusion

SAML is a very useful protocol to know and to implement. You'll find that, for
example, most corporate apps (Java 💪) have support for SAML already implemented,
and most other enterprise services can act as a SAML IdP for authentication.

SAML also helps if you are planning to deliver apps to any large client, as
they can centralize access for all their users in one place - adding, removing
or editing apps is done in the IdP, and all their apps know who is who.

Next up, we'll see how to implement this flow in a Django app acting as an API
for a React SPA. Let's see how it goes 🤞
