---
title: "Guides"
section: "Guides"
---

# Guides

Guides are walkthrough-style pages: they connect the parts of Aphrodite the
way you use them, rather than document a single component. Reference pages
(architecture, proxy, plugin, classification) describe what each part does;
guides explain how those parts fit into a running Hermes Agent.

## Contents

| Guide                                                | What it covers                                                                                                |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| [Hermes Integration](/docs/guides/hermes-integration/)          | How the Aphrodite plugin connects to Hermes Agent: hooks, tools, runtime home, and why it beats a plain proxy |
| [Tool Output Schemas](/docs/guides/hermes-tool-output-schemas/) | How Hermes tool output is classified and previewed: the content-type pipeline and the 43-shape tool catalog   |

## Related

The guides defer to the reference pages for details:

| Reference page                                                               | Used by                                                   |
| ---------------------------------------------------------------------------- | --------------------------------------------------------- |
| [Plugin Hooks](/docs/plugin/hooks/)                                           | Hook-by-hook behavior behind the integration overview     |
| [Content Types](/docs/classification/content-types/)                          | The 30-type taxonomy behind the tool-output schemas guide |
| [Enriched Preview Catalog](/docs/proxy/compression/#enriched-preview-catalog) | The exact preview strings emitted for each content type   |
