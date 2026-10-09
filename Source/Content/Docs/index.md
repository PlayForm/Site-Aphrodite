---
title: "Aphrodite Documentation"
section: "Overview"
---

# Aphrodite Documentation

Aphrodite compresses context before it hits the LLM - through a reverse proxy
for any OpenAI-compatible client, or as a native Hermes plugin with hook-level
interception. CCR (Compress-Cache-Retrieve) storage, a 30-type classifier,
context engine, and prefetch pipeline - all under 1ms. This tree documents
the 1.6.5 binary and 2.2.5 plugin.

## Getting Started

- [Installing Aphrodite](/docs/install/) - which artifact you need (proxy
  binary vs. Hermes plugin), with a decision tree
- [Windows Install](/docs/install/windows/) - fast path with `download.ps1`
  (native PowerShell, no `bash` needed)
- [macOS/Linux Install](/docs/install/macos-linux/) - `download.sh`,
  `aphrodite setup`, building from source
- [Troubleshooting](/docs/install/troubleshooting/) - proxy not auto-launching,
  verifying the proxy without a full Hermes session, the two-config-files trap

## Architecture

- [Architecture Index](/docs/architecture/) - all 11 flow traces: startup,
  chat compression, retrieve, hook/FFI, CCR lifecycle, SSE streaming, config
  resolution, dylib loading, release CI, components, data model

## CCR (Compress-Cache-Retrieve)

- [Marker Format](/docs/ccr/marker-format/) - `<<<CCR:hash|type|size>>>` schema
  with BLAKE3 hash, 30 content types, TOML-driven preview templates
- [Lifecycle](/docs/ccr/lifecycle/) - the 6-phase flow: compress, retrieve,
  expire (TTL+LRU+debounce), with threshold tables per type and mode
- **Backends**
    - [SQLite](/docs/ccr/backends/sqlite/) - schema, WAL mode, lazy TTL purge
    - [In-Memory](/docs/ccr/backends/in-memory/) - DashMap + VecDeque, capacity
      10,000, TOCTOU-safe eviction
    - [Inline](/docs/ccr/backends/inline/) - LRU cache, 1024 entries, lock-safety
      pattern

## Classification

- [Content Types](/docs/classification/content-types/) - the 30-type taxonomy with
  detection order, threshold groups, and preview forms
- [Classification Index](/docs/classification/)

## Config & Install

- [aphrodite.toml](/docs/config/aphrodite-toml/) - full schema: `[[proxies]]`,
  `[defaults]`, `[compression]`, `[previews]`, `[templates.*]`, `[flow]`,
  precedence rules, config reload
- [Environment Variables](/docs/config/env-vars/) - the `APHRODITE_*` registry
  with the documented-but-unwired list

## Proxy

- [Architecture](/docs/proxy/architecture/) - two-listener model (:9797 cache +
  :9798 token), routing table, management-route bearer auth, SSE pass-through
- [Handlers](/docs/proxy/handlers/) - all 8 handlers with their behaviors
- [Retry](/docs/proxy/retry/) - connect-phase retry scope, backoff, counters
- [Compression](/docs/proxy/compression/) - detect → threshold → hash → store →
  marker pipeline, budget curve, smart markers

## API & Metrics

- [Health](/docs/api/health/) - `GET /health` liveness, `X-Aphrodite-Fill-Pct`
- [Metrics Endpoint](/docs/api/metrics-endpoint/) - `GET /metrics` Prometheus text
- [Retrieve](/docs/api/retrieve/) - `POST /retrieve` hash lookup, query, pagination
- [CCR Endpoints](/docs/api/ccr-endpoints/) - create/list/delete/reload with the
  error table
- [Prometheus](/docs/metrics/prometheus/) - all 28 metric names, types, labels
- [Queries](/docs/metrics/queries/) - PromQL reference: CCR hit rate, latency

## Plugin

- [Hooks](/docs/plugin/hooks/) - the SIX hooks with purpose and fire-time table
- [Directives](/docs/plugin/directives/) - built-in set, injection order,
  materialization
- [Context Engine](/docs/plugin/context-engine/) - the opt-in pass-through engine

## Tool Relay

- [Tools](/docs/tool-relay/tools/) - the 13 tools with schemas and behavior
- [Callbacks](/docs/tool-relay/callbacks/) - transform-hook surface + HTTP relay

## Examples & Guides

- [CCR Examples: What the LLM Sees](/docs/examples/llm-view/) - real captured
  markers, preview families, token economics
- [Hermes Integration](/docs/guides/hermes-integration/) - pure-loader plugin,
  runtime home, self-healing layout
- [Hermes Tool Output Schemas](/docs/guides/hermes-tool-output-schemas/) - the
  43-shape tool-by-tool output catalog

## Roadmap

- [Centers](/docs/centers/) - AI-conversation memory annotations; shipped vs.
  sketch items labeled

## Style Guide

Every doc in this tree follows one style, the same one this page and the
root `README.md` use:

| Rule                      | What it means                                                                                                                                 |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Explain, then detail      | Open with one or two plain sentences on what the thing is and why it exists, then drop into tables/code                                       |
| Tables over prose         | Fields, flags, options, comparisons - anything with more than two rows of structured data - are a table, not a bulleted wall of text          |
| No file/line citations    | Docs describe behavior directly; they don't cite exact source files or line numbers as proof - accuracy is a writing standard, not a footnote |
| No placeholder content    | If a documented setting or feature isn't confirmed to do anything, the doc says so plainly instead of presenting it as working                |
| Minimal external links    | Link out only when the reader needs to click through to do something (download a release, read an upstream project's own docs)                |
| Roadmap ideas are labeled | Forward-looking or unimplemented designs (see [Centers](/docs/centers/)) say clearly which parts are shipped and which are sketches               |
