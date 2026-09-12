---
title: "Grimoire of the Forgotten Web"
slug: "project-1"
description: "A digital spellbook that resurrects forgotten web rituals — animated cursors, visitor counters, and tiled backgrounds reborn as a modern portfolio."
curse: "The client sought to reclaim the raw, handcrafted spirit of the early web — an era when every page was a personal incantation, not a corporate template. The challenge: evoke genuine nostalgia without sacrificing usability."
spellcast: "Took on the role of sole design-mage and front-end alchemist. Studied GeoCities archives and Windows 98 UI patterns, then distilled their essence into a coherent design system using CSS custom properties and Astro's static generation pipeline."
result: "A fully pre-rendered portfolio that loads in under 100 KB, passes WCAG 2.1 AA, and makes every visitor feel like they've stumbled upon a secret corner of the old internet — complete with animated wand cursor, spider-dust particle effects, and a hidden Konami easter egg."
tags: ["Astro", "TypeScript", "CSS", "Retro", "Portfolio"]
pubDate: "2024-03-15T00:00:00Z"
---

## The Curse

Every modern portfolio looks the same. Grid of cards. Neutral sans-serif. Pastel palette. The soul has been extracted and replaced with a template.

The mission was to break the spell — to build something that felt *handcrafted*, *weird*, and *alive*.

## The Spellcast

Research began in the archives: Wayback Machine snapshots, GeoCities mirrors, Windows 98 screenshot galleries. The aesthetic vocabulary was catalogued: groove borders, tiled backgrounds, pixel fonts, animated GIFs repurposed as interaction cues.

From this grimoire of reference material, a design token system was forged — dark mage palette (`#1A1A1A` background, `#00FF00` accent, `#CC66FF` links) with a light-mode counterpart that swaps to Win98 silver and navy.

## The Result

The site builds to static HTML in seconds, requires no JavaScript framework, and delivers every microinteraction — cursor trail, particle bursts, audio talisman, Konami code dialog — as isolated vanilla JS islands that degrade gracefully when scripting is unavailable.
