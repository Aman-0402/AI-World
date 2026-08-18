import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'secret-page-found'

const TREATS = ['Kurkure', 'Lays', 'Chocolate', 'Uncle Chipps', 'Khatta Meetha']

function randomTreat() {
  return TREATS[Math.floor(Math.random() * TREATS.length)]
}

export default function SecretPage() {
  const [alreadyFound, setAlreadyFound] = useState(false)
  const [treat] = useState(randomTreat)

  useEffect(() => {
    const wasFound = localStorage.getItem(STORAGE_KEY) === 'true'
    setAlreadyFound(wasFound)
    if (!wasFound) {
      localStorage.setItem(STORAGE_KEY, 'true')
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-violet-600 via-fuchsia-600 to-cyan-500 px-4 text-center">
      <p className="text-6xl">{alreadyFound ? '😄' : '🎉'}</p>

      {alreadyFound ? (
        <>
          <h1 className="font-display mt-4 text-3xl font-bold text-white sm:text-4xl">Back Again?</h1>
          <p className="mt-3 max-w-md text-white/90">
            You already found this one — no treat this time! Go help a friend find it instead 😉
          </p>
        </>
      ) : (
        <>
          <h1 className="font-display mt-4 text-3xl font-bold text-white sm:text-4xl">Shhh... You Found It!</h1>
          <p className="mt-3 max-w-md text-white/90">
            You found the hidden secret page! Take a screenshot of this page and send it to me to get your treat —{' '}
            <span className="font-semibold">{treat}</span>! 🍬
          </p>
        </>
      )}

      <Link
        to="/explore"
        className="mt-8 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-violet-700 shadow-lg transition hover:bg-white/90"
      >
        Back to Explore
      </Link>
    </div>
  )
}
