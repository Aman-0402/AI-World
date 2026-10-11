export const chapterNotesCapstone = [
  {
    chapterId: 41,
    title: 'Responsible AI & Governance',
    objective: 'Use AI fairly, safely, and transparently, and set simple rules for its use in an organization.',
    topics: ['Bias and fairness', 'Transparency', 'Accountability', 'An AI use policy'],
    activity: 'Review an AI use case for risks and write a short responsible-use policy.',
    discussion: 'Who is responsible when an AI-assisted decision harms someone?',
    keyTakeaway: 'Responsible AI means fairness, transparency, human accountability, and clear rules everyone can follow.',
    sections: [
      {
        heading: '1. What Responsible AI Means',
        body:
          'Responsible AI is using AI in a way that is fair, safe, honest, and accountable. It matters most when AI influences people: hiring, lending, grading, pricing, or health.',
      },
      {
        heading: '2. The Four Core Principles',
        table: {
          columns: ['Principle', 'Plain meaning', 'Example'],
          rows: [
            ['Fairness', 'Do not treat groups unfairly', 'A resume filter should not favour one gender'],
            ['Transparency', 'Be open that AI is used', 'Tell customers they are chatting with a bot'],
            ['Accountability', 'A human owns the outcome', 'A manager signs off on AI-assisted hiring'],
            ['Safety', 'Prevent harm', 'Test before deploying and monitor afterwards'],
          ],
        },
      },
      {
        heading: '3. How Bias Gets In',
        bullets: [
          'Training data reflects past human bias.',
          'Some groups are missing or underrepresented in the data.',
          'The goal itself may favour one outcome unfairly.',
          'Nobody checks results across different groups.',
        ],
        example:
          'A tool trained on past hires from one background may rank similar candidates higher, repeating history instead of judging merit.',
      },
      {
        heading: '4. A Simple AI Use Policy',
        bullets: [
          'List approved tools and what they may be used for.',
          'Never paste confidential or personal data into public tools.',
          'Review AI output before it reaches customers or decisions.',
          'Disclose AI use where it matters.',
          'Name a person who handles AI concerns.',
        ],
      },
      {
        heading: 'Activity 1: Risk Review and Policy',
        steps: [
          'Pick an AI use case, such as screening resumes or an AI chat assistant.',
          'List who could be harmed and how, using the four principles.',
          'Write five short rules that reduce those risks.',
          'Name who is accountable for the outcome.',
        ],
        example:
          'Use case: AI summarizes candidate resumes. Risk: it overlooks non-traditional backgrounds. Rule: a human reads every shortlisted and rejected resume sample weekly. Owner: HR manager.',
      },
    ],
  },
  {
    chapterId: 42,
    title: 'Data Privacy & AI Compliance',
    objective: 'Protect personal and confidential data when using AI and understand basic compliance duties.',
    topics: ['Personal data', 'What not to paste into AI', 'Anonymizing data', 'Compliance basics'],
    activity: 'Rewrite a data-sensitive prompt so it can be used safely.',
    discussion: 'What could go wrong if a customer list is pasted into a public AI tool?',
    keyTakeaway: 'Treat everything you type into an AI tool as something that may leave your control. Remove or mask sensitive data first.',
    sections: [
      {
        heading: '1. What Counts as Sensitive Data?',
        table: {
          columns: ['Type', 'Examples'],
          rows: [
            ['Personal', 'Names, phone numbers, addresses, ID numbers'],
            ['Financial', 'Bank details, salaries, invoices'],
            ['Confidential business', 'Unreleased plans, contracts, source code'],
            ['Sensitive personal', 'Health, religion, biometric data'],
          ],
        },
      },
      {
        heading: '2. Why It Matters',
        body:
          'Public AI tools may store prompts and use them in ways you do not control. A leak can harm customers, break laws, and damage trust. Laws such as India\'s data protection law and the EU GDPR place duties on organizations that handle personal data.',
      },
      {
        heading: '3. Anonymize Before You Ask',
        body: 'Replace real identifiers with placeholders and keep only what the task needs.',
        example:
          'Unsafe: "Write a reminder to Ramesh Kumar, 98xxxxxx12, who owes Rs. 45,000." Safe: "Write a polite payment reminder to a customer who owes an overdue amount."',
      },
      {
        heading: '4. Safe Habits',
        bullets: [
          'Use only company-approved tools for company data.',
          'Share the minimum data needed.',
          'Check the tool\'s privacy settings and data retention.',
          'Report mistakes quickly; do not hide them.',
          'When unsure, ask before pasting.',
        ],
      },
      {
        heading: 'Activity 1: Make a Prompt Safe',
        steps: [
          'Take a realistic prompt that contains names, numbers, or confidential details.',
          'Underline every piece of sensitive data in it.',
          'Rewrite it using placeholders or general descriptions.',
          'Confirm the rewritten prompt still gets a useful answer.',
        ],
        example:
          'Original contains a client name and contract value. Rewritten: "Summarize risks in a services contract worth a mid-sized amount for a retail client." The advice is still useful and no secret is shared.',
      },
    ],
  },
  {
    chapterId: 43,
    title: 'Retail & Marketing Case Study',
    objective: 'Apply AI end to end to a retail business: customers, campaigns, and sales insight.',
    topics: ['Customer understanding', 'Campaign creation', 'Personalization', 'Measuring results'],
    activity: 'Build an AI-supported marketing plan for a retail business and define how you will measure it.',
    discussion: 'Which marketing decisions should stay human even with AI assistance?',
    keyTakeaway: 'AI speeds up content and analysis, but a plan is only good if you can measure whether it worked.',
    sections: [
      {
        heading: '1. The Case',
        body:
          'A small clothing store wants more repeat customers and a stronger festive-season campaign. It has a customer list, last year\'s sales, and a small budget. You will use AI at each stage while keeping decisions human.',
      },
      {
        heading: '2. Where AI Helps in Retail',
        table: {
          columns: ['Stage', 'AI help'],
          rows: [
            ['Understand customers', 'Group customers by behaviour and needs'],
            ['Plan campaign', 'Suggest themes, offers, timing'],
            ['Create content', 'Draft posts, emails, and ad copy'],
            ['Personalize', 'Tailor messages to each group'],
            ['Review results', 'Summarize what worked and what did not'],
          ],
        },
      },
      {
        heading: '3. Campaign Prompt',
        prompt:
          'You are a retail marketing assistant. Our store sells affordable casual clothing to college students. Budget is Rs. 15,000 for a 2-week festive campaign. Suggest 3 campaign ideas, the channel for each, a sample message, and one metric to measure each. Keep suggestions realistic for our budget.',
      },
      {
        heading: '4. Measure What Matters',
        bullets: [
          'Reach: how many people saw it.',
          'Response: clicks, replies, or store visits.',
          'Sales: orders or revenue linked to the campaign.',
          'Return: revenue compared with spend.',
        ],
        example:
          'Spend Rs. 15,000, generate Rs. 60,000 in sales: roughly 4 times the spend. If sales were only Rs. 12,000, the campaign lost money and you change the plan.',
      },
      {
        heading: 'Activity 1: Retail Marketing Plan',
        steps: [
          'Choose a retail business and a clear goal, such as repeat purchases.',
          'Use AI to produce three campaign ideas for your budget.',
          'Pick one, write the messages, and edit them in your own voice.',
          'Define two metrics and a target value for each.',
        ],
        example:
          'Goal: bring back 50 past customers. Campaign: personal WhatsApp offer. Metrics: replies (target 30) and orders (target 15).',
      },
    ],
  },
  {
    chapterId: 44,
    title: 'Finance & HR Case Study',
    objective: 'Apply AI to finance and HR work while handling sensitive data and decisions carefully.',
    topics: ['Finance reporting', 'Budget analysis', 'HR screening and onboarding', 'Sensitive data care'],
    activity: 'Analyze a finance dataset and draft an HR process with AI, with clear human checks.',
    discussion: 'Which finance or HR steps must never be fully automated?',
    keyTakeaway: 'AI can speed up analysis and drafting in finance and HR, but numbers must be verified and people decisions need human judgment.',
    sections: [
      {
        heading: '1. AI in Finance',
        bullets: [
          'Summarize expense and revenue trends.',
          'Flag unusual transactions for review.',
          'Draft management reports from data.',
          'Explain variances between budget and actual.',
        ],
        example:
          'Marketing spend is 20% over budget. AI lists likely causes from the data; you confirm with the team before reporting.',
      },
      {
        heading: '2. Always Verify the Numbers',
        body:
          'AI can miscalculate or misread a table. Recompute key totals in the spreadsheet itself and compare. In finance, one wrong figure can mislead a whole report.',
        table: {
          columns: ['Check', 'How'],
          rows: [
            ['Totals', 'Recalculate with a spreadsheet formula'],
            ['Percentages', 'Redo them yourself for key figures'],
            ['Sources', 'Match each figure to the original data'],
          ],
        },
      },
      {
        heading: '3. AI in HR',
        bullets: [
          'Draft job descriptions and interview questions.',
          'Summarize resumes to save reading time.',
          'Create onboarding checklists and welcome messages.',
          'Answer common employee policy questions.',
        ],
      },
      {
        heading: '4. Handle People Data With Care',
        bullets: [
          'Remove names and identifiers before using public tools.',
          'Do not let AI make final hiring or firing decisions.',
          'Check outputs for bias across groups.',
          'Keep a human record of the reasons for decisions.',
        ],
      },
      {
        heading: 'Activity 1: Finance Report and HR Process',
        steps: [
          'Use a small expense dataset and ask AI for a monthly summary and top three concerns.',
          'Recalculate total spend and one percentage by hand.',
          'Ask AI to draft an onboarding checklist for a new employee.',
          'Mark which steps a human must do or approve.',
        ],
        example:
          'AI states total spend is Rs. 3,20,000 but the spreadsheet gives Rs. 3,02,000. You catch the transposed digits before the report is shared.',
      },
    ],
  },
  {
    chapterId: 45,
    title: 'Capstone Planning',
    objective: 'Choose a real business problem and plan a clear, achievable capstone project.',
    topics: ['Choosing a problem', 'Defining scope', 'Success measures', 'Project plan'],
    activity: 'Write a one-page capstone plan with problem, solution, tools, and timeline.',
    discussion: 'What makes a capstone problem worth solving?',
    keyTakeaway: 'A good capstone has a clear problem, a small enough scope, a measurable result, and a realistic timeline.',
    sections: [
      {
        heading: '1. Choose a Real Problem',
        body:
          'Pick a problem a real business or person has. The best ones are specific, recurring, and measurable, such as slow customer replies, messy weekly reports, or weak social media content.',
        bullets: [
          'Specific: you can describe it in one sentence.',
          'Real: someone actually faces it.',
          'Measurable: you can tell if it improved.',
          'Doable: you can finish it in the time given.',
        ],
      },
      {
        heading: '2. Define the Scope',
        body: 'Scope is what you will and will not do. A small, finished project beats a big, unfinished one.',
        table: {
          columns: ['In scope', 'Out of scope'],
          rows: [
            ['Reply templates for the top 5 customer questions', 'Building a full chatbot platform'],
            ['A weekly report workflow for one team', 'Automating the entire company'],
          ],
        },
      },
      {
        heading: '3. Plan Template',
        table: {
          columns: ['Part', 'Question to answer'],
          rows: [
            ['Problem', 'What is wrong today and for whom?'],
            ['Solution', 'What will you build or change using AI?'],
            ['Tools', 'Which AI tools and data will you use?'],
            ['Success', 'How will you measure improvement?'],
            ['Risks', 'What could go wrong and how will you handle it?'],
            ['Timeline', 'What gets done by which date?'],
          ],
        },
      },
      {
        heading: '4. Planning Prompt',
        prompt:
          'Help me refine a capstone project. My idea: [describe it]. Ask me 5 clarifying questions, then suggest a realistic scope for 2 weeks, success measures, and the top 3 risks. Do not add features I did not ask for.',
      },
      {
        heading: 'Activity 1: Write Your Capstone Plan',
        steps: [
          'List three possible problems you know well.',
          'Pick one using the four tests: specific, real, measurable, doable.',
          'Fill in the six-part plan template.',
          'Share it with a peer and refine the scope based on feedback.',
        ],
        example:
          'Problem: a tuition centre replies to enquiries slowly. Solution: AI-drafted reply templates plus a tracking sheet. Success: reply time from 1 day to 2 hours within two weeks.',
      },
    ],
  },
  {
    chapterId: 46,
    title: 'Capstone Development',
    objective: 'Build your capstone step by step, test it with real input, and document what you did.',
    topics: ['Building in small steps', 'Testing', 'Fixing weaknesses', 'Documentation'],
    activity: 'Build a first working version of your capstone and test it with real examples.',
    discussion: 'What is the smallest version of your project that already delivers value?',
    keyTakeaway: 'Build a simple working version first, test it with real inputs, then improve it. Keep notes as you go.',
    sections: [
      {
        heading: '1. Build the Smallest Working Version',
        body:
          'Start with the core flow only: input, AI step, output. Get that working before adding extras. A working basic version teaches you more than a perfect plan.',
      },
      {
        heading: '2. Build, Test, Improve',
        table: {
          columns: ['Step', 'What you do'],
          rows: [
            ['Build', 'Create the simplest version of the workflow'],
            ['Test', 'Run 5 to 10 real examples through it'],
            ['Review', 'Note where it fails or is unclear'],
            ['Improve', 'Fix the biggest weakness first'],
          ],
        },
      },
      {
        heading: '3. Test With Tricky Inputs',
        bullets: [
          'A normal, typical example.',
          'An incomplete or messy example.',
          'An unusual case that might confuse the AI.',
          'An input the system should refuse or escalate.',
        ],
        example:
          'For a reply-template project, test a polite enquiry, a rude complaint, a vague one-word message, and a request for a refund the template must not approve.',
      },
      {
        heading: '4. Keep a Build Log',
        bullets: [
          'What you tried and what happened.',
          'Prompts that worked and ones that did not.',
          'Problems found and how you fixed them.',
          'Screenshots or results you can show later.',
        ],
      },
      {
        heading: 'Activity 1: First Working Version',
        steps: [
          'Build the core flow of your project from your plan.',
          'Test it with at least five real or realistic examples.',
          'Record failures in a build log and fix the biggest one.',
          'Run the tests again and note what improved.',
        ],
        example:
          'First test: 3 of 5 replies were correct. After adding the business hours to the prompt, 5 of 5 passed. The log shows exactly what changed the result.',
      },
    ],
  },
  {
    chapterId: 47,
    title: 'Capstone Presentation',
    objective: 'Present your capstone clearly, show evidence of results, and honestly describe limits.',
    topics: ['Story structure', 'Showing evidence', 'Demo tips', 'Handling questions'],
    activity: 'Prepare and rehearse a 5-minute capstone presentation.',
    discussion: 'What convinces an audience more: features or evidence of results?',
    keyTakeaway: 'Tell a clear story: problem, solution, proof, and limits. Practice the demo and be honest about what does not work yet.',
    sections: [
      {
        heading: '1. A Simple Story Structure',
        table: {
          columns: ['Part', 'Time', 'What you say'],
          rows: [
            ['Problem', '1 min', 'Who has the problem and why it matters'],
            ['Solution', '1 min', 'What you built and how AI helps'],
            ['Demo', '2 min', 'Show it working on a real example'],
            ['Results', '1 min', 'Evidence it improved things'],
            ['Limits and next steps', '30 sec', 'What is not solved and what comes next'],
          ],
        },
      },
      {
        heading: '2. Show Evidence, Not Just Claims',
        body: 'Numbers and before-and-after comparisons are more convincing than adjectives.',
        example:
          'Weak: "Our tool is very fast." Strong: "Replying used to take about 1 day. With the tool, it takes about 2 hours, measured over 10 enquiries."',
      },
      {
        heading: '3. Demo Tips',
        bullets: [
          'Rehearse the exact demo several times.',
          'Prepare a backup, such as screenshots, in case the internet fails.',
          'Use one clear example instead of many.',
          'Keep slides light; talk to the audience, not the screen.',
        ],
      },
      {
        heading: '4. Handling Questions',
        bullets: [
          'Listen to the whole question before answering.',
          'If you do not know, say so and offer to find out.',
          'Be honest about limits and risks.',
          'Prepare answers to likely questions: cost, accuracy, privacy.',
        ],
      },
      {
        heading: 'Activity 1: Rehearse Your Presentation',
        steps: [
          'Write a one-line summary for each part of the five-part structure.',
          'Build up to five slides at most, with one idea per slide.',
          'Present to a peer with a timer and a backup plan for the demo.',
          'Ask the peer for two things that were unclear and fix them.',
        ],
        example:
          'During rehearsal the demo took 4 minutes. You cut it to one example and the whole talk fits in 5 minutes.',
      },
    ],
  },
  {
    chapterId: 48,
    title: 'Viva Voce & Wrap-up',
    objective: 'Prepare to explain and defend your work confidently and reflect on what you learned in the course.',
    topics: ['Viva questions', 'Explaining your choices', 'Honest limits', 'Course reflection'],
    activity: 'Practice answering viva questions about your capstone and write a short reflection.',
    discussion: 'What is the one skill from this course you will keep using?',
    keyTakeaway: 'You can defend your work by explaining your reasons, showing evidence, and admitting limits. Keep practicing responsible, verified AI use.',
    sections: [
      {
        heading: '1. What a Viva Tests',
        body:
          'A viva checks whether you truly understand your own work, not just whether it runs. Examiners ask why you made choices, how you tested, and what you would do differently.',
      },
      {
        heading: '2. Likely Questions to Prepare',
        table: {
          columns: ['Question', 'What a good answer includes'],
          rows: [
            ['Why did you choose this problem?', 'Real need and who benefits'],
            ['How does AI help here?', 'Specific step and why AI suits it'],
            ['How did you test it?', 'Examples, results, failures found'],
            ['What are the risks?', 'Accuracy, privacy, bias, and your safeguards'],
            ['What would you improve?', 'Honest limits and clear next steps'],
          ],
        },
      },
      {
        heading: '3. How to Answer Well',
        bullets: [
          'Answer directly first, then explain your reasoning.',
          'Use one real example from your project.',
          'Say "I am not sure, but I would check by..." instead of guessing.',
          'Stay calm; pausing to think is fine.',
        ],
        example:
          'Question: "How do you know the output is accurate?" Answer: "I checked 10 outputs against the original data; 9 matched and I fixed the one that did not, so a person still reviews important figures."',
      },
      {
        heading: '4. Reflect on the Course',
        bullets: [
          'Prompting: clear role, context, format, and checking.',
          'Tools: choosing the right AI for the task.',
          'Business use: marketing, finance, HR, operations.',
          'Responsibility: privacy, fairness, human accountability.',
        ],
      },
      {
        heading: 'Activity 1: Mock Viva and Reflection',
        steps: [
          'Write answers to the five likely questions for your capstone.',
          'Practice them aloud with a peer asking follow-ups.',
          'Note any question you struggled with and strengthen that answer.',
          'Write five lines: what you learned, what surprised you, and your next AI goal.',
        ],
        example:
          'Reflection: "I learned to give AI context. I was surprised how often it sounds confident but is wrong. Next goal: automate one weekly task with a human check."',
      },
    ],
  },
]
