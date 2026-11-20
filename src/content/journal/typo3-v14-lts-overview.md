---
title: "TYPO3 v14 LTS Overview and Upgrade Guide"
publishDate: 2026-09-15
description: "What is new in TYPO3 v14 LTS, what breaks, and how to plan a safe upgrade from v12 or v13."
tags: ["TYPO3", "Upgrade", "CMS"]
readingTime: 9
---

TYPO3 v14 LTS is the long term support release that most existing TYPO3 sites will target over the next two years. It is not a visual redesign. It is a consolidation release: faster backend, cleaner content handling, and a long support window that makes it the sensible destination for any site still running v12 or v13.

## What is new

The headline changes sit in the backend. The page tree and list module respond faster on large sites, the new content block system is now the recommended way to build structured content, and the admin experience has been tidied so editors spend less time hunting for the right button. Under the surface, v14 raises the PHP baseline, modernises the core APIs, and removes a set of deprecated calls that had been carried since v11.

For editors, the most visible improvement is content blocks. Instead of hand built Fluid templates for every element, you define a block once with fields, templates, and backend preview, and editors reuse it everywhere. That single change reduces the number of custom content types a typical site needs, and it makes the backend preview match the frontend far more closely.

For developers, v14 continues the move toward explicit, typed configuration. Site configuration, TCA, and backend layouts all reward projects that keep configuration in code and version control, rather than in the database. If your project already follows that discipline, the upgrade feels like a natural step. If it does not, v14 is the moment to fix it.

## Before you upgrade

Start with an audit, not an install. List every extension in the project and check its v14 compatibility. Core extensions are covered by the upgrade itself, but community extensions vary. An extension without a v14 release is a decision point: replace it, fork it, or delay the upgrade until it catches up. Do not discover this in production.

Next, check your PHP version and your hosting. TYPO3 v14 requires a modern PHP release, and your server, Composer setup, and deployment pipeline must all support it. Upgrade PHP on staging first and run your full test suite there. Composer is the only supported install method for a serious project, so if any part of the site was installed by other means, migrate it before you touch the core.

Then review deprecated code. Run the upgrade wizards on a copy of the database and read their output. The install tool reports deprecated TCA, removed hooks, and changed APIs. Treat every warning as a task, not as noise. A clean upgrade report is the difference between a weekend upgrade and a month of firefighting.

## The upgrade path

The supported path is stepwise: v12 to v13, then v13 to v14, or v13 straight to v14 if you are already there. Do not skip major versions. Each step has its own upgrade wizards, and each wizard expects the database state left by the previous one. Skipping a step leaves orphaned data that is painful to clean up later.

Our recommended sequence is simple. First, clone production to staging, including files and database. Second, upgrade Composer dependencies to the target version and run the core upgrade wizards. Third, update your own extensions and templates for removed APIs. Fourth, test the backend as an editor would: create pages, edit content blocks, publish, and check the frontend in every language. Fifth, run performance checks, because a slow upgrade is often a misconfigured cache, not a core problem.

Plan for a content freeze during the final production upgrade. Editors should not be publishing while the database migrates. A short freeze, announced in advance, is far cheaper than reconciling two diverging databases afterwards.

## What breaks most often

Custom backend modules and old Fluid ViewHelpers are the usual casualties. If your project relies on a hook that v14 removed, you need a replacement before launch, not after. The same applies to extensions that reached into core internals. The upgrade guide in the official documentation lists every breaking change, and it is worth reading end to end for your version jump, not just skimming the headlines.

Another common failure is file permissions and caches after deployment. Clear all caches, warm the ones that matter, and verify that the fileadmin and typo3temp directories are writable by the web server user. Half of all post upgrade incidents we have seen were cache or permission problems, not code problems.

## After launch

Once v14 is live, schedule the follow up work. Remove the compatibility shims you added during the upgrade, update your documentation, and plan the next minor update cycle. LTS does not mean frozen. Security and bugfix releases arrive regularly, and staying current on minor versions is far easier than another major jump in three years.

TYPO3 v14 rewards teams that treat the CMS as a platform, not as a collection of plugins. Upgrade deliberately, test like an editor, and the result is a faster, cleaner site with years of support ahead of it.
