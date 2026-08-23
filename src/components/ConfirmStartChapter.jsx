import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HelpCircle, X } from 'lucide-react'

const DODGE_RADIUS = 110
const STILL_RESET_MS = 2000
const TAUNT_AFTER_DODGES = 7

export default function ConfirmStartChapter({ chapter, onClose }) {
  const navigate = useNavigate()
  const yesBtnRef = useRef(null)
  const noBtnRef = useRef(null)
  const stillTimerRef = useRef(null)
  const defaultPosRef = useRef(null)
  const dodgeCountRef = useRef(0)
  const [noPos, setNoPos] = useState(null)
  const [showTaunt, setShowTaunt] = useState(false)

  useLayoutEffect(() => {
    const yesBtn = yesBtnRef.current
    const noBtn = noBtnRef.current
    if (!yesBtn || !noBtn) return
    const yRect = yesBtn.getBoundingClientRect()
    const nRect = noBtn.getBoundingClientRect()
    const pos = {
      left: yRect.right + 12,
      top: yRect.top + (yRect.height - nRect.height) / 2,
    }
    defaultPosRef.current = pos
    setNoPos(pos)
  }, [])

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

    dodgeCountRef.current += 1
    if (dodgeCountRef.current >= TAUNT_AFTER_DODGES) {
      setShowTaunt(true)
    }
  }

  useEffect(() => {
    function handleMouseMove(e) {
      clearTimeout(stillTimerRef.current)
      stillTimerRef.current = setTimeout(() => {
        if (defaultPosRef.current) setNoPos(defaultPosRef.current)
        dodgeCountRef.current = 0
        setShowTaunt(false)
      }, STILL_RESET_MS)

      const btn = noBtnRef.current
      if (!btn) return
      const bRect = btn.getBoundingClientRect()
      const bx = bRect.left + bRect.width / 2
      const by = bRect.top + bRect.height / 2
      const dist = Math.hypot(e.clientX - bx, e.clientY - by)
      if (dist < DODGE_RADIUS) dodgeNo()
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(stillTimerRef.current)
    }
  }, [])

  function handleYes() {
    navigate(`/chapter/${chapter.id}`)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/60 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-sm rounded-2xl border border-violet-100 bg-[#FFFCF5] p-6 shadow-2xl sm:p-7">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 text-white shadow-sm">
          <HelpCircle className="h-5 w-5" aria-hidden="true" />
        </div>
        <h3 className="font-display mt-4 text-lg font-bold text-slate-900">Are you sure?</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          You're about to start <span className="font-semibold text-slate-800">{chapter.title}</span>.
        </p>
        <div className="relative mt-6 flex h-11 items-center gap-3 border-t border-slate-100 pt-5">
          <button
            ref={yesBtnRef}
            type="button"
            onClick={handleYes}
            className="rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_4px_12px_-4px_rgba(109,40,217,0.5)] transition hover:shadow-[0_6px_16px_-4px_rgba(109,40,217,0.6)]"
          >
            Yes, let's go
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
            ? { position: 'fixed', left: noPos.left, top: noPos.top, opacity: 1 }
            : { position: 'fixed', left: 0, top: 0, opacity: 0 }
        }
        className="z-[120] rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 shadow-[0_4px_12px_-4px_rgba(15,23,42,0.15)]"
      >
        No
      </button>

      {showTaunt && noPos && (
        <div
          style={{ position: 'fixed', left: noPos.left, top: Math.max(8, noPos.top - 52) }}
          className="z-[130] whitespace-nowrap rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg"
        >
          😂 You can't catch me!
        </div>
      )}
    </div>
  )
}
