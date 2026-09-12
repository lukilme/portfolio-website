---
title: "Codex Umbra — Dark Mode Design System"
slug: "project-2"
description: "A living design system forged from shadow and light — a complete token library, component catalogue, and documentation site built for a digital-first creative agency."
curse: "The agency had accumulated five years of inconsistent UI work: each project used different colour conventions, spacing scales, and component patterns. Dark mode was bolted on as an afterthought with hard-coded overrides piling up like cursed artefacts."
spellcast: "Acted as lead design-systems architect and spellwright. Audited all existing components, identified recurring incantations, and distilled them into a single source of truth — a CSS custom property token layer that powers both themes from a single stylesheet."
result: "A fully documented design system with 40+ components, automatic light/dark switching via a single class on the root element, and a Storybook catalogue that reduced designer–developer back-and-forth by an estimated 60%. Onboarding time for new projects dropped from two weeks to two days."
tags: ["Design Systems", "CSS", "TypeScript", "Storybook", "Accessibility"]
pubDate: "2024-07-22T00:00:00Z"
---

## The Curse

Five years of shipping meant five years of accumulated technical debt in the UI layer. Every project reinvented the button. Every dark-mode patch was a `!important` battle waged in the dead of night.

The client needed an exorcism — a clean slate that could serve as the single source of truth for all future work.

## The Spellcast

The audit phase catalogued every colour, spacing value, and component variant across 23 production projects. Patterns emerged from the noise: five semantic colour roles, a 4-point spacing scale, and three type sizes covered 90% of use cases.

These became the token grimoire: CSS custom properties namespaced by theme, consumed identically by every component. Light and dark modes became a single class swap on `<html>` — no JavaScript re-renders, no cascading overrides, no midnight exorcisms.

## The Result

The design system shipped with full Storybook documentation, automated accessibility checks via axe-core in CI, and a migration guide that helped the team port the five highest-traffic products in the first sprint. The cursed `!important` heap was finally put to rest.
