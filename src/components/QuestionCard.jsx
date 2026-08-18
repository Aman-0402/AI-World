export default function QuestionCard({ questions }) {
  return (
    <ol className="space-y-3">
      {questions.map((question, i) => (
        <li key={i} className="flex gap-3">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-400 text-xs font-semibold text-white shadow-sm">
            Q{i + 1}
          </span>
          <span className="text-sm text-slate-700">{question}</span>
        </li>
      ))}
    </ol>
  )
}
