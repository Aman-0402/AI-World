import hrmNotesUrl from '../assets/HRM_Complete_Notes.pdf?url'
import marketingNotesUrl from '../assets/Marketing_Complete_Notes.pdf?url'

export const notifications = [
  {
    id: 1,
    title: 'Chapter 10',
    message: 'Complete the tasks of Chapter 10 — these are very important questions.',
    date: '2026-08-24',
    link: { to: '/chapter/10', label: 'Go to Chapter 10' },
  },
  {
    id: 2,
    title: 'Career Prep Approach',
    message: 'Hi, I recommend following this approach:',
    steps: [
      'Create professional accounts on LinkedIn and Naukri.com.',
      'Search for 50+ internship/job postings related to your specialization and carefully read their job descriptions.',
      'Identify the most commonly required skills, tools, technologies, and qualifications across those postings.',
      'Make a list of the skills you are missing and prioritize the most frequently requested ones.',
      'Start learning and practicing those skills through courses, projects, and hands-on work.',
      'Update your resume and LinkedIn profile with the relevant skills and projects.',
      'Start applying consistently for internships and entry-level opportunities that match your profile.',
      'Keep tracking the applications and continue improving your skills based on the requirements you see in new job postings.',
    ],
    note: 'The goal is to understand what the industry actually demands, build those skills, and then start applying with a stronger profile.',
    date: '2026-08-24',
  },
  {
    id: 3,
    title: 'Submit Your Resume',
    message: 'Fill this form and upload your resume.',
    date: '2026-08-24',
    link: { href: 'https://forms.gle/4Gzu4Bnd1PFHowSr8', label: 'Open the Form' },
  },
  {
    id: 4,
    title: 'HRM Complete Notes',
    message: 'HRM complete notes are now available — download the PDF below.',
    date: '2026-09-04',
    urgent: true,
    link: { href: hrmNotesUrl, label: 'Download HRM Notes (PDF)' },
  },
  {
    id: 5,
    title: 'Marketing Complete Notes',
    message: 'Marketing complete notes are now available — download the PDF below.',
    date: '2026-09-04',
    link: { href: marketingNotesUrl, label: 'Download Marketing Notes (PDF)' },
  },
]

const STORAGE_KEY = 'ai-world-seen-notifications'

export function getSeenIds() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
  } catch {
    return []
  }
}

export function markAllSeen() {
  const ids = notifications.map((n) => n.id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
}

export function getUnseenNotifications() {
  const seenIds = getSeenIds()
  return notifications.filter((n) => !seenIds.includes(n.id))
}
