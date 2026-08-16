import { useEffect, useState } from 'react'

const CONFETTI_EMOJI = ['🎉', '🎊', '✨', '🥳', '⭐', '💜', '🔥']

function storageKey(taskId) {
  return `task-completed-${taskId}`
}

function Confetti() {
  const pieces = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.6,
    duration: 2.2 + Math.random() * 1.4,
    emoji: CONFETTI_EMOJI[i % CONFETTI_EMOJI.length],
    size: 16 + Math.random() * 18,
    drift: (Math.random() - 0.5) * 200,
  }))

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti-piece absolute top-[-40px]"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            '--drift': `${p.drift}px`,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  )
}

export default function CompleteButton({ taskId }) {
  const [completed, setCompleted] = useState(false)
  const [celebrating, setCelebrating] = useState(false)

  useEffect(() => {
    setCompleted(localStorage.getItem(storageKey(taskId)) === 'true')
  }, [taskId])

  function handleClick() {
    const next = !completed
    setCompleted(next)
    localStorage.setItem(storageKey(taskId), String(next))
    if (next) {
      setCelebrating(true)
      setTimeout(() => setCelebrating(false), 2600)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5 ${
          completed
            ? 'bg-emerald-500 text-white shadow-[0_6px_16px_-4px_rgba(16,185,129,0.5)] hover:bg-emerald-600'
            : 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-[0_6px_16px_-4px_rgba(139,92,246,0.5)] hover:shadow-[0_10px_24px_-6px_rgba(139,92,246,0.6)]'
        }`}
      >
        {completed ? (
          <>
            Completed <span aria-hidden="true">😊</span>
          </>
        ) : (
          'Completed?'
        )}
      </button>

      {celebrating && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <Confetti />
          <div className="celebration-pop rounded-3xl border border-violet-100 bg-white px-10 py-8 text-center shadow-[0_20px_60px_-15px_rgba(139,92,246,0.4)]">
            <p className="text-5xl">🎉</p>
            <p className="mt-3 text-2xl font-bold text-slate-900">Hurray!</p>
            <p className="mt-1 text-sm text-slate-500">Task marked as completed.</p>
          </div>
        </div>
      )}
    </>
  )
}
