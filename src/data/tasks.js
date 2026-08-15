export const tasks = [
  // Chapter 1 — Introduction to AI
  {
    id: 1,
    chapterId: 1,
    title: 'Explore ChatGPT',
    question: 'What is AI, and how can a conversational AI tool demonstrate it in practice?',
    whatToDo: 'Open ChatGPT and ask it to explain Artificial Intelligence in simple terms, then ask a business-related follow-up question.',
    steps: [
      'Open ChatGPT.',
      'Ask: "What is Artificial Intelligence?"',
      'Ask a follow-up question relating AI to a business you know.',
      'Read the response carefully.',
      'Note down two things you learned.',
    ],
    requiredFile: null,
    downloadUrl: null,
    whatYouLearn: [
      'What AI means in simple terms.',
      'How conversational AI tools respond to questions.',
      'How to ask a business-relevant follow-up question.',
    ],
    questions: [
      'How did the AI explain its own definition?',
      'What business example did you use, and why?',
      'Was the response easy to understand?',
    ],
  },
  {
    id: 2,
    chapterId: 1,
    title: 'Identify AI in Daily Life',
    question: 'Where does AI already show up in everyday business tools you use?',
    whatToDo: 'List three apps or services you use regularly and identify the AI feature in each.',
    steps: [
      'Think of three apps or tools you use often.',
      'For each, identify one AI-powered feature.',
      'Write one sentence on how that feature helps.',
      'Review your list for patterns.',
    ],
    requiredFile: 'AI_In_Daily_Life_Worksheet.pdf',
    downloadUrl: '/resources/AI_In_Daily_Life_Worksheet.pdf',
    whatYouLearn: [
      'How to recognize AI features in common tools.',
      'How AI quietly supports everyday business tasks.',
    ],
    questions: [
      'Which AI feature surprised you the most?',
      'Would you have noticed it without looking closely?',
    ],
  },
  {
    id: 3,
    chapterId: 1,
    title: 'AI vs Traditional Software',
    question: 'How is AI-based software different from traditional rule-based software?',
    whatToDo: 'Compare a traditional calculator app with an AI chatbot and note the key differences.',
    steps: [
      'Use a calculator app for a simple task.',
      'Use ChatGPT or Gemini for a similar type of task.',
      'Note how each one produces its result.',
      'Summarize the core difference in one paragraph.',
    ],
    requiredFile: null,
    downloadUrl: null,
    whatYouLearn: [
      'The difference between rule-based and AI-based systems.',
      'Why AI outputs can vary while traditional software outputs do not.',
    ],
    questions: [
      'Which approach felt more predictable?',
      'When would a business prefer traditional software over AI?',
    ],
  },

  // Chapter 2 — AI Tools for Business
  {
    id: 4,
    chapterId: 2,
    title: 'Explore ChatGPT',
    question: 'How can ChatGPT support a business communication task?',
    whatToDo: 'Use ChatGPT to draft a short business announcement.',
    steps: [
      'Open ChatGPT.',
      'Describe a business announcement you need to make.',
      'Generate a draft.',
      'Review and refine the tone.',
    ],
    requiredFile: null,
    downloadUrl: null,
    whatYouLearn: [
      'How to use AI for business writing tasks.',
      'How to refine AI-generated drafts.',
    ],
    questions: [
      'What did you change in the AI draft, and why?',
      'How much time did this save compared to writing from scratch?',
    ],
  },
  {
    id: 5,
    chapterId: 2,
    title: 'Explore Gemini',
    question: 'How can Google Gemini assist with business research?',
    whatToDo: 'Use Gemini to research a business topic and summarize the findings.',
    steps: [
      'Open Google Gemini.',
      'Ask it to summarize a business trend relevant to your interest.',
      'Ask a follow-up question for more detail.',
      'Write a short summary of what you learned.',
    ],
    requiredFile: null,
    downloadUrl: null,
    whatYouLearn: [
      'How to use AI for quick business research.',
      'How to evaluate AI-summarized information.',
    ],
    questions: [
      'Did the summary match what you already knew about the topic?',
      'What follow-up question got the most useful detail?',
    ],
  },
  {
    id: 6,
    chapterId: 2,
    title: 'Compare AI Responses',
    question: 'Do different AI tools give different answers to the same business question?',
    whatToDo: 'Ask the same business question to ChatGPT and Gemini, then compare the answers.',
    steps: [
      'Choose one clear business question.',
      'Ask it to ChatGPT and record the answer.',
      'Ask the same question to Gemini and record the answer.',
      'Compare tone, detail, and accuracy.',
    ],
    requiredFile: 'AI_Response_Comparison_Template.docx',
    downloadUrl: '/resources/AI_Response_Comparison_Template.docx',
    whatYouLearn: [
      'How different AI models can vary in output.',
      'Why comparing AI outputs matters before trusting them.',
    ],
    questions: [
      'Which response was more useful, and why?',
      'What differences stood out most?',
    ],
  },
  {
    id: 7,
    chapterId: 2,
    title: 'Create a Business Prompt',
    question: 'How can a well-structured prompt improve an AI tool\'s business response?',
    whatToDo: 'Write a business scenario prompt and test it in an AI tool of your choice.',
    steps: [
      'Pick a simple business scenario.',
      'Write a clear prompt describing the task and context.',
      'Run the prompt in an AI tool.',
      'Review whether the response met your expectations.',
    ],
    requiredFile: null,
    downloadUrl: null,
    whatYouLearn: [
      'How prompt clarity affects AI output quality.',
      'How to structure a business-oriented prompt.',
    ],
    questions: [
      'What made your prompt effective or ineffective?',
      'How would you improve the prompt next time?',
    ],
  },

  // Chapter 3 — Prompt Engineering
  {
    id: 8,
    chapterId: 3,
    title: 'Write a Basic Prompt',
    question: 'What separates a vague prompt from a clear one?',
    whatToDo: 'Write a vague prompt and a clear prompt for the same task, then compare the AI responses.',
    steps: [
      'Choose a simple task, e.g. writing a product description.',
      'Write a vague, one-line prompt and run it.',
      'Rewrite the prompt with context, tone, and format details.',
      'Run the improved prompt and compare results.',
    ],
    requiredFile: null,
    downloadUrl: null,
    whatYouLearn: [
      'The impact of specificity on AI responses.',
      'How to add context, tone, and format to a prompt.',
    ],
    questions: [
      'What specific change improved the output most?',
      'Which prompt would you reuse for future tasks?',
    ],
  },
  {
    id: 9,
    chapterId: 3,
    title: 'Create a Business Prompt',
    question: 'How can role and context improve an AI response for a business task?',
    whatToDo: 'Write a prompt that assigns the AI a role (e.g. marketing consultant) for a business task.',
    steps: [
      'Choose a business task, e.g. a marketing tagline.',
      'Write a prompt that assigns the AI a specific role.',
      'Add relevant business context.',
      'Run the prompt and review the response.',
    ],
    requiredFile: 'Prompt_Engineering_Worksheet.docx',
    downloadUrl: '/resources/Prompt_Engineering_Worksheet.docx',
    whatYouLearn: [
      'How assigning a role changes AI tone and focus.',
      'How to combine role, context, and task in one prompt.',
    ],
    questions: [
      'How did the assigned role change the response style?',
      'Would a different role produce a better result for this task?',
    ],
  },
  {
    id: 10,
    chapterId: 3,
    title: 'Refine an AI Response',
    question: 'How do you iterate on an AI response to get closer to what you actually need?',
    whatToDo: 'Generate an initial AI response, then give follow-up instructions to refine it.',
    steps: [
      'Run an initial prompt for a business task.',
      'Review the response and identify what is missing.',
      'Give a follow-up instruction to refine the response.',
      'Repeat once more if needed.',
    ],
    requiredFile: null,
    downloadUrl: null,
    whatYouLearn: [
      'How iterative refinement improves AI output.',
      'How to give precise follow-up instructions.',
    ],
    questions: [
      'How many iterations did it take to get a usable result?',
      'What follow-up instruction had the biggest impact?',
    ],
  },

  // Chapter 4 — Generative AI for Business
  {
    id: 11,
    chapterId: 4,
    title: 'Generate Business Content',
    question: 'How can generative AI help create business content quickly?',
    whatToDo: 'Use an AI tool to generate a short piece of business content, such as a social media post.',
    steps: [
      'Choose a content type, e.g. a social media post.',
      'Describe the audience and goal in your prompt.',
      'Generate the content.',
      'Edit it to match your brand voice.',
    ],
    requiredFile: null,
    downloadUrl: null,
    whatYouLearn: [
      'How generative AI produces business content.',
      'Why human editing is still needed after generation.',
    ],
    questions: [
      'What did you change to match your brand voice?',
      'Would you publish this content as-is? Why or why not?',
    ],
  },
  {
    id: 12,
    chapterId: 4,
    title: 'Create a Business Prompt',
    question: 'How can generative AI assist with idea generation for a new product or service?',
    whatToDo: 'Use an AI tool to brainstorm three ideas for a product or service in a chosen industry.',
    steps: [
      'Pick an industry you are interested in.',
      'Ask the AI to brainstorm three ideas for a product or service.',
      'Ask it to explain the reasoning behind one idea.',
      'Pick your favorite and note why.',
    ],
    requiredFile: null,
    downloadUrl: null,
    whatYouLearn: [
      'How generative AI supports brainstorming.',
      'How to evaluate AI-generated ideas critically.',
    ],
    questions: [
      'Which idea was most realistic, and why?',
      'What would you need to validate before pursuing it?',
    ],
  },
  {
    id: 13,
    chapterId: 4,
    title: 'AI Business Case Study',
    question: 'How is generative AI used in a real business today?',
    whatToDo: 'Research a real company using generative AI and summarize their use case.',
    steps: [
      'Search for a business case study on generative AI adoption.',
      'Identify what problem the AI solved.',
      'Note the outcome or benefit reported.',
      'Summarize the case in a few sentences.',
    ],
    requiredFile: 'Case_Study_Template.docx',
    downloadUrl: '/resources/Case_Study_Template.docx',
    whatYouLearn: [
      'How generative AI is applied in real business settings.',
      'How to evaluate the business impact of an AI use case.',
    ],
    questions: [
      'What business problem did the AI solve?',
      'Could a similar approach apply to a business you know?',
    ],
  },

  // Chapter 5 — AI Automation
  {
    id: 14,
    chapterId: 5,
    title: 'Identify a Task to Automate',
    question: 'What repetitive business task could AI help automate?',
    whatToDo: 'Pick a repetitive task (e.g. sorting emails, scheduling) and describe how AI could automate it.',
    steps: [
      'List three repetitive tasks in a typical workday.',
      'Choose one to focus on.',
      'Describe how an AI tool could handle it.',
      'Note any limitations of automating it.',
    ],
    requiredFile: null,
    downloadUrl: null,
    whatYouLearn: [
      'How to identify automation opportunities.',
      'The limits of AI automation for certain tasks.',
    ],
    questions: [
      'What part of the task would still need human review?',
      'What would you gain by automating this task?',
    ],
  },
  {
    id: 15,
    chapterId: 5,
    title: 'Draft an Automation Workflow',
    question: 'What does a simple AI-assisted automation workflow look like?',
    whatToDo: 'Sketch a step-by-step workflow showing where AI fits into an existing business process.',
    steps: [
      'Pick a business process, e.g. handling customer inquiries.',
      'List the current manual steps.',
      'Mark which steps AI could handle or support.',
      'Redraw the workflow with AI included.',
    ],
    requiredFile: 'Automation_Workflow_Template.xlsx',
    downloadUrl: '/resources/Automation_Workflow_Template.xlsx',
    whatYouLearn: [
      'How to map a business process step-by-step.',
      'Where AI fits naturally into a workflow.',
    ],
    questions: [
      'Which step benefited most from AI support?',
      'What risk exists in automating this step?',
    ],
  },
  {
    id: 16,
    chapterId: 5,
    title: 'Evaluate Automation Trade-offs',
    question: 'What are the trade-offs of automating a business task with AI?',
    whatToDo: 'Write a short pros/cons list for automating a chosen business task.',
    steps: [
      'Choose the task from the previous activity.',
      'List at least two benefits of automating it.',
      'List at least two risks or downsides.',
      'Conclude whether automation is worthwhile.',
    ],
    requiredFile: null,
    downloadUrl: null,
    whatYouLearn: [
      'How to weigh benefits against risks for automation.',
      'Why not every task should be fully automated.',
    ],
    questions: [
      'What tipped your conclusion toward or against automation?',
      'What would change your mind?',
    ],
  },

  // Chapter 6 — AI Business Applications
  {
    id: 17,
    chapterId: 6,
    title: 'AI in Marketing',
    question: 'How is AI used in modern marketing?',
    whatToDo: 'Use an AI tool to generate a marketing idea, then explain how it could be measured for success.',
    steps: [
      'Ask an AI tool for a marketing campaign idea for a small business.',
      'Note the target audience it suggests.',
      'Define one metric to measure the campaign\'s success.',
      'Summarize the idea and metric together.',
    ],
    requiredFile: null,
    downloadUrl: null,
    whatYouLearn: [
      'How AI supports marketing ideation.',
      'How to pair an idea with a measurable outcome.',
    ],
    questions: [
      'Is the suggested audience realistic for a small business?',
      'What metric did you choose, and why?',
    ],
  },
  {
    id: 18,
    chapterId: 6,
    title: 'AI Business Case Study',
    question: 'How does AI support decision-making in operations or finance?',
    whatToDo: 'Research and summarize one example of AI used in business operations or finance.',
    steps: [
      'Search for an example of AI in operations or finance.',
      'Identify the decision AI helped support.',
      'Note the reported result.',
      'Summarize in a short paragraph.',
    ],
    requiredFile: 'Case_Study_Template.docx',
    downloadUrl: '/resources/Case_Study_Template.docx',
    whatYouLearn: [
      'How AI supports operational or financial decisions.',
      'How to critically read a business AI case study.',
    ],
    questions: [
      'What decision did AI support in this case?',
      'What risk would you flag if you were reviewing this decision?',
    ],
  },
  {
    id: 19,
    chapterId: 6,
    title: 'Reflect on AI Across Business',
    question: 'Looking across marketing, operations, and finance, where does AI add the most value?',
    whatToDo: 'Write a short reflection comparing the AI use cases you explored across chapters.',
    steps: [
      'Review the AI applications you explored so far.',
      'Pick the one you found most valuable.',
      'Explain why it stood out.',
      'Note one area where AI still falls short.',
    ],
    requiredFile: null,
    downloadUrl: null,
    whatYouLearn: [
      'How to compare AI use cases across business functions.',
      'How to form an informed opinion on AI\'s business value.',
    ],
    questions: [
      'Which AI application would you adopt first in a real business?',
      'What would still require human judgment?',
    ],
  },
]

export function getTaskById(taskId) {
  return tasks.find((task) => String(task.id) === String(taskId))
}

export function getTasksByChapter(chapterId) {
  return tasks.filter((task) => String(task.chapterId) === String(chapterId))
}
