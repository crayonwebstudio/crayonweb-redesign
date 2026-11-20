---
title: "Self-Hosting with Coolify on a VPS"
publishDate: 2026-04-10
description: "How we run client sites on a VPS with Coolify: what it replaces, what it costs, and where it breaks."
tags: ["Coolify", "Self-Hosting", "DevOps"]
readingTime: 9
---

Coolify is an open source, self hostable alternative to platforms like Heroku and Vercel. You install it on your own VPS, connect your Git repositories, and it handles builds, deployments, domains, and certificates. For a studio that runs many client sites, it is a practical middle ground between shared hosting and a full Kubernetes setup.

## Why self-host at all

Managed platforms are convenient, but their costs scale with every site, and their limits shape your architecture. A VPS with Coolify gives you fixed costs, full control over the stack, and no per seat pricing. You choose the server size, you decide which services run where, and you keep your data on infrastructure you control.

That control comes with responsibility. You own updates, backups, and monitoring. Coolify reduces that burden, but it does not remove it. Self-hosting is the right choice when you have the discipline to maintain it, and the wrong choice when you want to forget infrastructure exists.

## Choosing the server

Start with a VPS that has room to grow. A small site needs little, but Coolify itself, databases, and build processes all consume memory. We recommend at least 4 GB of RAM for a production server that hosts several applications, and more if you run databases on the same machine. CPU matters less than memory for most studio sites, but builds are CPU hungry, so a server that is too small will queue deploys.

Use a reputable provider with snapshots and a firewall. Keep the operating system minimal and updated. Coolify installs Docker and manages containers for you, but the host still needs basic hardening: SSH keys only, no password login, automatic security updates, and a firewall that exposes only the ports you need.

## Installing Coolify

Installation is a single script that sets up Docker and the Coolify dashboard. Once it is running, you reach it on its own domain with a login you control. From there, you add servers, connect GitHub or GitLab, and create projects. Each project holds resources: applications, databases, and services.

Coolify supports Docker Compose, Dockerfiles, and Nixpacks builds. For Astro, Next.js, and Laravel projects, a Dockerfile gives the most control. Keep the Dockerfile in the repository, next to the code, so the build is versioned with the application. Coolify reads it on every deploy and builds the same image every time.

## Deployments that behave

Connect each application to its Git branch and let Coolify deploy on push, or deploy manually when you prefer control. Either way, use preview deployments for pull requests when the project supports them, so changes can be reviewed on a real URL before they reach production.

Environment variables live in Coolify, not in the repository. Set them per application, mark secrets as sensitive, and never commit a .env file. Coolify restarts the application when variables change, which is convenient and occasionally surprising, so change variables during a maintenance window when the site is busy.

Domains and certificates are handled by the built in reverse proxy. Point DNS at the server, add the domain in Coolify, and certificates are issued automatically. Check the certificate after the first deploy, and set up monitoring so an expired certificate is caught before a visitor sees it.

## Databases and backups

Coolify can run PostgreSQL, MySQL, MariaDB, and Redis as managed resources on the same server. That is convenient, and it is also a single point of failure. For client work, separate the backup strategy from the server itself. Schedule automatic backups to external storage, test restores regularly, and document the restore procedure. A backup you have never restored is a hope, not a plan.

Keep databases on their own volumes, and do not store uploads inside the application container. Use persistent volumes or object storage for user files, so a redeploy never deletes client data. This is the single most common self-hosting mistake, and it is entirely avoidable.

## Monitoring and maintenance

Coolify shows container status and logs, but you still need alerting. Monitor disk space, memory, and uptime from outside the server, so a failure of the server itself still reaches you. Set up log rotation, because Docker logs grow without limit, and a full disk is a quiet way to take down every site at once.

Update Coolify itself on a schedule, and update the host operating system separately. Read the release notes before a major Coolify update, and snapshot the server first. A five minute snapshot is cheap insurance against a bad upgrade.

## When not to self-host

Self-hosting is not for every project. If a client needs global edge delivery, compliance certifications, or a team with no one to own the server, a managed platform is the better choice. Be honest about that in the proposal. The goal is the right home for the site, not the cheapest one.

For a studio with the skills to maintain it, Coolify on a VPS is a strong default. Fixed costs, real control, and a deployment workflow the whole team can use. Treat the server as a product, maintain it on a schedule, and it will quietly carry your client work for years.
