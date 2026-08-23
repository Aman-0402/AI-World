# AI in Business Learning Portal

## Link : https://aman-0402.github.io/AI-World/

Frontend-only React learning portal for teaching AI-in-business concepts through chapters and hands-on tasks. No backend, no auth, no database — all content is static/mock data shipped with the app.

## Flow

```
Landing → Explore → Chapter List → Chapter → Task List → Task
                                                            ├── Question
                                                            ├── What to Do
                                                            ├── Steps
                                                            ├── Required File / Download
                                                            ├── What You Learn
                                                            └── Questions About It
```

## Tech Stack

| Tech | Purpose |
|---|---|
| React.js | UI |
| Vite | Dev/build tool |
| JavaScript | App logic |
| Tailwind CSS | Styling |
| React Router | Navigation |
| Lucide React | Icons |

## Routes

| Path | Page |
|---|---|
| `/` | Landing |
| `/explore` | Chapter listing |
| `/chapter/:chapterId` | Chapter details + task list |
| `/task/:taskId` | Task details |

## Structure (target)

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── AIShortcuts.jsx
│   ├── ChapterCard.jsx
│   ├── TaskCard.jsx
│   ├── StepList.jsx
│   ├── ResourceCard.jsx
│   ├── LearningOutcome.jsx
│   └── QuestionCard.jsx
├── pages/
│   ├── Landing.jsx
│   ├── Explore.jsx
│   ├── ChapterDetails.jsx
│   └── TaskDetails.jsx
├── data/
│   ├── chapters.js
│   └── tasks.js
├── assets/
│   ├── images/
│   ├── icons/
│   └── resources/
├── routes/
├── App.jsx
├── main.jsx
└── index.css
```

## Scope

**In**: landing, explore, chapters, tasks (question/steps/resource/outcomes/reflection questions), resource downloads, AI tool shortcuts (ChatGPT, Gemini, Claude, Drive), responsive design, static data.

**Out** (future LMS phase): auth, accounts, dashboards, admin/instructor panels, backend API, DB, real submissions, attendance, notifications, certificates.

## Build Phases

### Phase 1 — Scaffold
- `npm create vite@latest` (react template), install Tailwind, React Router, Lucide React.
- Set up folder structure above, base `App.jsx`/`main.jsx`, Tailwind config, `index.css`.

### Phase 2 — Static Data Model
- `data/chapters.js`: chapter id, title, description, task count, task refs.
- `data/tasks.js`: task id, chapterId, question, whatToDo, steps[], requiredFile, downloadUrl, whatYouLearn[], questions[].
- Seed 6 chapters (Intro to AI, AI Tools for Business, Prompt Engineering, Generative AI, AI Automation, AI Business Applications), 4–5 tasks each.

### Phase 3 — Layout & Landing
- `Navbar.jsx`, `AIShortcuts.jsx` (floating shortcuts: ChatGPT, Gemini, Claude, Drive — open new tab).
- `Landing.jsx`: title-focused hero, Explore CTA.

### Phase 4 — Explore & Chapter Listing
- `Explore.jsx` + `ChapterCard.jsx`: grid of chapter cards (number, title, description, task count, Explore button).
- Route `/explore`.

### Phase 5 — Chapter Details & Task Listing
- `ChapterDetails.jsx` + `TaskCard.jsx`: chapter header + task list.
- Route `/chapter/:chapterId`, redirect/404 on invalid id.

### Phase 6 — Task Details
- `TaskDetails.jsx` composed of `StepList.jsx`, `ResourceCard.jsx`, `LearningOutcome.jsx`, `QuestionCard.jsx`.
- Sections: Question → What to Do → Steps → Required File/Download → What You Learn → Questions About It.
- Route `/task/:taskId`.

### Phase 7 — Resources
- Place downloadable files (docx/xlsx/pptx/pdf/csv/zip) under `assets/resources/`, wire download links.

### Phase 8 — Responsive Pass
- Desktop: large cards/expanded layout. Tablet: adaptive grid. Mobile: single column.

### Phase 9 — Polish
- Visual hierarchy, transitions, empty/loading states, accessibility (readable text, tap targets).

### Phase 10 — Future (not this project's scope)
- Backend API, DB, auth, admin/instructor panels, submissions, tracking, notifications, certificates, AI-powered evaluation.

## Getting Started

```bash
npm create vite@latest . -- --template react
npm install
npm install react-router-dom lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm run dev
```

See [Agent.md](Agent.md) for AI-agent working conventions on this repo.
