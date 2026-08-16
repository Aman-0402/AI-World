import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Landing = lazy(() => import('./pages/Landing.jsx'))
const Explore = lazy(() => import('./pages/Explore.jsx'))
const ChapterDetails = lazy(() => import('./pages/ChapterDetails.jsx'))
const TaskDetails = lazy(() => import('./pages/TaskDetails.jsx'))
const SecretPage = lazy(() => import('./pages/SecretPage.jsx'))

function PageFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-300 border-t-violet-600" aria-label="Loading" />
    </div>
  )
}

function App() {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/chapter/:chapterId" element={<ChapterDetails />} />
        <Route path="/task/:taskId" element={<TaskDetails />} />
        <Route path="/psst" element={<SecretPage />} />
      </Routes>
    </Suspense>
  )
}

export default App
