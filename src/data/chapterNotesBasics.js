export const chapterNotesBasics = [
  {
    chapterId: 1,
    title: 'Introduction to AI',
    objective: 'Understand what AI is, the main types of AI, and how businesses already use it.',
    topics: ['What AI is and is not', 'Types of AI', 'AI in everyday business', 'Comparing AI tools'],
    activity: 'Run the same prompt in two AI tools and compare tone, clarity, and professionalism.',
    discussion: 'If two AI tools answer the same prompt differently, how do you decide which to trust?',
    keyTakeaway: 'AI is a tool that predicts useful text, images, or decisions from patterns. Your prompt and your judgment decide the quality.',
    sections: [
      {
        heading: '1. What Is AI?',
        body:
          'Artificial Intelligence (AI) is software that performs tasks that normally need human thinking, such as understanding language, spotting patterns, making predictions, or generating content. Modern AI does not "understand" like a person. It learns patterns from huge amounts of data and uses them to produce the most likely useful answer.',
        bullets: [
          'AI is good at: speed, pattern spotting, drafting, summarizing, and repetitive tasks.',
          'AI is weak at: common sense in new situations, real-world accountability, and knowing when it is wrong.',
          'AI is a tool. A human stays responsible for the result.',
        ],
        example:
          'A spam filter is AI: it learned from millions of emails what spam looks like. ChatGPT is also AI: it learned patterns in language so it can draft an email for you.',
      },
      {
        heading: '2. Types of AI',
        body: 'People use the word AI for several different things. It helps to separate them.',
        table: {
          columns: ['Type', 'What it does', 'Business example'],
          rows: [
            ['Predictive AI', 'Predicts a number or outcome from past data', 'Forecasting next month sales'],
            ['Generative AI', 'Creates new text, images, audio, or code', 'Drafting a customer email'],
            ['Conversational AI', 'Chats with users in natural language', 'A support chatbot on a website'],
            ['Automation AI', 'Performs a repeated task by itself', 'Sorting invoices into folders'],
          ],
        },
      },
      {
        heading: '3. AI in Everyday Business',
        bullets: [
          'Marketing: drafting posts, ad copy, and campaign ideas.',
          'HR: writing job descriptions and screening first-round resumes.',
          'Finance: spotting unusual transactions and building forecasts.',
          'Operations: predicting stock needs and planning routes.',
          'Customer support: answering common questions at any hour.',
        ],
      },
      {
        heading: '4. Why Different Tools Give Different Answers',
        body:
          'ChatGPT, Gemini, and Claude are trained differently, so they differ in tone, detail, and accuracy. The same prompt can produce three different results. That is why you compare outputs and never assume the first answer is the best one.',
        example:
          'Prompt: "Write an apology email for a delayed order." One tool writes a warm, short email. Another writes a long formal one. Neither is wrong; one simply fits your customer better.',
      },
      {
        heading: 'Activity 1: Compare Two AI Tools',
        steps: [
          'Work in pairs and pick a simple business task, such as an apology email for a delivery delayed by three days.',
          'Run the exact same prompt in two different AI tools.',
          'Compare the outputs on tone, clarity, professionalism, personalization, and length.',
          'Decide which one you would send, and note how you would improve the prompt.',
        ],
        example:
          'Tool A is warm but vague about the new delivery date. Tool B is formal and names the date. Choose Tool B, then improve the prompt by adding "keep the tone warm" so you get the best of both.',
      },
    ],
  },
  {
    chapterId: 2,
    title: 'AI Landscape & Generative AI',
    objective: 'Map the main AI tools and understand how generative AI creates content for business use.',
    topics: ['The AI tool landscape', 'How generative AI works', 'Business use cases', 'Comparing three tools'],
    activity: 'Use one prompt in ChatGPT, Claude, and Gemini, then compare the three responses.',
    discussion: 'How much did the wording of your prompt change the results?',
    keyTakeaway: 'There is no single best AI. Choose the tool that fits the task, and compare before you trust.',
    sections: [
      {
        heading: '1. The AI Tool Landscape',
        body: 'New AI tools appear every month, but they fall into a few families.',
        table: {
          columns: ['Family', 'Examples', 'Typical use'],
          rows: [
            ['Chat assistants', 'ChatGPT, Claude, Gemini', 'Writing, brainstorming, explaining'],
            ['Research tools', 'Perplexity, NotebookLM', 'Finding and summarizing sources'],
            ['Design and image tools', 'Canva AI, Midjourney', 'Posters, visuals, mockups'],
            ['Office assistants', 'Microsoft Copilot', 'Documents, Excel, email'],
          ],
        },
      },
      {
        heading: '2. How Generative AI Works (Simply)',
        body:
          'Generative AI is trained on very large collections of text or images. It learns which words and ideas usually follow one another. When you give a prompt, it predicts one piece at a time and builds a full answer. It produces what is likely, not what is guaranteed true.',
        example:
          'If you type "The capital of France is", the model completes it with "Paris" because that pattern is overwhelmingly common. For rare or new facts it may still produce something that sounds right but is wrong.',
      },
      {
        heading: '3. Business Use Cases',
        bullets: [
          'Drafting: emails, reports, job descriptions, proposals.',
          'Summarizing: long documents, meeting notes, research papers.',
          'Analyzing: spotting patterns in feedback or sales data.',
          'Creating: social posts, image concepts, presentation outlines.',
          'Explaining: turning complex topics into plain language.',
        ],
      },
      {
        heading: '4. Choosing the Right Tool',
        bullets: [
          'Need current facts with sources? Use a research tool that cites sources.',
          'Need writing help? Any chat assistant works; compare two.',
          'Working inside Word or Excel? Use the built-in assistant.',
          'Sensitive company data? Check your organization\'s policy before pasting it anywhere.',
        ],
      },
      {
        heading: 'Activity 1: Same Prompt, Three Tools',
        steps: [
          'In small groups, choose one prompt, such as a short product announcement.',
          'Run it in ChatGPT, Claude, and Gemini.',
          'Compare the three on tone, accuracy, clarity, professionalism, detail, and overall impression.',
          'Discuss how the prompt wording shaped each result.',
        ],
        example:
          'All three produce a good announcement, but only one mentions the launch date and only one avoids exaggerated claims. Your conclusion: pick by task, and always check facts yourself.',
      },
    ],
  },
  {
    chapterId: 3,
    title: 'Prompt Engineering Basics',
    objective: 'Write clear prompts using Role, Context, Task, Constraints, and Format.',
    topics: ['Why prompts matter', 'Prompt anatomy', 'Vague vs specific prompts', 'Best practices'],
    activity: 'Rewrite three vague prompts into specific, effective ones.',
    discussion: 'What information did you have to add that the AI could never have guessed?',
    keyTakeaway: 'Better input produces better output. A good prompt gives the AI a role, the situation, the task, the limits, and the format.',
    sections: [
      {
        heading: '1. Why Prompts Matter',
        body:
          'The AI only knows what you tell it. A vague prompt forces it to guess your audience, tone, and goal, so you get a generic answer. A specific prompt removes the guessing.',
        example:
          'Vague: "Write an email." Specific: "Write a 100-word email to a customer whose order is 3 days late. Apologize, give the new delivery date, and offer free shipping on the next order. Tone: warm and professional."',
      },
      {
        heading: '2. Prompt Anatomy: Role, Context, Task, Constraints, Format',
        table: {
          columns: ['Part', 'Question it answers', 'Example'],
          rows: [
            ['Role', 'Who should the AI act as?', 'You are a customer support manager'],
            ['Context', 'What is the situation?', 'An order is 3 days late'],
            ['Task', 'What must it do?', 'Write an apology email'],
            ['Constraints', 'What are the limits?', 'Under 100 words, no excuses'],
            ['Format', 'How should the output look?', 'Subject line plus short paragraphs'],
          ],
        },
      },
      {
        heading: '3. A Prompt Template You Can Reuse',
        prompt:
          'You are a [role]. Situation: [context]. Task: [what to produce]. Constraints: [length, tone, things to avoid]. Format: [how the answer should be laid out].',
        body: 'Fill every bracket in your own words. If you cannot fill one, that is the information you still need to gather.',
      },
      {
        heading: '4. Best Practices',
        bullets: [
          'Be specific about the audience and the goal.',
          'State the length and tone you want.',
          'Give an example of what good looks like when possible.',
          'Ask for one thing at a time for complex tasks.',
          'Never paste confidential data into a public AI tool.',
        ],
      },
      {
        heading: 'Activity 1: Rewrite Vague Prompts',
        steps: [
          'Take the vague prompt "Write an email." Rewrite it with a role, situation, tone, and word limit.',
          'Take the vague prompt "Create a presentation." Rewrite it with topic, audience, slide count, and structure.',
          'Take a third vague prompt of your own and rewrite it using all five parts.',
          'Run the vague and rewritten versions and note the differences.',
        ],
        prompt:
          'You are an HR manager. Situation: a new employee starts Monday. Task: write a welcome email. Constraints: friendly, under 120 words, mention the 10am orientation. Format: subject line plus two short paragraphs.',
        example:
          'The vague version gives a generic welcome. The rewritten one names the orientation time and stays under 120 words, so it is ready to send with only a quick edit.',
      },
    ],
  },
  {
    chapterId: 4,
    title: 'Advanced Prompting',
    objective: 'Use role prompting and iterative refinement to improve AI output step by step.',
    topics: ['Role prompting', 'Iterative refinement', 'Feedback prompts', 'Comparing versions'],
    activity: 'Refine a smartwatch product description through four rounds of feedback.',
    discussion: 'Which round improved the result the most, and why?',
    keyTakeaway: 'The first answer is a draft. Strong results come from giving specific feedback and improving in rounds.',
    sections: [
      {
        heading: '1. Role Prompting',
        body:
          'Telling the AI who to be changes the vocabulary, depth, and perspective of the answer. A "financial advisor" explains risk differently from a "marketing copywriter".',
        example:
          'Without a role: "Explain our price increase." With a role: "You are a customer success manager. Explain our 5% price increase to loyal customers in a reassuring tone."',
      },
      {
        heading: '2. Iterative Refinement',
        body:
          'Do not expect a perfect answer on the first try. Treat the first response as a draft and improve it by giving the AI precise feedback. Each round should change one or two things.',
        steps: [
          'Round 1: ask for a basic version.',
          'Round 2: fix the biggest weakness, such as tone or length.',
          'Round 3: target the audience more specifically.',
          'Round 4: polish wording, add a call-to-action, and check facts.',
        ],
      },
      {
        heading: '3. Writing Good Feedback Prompts',
        table: {
          columns: ['Weak feedback', 'Strong feedback'],
          rows: [
            ['Make it better', 'Shorten it to 60 words and keep the battery claim'],
            ['Change the tone', 'Make it energetic and aimed at professionals aged 25-35'],
            ['Add more detail', 'Add one sentence about sleep tracking and end with a call-to-action'],
          ],
        },
      },
      {
        heading: '4. Compare Versions Before You Decide',
        body:
          'Keep every version. Place them side by side and note what each round improved. Sometimes round 2 is better than round 4 because later rounds over-edited. You are the editor-in-chief.',
      },
      {
        heading: 'Activity 1: Four Rounds on a Product Description',
        steps: [
          'Round 1: prompt "Write a product description for a smartwatch." Record the response.',
          'Round 2: ask for a shorter version with a clearer benefit.',
          'Round 3: refine with "Target young professionals aged 25-35."',
          'Round 4: add a call-to-action and check every claim.',
          'Compare all four versions and note what improved at each step.',
        ],
        example:
          'Round 1 is generic. Round 3 speaks to professionals and mentions meetings and fitness. Round 4 adds "Order today", and you delete a battery claim you cannot verify.',
      },
    ],
  },
  {
    chapterId: 5,
    title: 'AI Ethics & Responsible Use',
    objective: 'Spot hallucinations and use AI responsibly with attention to privacy and bias.',
    topics: ['Hallucinations', 'Verifying AI claims', 'Privacy', 'Bias and fairness'],
    activity: 'Verify three AI statements using reliable sources.',
    discussion: 'What clues made a false statement look believable?',
    keyTakeaway: 'AI can sound confident and still be wrong. Verify important facts, protect private data, and watch for bias.',
    sections: [
      {
        heading: '1. What Is a Hallucination?',
        body:
          'A hallucination is when AI states something false with complete confidence, such as a fake statistic, an invented source, or a made-up law. It happens because the AI predicts likely wording, not verified truth.',
        example:
          'Ask for "three research papers on remote work productivity" and AI may list real-sounding titles and authors that do not exist.',
      },
      {
        heading: '2. Red Flags That a Statement May Be Wrong',
        bullets: [
          'A very precise number with no source.',
          'A citation you cannot find when you search for it.',
          'Absolute words such as always, never, or everyone.',
          'A claim that is too perfect or exactly what you hoped to hear.',
          'Recent events the tool may not know about.',
        ],
      },
      {
        heading: '3. How to Verify',
        steps: [
          'Identify the exact claim to check.',
          'Search an official website, government source, company report, or peer-reviewed study.',
          'Confirm the number, date, and population match.',
          'If you cannot verify it, do not use it.',
        ],
      },
      {
        heading: '4. Privacy and Bias',
        bullets: [
          'Privacy: never paste customer data, passwords, or confidential documents into a public AI tool.',
          'Bias: AI learns from human data, so it can repeat stereotypes in hiring, lending, or marketing.',
          'Fairness: review AI outputs about people with extra care and keep a human decision-maker.',
        ],
        example:
          'An AI trained mostly on past hires from one background may rank similar candidates lower. A person must check results instead of trusting the ranking.',
      },
      {
        heading: 'Activity 1: Spot the Hallucination',
        steps: [
          'Read three AI-generated statements carefully.',
          'Verify each using official sites, government sources, company reports, or research papers.',
          'Mark each statement true, false, or unverifiable.',
          'Record which clues helped you spot the unreliable ones.',
        ],
        example:
          'Statement: "73.4% of Indian startups use AI daily." No source can be found, so mark it unverifiable. The clue was the oddly exact number with no origin.',
      },
    ],
  },
  {
    chapterId: 6,
    title: 'AI Productivity for Managers',
    objective: 'Build a daily AI workflow that saves time without removing human judgment.',
    topics: ['Inbox triage', 'Meeting workflow', 'Status reports', 'Decision support'],
    activity: 'Design a personal AI workflow for your morning inbox, meetings, and weekly report.',
    discussion: 'Which step of your day should AI never do on its own?',
    keyTakeaway: 'Use AI for drafting and sorting. Keep decisions, approvals, and sensitive messages with a human.',
    sections: [
      {
        heading: '1. Triage Your Inbox',
        body:
          'A manager can receive dozens of emails a day. AI can sort them into urgent, needs reply, FYI, and ignore, and draft quick replies for the routine ones.',
        prompt:
          'Sort these emails into Urgent, Needs reply today, FYI, and Can wait. For each Urgent one, give a one-line reason. Do not draft any reply yet.',
      },
      {
        heading: '2. Run a Full Meeting Workflow',
        steps: [
          'Before: ask AI to turn the agenda into 5 sharp discussion questions.',
          'During: take rough notes yourself.',
          'After: ask AI to turn notes into minutes with decisions, owners, and deadlines.',
          'Follow-up: draft the action-item email and review it before sending.',
        ],
      },
      {
        heading: '3. Weekly Status Reports',
        body:
          'Give AI your raw bullet points and ask it to organize them into Progress, Risks, Blockers, and Next Steps. You provide the facts; AI provides the structure.',
        example:
          'Raw bullets: "finished vendor shortlist, budget not approved, design delayed". Structured output: Progress (shortlist done), Blockers (budget approval), Risks (design delay may push launch).',
      },
      {
        heading: '4. Decision Support, Not Decision Making',
        body:
          'AI can list options, risks, and trade-offs, but the manager owns the decision. Always ask "what could go wrong?" and "what information is missing?" before acting.',
        bullets: [
          'Ask AI for pros, cons, and risks of each option.',
          'Check the key numbers against your own data.',
          'Decide yourself, and record why.',
        ],
      },
      {
        heading: 'Activity 1: Build Your Personal AI Workflow',
        steps: [
          'List your three most repeated tasks in a normal week.',
          'For each, decide what AI drafts and what you review.',
          'Write the prompt you would use for each task.',
          'Mark one task AI should never handle alone, and say why.',
        ],
        example:
          'Task: weekly status report. AI drafts structure from bullets; I verify numbers and send. Never alone: performance feedback to a team member, because it needs empathy and context.',
      },
    ],
  },
  {
    chapterId: 7,
    title: 'Business Email Writing',
    objective: 'Write clear, professional emails using the 7-part structure and adjust tone with AI.',
    topics: ['The 7-part email structure', 'Writing the AI prompt', 'Tone adjustment', 'Reviewing firm messages'],
    activity: 'Write one email in formal, friendly, and urgent tones.',
    discussion: 'When does a firm message become too harsh?',
    keyTakeaway: 'A good email prompt includes purpose, audience, tone, and facts. You always read and edit before sending.',
    sections: [
      {
        heading: '1. The 7-Part Business Email',
        table: {
          columns: ['Part', 'What it does', 'Example'],
          rows: [
            ['Subject', 'States the purpose clearly', 'Leave request: 12-14 March'],
            ['Greeting', 'Addresses the reader correctly', 'Dear Ms. Rao,'],
            ['Opening', 'Says why you are writing', 'I am writing to request leave.'],
            ['Details', 'Gives the facts', 'Dates, reason, handover plan'],
            ['Request', 'States what you need', 'Please approve by Friday.'],
            ['Closing', 'Ends politely', 'Thank you for your support.'],
            ['Signature', 'Identifies you', 'Name, role, contact'],
          ],
        },
      },
      {
        heading: '2. Writing an Effective Email Prompt',
        prompt:
          'Write a professional email to my manager requesting leave from 12 to 14 March for a family event. I have handed over my work to a colleague. Tone: polite and concise. Under 120 words. Include a subject line.',
        body: 'Notice it states the audience, the facts, the tone, the length, and the format. The AI has nothing to guess.',
      },
      {
        heading: '3. Tone Transformation',
        body: 'The same message can be rewritten for different situations by changing only the tone.',
        table: {
          columns: ['Tone', 'Example line'],
          rows: [
            ['Formal', 'I would be grateful if you could confirm the revised schedule.'],
            ['Friendly', 'Could you confirm the new schedule when you get a moment?'],
            ['Urgent', 'Please confirm the revised schedule by 3 pm today.'],
          ],
        },
      },
      {
        heading: '4. Firm but Respectful Messages',
        bullets: [
          'State the issue and its impact clearly.',
          'Set a clear expectation and deadline.',
          'Avoid blame, sarcasm, and harsh words.',
          'Offer a way forward.',
        ],
        example:
          'Too harsh: "You failed again to deliver on time." Firm and respectful: "The report was due Monday and is still pending. Please send it by Wednesday noon so we can meet the client deadline."',
      },
      {
        heading: 'Activity 1: One Email, Three Tones',
        steps: [
          'Write a short email asking a colleague to share a file.',
          'Ask AI to rewrite it in formal, friendly, and urgent tones.',
          'Compare the three and choose which suits your reader.',
          'Edit the chosen one so it sounds like you.',
        ],
        example:
          'You choose the friendly version for a teammate and the formal one for a senior client, using the same facts both times.',
      },
    ],
  },
  {
    chapterId: 8,
    title: 'Report Writing & Meeting Minutes',
    objective: 'Turn raw notes and data into accurate meeting minutes, reports, and executive summaries.',
    topics: ['Meeting minutes structure', 'Executive summaries', 'Quarterly report writing', 'Auditing AI output'],
    activity: 'Turn raw meeting notes into minutes and check them against the original.',
    discussion: 'What details did AI add that were never in the notes?',
    keyTakeaway: 'AI can structure and polish. You must check every name, number, date, and decision against the source.',
    sections: [
      {
        heading: '1. Structure of Meeting Minutes',
        bullets: [
          'Header: meeting title, date, attendees.',
          'Agenda items discussed.',
          'Decisions made.',
          'Action items with owner and deadline.',
          'Next meeting date.',
        ],
        example:
          'Action item: "Priya to send revised budget to Finance by 15 March." It names an owner, a task, and a date.',
      },
      {
        heading: '2. Turning Raw Notes into Minutes',
        prompt:
          'Turn these rough meeting notes into formal minutes with Decisions and Action Items (owner and deadline). Use only the information in the notes. If something is unclear, mark it as "unclear" instead of guessing.',
        body: 'The last instruction matters. It stops AI from inventing details to fill gaps.',
      },
      {
        heading: '3. Writing an Executive Summary',
        body:
          'An executive summary lets a busy reader understand a long report in under a minute. It states the main result, the key numbers, the risk, and the recommended action.',
        steps: [
          'Lead with the main finding in one sentence.',
          'Add 2 to 3 key numbers.',
          'State the biggest risk or concern.',
          'End with the recommended action.',
        ],
      },
      {
        heading: '4. Writing and Auditing a Quarterly Sales Report',
        body: 'Give AI the raw sales data and ask for a short report. Then audit it line by line.',
        bullets: [
          'Does every number match the source data?',
          'Did AI invent a cause for the change, such as a campaign or season?',
          'Are comparisons fair (same period, same units)?',
          'Is the recommendation supported by the numbers?',
        ],
      },
      {
        heading: 'Activity 1: Minutes and Audit',
        steps: [
          'Take rough notes from a short class discussion or a sample meeting.',
          'Ask AI to produce formal minutes with decisions and action items.',
          'Compare the minutes with your notes line by line.',
          'List anything AI added, changed, or guessed, and correct it.',
        ],
        example:
          'Notes say "launch maybe April". AI writes "Launch confirmed for 12 April." You correct it to "Launch tentatively April; date to be confirmed", because the notes never confirmed a date.',
      },
    ],
  },
]
