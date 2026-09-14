import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Hexagon, Plus, Minus } from 'lucide-react'
import Navbar from '../components/Navbar.jsx'
import AIShortcuts from '../components/AIShortcuts.jsx'
import StepList from '../components/StepList.jsx'
import ComparisonTable from '../components/ComparisonTable.jsx'
import ResourceCard from '../components/ResourceCard.jsx'
import LearningOutcome from '../components/LearningOutcome.jsx'
import QuestionCard from '../components/QuestionCard.jsx'
import ScenarioCards from '../components/ScenarioCards.jsx'
import CompleteButton from '../components/CompleteButton.jsx'
import HiddenSpot from '../components/HiddenSpot.jsx'
import Footer from '../components/Footer.jsx'
import { getTaskById } from '../data/tasks.js'
import { getChapterById } from '../data/chapters.js'

function Section({ title, children }) {
  return (
    <section className="rounded-2xl border border-blue-100 bg-white p-5 shadow-[0_1px_2px_rgba(30,64,175,0.04),0_12px_28px_-18px_rgba(30,64,175,0.18)]">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-600">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  )
}

const HERO_PALETTES = [
  {
    border: 'border-purple-200',
    gradient: 'from-purple-300 via-fuchsia-200 to-violet-200',
    shadow: 'shadow-[0_1px_2px_rgba(107,33,168,0.06),0_20px_40px_-24px_rgba(107,33,168,0.35)]',
    orb1: 'bg-purple-400/40',
    orb2: 'bg-fuchsia-300/40',
    orb3: 'bg-violet-300/50',
    heading: 'text-purple-950',
    backShadow: 'shadow-[0_1px_2px_rgba(107,33,168,0.06)]',
    backHover: 'hover:text-purple-700',
  },
  {
    border: 'border-sky-200',
    gradient: 'from-sky-300 via-cyan-200 to-teal-200',
    shadow: 'shadow-[0_1px_2px_rgba(14,116,144,0.06),0_20px_40px_-24px_rgba(14,116,144,0.35)]',
    orb1: 'bg-sky-400/40',
    orb2: 'bg-cyan-300/40',
    orb3: 'bg-teal-300/50',
    heading: 'text-sky-950',
    backShadow: 'shadow-[0_1px_2px_rgba(14,116,144,0.06)]',
    backHover: 'hover:text-sky-700',
  },
  {
    border: 'border-amber-200',
    gradient: 'from-amber-300 via-orange-200 to-yellow-200',
    shadow: 'shadow-[0_1px_2px_rgba(180,83,9,0.06),0_20px_40px_-24px_rgba(180,83,9,0.35)]',
    orb1: 'bg-amber-400/40',
    orb2: 'bg-orange-300/40',
    orb3: 'bg-yellow-300/50',
    heading: 'text-amber-950',
    backShadow: 'shadow-[0_1px_2px_rgba(180,83,9,0.06)]',
    backHover: 'hover:text-amber-700',
  },
  {
    border: 'border-emerald-200',
    gradient: 'from-emerald-300 via-green-200 to-teal-200',
    shadow: 'shadow-[0_1px_2px_rgba(6,95,70,0.06),0_20px_40px_-24px_rgba(6,95,70,0.35)]',
    orb1: 'bg-emerald-400/40',
    orb2: 'bg-green-300/40',
    orb3: 'bg-teal-300/50',
    heading: 'text-emerald-950',
    backShadow: 'shadow-[0_1px_2px_rgba(6,95,70,0.06)]',
    backHover: 'hover:text-emerald-700',
  },
  {
    border: 'border-pink-200',
    gradient: 'from-pink-300 via-rose-200 to-fuchsia-200',
    shadow: 'shadow-[0_1px_2px_rgba(157,23,77,0.06),0_20px_40px_-24px_rgba(157,23,77,0.35)]',
    orb1: 'bg-pink-400/40',
    orb2: 'bg-rose-300/40',
    orb3: 'bg-fuchsia-300/50',
    heading: 'text-pink-950',
    backShadow: 'shadow-[0_1px_2px_rgba(157,23,77,0.06)]',
    backHover: 'hover:text-pink-700',
  },
]

const BEGINNER_GUIDES = {
  17: {
    tool: 'ChatGPT, Gemini, or Claude',
    workArea: 'a notebook, Google Docs, or the same document where you save your class activity work',
    focus: 'social media strategy',
    promptStarter:
      'Act as a social media strategist. Help me complete this class activity step by step. Use simple language. Ask me for missing details before making assumptions. My task is: [paste the task title and question]. My brand/business is: [write your chosen brand or business].',
  },
  18: {
    tool: 'ChatGPT, Gemini, Claude, or Meta AI',
    workArea: 'a notebook, Google Docs, or a simple table with columns for Persona, Pain Point, Journey Stage, Message, and Channel',
    focus: 'customer personas and buyer journey',
    promptStarter:
      'Act as a marketing teacher. Help me create a realistic customer persona and buyer journey. Use simple words and give examples. Do not make the customer too generic. My product/service is: [write product]. My target customer is: [write who may buy it].',
  },
  19: {
    tool: 'ChatGPT, Gemini, or Claude',
    workArea: 'a notebook, Google Docs, or a table with columns for Version A, Version B, Audience, CTA, Reason, and Best Choice',
    focus: 'ad copy and A/B testing',
    promptStarter:
      'Act as an advertising copywriter. Help me write simple ad copy for A/B testing. Give clear headline and CTA options. Do not make unsupported claims. Product: [write product]. Audience: [write audience]. Main benefit: [write benefit].',
  },
  20: {
    tool: 'ChatGPT, Gemini, Claude, or Canva AI',
    workArea: 'a notebook, Google Docs, or a campaign planning table with columns for Objective, Audience, Channel, Message, Date, CTA, and Risk',
    focus: 'marketing campaign planning',
    promptStarter:
      'Act as a marketing campaign planner. Help me plan this campaign in simple steps. Do not invent facts or unrealistic budgets. Campaign idea: [write idea]. Target audience: [write audience]. Goal: [write goal]. Timeline: [write timeline].',
  },
  21: {
    tool: 'Canva, Canva AI, ChatGPT, Gemini, or Claude',
    workArea: 'Canva for the design work, plus a notebook or Google Docs for your brand rules and review notes',
    focus: 'Canva creatives and brand consistency',
    promptStarter:
      'Act as a brand design assistant. Help me create clear Canva design instructions. Keep the design simple, readable, and consistent. Brand/business: [write brand]. Audience: [write audience]. Design format: [Instagram post/story/etc.].',
  },
  22: {
    tool: 'Canva AI, Microsoft Designer, ChatGPT, Gemini, or Claude',
    workArea: 'the image/design tool for generating visuals, plus a notebook or Google Docs for prompts, comparisons, and final review',
    focus: 'AI image generation for marketing',
    promptStarter:
      'Act as a marketing visual designer. Help me write an image-generation prompt. The image must be clear, brand-safe, and useful for a business promotion. Product: [write product]. Audience: [write audience]. Offer/message: [write message]. Style: [write style].',
  },
}

function getBeginnerGuide(task) {
  return BEGINNER_GUIDES[task.chapterId]
}

function getDetailedWhatToDo(task, chapter) {
  const guide = getBeginnerGuide(task)
  if (!guide) return [task.whatToDo]

  return [
    task.whatToDo,
    `This activity is about ${guide.focus}. Do it slowly: first write your own idea, then ask AI for help, then check and improve the answer.`,
    `Use ${guide.tool}. Keep your final answer in ${guide.workArea}.`,
    `When a step says "use this prompt", open the AI tool, click in the message box, type or paste the prompt, replace the bracket text with your own details, and press Enter.`,
    `Chapter ${chapter?.id}: ${chapter?.title}. Do not submit the first AI answer directly. Your final work should show your own choice, AI help, and your final edited version.`,
  ]
}

function getDetailedSteps(task) {
  const guide = getBeginnerGuide(task)
  if (!guide) return task.steps

  return [
    `Before opening AI, read the task question again: "${task.question}" Write one short answer in your own words so you know what you are trying to do.`,
    `Open ${guide.tool}. You can use the floating AI shortcuts button, or open the tool in a new browser tab.`,
    `Open your work area: ${guide.workArea}. Write the task title at the top so your work is easy to check later.`,
    `In the AI tool message box, write this starter prompt. Replace every bracket with your own details before you send it: "${guide.promptStarter}"`,
    'Read the AI answer carefully. If any part is too difficult, too generic, or not related to your product/brand, ask a follow-up question: "Explain this in easier words and make it specific to my example."',
    {
      intro: 'Now complete the original activity steps below. Treat them as your main checklist:',
      checklist: task.steps.map((step) => {
        if (typeof step === 'string') return step
        if (step?.checklist) return [step.intro, ...step.checklist, step.outro].filter(Boolean).join(' ')
        if (step?.file) return `Open or download the file: ${step.file}`
        return 'Complete this part of the activity.'
      }),
    },
    'After completing the checklist, write your final answer in your own words. Include: what you asked AI, what AI suggested, what you changed, and why your final choice is better.',
    'Before marking the task complete, check three things: the answer is easy to read, the prompt is included, and no unsupported claim or fake statistic was copied from AI.',
  ]
}

export default function TaskDetails() {
  const { taskId } = useParams()
  const task = getTaskById(taskId)
  const [hero] = useState(() => HERO_PALETTES[Math.floor(Math.random() * HERO_PALETTES.length)])

  if (!task) {
    return <Navigate to="/explore" replace />
  }

  const chapter = getChapterById(task.chapterId)
  const whatToDo = getDetailedWhatToDo(task, chapter)
  const steps = getDetailedSteps(task)
  const resources =
    task.resources ?? (task.requiredFile ? [{ name: task.requiredFile, downloadUrl: task.downloadUrl }] : [])

  return (
    <div className="relative flex min-h-screen flex-col bg-blue-50">
      <Navbar />
      <HiddenSpot icon={Hexagon} className="left-4 top-20 text-blue-400 hover:text-blue-700" />
      <HiddenSpot icon={Plus} className="right-6 top-40 text-blue-400 hover:text-blue-700" />
      <HiddenSpot icon={Minus} className="bottom-6 right-6 text-blue-400 hover:text-blue-700" />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        <div className={`relative overflow-hidden rounded-3xl border ${hero.border} bg-gradient-to-br ${hero.gradient} p-6 ${hero.shadow} sm:p-8`}>
          <div
            className={`hero-orb pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full ${hero.orb1} blur-3xl`}
            aria-hidden="true"
          />
          <div
            className={`hero-orb pointer-events-none absolute bottom-[-3rem] left-1/3 h-32 w-32 rounded-full ${hero.orb2} blur-3xl`}
            style={{ animationDelay: '-4s' }}
            aria-hidden="true"
          />
          <div
            className={`hero-orb pointer-events-none absolute -bottom-8 right-10 h-24 w-24 rounded-full ${hero.orb3} blur-2xl`}
            style={{ animationDelay: '-9s' }}
            aria-hidden="true"
          />

          <span
            className="font-display pointer-events-none absolute -right-4 -top-10 select-none text-[8rem] font-bold leading-none text-white/30 sm:text-[10rem]"
            aria-hidden="true"
          >
            {String(task.id).padStart(2, '0')}
          </span>

          <Link
            to={`/chapter/${task.chapterId}`}
            className={`relative inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-700 ${hero.backShadow} backdrop-blur transition hover:-translate-y-0.5 hover:border-white hover:bg-white ${hero.backHover}`}
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back
          </Link>

          <div className="relative mt-6 flex flex-wrap items-center justify-between gap-4">
            <h1 className={`font-display max-w-xl text-3xl font-bold ${hero.heading} sm:text-4xl`}>{task.title}</h1>
            <CompleteButton taskId={task.id} />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4">
          <Section title="Question">
            <p className="text-slate-800">{task.question}</p>
          </Section>

          {task.scenario && (
            <Section title="Scenario">
              <ScenarioCards {...task.scenario} />
            </Section>
          )}

          <Section title="What to Do">
            <div className="flex flex-col gap-2 text-slate-700">
              {whatToDo.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </Section>

          <Section title="Steps">
            <StepList steps={steps} />
          </Section>

          {task.comparisonTable && (
            <Section title="Comparison Criteria">
              <ComparisonTable {...task.comparisonTable} />
            </Section>
          )}

          <Section title="Required File / Download Resource">
            <ResourceCard resources={resources} />
          </Section>

          <Section title="What You Learn">
            <LearningOutcome outcomes={task.whatYouLearn} />
          </Section>

          <Section title="Questions About It">
            <QuestionCard questions={task.questions} />
          </Section>

          {task.answer && (
            <div className="flex justify-end pr-2">
              <Link
                to={`/task/${task.id}/answer`}
                aria-label="???"
                tabIndex={-1}
                className="h-3 w-3 cursor-default rounded-full bg-red-500 opacity-[0.05] transition-opacity duration-300 hover:opacity-100"
              />
            </div>
          )}
        </div>
      </main>
      <Footer />
      <AIShortcuts />
    </div>
  )
}
