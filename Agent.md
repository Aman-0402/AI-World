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

- Components in `src/components/` are presentational/reusable (`ChapterCard`, `TaskCard`, `StepList`, `ResourceCard`, `LearningOutcome`, `QuestionCard`, `Navbar`, `AIShortcuts`).
- Pages in `src/pages/` compose components + read from `src/data/` via route params.
- Downloadable resources go in `src/assets/resources/`, referenced by filename in task data.
- AI tool shortcuts (ChatGPT, Gemini, Claude, Google Drive) open in new tab (`target="_blank" rel="noopener noreferrer"`).
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
