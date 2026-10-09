> Specialized working copy (repo): adapted for the Aphrodite site from the
> DeepSeek tree at ~/Developer/Application/PlayForm/DeepSeek/Documentation/Skill/code-authoring/ (same structure, Aphrodite anchors). This is the specialized truth for this site's sessions; the global ~/.dsh/skills/code-authoring/ is the fallback. Sync future changes to BOTH.
---
name: code-authoring
description: THE authoring discipline for every file operation and every code write in this harness - hard rule: file modifications ONLY through the write/edit tool API (never sed/awk/python/terminal edits), plus the writing conventions (read-before-edit, surgical per-region edits, build verified after every file). Load before editing any file or writing any code.
whenToUse: Mandatory before EVERY file modification and every code-writing task (site pages, scripts, docs). If you are about to run sed, awk, perl, python in-place rewrites, or shell heredoc file surgery instead of the write/edit tools, STOP and use the tool API.
---

# Code Authoring - Operating Manual

Two halves, both hard rules: **tool discipline** (how files get modified) and
**writing style** (how code gets structured). User-mandated.

## 1. Tool discipline (how files are read and modified)

1. **NEVER edit file CONTENT through the terminal.** No `sed -i`, `awk`,
   `perl -pi`, python in-place rewrites, or shell heredoc file surgery.
2. **Deletion via `rm` IS allowed** - it is a command operation (removing
   whole files), not a content edit. Verify the resolved absolute path
   before deleting.
3. **NEVER read file content through the terminal either** - no `cat`,
   `sed -n`, `head`/`tail` of source files, no terminal `grep` of file
   contents. File content is read with the **read** tool; content search
   uses the **grep** tool; file discovery uses the **glob** tool. Terminal
   is for RUNNING COMMANDS: the build, the Drift checks, `node --check`,
   `rm`, `ls` for filesystem metadata - never for reading or mutating
   source content.
4. Every file modification uses the harness tool API: **write** (create or
   fully replace) and **edit** (literal replace, which validates the match).
5. The same rules bind every subagent: prompts for coder agents must forbid
   terminal-based content edits AND terminal-based content reads explicitly
   (deletions via `rm` are permitted).
6. If an edit's `old_string` doesn't match, READ the file first (the edit
   tool requires it anyway), copy the exact bytes (including whitespace -
   tabs vs spaces), and retry with the edit tool. Never fall back to the
   terminal.
7. **THE MECHANISM RATIONALE: terminal file edits are invisible to the
   plugin system.** The harness's `fs/observed` chain fires ONLY on
   tool-layer writes (write/edit/raw-write). A `python3 -c` / `sed` /
   heredoc edit in bash produces NO observation event: no plugin sees it,
   no governance, no ledger line. Using the write/edit tools IS the plugin
   usage - every agent edit becomes a real governed event. Any file the
   agent needs to touch goes through the tools, period.
8. **READ-BEFORE-EDIT (Aphrodite law): the user builds and commits
   mid-session, and other lanes edit the same tree concurrently.** Always
   re-read a file before editing it, even if you read it earlier in the
   session - the bytes may have changed under you. If the arbiter fails
   after your edit, re-read and retry; never assume the file is stale or
   fight another lane's change.

## 1b. BYTE-INTEGRITY - NO NULL/CONTROL BYTES, EVER

The write tool writes VERBATIM - the risk surface is the content that is
generated or assembled before the write. Hard rules:

1. **NEVER write NUL bytes (0x00) or any control character (other than
   \n \r \t) into file content.** Text files are UTF-8 text, nothing else.
2. **NEVER build file content through NUL-terminated or NUL-separated
   string conventions** - no `printf '%s\0'`, no `find -print0`/`xargs -0`
   output piped into file content. If a pipeline or a string builder could
   emit a null byte, do not use it to produce file content.
3. **After ANY bulk text transformation** (multi-file rewrites,
   replacements, markup renames): verify the WRITTEN BYTES before reporting
   done - a byte-level scan of every touched file (zero `\x00`, zero stray
   control characters, valid UTF-8) plus a spot-check that the transformed
   segments read back as the intended text.

## 1c. GIT: CHECKS ONLY - NEVER MUTATE

The git discipline is a hard rule: the orchestrator and every agent NEVER
mutate the repository through the terminal - no `git add`, no `git commit`,
no `git reset`, no `git push`, no `git tag`, no `git rm`, no
checkout/branch/merge/stash, no `git clean`. The user owns every git
mutation (they commit mid-session and see the prompts in their editor); the
agents' git work is LIMITED to read-only CHECKS: `git status`, `git log`,
`git diff`, `git show`, `git rev-parse`, `git ls-files`. A deliverable that
needs a commit is reported as READY-TO-COMMIT (the files changed + the
suggested message), and the user commits it.

## 2. Writing style (how the site's code is structured)

1. **Tabs** (tabWidth 4, printWidth 100) for code files; YAML files stay
   spaces. Match the file's existing indentation - never reformat a whole
   file to satisfy a preference.
2. **Surgical edits**: change only the regions you need; never reformat or
   restructure untouched code in the same edit.
3. **The zine grammar is not negotiable in CSS/components**: radius 0, hard
   shadows, the 16px spacing floor, dark-only. Do not introduce rounded
   corners, soft shadows, light themes, or tight spacing.
4. **Behavior-identical refactors**: when reworking markup or scripts,
   rendered output and printed strings stay identical unless the task says
   otherwise; the build + Drift are the arbiters.

## 3. Application

- Coder agents receive this discipline in their prompt (the skill's rules,
  verbatim).
- Review passes check: no terminal edits in the session log, surgical
  regions only, tabs respected, the zine grammar intact.
- The build-verified rule: after every file you touch, the relevant arbiter
  must pass before you continue (`cd Site && pnpm prepublishOnly` + `pnpm
  run Drift` for the site files). Never leave the tree broken.
