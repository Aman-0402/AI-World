import { Link } from 'react-router-dom'

export default function HiddenSpot({ icon: Icon, className }) {
  return (
    <Link
      to="/psst"
      aria-label="???"
      tabIndex={-1}
      className={`absolute z-10 cursor-default opacity-[0.03] transition-opacity duration-300 hover:opacity-70 ${className}`}
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
    </Link>
  )
}
