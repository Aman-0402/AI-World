import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import Explore from './pages/Explore.jsx'
import ChapterDetails from './pages/ChapterDetails.jsx'
import TaskDetails from './pages/TaskDetails.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/chapter/:chapterId" element={<ChapterDetails />} />
      <Route path="/task/:taskId" element={<TaskDetails />} />
    </Routes>
  )
}

export default App
