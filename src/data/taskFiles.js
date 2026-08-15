const fileModules = import.meta.glob('/src/assets/task/*', {
  eager: true,
  query: '?url',
  import: 'default',
})

export function getTaskFileUrl(filename) {
  return fileModules[`/src/assets/task/${filename}`] ?? null
}
