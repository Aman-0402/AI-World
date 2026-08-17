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
- `/psst` is a hidden easter-egg page (`SecretPage.jsx`). Reached via 10 near-invisible `HiddenSpot` links (`src/components/HiddenSpot.jsx`) scattered across Landing (dot + Star), Explore (Square + Triangle), ChapterDetails (Circle + Diamond + Heart), and TaskDetails (Hexagon + Plus + Minus) — different shape/icon per spot so they don't feel repetitive. First visit per browser shows the "you found it, send a screenshot for a treat" message and sets `secret-page-found` in `localStorage`; later visits from the same browser show a "no treat this time" message instead. This is per-browser only, not a global first-finder lock — the project is frontend-only with no backend/DB, so there's no way to track "who found it first" across different students' devices.
- Each task page has a `CompleteButton` (top-right of the title) that toggles a `task-completed-<id>` flag in `localStorage` — purely client-side, no backend. Marking complete triggers a full-screen confetti celebration (`Confetti`, same component file); the button turns green with a smiley once completed and stays that way across reloads for that browser.
- `vite.config.js` sets `build.assetsInlineLimit: 0` so every asset (PDF, txt, etc.) always emits as a real file instead of being base64-inlined into the JS bundle.
- Chapter-level notes PDFs go in `src/assets/pdf/`, named `S<chapterId>.pdf` (e.g. `S1.pdf` for chapter 1). Resolved via `getChapterNotesUrl()` in `src/data/notes.js` (uses `import.meta.glob`) — a chapter with no matching PDF just shows "No notes available yet," no manual wiring needed per chapter.
- AI tool shortcuts (ChatGPT, Gemini, Claude, Google Drive) open in new tab (`target="_blank" rel="noopener noreferrer"`), collapsed behind a toggle FAB (`AIShortcuts`) to avoid overlapping page content.
- `ChapterDetails`/`TaskDetails` open with a gradient hero card (white→violet-50, ghost-numeral watermark of the chapter/task id in the corner) containing the "Back" button, chapter/task number, title, and (on `TaskDetails`) the `CompleteButton` — not a bare `fixed`-positioned Back button floating alone in the page margin. That fixed approach looked disconnected from the content; grouping everything in one card reads as an intentional header. Label is just "Back", not "Back to X".
- `ScrollToTop` (`src/components/ScrollToTop.jsx`, mounted once in `App.jsx` inside `<Suspense>`) resets `window.scrollTo(0, 0)` on every route change — React Router doesn't do this itself for client-side navigation, so without it a deep-scrolled Explore page would leave you scrolled down on the chapter/task page you just navigated to.
- Keep chapter page section order fixed: chapter header → Notes → Tasks.
- Keep task page section order fixed: Question → What to Do → Steps → Required File/Download → What You Learn → Questions About It.

## Visual System

- Brand accent is a violet→cyan gradient (`from-violet-600 to-cyan-500`, sometimes `to-fuchsia-500` for badges) — used for primary CTAs, download buttons, and numbered step/question badges on light pages. Keep new primary actions consistent with this rather than flat `bg-slate-900`.
- `font-display` (Space Grotesk, defined in `index.css`) is used on all page H1s and the Navbar wordmark; body/paragraph text stays on the default Inter stack.
- Light-page cards (`ChapterCard`, `TaskCard`, `Section` in `TaskDetails.jsx`, Notes link in `ChapterDetails.jsx`, `ComparisonTable` rows) share one look: ivory `bg-[#FFFCF5]` (not flat white, distinct from the `#FAF6EC` page background), `border-slate-200/70`, layered shadow (`shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_28px_-16px_rgba(109,40,217,0.18)]`). Interactive cards also get `hover:-translate-y-0.5`, `hover:border-violet-200`, `hover:bg-[#F6F0FF]` (light violet fill), and a stronger violet-tinted shadow. Reuse this instead of plain `bg-white`/`shadow-sm`/`shadow-md` when adding new cards.
- Light-page backgrounds use a flat cream `bg-[#FAF6EC]` (Navbar matches at `bg-[#FAF6EC]/80`) — the Landing page keeps its own dark `#0a0a12` hero treatment, unrelated to this.
- Row/card "go" affordances (arrow on `ChapterCard`/`TaskCard`, external-link icon on the Notes link) are circular chips (`bg-slate-100` → gradient fill on hover via a `group`/`group-hover` pair), not bare icons.

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

## SEO

- `index.html` head carries meta description/keywords/author, canonical URL, Open Graph + Twitter card tags, and a `Course` JSON-LD block — all static so crawlers/link-unfurlers see them without running JS (this is a client-rendered SPA, so per-route meta isn't feasible without SSR/prerendering, which is out of scope).
- `public/robots.txt` and `public/sitemap.xml` exist. The sitemap is hand-generated from `src/data/chapters.js`/`tasks.js` (currently 48 chapters + 53 tasks + `/` + `/explore` = 103 URLs) — regenerate it if chapter/task ids change significantly (see the one-off Node script used to build it, not checked in as a script).
- Canonical domain assumed: `https://aman-0402.github.io/AI-World/` (GitHub Pages default for this repo). Update every absolute URL in `index.html`/`robots.txt`/`sitemap.xml` together if a custom domain is ever added.
- `Footer` component ("Built by Aman0402", links to `https://github.com/Aman-0402`) renders on every page — real visible content, not just meta tags, for author attribution/search association.

## Git Workflow Rule

Every change gets committed and pushed to GitHub (`origin main`) immediately — no batching, no co-author line in commit messages (do not add `Co-Authored-By`).

## Commands

```bash
npm run dev      # Vite dev server
npm run build    # production build
```

(Add lint/test scripts here once configured.)
