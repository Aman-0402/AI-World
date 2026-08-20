import { Briefcase, FileText, Lightbulb } from 'lucide-react'

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-600 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-white">
      {children}
    </span>
  )
}

export default function ScenarioCards({ jobPosting, resumes, note }) {
  return (
    <div className="flex flex-col gap-3">
      {jobPosting && (
        <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-4">
          <div className="flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-blue-600" aria-hidden="true" />
            <Chip>Job Posting</Chip>
            <span className="text-sm font-semibold text-blue-950">{jobPosting.title}</span>
          </div>
          <ul className="mt-3 flex flex-col gap-1.5">
            {jobPosting.lines.map((line, i) => (
              <li key={i} className="text-sm leading-relaxed text-slate-700">
                {line}
              </li>
            ))}
          </ul>
        </div>
      )}

      {resumes && resumes.length > 0 && (
        <div className="grid gap-3 sm:grid-cols-2">
          {resumes.map((resume, i) => (
            <div key={i} className="rounded-xl border border-blue-100 bg-white p-4 shadow-[0_1px_2px_rgba(30,64,175,0.04)]">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-blue-600" aria-hidden="true" />
                <Chip>{resume.label}</Chip>
              </div>
              <ul className="mt-3 flex flex-col gap-1.5">
                {resume.lines.map((line, j) => (
                  <li key={j} className="flex gap-2 text-sm leading-relaxed text-slate-700">
                    <span className="text-blue-400" aria-hidden="true">
                      &bull;
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {note && (
        <div className="flex gap-2.5 rounded-xl border border-blue-200 bg-blue-100 p-4">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-blue-950">{note}</p>
        </div>
      )}
    </div>
  )
}
