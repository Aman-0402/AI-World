import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { X } from 'lucide-react'

const DODGE_RADIUS = 110

export default function ConfirmStartChapter({ chapter, onClose }) {
  const navigate = useNavigate()
  const noBtnRef = useRef(null)
  const [noPos, setNoPos] = useState(null)

  function dodgeNo() {
    const btn = noBtnRef.current
    if (!btn) return
    const bRect = btn.getBoundingClientRect()
    const maxLeft = Math.max(8, window.innerWidth - bRect.width - 8)
    const maxTop = Math.max(8, window.innerHeight - bRect.height - 8)
    setNoPos({
      left: 8 + Math.random() * (maxLeft - 8),
      top: 8 + Math.random() * (maxTop - 8),
    })
  }

  useEffect(() => {
    function handleMouseMove(e) {
      const btn = noBtnRef.current
      if (!btn) return
      const bRect = btn.getBoundingClientRect()
      const bx = bRect.left + bRect.width / 2
      const by = bRect.top + bRect.height / 2
      const dist = Math.hypot(e.clientX - bx, e.clientY - by)
      if (dist < DODGE_RADIUS) dodgeNo()
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

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
        <div className="relative mt-5 h-14">
          <button type="button" onClick={handleYes} className="rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:shadow-md">
            Yes
          </button>
        </div>
      </div>

      <button
        ref={noBtnRef}
        type="button"
        onMouseEnter={dodgeNo}
        onClick={dodgeNo}
        style={
          noPos
            ? { position: 'fixed', left: noPos.left, top: noPos.top }
            : { position: 'fixed', left: '58%', top: '58%' }
        }
        className="z-[120] rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-700 shadow-md"
      >
        No
      </button>
    </div>
  )
}
