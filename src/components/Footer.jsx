export default function Footer({ dark = false }) {
  return (
    <footer
      className={`px-4 py-6 text-center text-xs ${dark ? 'text-slate-500' : 'text-slate-400'}`}
    >
      Built by{' '}
      <a
        href="https://github.com/Aman-0402"
        target="_blank"
        rel="noopener noreferrer"
        className={`font-medium underline-offset-2 hover:underline ${dark ? 'text-slate-300' : 'text-slate-600'}`}
      >
        Aman0402
      </a>
    </footer>
  )
}
