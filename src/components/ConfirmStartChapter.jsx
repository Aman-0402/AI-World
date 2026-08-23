import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { X } from 'lucide-react'

const DODGE_RADIUS = 70

export default function ConfirmStartChapter({ chapter, onClose }) {
  const navigate = useNavigate()
  const containerRef = useRef(null)
  const noBtnRef = useRef(null)
  const [noPos, setNoPos] = useState(null)

  function dodgeNo() {
    const container = containerRef.current
    const btn = noBtnRef.current
    if (!container || !btn) return
    const cRect = container.getBoundingClientRect()
    const bRect = btn.getBoundingClientRect()
    const maxLeft = Math.max(8, cRect.width - bRect.width - 8)
    const maxTop = Math.max(8, cRect.height - bRect.height - 8)
    setNoPos({
      left: 8 + Math.random() * (maxLeft - 8),
      top: 8 + Math.random() * (maxTop - 8),
    })
  }

  function handleContainerMouseMove(e) {
    const btn = noBtnRef.current
    if (!btn) return
    const bRect = btn.getBoundingClientRect()
    const bx = bRect.left + bRect.width / 2
    const by = bRect.top + bRect.height / 2
    const dist = Math.hypot(e.clientX - bx, e.clientY - by)
    if (dist < DODGE_RADIUS) dodgeNo()
  }

  function handleYes() {
    navigate(`/chapter/${chapter.id}`)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/60 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-xs rounded-2xl border border-violet-100 bg-[#FFFCF5] p-6 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
        <h3 className="font-display text-base font-bold text-slate-900">Are you sure?</h3>
        <p className="mt-2 text-sm text-slate-600">
          Start <span className="font-semibold text-slate-800">{chapter.title}</span> now?
        </p>
        <div ref={containerRef} onMouseMove={handleContainerMouseMove} className="relative mt-5 h-28">
          <button
            type="button"
            onClick={handleYes}
            className="absolute left-4 top-9 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:shadow-md"
          >
            Yes
          </button>
          <button
            ref={noBtnRef}
            type="button"
            onMouseEnter={dodgeNo}
            onClick={dodgeNo}
            style={
              noPos
                ? { left: noPos.left, top: noPos.top, transition: 'left 0.15s ease-out, top 0.15s ease-out' }
                : { right: 8, top: 36 }
            }
            className="absolute rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-700"
          >
            No
          </button>
        </div>
      </div>
    </div>
  )
}
