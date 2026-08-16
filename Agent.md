# Agent.md — AI in Business Learning Portal

Guidance for AI agents (Claude Code and others) working in this repo.

## Project Nature

Frontend-only React app. No backend, no auth, no DB. All content is static JS data (`src/data/`). Do not add server code, API clients, or persistence layers — out of scope per `doc.md`. See [README.md](README.md) for full spec and phase plan.

## Stack Rules

- React.js + Vite + JavaScript (not TS unless later requested).
- Tailwind CSS for styling — no styled-components, no inline `style={{}}` unless unavoidable.
- React Router for navigation (`/`, `/explore`, `/chapter/:chapterId`, `/task/:taskId`).
- Lucide React for icons.
- Content lives in `src/data/chapters.js` and `src/data/tasks.js` — adding a chapter/task means editing data files, not hardcoding JSX.

## Conventions

- Components in `src/components/` are presentational/reusable (`ChapterCard`, `TaskCard`, `StepList`, `ResourceCard`, `LearningOutcome`, `QuestionCard`, `Navbar`, `AIShortcuts`, `ParticleField`).
- Pages in `src/pages/` compose components + read from `src/data/` via route params.
- Task-level downloadable resources go in `src/assets/task/`, resolved via `getTaskFileUrl()` in `src/data/taskFiles.js` (uses `import.meta.glob`). Older entries pointing to `/resources/<filename>` in `public/resources/` still work but new task files should use `src/assets/task/`.
- A task with multiple files sets `resources: [{ name, downloadUrl }, ...]` instead of the legacy singular `requiredFile`/`downloadUrl`. `ResourceCard` takes a `resources` array; `TaskDetails.jsx` builds it from `task.resources` if present, else falls back to wrapping the legacy `requiredFile`/`downloadUrl` pair — so old single-file tasks don't need to be migrated.
- A step can also be a file-download object instead of a string: `{ file: '<name>', downloadUrl }`. `StepList` renders it as its own numbered step with a download button, for tasks where a specific file belongs right after a specific instruction (e.g. one file per scenario) rather than only in the bottom Required File section. Both can be used together — same file listed inline and in `resources`.
- A task can set `comparisonTable: { tools: [...], criteria: [...] }` to render an empty fillable comparison table (via `ComparisonTable`) between Steps and Required File — for "compare tool A vs tool B on criteria X/Y/Z" activities.
- Quoted prompt text (`.prompt-text` in `StepList`) is selectable but not copyable: the `copy` event is intercepted and the clipboard content is replaced with a fixed warning message (`COPY_WARNING` in `StepList.jsx`), plus a toast shows on-page. This means the warning is what actually gets pasted anywhere (inside or outside the site), not just a blocked action.
- `/psst` is a hidden easter-egg page (`SecretPage.jsx`), reached via a near-invisible dot in the bottom-left of the Landing hero (`bg-white/5`, brightens on hover). First visit per browser shows the "you found it, send a screenshot for a treat" message and sets `secret-page-found` in `localStorage`; later visits from the same browser show a "no treat this time" message instead. This is per-browser only, not a global first-finder lock — the project is frontend-only with no backend/DB, so there's no way to track "who found it first" across different students' devices.
- Each task page has a `CompleteButton` (top-right of the title) that toggles a `task-completed-<id>` flag in `localStorage` — purely client-side, no backend. Marking complete triggers a full-screen confetti celebration (`Confetti`, same component file); the button turns green with a smiley once completed and stays that way across reloads for that browser.
- `vite.config.js` sets `build.assetsInlineLimit: 0` so every asset (PDF, txt, etc.) always emits as a real file instead of being base64-inlined into the JS bundle.
- Chapter-level notes PDFs go in `src/assets/pdf/`, named `S<chapterId>.pdf` (e.g. `S1.pdf` for chapter 1). Resolved via `getChapterNotesUrl()` in `src/data/notes.js` (uses `import.meta.glob`) — a chapter with no matching PDF just shows "No notes available yet," no manual wiring needed per chapter.
- AI tool shortcuts (ChatGPT, Gemini, Claude, Google Drive) open in new tab (`target="_blank" rel="noopener noreferrer"`), collapsed behind a toggle FAB (`AIShortcuts`) to avoid overlapping page content.
- Keep chapter page section order fixed: chapter header → Notes → Tasks.
- Keep task page section order fixed: Question → What to Do → Steps → Required File/Download → What You Learn → Questions About It.

## What NOT to Build

- Login/auth, accounts, dashboards, admin/instructor panels.
- Backend API, database, real submission storage/tracking.
- Attendance, notifications, certificates.
These are Phase 10 / future-scope items — do not scaffold placeholders for them unless explicitly asked.

## Working Process

- Follow phases in [README.md](README.md) sequentially unless told otherwise.
- Before adding a new chapter/task, update `data/chapters.js` / `data/tasks.js` first, then wire UI.
- Responsive design is required for every page (desktop/tablet/mobile) — don't defer it to a later pass per-component.
- No test suite defined yet; if adding one, prefer Vitest + React Testing Library (matches Vite stack).

## Git Workflow Rule

Every change gets committed and pushed to GitHub (`origin main`) immediately — no batching, no co-author line in commit messages (do not add `Co-Authored-By`).

## Commands

```bash
npm run dev      # Vite dev server
npm run build    # production build
```

(Add lint/test scripts here once configured.)
