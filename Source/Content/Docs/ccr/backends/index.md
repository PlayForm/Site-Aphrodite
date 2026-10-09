---
title: "CCR Backends"
section: "CCR"
---

# CCR Backends

The CCR (Compress-Cache-Retrieve) store has two full backends, selected by
deployment mode, plus the inline stores that bypass the backend round-trip
for tiny entries. See [lifecycle](/docs/ccr/lifecycle/) for how a blob moves
through the tiers.

- [In-Memory Backend](/docs/ccr/backends/in-memory/) - process-local, sharded DashMap store
  for cache-mode deployments; ephemeral, capacity-bound eviction only
- [SQLite Backend](/docs/ccr/backends/sqlite/) - the production persistent store; single
  database file in WAL mode, shared across workers, lazy TTL purging
- [Inline Stores](/docs/ccr/backends/inline/) - LRU-backed tiny-entry stores inside the proxy
  and the Hermes session engine; O(1) retrieval with no backend I/O
