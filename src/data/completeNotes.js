const modules = import.meta.glob('/src/assets/*_Complete_Notes.pdf', {
  eager: true,
  query: '?url',
  import: 'default',
})

export const completeNotes = Object.entries(modules)
  .map(([path, url]) => {
    const filename = path.split('/').pop()
    const name = filename.replace(/_Complete_Notes\.pdf$/, '').replace(/([a-z])([A-Z])/g, '$1 $2')
    return { name, filename, url }
  })
  .sort((a, b) => a.name.localeCompare(b.name))
