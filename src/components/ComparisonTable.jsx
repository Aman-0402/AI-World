export default function ComparisonTable({ tools, criteria }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-blue-100">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            <th className="border-b border-blue-100 bg-blue-100 px-4 py-2.5 text-left font-semibold text-blue-950">
              Criteria
            </th>
            {tools.map((tool) => (
              <th
                key={tool}
                className="border-b border-blue-100 bg-blue-100 px-4 py-2.5 text-left font-semibold text-blue-700"
              >
                {tool}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {criteria.map((criterion) => (
            <tr key={criterion} className="odd:bg-white even:bg-blue-50/60">
              <td className="border-b border-blue-50 px-4 py-3 font-medium text-slate-700">{criterion}</td>
              {tools.map((tool) => (
                <td key={tool} className="border-b border-blue-50 px-4 py-3 text-slate-400">
                  &nbsp;
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
