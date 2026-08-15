export default function ComparisonTable({ tools, criteria }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            <th className="border-b border-slate-200 bg-slate-50 px-4 py-2 text-left font-semibold text-slate-700">
              Criteria
            </th>
            {tools.map((tool) => (
              <th
                key={tool}
                className="border-b border-slate-200 bg-slate-50 px-4 py-2 text-left font-semibold text-violet-700"
              >
                {tool}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {criteria.map((criterion) => (
            <tr key={criterion}>
              <td className="border-b border-slate-100 px-4 py-3 font-medium text-slate-700">{criterion}</td>
              {tools.map((tool) => (
                <td key={tool} className="border-b border-slate-100 px-4 py-3 text-slate-400">
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
