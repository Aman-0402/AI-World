export default function QuestionCard({ questions }) {
  return (
    <ol className="space-y-3">
      {questions.map((question, i) => (
        <li key={i} className="flex gap-3">
          <span className="text-sm font-semibold text-violet-600">Q{i + 1}.</span>
          <span className="text-sm text-slate-700">{question}</span>
        </li>
      ))}
    </ol>
  )
}
