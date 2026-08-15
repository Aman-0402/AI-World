export const chapters = [
  {
    id: 1,
    title: 'Introduction to AI',
    description: 'Understand the fundamentals of Artificial Intelligence and its role in business.',
  },
  {
    id: 2,
    title: 'AI Tools for Business',
    description: 'Learn how AI tools can support different business activities.',
  },
  {
    id: 3,
    title: 'Prompt Engineering',
    description: 'Learn how to write clear, effective prompts to get useful AI responses.',
  },
  {
    id: 4,
    title: 'Generative AI for Business',
    description: 'Explore how generative AI creates content, ideas, and business value.',
  },
  {
    id: 5,
    title: 'AI Automation',
    description: 'Discover how AI can automate repetitive business tasks and workflows.',
  },
  {
    id: 6,
    title: 'AI Business Applications',
    description: 'See real-world applications of AI across business functions.',
  },
]

export function getChapterById(chapterId) {
  return chapters.find((chapter) => String(chapter.id) === String(chapterId))
}
