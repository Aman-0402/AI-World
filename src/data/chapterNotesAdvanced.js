export const chapterNotesAdvanced = [
  {
    chapterId: 31,
    title: 'AI in Operations',
    objective: 'Use AI to analyze operational problems such as inventory and supply chain, and to judge its recommendations.',
    topics: ['Operations basics', 'Inventory problems', 'Supply chain risks', 'Questioning AI recommendations'],
    activity: 'Analyze an inventory scenario with AI and list the risks of its recommendation.',
    discussion: 'What information did AI not have that would change its advice?',
    keyTakeaway: 'AI can structure an operational problem and suggest options. You supply the real constraints and own the decision.',
    sections: [
      {
        heading: '1. What Operations Means',
        body:
          'Operations is how a business actually produces and delivers what it sells: buying materials, storing stock, making products, and getting them to customers. Small mistakes here quickly become late deliveries, wasted money, or empty shelves.',
        bullets: [
          'Inventory: how much stock to hold.',
          'Supply chain: the chain from supplier to customer.',
          'Logistics: moving goods efficiently.',
          'Quality: making sure what you deliver is right.',
        ],
      },
      {
        heading: '2. The Two Inventory Mistakes',
        table: {
          columns: ['Problem', 'What happens', 'Cost'],
          rows: [
            ['Understock', 'Product runs out', 'Lost sales and unhappy customers'],
            ['Overstock', 'Too much unsold stock', 'Cash tied up, storage, expiry'],
          ],
        },
        example:
          'A cafe that runs out of milk by 11am loses sales. A cafe that orders far too much fresh milk throws money away. The goal is the right amount at the right time.',
      },
      {
        heading: '3. Giving AI the Full Scenario',
        body:
          'AI cannot see your warehouse. It only knows what you type. The more real numbers and limits you give, the more useful its suggestion.',
        prompt:
          'Our shop sells about 40 units of Product A per week. Supplier lead time is 10 days. We currently hold 30 units and storage space for 120. Recommend how much to reorder and when. List the risks of your recommendation and the assumptions you made.',
      },
      {
        heading: '4. Always Ask for Risks and Assumptions',
        bullets: [
          'What assumptions did the AI make about demand and lead time?',
          'What happens if the supplier is late or demand jumps?',
          'Which number should you double-check yourself?',
        ],
        example:
          'AI recommends reordering 80 units now. It assumed steady demand. If a festival is coming, demand may rise, so you check the calendar before ordering.',
      },
      {
        heading: 'Activity 1: Inventory Scenario',
        steps: [
          'Describe an inventory problem with real numbers: weekly sales, stock on hand, lead time, and storage limit.',
          'Ask AI for a recommended action and the risks of that action.',
          'Recalculate its main suggestion by hand using your own numbers.',
          'Write one real-world fact AI could not know that might change the decision.',
        ],
        example:
          'Weekly sales 40 units, lead time 10 days (about 57 units needed). Stock is 30, so you are short. A reorder of 80 covers lead time plus a buffer. Real-world fact: the supplier is closed for a week.',
      },
    ],
  },
  {
    chapterId: 32,
    title: 'AI Decision Making',
    objective: 'Use AI for scenario planning and risk analysis while keeping decision-making human.',
    topics: ['Decision frameworks', 'Scenario planning', 'Risk analysis', 'Vendor comparison case'],
    activity: 'Compare vendors from raw data with AI and verify its analysis against the data.',
    discussion: 'Why should AI support a decision instead of making it?',
    keyTakeaway: 'Use AI to widen your options and expose risks. The final call, and the accountability, stay with you.',
    sections: [
      {
        heading: '1. Decision Support, Not Decision Making',
        body:
          'AI is good at listing options, comparing them, and pointing out risks. It cannot carry responsibility, and it does not know your company politics, relationships, or real constraints.',
      },
      {
        heading: '2. A Simple Decision Table',
        table: {
          columns: ['Criteria', 'Vendor A', 'Vendor B'],
          rows: [
            ['Price', 'Lower', 'Higher'],
            ['Delivery time', '10 days', '5 days'],
            ['Quality record', 'Average', 'Strong'],
            ['Support', 'Email only', '24/7 phone'],
          ],
        },
        body: 'Decide which criteria matter most before you let AI score anything.',
      },
      {
        heading: '3. Scenario Planning',
        body: 'Scenario planning asks "what if?" for three situations so you are not surprised.',
        bullets: ['Best case: what if things go well?', 'Expected case: what is most likely?', 'Worst case: what if things go badly, and can we survive it?'],
      },
      {
        heading: '4. Risk Analysis Prompt',
        prompt:
          'Using only the vendor data below, compare Vendor A and Vendor B on price, delivery, quality, and support. Recommend one with reasons. List the top 3 risks of your recommendation and what information is missing. Do not use facts that are not in the data. Data: [paste it]',
      },
      {
        heading: '5. Verify Against the Raw Data',
        bullets: [
          'Does every number AI quotes appear in your data?',
          'Did AI assume anything the data does not state?',
          'Did AI weigh criteria the way your business actually would?',
        ],
        example:
          'AI says Vendor B is "30% cheaper". The data shows B is 3% more expensive. A wrong number could have driven a bad contract, which is why you check.',
      },
      {
        heading: 'Activity 1: Vendor Decision Case',
        steps: [
          'Open the vendor comparison data from the task.',
          'Decide which three criteria matter most and why, before using AI.',
          'Ask AI to analyze and recommend using only the data and to list risks.',
          'Check each AI statement against the data and write your own final decision.',
        ],
        example:
          'You rank delivery time first because the business has strict deadlines. AI favoured price. You override with Vendor B and record the reason, which keeps the decision accountable.',
      },
    ],
  },
  {
    chapterId: 33,
    title: 'Microsoft Copilot Advanced Features',
    objective: 'Use Copilot in Office apps to automate recurring tasks and save time responsibly.',
    topics: ['What Copilot does in Office', 'Choosing tasks to automate', 'Good Copilot prompts', 'Measuring time saved'],
    activity: 'Automate one recurring Office task with Copilot and compare time with doing it manually.',
    discussion: 'Which tasks are worth automating and which are risky to hand over?',
    keyTakeaway: 'Automate repetitive, low-risk tasks first, and always review the output before it goes out.',
    sections: [
      {
        heading: '1. Copilot Inside Office',
        table: {
          columns: ['App', 'Typical Copilot help'],
          rows: [
            ['Word', 'Draft, rewrite, summarize a long document'],
            ['Excel', 'Suggest formulas, explain data, create charts'],
            ['PowerPoint', 'Create a deck from a document, tidy slides'],
            ['Outlook', 'Summarize email threads, draft replies'],
            ['Teams', 'Recap a meeting and list action items'],
          ],
        },
      },
      {
        heading: '2. Which Tasks Should You Automate?',
        bullets: [
          'Good first targets: repetitive, rule-based, low-risk tasks like summaries and formatting.',
          'Be careful with: legal wording, confidential data, financial approvals.',
          'Avoid: anything where a small error causes serious harm and no one reviews it.',
        ],
      },
      {
        heading: '3. Writing Better Copilot Prompts',
        prompt:
          'Summarize this document in 5 bullet points for a busy manager. Start with the key decision needed. Keep it under 120 words and flag any numbers I should double-check.',
        body: 'The same prompt rules apply: audience, length, format, and a request to flag uncertainty.',
      },
      {
        heading: '4. Measure the Benefit Honestly',
        body: 'Time the task manually once, then time it with Copilot including your review and corrections.',
        example:
          'Manual weekly status report: 40 minutes. With Copilot: 10 minutes to generate plus 8 minutes to review and fix, so 18 minutes. Saving: about 22 minutes a week. Review time counts.',
      },
      {
        heading: 'Activity 1: Automate One Weekly Task',
        steps: [
          'Pick a recurring task, such as summarizing a long document or drafting a status update from data.',
          'Time how long it takes manually.',
          'Do it with Copilot and time it again, including your review.',
          'List what Copilot got wrong and what you corrected.',
        ],
        example:
          'Copilot summarized a 10-page report quickly but listed a wrong deadline. You fixed it. The time saved was real, but only because you reviewed the output.',
      },
    ],
  },
  {
    chapterId: 34,
    title: 'NotebookLM & Knowledge Management',
    objective: 'Turn your own documents into a searchable, source-grounded knowledge base with NotebookLM.',
    topics: ['What knowledge management is', 'Source-grounded AI', 'Summaries and question lists', 'Checking against the source'],
    activity: 'Upload a business report to NotebookLM, summarize it, and ask three detailed follow-up questions.',
    discussion: 'How is a source-grounded tool different from a general chatbot?',
    keyTakeaway: 'A tool that answers only from your documents is easier to verify. Still check important answers against the original text.',
    sections: [
      {
        heading: '1. What Is Knowledge Management?',
        body:
          'Knowledge management is organizing what a company knows (reports, policies, notes, past projects) so people can find and use it. Without it, the same questions are asked repeatedly and good information gets lost in folders and inboxes.',
      },
      {
        heading: '2. Source-Grounded AI',
        body:
          'A general chatbot answers from everything it was trained on. A source-grounded tool such as NotebookLM answers from the documents you upload and can point to where in the document an answer came from. That makes errors easier to catch.',
        table: {
          columns: ['General chatbot', 'Source-grounded tool'],
          rows: [
            ['Answers from broad training data', 'Answers from your uploaded documents'],
            ['Sources may be unclear', 'Points back to your document'],
            ['Can invent details', 'Less likely to invent, but not immune'],
          ],
        },
      },
      {
        heading: '3. What You Can Do With It',
        bullets: [
          'Summarize a long report in a few lines.',
          'Generate a list of key questions about a document.',
          'Compare several documents on one topic.',
          'Create a briefing from meeting notes and reports.',
        ],
      },
      {
        heading: '4. Ask Specific Follow-Up Questions',
        prompt:
          'According to the uploaded report, what were the three main reasons for the sales decline? Quote the relevant lines and tell me which page or section they come from.',
        body: 'Specific questions with a request for quotes force the tool to show its evidence.',
      },
      {
        heading: 'Activity 1: Report to Insights',
        steps: [
          'Upload a business document or report into NotebookLM.',
          'Generate a summary and a list of key questions.',
          'Ask three follow-up questions about specific details.',
          'Open the original document and verify each answer.',
        ],
        example:
          'The summary says revenue fell 12%. You search the report and find 11.8%. It is close, but you use the exact figure in your own writing.',
      },
    ],
  },
  {
    chapterId: 35,
    title: 'Workflow Automation',
    objective: 'Design simple automated workflows with no-code tools and AI at one step.',
    topics: ['Triggers and actions', 'No-code tools', 'Adding an AI step', 'Human review points'],
    activity: 'Design a simple workflow with an AI step and a human approval point.',
    discussion: 'Where in your workflow should a human always check before something is sent?',
    keyTakeaway: 'Automation is trigger, steps, result. Add AI where it helps, and a human check where mistakes would be costly.',
    sections: [
      {
        heading: '1. Triggers and Actions',
        body:
          'Every automated workflow starts with a trigger (something that happens) and then runs one or more actions. No-code tools such as Zapier or Make let you connect apps without programming.',
        example:
          'Trigger: a new row appears in a Google Sheet of customer enquiries. Action 1: AI drafts a reply. Action 2: the draft is saved for approval.',
      },
      {
        heading: '2. A Simple Workflow Map',
        table: {
          columns: ['Step', 'Type', 'What happens'],
          rows: [
            ['1', 'Trigger', 'New customer enquiry arrives'],
            ['2', 'AI step', 'AI classifies it as sales, support, or spam'],
            ['3', 'Action', 'It is added to the right sheet'],
            ['4', 'Human check', 'A person approves the reply'],
            ['5', 'Action', 'Approved reply is sent'],
          ],
        },
      },
      {
        heading: '3. Where AI Fits',
        bullets: [
          'Classifying: sorting messages, tickets, or invoices.',
          'Drafting: first-draft replies or summaries.',
          'Extracting: pulling names, dates, and amounts from text.',
        ],
      },
      {
        heading: '4. Build In Safety',
        bullets: [
          'Add a human approval step before anything goes to customers.',
          'Log what the automation did so you can audit it.',
          'Start with a small test before turning it on for everyone.',
          'Decide what happens when the AI step fails.',
        ],
      },
      {
        heading: 'Activity 1: Design a Workflow',
        steps: [
          'Pick a repetitive task, such as handling form enquiries or sorting invoices.',
          'Write the trigger, each action, and exactly one AI step.',
          'Mark the human review point and say why it is there.',
          'Describe what could go wrong and how you would notice.',
        ],
        example:
          'Trigger: invoice email arrives. AI step: extract vendor, amount, and due date. Human check: finance confirms the amount before it is logged. Risk: AI misreads an amount, so a person verifies before payment.',
      },
    ],
  },
  {
    chapterId: 36,
    title: 'AI Agents & Business Assistants',
    objective: 'Understand AI agents and design a safe, useful business assistant.',
    topics: ['Chatbot vs agent', 'Designing an assistant', 'Instructions and limits', 'Safety and oversight'],
    activity: 'Design an AI assistant for a business with clear instructions, limits, and escalation rules.',
    discussion: 'What should an AI assistant never do without a human?',
    keyTakeaway: 'A good assistant has a clear job, clear limits, and a way to hand over to a human.',
    sections: [
      {
        heading: '1. Chatbot vs Agent',
        table: {
          columns: ['Chatbot', 'AI agent'],
          rows: [
            ['Answers a question', 'Pursues a goal across several steps'],
            ['Waits for you each time', 'Can plan and use tools by itself'],
            ['Low risk of side effects', 'Higher risk, needs limits'],
          ],
        },
      },
      {
        heading: '2. The Parts of a Business Assistant',
        bullets: [
          'Role: what it is (for example, a support assistant for a cafe).',
          'Knowledge: what information it may use.',
          'Tone: how it speaks to customers.',
          'Limits: what it must not do.',
          'Escalation: when and how it passes to a human.',
        ],
      },
      {
        heading: '3. Writing Assistant Instructions',
        prompt:
          'You are the support assistant for CampusBrew. Answer questions about opening hours, menu, and offers using only the information provided. Be friendly and brief. Never promise refunds, quote prices not in the menu, or share personal data. If you are unsure or the customer is upset, say a team member will follow up and ask for their contact details.',
      },
      {
        heading: '4. Safety and Oversight',
        bullets: [
          'Never give an assistant access it does not need.',
          'Test with tricky questions before launch.',
          'Log conversations and review samples regularly.',
          'Make it easy for the customer to reach a human.',
        ],
        example:
          'A customer asks for a refund. The assistant must not approve it. It should collect details and escalate to a human who has the authority.',
      },
      {
        heading: 'Activity 1: Design Your Assistant',
        steps: [
          'Choose a small business and one job for the assistant.',
          'Write its instructions: role, knowledge, tone, and limits.',
          'List three situations where it must escalate to a human.',
          'Test with five questions, including one it should refuse, and note how it behaves.',
        ],
        example:
          'You ask the cafe assistant "Can I get a discount?" It should not invent one. It replies with the current offers and offers to connect you to the manager.',
      },
    ],
  },
  {
    chapterId: 37,
    title: 'AI for Entrepreneurship',
    objective: 'Use AI to explore and validate a business idea without mistaking AI enthusiasm for market proof.',
    topics: ['Idea generation', 'Business model canvas', 'Validating an idea', 'Where AI is not enough'],
    activity: 'Draft a business model and design a real-world test for a startup idea.',
    discussion: 'Why can AI call every idea promising, and how do you test an idea honestly?',
    keyTakeaway: 'AI can speed up thinking, but only real customers can validate an idea. Plan a cheap test with real people.',
    sections: [
      {
        heading: '1. Idea Generation',
        body:
          'AI is useful for brainstorming problems worth solving and rough solution ideas. Start with a real problem you or others have, not with a product you already like.',
      },
      {
        heading: '2. The Business Model in One Table',
        table: {
          columns: ['Block', 'Question'],
          rows: [
            ['Customer', 'Who exactly is it for?'],
            ['Problem', 'What painful problem do they have?'],
            ['Solution', 'How do you solve it better than today?'],
            ['Revenue', 'How will you make money?'],
            ['Costs', 'What will it cost to run?'],
            ['Channels', 'How will customers find you?'],
          ],
        },
      },
      {
        heading: '3. Validate With Reality, Not With AI',
        body:
          'AI tends to be encouraging. It may say your idea is great because it has no real customers to disappoint. Validation means testing with actual people before spending real money.',
        bullets: [
          'Talk to 5 to 10 target customers about the problem.',
          'Ask what they do today and what they pay for it.',
          'Try a simple pre-order, sign-up page, or pilot.',
          'Measure real behavior, not polite opinions.',
        ],
      },
      {
        heading: '4. Use AI as a Tough Critic',
        prompt:
          'Act as a skeptical investor. Here is my business idea: [describe it]. List the 5 biggest reasons it might fail, the assumptions I am making, and the cheapest real-world test for each assumption. Do not just praise the idea.',
      },
      {
        heading: 'Activity 1: Validate a Startup Idea',
        steps: [
          'Choose a startup idea, such as a food delivery service for college hostels.',
          'Fill in the business model table with AI help.',
          'Run the skeptical-investor prompt and pick the riskiest assumption.',
          'Design one real test with real people and a clear success measure.',
        ],
        example:
          'Riskiest assumption: students will pay a delivery fee. Test: ask 20 hostel students to pre-order a meal with a Rs. 20 fee. If at least 8 order, continue; if fewer than 3, rethink pricing.',
      },
    ],
  },
  {
    chapterId: 38,
    title: 'AI for Consulting',
    objective: 'Structure consulting-style thinking and proposals with AI while keeping facts and judgment human.',
    topics: ['Problem structuring', 'Client presentations', 'Proposal development', 'Staying credible'],
    activity: 'Develop a short consulting proposal and verify every claim in it.',
    discussion: 'What makes a consulting recommendation credible to a client?',
    keyTakeaway: 'Consulting is structured thinking plus evidence. AI helps with structure; you provide the evidence and the judgment.',
    sections: [
      {
        heading: '1. Structure the Problem First',
        body:
          'Consultants break a big problem into smaller parts that do not overlap. A simple version is to split a goal such as "increase profit" into "increase revenue" and "reduce cost", then split those further.',
        example:
          'Increase profit: revenue (more customers, higher order value, new products) and cost (supplier prices, wastage, staffing). You can now ask which branch has the biggest opportunity.',
      },
      {
        heading: '2. A Short Consulting Proposal',
        table: {
          columns: ['Section', 'What it says'],
          rows: [
            ['Client situation', 'The facts you know about the client'],
            ['Objective', 'What success looks like'],
            ['Approach', 'How you will investigate and what you will deliver'],
            ['Timeline', 'Phases and key dates'],
            ['Fees and assumptions', 'Cost and what it depends on'],
          ],
        },
      },
      {
        heading: '3. Prompt for a Proposal Draft',
        prompt:
          'Draft a one-page consulting proposal for a local retailer that wants to raise repeat purchases. Use only these facts: [facts]. Include objective, approach, timeline, and assumptions. Mark any figure you are not sure about instead of inventing it.',
      },
      {
        heading: '4. Staying Credible',
        bullets: [
          'Every number needs a source or a clear "assumption" label.',
          'Recommendations must follow from evidence.',
          'Show the risks and what you do not know.',
          'Rehearse the story so you can defend each slide.',
        ],
      },
      {
        heading: 'Activity 1: Draft and Defend a Proposal',
        steps: [
          'Choose a small business problem and write the facts you know.',
          'Use AI to structure the problem and draft the one-page proposal.',
          'Mark every claim as fact, assumption, or unsupported.',
          'Remove or flag the unsupported claims and present the proposal to a classmate.',
        ],
        example:
          'The draft says "this will increase repeat purchases by 25%". You have no evidence, so you change it to "target: increase repeat purchases; the expected gain will be measured in a pilot".',
      },
    ],
  },
  {
    chapterId: 39,
    title: 'AI for Personal Productivity',
    objective: 'Use AI to plan your time and learn faster without becoming dependent on it.',
    topics: ['Time planning', 'Learning with AI', 'Habits and boundaries', 'Reviewing your plan'],
    activity: 'Build a one-week productivity plan with AI and then adjust it to your real life.',
    discussion: 'Which parts of your plan should be your own decision, not AI\'s?',
    keyTakeaway: 'AI can organize your week and explain topics, but a plan only works if it fits your real energy and commitments.',
    sections: [
      {
        heading: '1. Plan Your Week',
        body:
          'Give AI your real commitments, deadlines, and energy patterns, then ask for a realistic schedule with breaks. Include fixed items first.',
        prompt:
          'Plan my week. Fixed: classes Mon-Fri 9-1, gym Tue and Thu 6pm, assignment due Friday. Goal: study 10 hours and finish the assignment. I focus best in the morning. Build a realistic schedule with breaks and leave some free time.',
      },
      {
        heading: '2. Learn Faster With AI',
        bullets: [
          'Ask it to explain a topic in simple words, then at a deeper level.',
          'Ask it to quiz you and explain your mistakes.',
          'Ask for examples from your own field.',
          'Verify important facts with a trusted source.',
        ],
        example:
          'Instead of "explain inflation", ask "explain inflation with an example from a college cafe, then give me 3 quiz questions".',
      },
      {
        heading: '3. Do Not Outsource Your Thinking',
        body:
          'If you let AI do all the reading, writing, and thinking, you stop building skills. Use it to speed up practice, not to replace it. Try the task yourself first and then use AI to review it.',
      },
      {
        heading: '4. Review and Adjust',
        bullets: [
          'At the end of the week, note what you actually completed.',
          'Ask AI to help you spot why tasks slipped.',
          'Reduce the plan to what is realistic and repeat.',
        ],
      },
      {
        heading: 'Activity 1: One-Week Productivity Plan',
        steps: [
          'List your fixed commitments and goals for the week.',
          'Ask AI for a schedule using the planning prompt.',
          'Adjust it to your real energy and add buffer time.',
          'At week end, compare plan versus reality and write one change for next week.',
        ],
        example:
          'AI schedules study at 9pm, but you are exhausted by then. You move it to 7am and keep the evening free. The plan fits you better than the AI default.',
      },
    ],
  },
  {
    chapterId: 40,
    title: 'Emerging AI Tools & Trends',
    objective: 'Evaluate new AI tools and trends calmly and decide which are worth your time.',
    topics: ['Multimodal AI', 'New tool categories', 'Evaluating a tool', 'Hype vs value'],
    activity: 'Evaluate an emerging AI platform against a simple checklist.',
    discussion: 'How do you tell a genuinely useful tool from a trendy one?',
    keyTakeaway: 'Tools change fast. Skills like clear prompting, verification, and judgment stay valuable. Evaluate tools by the problem they solve.',
    sections: [
      {
        heading: '1. Multimodal AI',
        body:
          'Multimodal AI works with more than one kind of input or output, such as text, images, audio, and video. You can show it a chart and ask a question, or describe an image and have it generate one.',
        example:
          'You upload a photo of a handwritten whiteboard and ask AI to turn it into typed meeting notes with action items.',
      },
      {
        heading: '2. Emerging Tool Categories',
        table: {
          columns: ['Category', 'What it does'],
          rows: [
            ['AI agents', 'Complete multi-step tasks with tools'],
            ['Video and voice tools', 'Create video and speech from text'],
            ['Research assistants', 'Search and summarize with sources'],
            ['Coding assistants', 'Write and explain code'],
            ['Workflow tools', 'Connect apps with AI steps'],
          ],
        },
      },
      {
        heading: '3. A Simple Evaluation Checklist',
        bullets: [
          'What problem does it solve for me?',
          'Is the output accurate enough to rely on?',
          'What does it cost and what data does it collect?',
          'Can I verify what it produces?',
          'Does it save time after I include review?',
        ],
      },
      {
        heading: '4. Hype vs Value',
        body:
          'New launches come with big claims. Try a tool on one real task before committing. If it does not clearly save time or improve quality, move on.',
      },
      {
        heading: 'Activity 1: Evaluate a New Tool',
        steps: [
          'Pick an emerging AI platform you have not used before.',
          'Use it for one real task from your own work or studies.',
          'Score it against the checklist and note accuracy, time saved, and privacy concerns.',
          'Decide: adopt, test further, or skip, and explain why.',
        ],
        example:
          'A new presentation tool builds slides fast but invents statistics. Time saved is real, but fixing the facts takes as long. Decision: use it only for layout, not content.',
      },
    ],
  },
]
