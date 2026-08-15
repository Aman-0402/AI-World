const pdfModules = import.meta.glob('/src/assets/pdf/*.pdf', {
  eager: true,
  query: '?url',
  import: 'default',
})

export function getChapterNotesUrl(chapterId) {
  return pdfModules[`/src/assets/pdf/S${chapterId}.pdf`] ?? null
}
