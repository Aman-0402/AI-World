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
- Quoted prompt text (`.prompt-text` in `StepList`) has `select-none` — it can't be selected at all, so dragging over it selects nothing. The `copy` event handler is kept as defense-in-depth (would swap clipboard content for a warning, `COPY_WARNING` in `StepList.jsx`, plus an on-page toast) in case a selection ever occurs some other way. `.prompt-text::after` in `index.css` also bakes a faint rotated "TYPE IT - DO NOT COPY" SVG watermark into the box background (`mix-blend-mode: multiply`) — this is baked into the actual pixels, so it survives screenshots/OCR-scan browser extensions that read the screen instead of the DOM, degrading their text extraction while staying easily human-readable. The actual prompt text is also not a real DOM text node: `renderStepText` puts it in a `data-text` attribute on the empty `<span className="prompt-text">`, and `.prompt-text::before { content: '\201C' attr(data-text) '\201D'; }` paints it via CSS generated content — `element.textContent`/`innerText`/`document.body.innerText` all return empty for it, so a page-text scraper or an "AI, summarize this page" tool reading DOM/innerText (not a screenshot) can't pull the real prompt into its output, even though it renders pixel-identical to real text for a human. Trade-off: CSS-generated content isn't reliably exposed to real assistive tech either, so a genuinely blind screen-reader user won't hear it — `aria-label` on the span gives a generic notice ("prompt shown in the box below, ask your teacher to read it aloud") instead of the real text, since putting the actual prompt in `aria-label` would defeat the whole point. `DisableShortcuts` (below) blocks `Ctrl/Cmd+P/C/X/A/S/U` and DevTools shortcuts as another layer. None of this is airtight (a screenshot/OCR or DevTools "Elements" pixel-diff-invariant inspection still sees the prompt) — it's friction against casual copy-paste and page-summarizer tools, not a hard security boundary.
- `DisableRightClick` (`src/components/DisableRightClick.jsx`, mounted once in `App.jsx` next to `ScrollToTop`) blocks the browser context menu site-wide via `contextmenu` → `preventDefault()`.
- `DisableShortcuts` (`src/components/DisableShortcuts.jsx`, mounted next to `DisableRightClick` in `App.jsx`) blocks common copy/print/inspect keyboard shortcuts site-wide via a `keydown` listener: `Ctrl/Cmd+P` (print — opens a dialog that can render selectable/copyable text), `+C/+X` (copy/cut), `+A` (select all), `+S` (save page), `+U` (view-source), plus `F12` and `Ctrl/Cmd+Shift+I/J/C` (DevTools). Like the other copy-protection layers, this is friction against casual shortcuts, not a hard security boundary — DevTools can still be opened from the browser menu, and view-source/print can't be blocked at the OS/browser-chrome level from page JS.
- `/psst` is a hidden easter-egg page (`SecretPage.jsx`). Reached via 10 near-invisible `HiddenSpot` links (`src/components/HiddenSpot.jsx`) scattered across Landing (dot + Star), Explore (Square + Triangle), ChapterDetails (Circle + Diamond + Heart), and TaskDetails (Hexagon + Plus + Minus) — different shape/icon per spot so they don't feel repetitive. Every spot sits at `opacity-[0.03]` (`hover:opacity-70`) with `cursor-default` so hovering never gives away a clickable target via the cursor changing. First visit per browser shows "you found it, send a screenshot for a treat — `<random treat>`" (one of `TREATS` in `SecretPage.jsx`: Kurkure, Lays, Chocolate, Uncle Chipps, Khatta Meetha, picked fresh each visit) and sets `secret-page-found` in `localStorage`; later visits from the same browser show a "no treat this time" message instead. This is per-browser only, not a global first-finder lock — the project is frontend-only with no backend/DB, so there's no way to track "who found it first" across different students' devices.
- Each task page has a `CompleteButton` (top-right of the title) that toggles a `task-completed-<id>` flag in `localStorage` — purely client-side, no backend. Marking complete triggers a full-screen confetti celebration (`Confetti`, same component file); the button turns green with a smiley once completed and stays that way across reloads for that browser.
- `vite.config.js` sets `build.assetsInlineLimit: 0` so every asset (PDF, txt, etc.) always emits as a real file instead of being base64-inlined into the JS bundle.
- Chapter-level notes PDFs go in `src/assets/pdf/`, named `S<chapterId>.pdf` (e.g. `S1.pdf` for chapter 1). Resolved via `getChapterNotesUrl()` in `src/data/notes.js` (uses `import.meta.glob`) — a chapter with no matching PDF just shows "No notes available yet," no manual wiring needed per chapter.
- `FloatingBubbles` (`src/components/FloatingBubbles.jsx`, mounted only on `Landing`'s hero) renders 8 glassy soap-bubble circles (46–106px, layered radial-gradient glare + colored tint + rim highlight, inset box-shadow for depth) that drift upward on a wobbling loop (`bubbleFloat` keyframe, `index.css`, multi-stop transform for side-to-side sway rather than a straight diagonal) with randomized size/speed/delay/drift per bubble. Clicking one pops it into 8 small `bubble-shard` particles that scatter radially and fade (`bubbleShard` keyframe), then the bubble is removed and a fresh randomized one respawns after a short delay — keeps the count roughly steady without a fixed grid feel.
- AI tool shortcuts (ChatGPT, Gemini, Claude, Google Drive, Typing Practice → typing.com for students who type with one finger) open in new tab (`target="_blank" rel="noopener noreferrer"`), collapsed behind a toggle FAB (`AIShortcuts`) to avoid overlapping page content.
- `ChapterDetails`/`TaskDetails` open with a gradient hero card (ghost-numeral watermark of the chapter/task id in the corner) containing the "Back" button, chapter/task number, title, and (on `TaskDetails`) the `CompleteButton` — not a bare `fixed`-positioned Back button floating alone in the page margin. That fixed approach looked disconnected from the content; grouping everything in one card reads as an intentional header. Label is just "Back", not "Back to X". Each hero card has its own animated color-fade identity (see Visual System below) with three `.hero-orb` drifting blur circles behind the content, staggered via inline `animationDelay`. The gradient palette is picked at random from a fixed `HERO_PALETTES` array in each page file (`useState(() => HERO_PALETTES[Math.floor(Math.random() * HERO_PALETTES.length)])`) — a fresh random pick every page load/navigation, not persisted. `ChapterDetails` and `TaskDetails` keep separate palette arrays (5 hues each) since they're independent pages.
- `ScrollToTop` (`src/components/ScrollToTop.jsx`, mounted once in `App.jsx` inside `<Suspense>`) resets `window.scrollTo(0, 0)` on every route change — React Router doesn't do this itself for client-side navigation, so without it a deep-scrolled Explore page would leave you scrolled down on the chapter/task page you just navigated to.
- Keep chapter page section order fixed: chapter header → Notes → Tasks.
- Keep task page section order fixed: Question → What to Do → Steps → Required File/Download → What You Learn → Questions About It.

## Visual System

- `font-display` (Space Grotesk, defined in `index.css`) is used on all page H1s and the Navbar wordmark; body/paragraph text stays on the default Inter stack.
- **Two separate palettes by design** — don't cross-pollinate them:
  - **Explore / ChapterDetails / Navbar / Footer** (everything except the task page itself): violet→cyan brand gradient (`from-violet-600 to-cyan-500`, sometimes `to-fuchsia-500` for badges), ivory cards `bg-[#FFFCF5]` on a flat cream `bg-[#FAF6EC]` page background, violet-tinted shadows/hovers (`hover:border-violet-200`, `hover:bg-[#F6F0FF]`). Exception: the `ChapterDetails` hero card itself breaks from the page's violet system and uses its own red-fade identity (`from-red-300 via-rose-200 to-orange-100`, `border-red-200`, red-tinted shadow, `text-red-950` heading) with three drifting `.hero-orb` blur circles (`bg-red-400/40`, `bg-rose-300/40`, `bg-orange-300/50`) — everything else on the page (Notes link, Tasks list) stays violet/cream.
  - **TaskDetails and everything exclusive to it** (`Section`, `StepList`, `ComparisonTable`, `ResourceCard`, `LearningOutcome`, `QuestionCard`, `CompleteButton`, `DownloadButton`) — **monochromatic blue** per explicit request: `bg-blue-50` page background, white cards with `border-blue-100`, blue-tinted shadows (`rgba(30,64,175,...)` instead of the violet `rgba(109,40,217,...)`), gradient badges/buttons `from-blue-700 to-blue-400` (or `from-blue-600 to-blue-400` for smaller badges), prompt callouts `border-blue-600 bg-blue-100 text-blue-950`. The `CompleteButton` signals "done" via a solid deep `bg-blue-900` (not a hue change to green) to stay strictly monochromatic. Exception: the `TaskDetails` hero card itself breaks from blue and uses its own purple/lavender-fade identity (`from-purple-300 via-fuchsia-200 to-violet-200`, `border-purple-200`, purple-tinted shadow, `text-purple-950` heading) with three drifting `.hero-orb` blur circles (`bg-purple-400/40`, `bg-fuchsia-300/40`, `bg-violet-300/50`) — everything below it (Sections, Steps, etc.) stays blue. If a component is shared across both contexts (none currently are, besides `Navbar`/`Footer`/`AIShortcuts`/`HiddenSpot`, which stayed on the violet system since they're global chrome, not task-page-specific), pick the palette based on which page renders it.
- All Download buttons (`ResourceCard`, `FileStep` in `StepList.jsx`) share one `DownloadButton` component: a gradient pill that morphs into a spinning-ring circle icon-button on **click** (not hover — an `active` state toggled in JS, auto-resets after 1.6s), built entirely with Tailwind (conditional classes + `animate-spin`) — no styled-components/CSS-in-JS, consistent with the project's Tailwind-only rule.
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
