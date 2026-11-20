---
title: "Complete Step-by-Step Guide to Installing and Setting Up Coolify on a VPS"
publishDate: 2025-12-07
description: "Self-hosting modern applications often means dealing with Docker, servers, SSL, deployments, and monitoring things that can quickly become overwhelming. Coolify simplifies this by acting as a self-hosted Platform-as-a-Service (PaaS), giving you the convenience of platforms like Heroku or Vercel while keeping full control of your infrastructure and costs."
tags: ["Docker Deployment", "Coolify", "Coolify Installation Guide", "Coolify on VPS", "Coolify Setup", "Self-Hosted PaaS", "Heroku Alternative", "Vercel Alternative"]
readingTime: 8
author: "Milan Pandya"
category: "DevOps"
---

Self-hosting modern applications often means dealing with Docker, servers, SSL, deployments, and monitoring things that can quickly become overwhelming. Coolify simplifies this by acting as a self-hosted Platform-as-a-Service (PaaS), giving you the convenience of platforms like Heroku or Vercel while keeping full control of your infrastructure and costs.

This guide walks you through installing and configuring Coolify on a VPS, securing it for production use, and deploying your first application with confidence. The instructions are written for beginners as well as developers planning real-world deployments, and are derived from the uploaded installation document.

## What Is Coolify and Why Use It?

Coolify is an open-source deployment platform that runs on your own server. It uses Docker internally to build, run, and manage applications, databases, and services.

Why developers choose Coolify:

- Full control over infrastructure and data
- No vendor lock-in or per-app pricing
- Supports many stacks (Node.js, PHP, Python, static sites, Docker, Docker Compose)
- Built-in SSL, backups, and monitoring
- Ideal for agencies, startups, and self-hosters

## Prerequisites: Server Requirements

Before starting, make sure your VPS meets these minimum requirements:

Minimum (for testing or light usage):

- 2 CPU cores
- 2 GB RAM
- 30 GB storage

Recommended (production or multiple apps):

- 4 CPU cores
- 8 GB RAM
- 100-150 GB storage

### Supported Operating Systems

Coolify supports many Linux distributions, but Ubuntu LTS (22.04 or 24.04) is strongly recommended for the smoothest experience and full automation.

### Other Requirements

- Fresh VPS (no existing Docker setups)
- Root or sudo access
- SSH access to the server

## Step 1: Connect to Your VPS and Update the System

Log in to your server using SSH:

```bash
ssh root@YOUR_SERVER_IP
```

Update system packages to avoid dependency issues:

```bash
apt update && apt upgrade -y
```

Install required utilities that Coolify relies on:

```bash
apt install curl wget git jq openssl -y
```

## Step 2: Install Coolify Using the Official Script

Coolify provides a one-command installation script that automatically installs Docker, configures services, and sets up everything needed.

Run the installer:

```bash
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
```

Optional: Pre-configure Admin Credentials

If you prefer not to create the admin account manually later, you can define credentials during installation:

```bash
env ROOT_USERNAME=admin \
ROOT_USER_EMAIL=admin@example.com \
ROOT_USER_PASSWORD=choose-a-strong-password \
bash -c 'curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash'
```

### What the Installer Does

- Installs Docker and Docker Compose
- Sets up directories under /data/coolify
- Configures Docker networking
- Generates SSH keys
- Starts Coolify as a system service

The installation usually completes in a few minutes.

## Step 3: Access Coolify and Create the Admin Account

Once installation finishes, you will see a URL like:

```text
http://YOUR_SERVER_IP:8000
```

Open it immediately in your browser.

Important: The first person to register becomes the admin. Do not leave this page exposed.

Create your admin account using:

- Username
- Valid email address
- Strong password

After login, you will see the onboarding wizard.

## Step 4: Configure Server and Proxy Settings

During onboarding:

- Choose localhost as the server destination (Coolify runs on the same VPS)
- Enable the reverse proxy (Traefik or Caddy)

The proxy handles:

- HTTP to HTTPS redirection
- SSL certificates via Let's Encrypt
- Domain-based routing for your apps

## Step 5: Connect a Custom Domain and Enable SSL

### Add DNS Records

From your domain provider, create an A record pointing to your VPS IP.

Example:

- Type: A
- Name: coolify or * (wildcard)
- Value: YOUR_SERVER_IP

A wildcard record allows unlimited subdomains without extra DNS entries.

### Configure Domain Inside Coolify

Go to Settings, then Instance Domain. Enter your domain with HTTPS (for example, https://coolify.example.com). Save the settings.

Coolify will automatically:

- Verify DNS
- Request SSL certificates
- Secure the dashboard with HTTPS

## Step 6: Secure Your Server Before Production

### Enable Firewall (UFW)

```bash
ufw allow 22/tcp    # SSH
ufw allow 80/tcp    # HTTP
ufw allow 443/tcp   # HTTPS
ufw allow 8000/tcp  # Coolify panel (temporary)
ufw enable
```

Once your domain works, you can block port 8000 to prevent IP-based access.

### Create a Non-Root Admin User

```bash
adduser admin
usermod -aG sudo admin
```

### Install Fail2Ban

```bash
apt install fail2ban -y
systemctl enable fail2ban
```

This protects against brute-force login attempts.

### Enable Automatic Security Updates

```bash
apt install unattended-upgrades -y
dpkg-reconfigure -plow unattended-upgrades
```

## Step 7: Deploy Your First Application

### Create a Project

Go to Projects, create a new project, and add an environment (for example, Production).

### Deploy from GitHub

Add a new Application, select GitHub (public repo or GitHub App), and choose a build method:

- Nixpacks (auto-detect)
- Dockerfile
- Static site
- Docker Compose

Configure environment variables and click Deploy. Coolify handles the build, container creation, and live deployment.

## Step 8: Add Databases, Backups, and Monitoring

### Databases and Services

You can add:

- PostgreSQL
- MySQL
- MongoDB
- Redis
- Search engines and queues

Each service runs in its own container.

### Backups

Schedule automatic database backups, send backups to S3-compatible storage, and monitor backup success directly from the dashboard.

### Monitoring

Coolify includes:

- Disk usage alerts
- Container health checks
- Deployment logs
- Email notifications

## Step 9: Ongoing Maintenance Best Practices

- Keep Coolify auto-updates enabled
- Monitor CPU, RAM, and storage regularly
- Review user access and activity logs
- Periodically audit firewall and SSH rules

## Final Thoughts

Coolify bridges the gap between full DevOps complexity and expensive managed platforms. With one VPS, you can host multiple applications, databases, and services securely, without losing control or flexibility.

If you are an agency, freelancer, or developer who values ownership and predictable costs, Coolify is a powerful foundation for modern deployments.
