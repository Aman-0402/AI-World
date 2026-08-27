import { useEffect, useState } from 'react'
import { Download, X } from 'lucide-react'

const STORAGE_KEY = 'ai-world-install-prompt-seen'

export default function InstallPromptPopup() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    function handleBeforeInstallPrompt(e) {
      e.preventDefault()
      if (localStorage.getItem(STORAGE_KEY)) return
      setDeferredPrompt(e)
      setShow(true)
      localStorage.setItem(STORAGE_KEY, 'true')
    }
    function handleAppInstalled() {
      setShow(false)
      setDeferredPrompt(null)
    }
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [])

  function handleClose() {
    setShow(false)
  }

  async function handleInstall() {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    await deferredPrompt.userChoice
    setShow(false)
    setDeferredPrompt(null)
  }

  if (!show || !deferredPrompt) return null

  return (
    <div className="fixed inset-0 z-[102] flex items-center justify-center bg-slate-950/50 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-sm rounded-2xl border border-violet-100 bg-[#FFFCF5] p-6 shadow-2xl">
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 text-white">
          <Download className="h-5 w-5" aria-hidden="true" />
        </div>
        <h2 className="font-display mt-4 text-lg font-bold text-slate-900">Install AI in Business</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Add this to your desktop or home screen for quicker access — it opens like a regular app, no browser tabs.
        </p>
        <div className="mt-5 flex flex-col gap-2">
          <button
            type="button"
            onClick={handleInstall}
            className="w-full rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:shadow-md"
          >
            Install
          </button>
          <button
            type="button"
            onClick={handleClose}
            className="w-full rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  )
}
