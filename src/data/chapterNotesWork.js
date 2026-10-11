export const chapterNotesWork = [
  {
    chapterId: 9,
    title: 'Proposal Writing & SOP Creation',
    objective: 'Write structured business proposals and clear SOPs with AI, without letting AI invent facts.',
    topics: ['Proposal structure', 'Separating facts from assumptions', 'Writing an SOP', 'Checking for invented detail'],
    activity: 'Build a one-page helpdesk proposal and convert a raw process into an SOP.',
    discussion: 'Why is expanding an outline riskier than summarizing long notes?',
    keyTakeaway: 'When AI expands a short input it fills gaps with plausible inventions. Label assumptions and check every number.',
    sections: [
      {
        heading: '1. The Seven Parts of a Business Proposal',
        table: {
          columns: ['Section', 'Question it answers'],
          rows: [
            ['Problem', 'What is wrong today and why does it matter now?'],
            ['Proposed Solution', 'What will we do and how will it work?'],
            ['Benefits', 'Who gains what?'],
            ['Cost Assumptions', 'What will it cost, and what are we assuming?'],
            ['Implementation Timeline', 'What happens in which week?'],
            ['Risks', 'What could go wrong and how will we handle it?'],
            ['Recommendation', 'What should the decision-maker do next?'],
          ],
        },
      },
      {
        heading: '2. Facts vs Assumptions',
        body:
          'When you ask AI to expand a short outline, it often adds specific numbers, savings percentages, and timelines that you never provided. A confirmed fact came from your source. An assumption is an estimate. A proposal must keep them clearly separate.',
        example:
          'Outline says "AI helpdesk for HR and IT". AI adds "will reduce tickets by 40% and save Rs. 12 lakh a year". Neither figure came from you, so they must be labeled as assumptions or deleted.',
      },
      {
        heading: '3. A Prompt That Prevents Invention',
        prompt:
          'Expand this outline into a one-page business proposal with the sections Problem, Proposed Solution, Benefits, Cost Assumptions, Implementation Timeline, Risks, Recommendation. Use only the information provided. Label every number as an assumption. Do not invent statistics or costs.',
      },
      {
        heading: '4. What Is an SOP?',
        body:
          'A Standard Operating Procedure (SOP) is a step-by-step guide that lets anyone perform a process the same way every time. A good SOP keeps every original step, names who is responsible for each step, and does not add exceptions that nobody confirmed.',
        bullets: [
          'Preserve all steps in the original order.',
          'Assign a responsible role to every step.',
          'Keep suggested exceptions in a separate section marked "verify with team".',
        ],
        example:
          'Original step: "Order is packed." SOP version: "Step 4: Warehouse staff pack the order." Adding "if stock is missing, notify the customer" is a suggestion until the team confirms it.',
      },
      {
        heading: 'Activity 1: Proposal From a Scenario',
        steps: [
          'Take a short scenario, such as an AI-powered employee helpdesk.',
          'Write one prompt that asks for all seven sections and bans invented statistics.',
          'Read the Cost Assumptions and Risks sections and mark anything stated as fact without a source.',
          'Rewrite those lines as clearly labeled assumptions.',
        ],
        example:
          '"Saves 30% of HR time" becomes "Assumption (to be validated): could reduce repetitive HR queries; the actual saving depends on a pilot."',
      },
      {
        heading: 'Activity 2: Convert a Process Into an SOP',
        steps: [
          'Take a simple 7-step process, such as order fulfillment.',
          'Ask AI to turn it into an SOP with a responsible role for each step.',
          'Check that all 7 steps survived with no merging, renaming, or dropping.',
          'List anything AI added, such as payment-failure handling, and decide whether to keep it.',
        ],
        example:
          'AI keeps all 7 steps but adds "handle failed payments". Move that to a "Suggested, verify with team" box because the original process never mentioned it.',
      },
    ],
  },
  {
    chapterId: 10,
    title: 'Resume Writing & LinkedIn Optimization',
    objective: 'Build an honest, targeted resume, LinkedIn profile, and cover letter with AI.',
    topics: ['Specific vs generic resumes', 'Analyzing a job description', 'Profile-to-job comparison', 'Bounded cover letters'],
    activity: 'Analyze a job description, compare it with your profile, and write a bounded cover letter.',
    discussion: 'Where is the line between improving your profile and exaggerating it?',
    keyTakeaway: 'Use AI to communicate your real strengths clearly. Never let it invent experience, skills, or numbers.',
    sections: [
      {
        heading: '1. Clarity Wins Over Adjectives',
        body:
          'Recruiters scan hundreds of resumes in seconds. A resume that lists general traits like "hardworking" and "quick learner" says little. One that names relevant skills and a real project says a lot.',
        table: {
          columns: ['Generic', 'Specific'],
          rows: [
            ['Good communication skills', 'Presented a consumer survey to a class of 40 students'],
            ['Basic computer knowledge', 'Built Excel summaries with formulas and charts'],
            ['Interested in marketing', 'Ran a college Instagram page and tracked reach weekly'],
          ],
        },
      },
      {
        heading: '2. Understand the Job Before You Write',
        body:
          'Do not start with "write my resume". First ask AI to analyze the job description so you know what the employer values.',
        prompt:
          'Analyze the following job description. Identify required technical skills, required soft skills, important keywords, main responsibilities, educational requirements, and the skills that appear most important. Do not invent any information. Job description: [paste it here]',
      },
      {
        heading: '3. Compare Your Profile With the Job',
        body:
          'Give AI your real background and ask it to sort the match into three groups. This gives you an action plan, not just a feel-good yes or no.',
        bullets: [
          'Strong match: skills and experience you can prove.',
          'Partial match: related skills that need better wording.',
          'Skills to develop: genuine gaps you can start learning.',
        ],
      },
      {
        heading: '4. Cover Letters With Boundaries',
        body:
          'AI cover letters sound alike because the prompt is open-ended. Add boundaries: use only the facts you provide, keep a natural tone, stay under a word limit, and never invent achievements.',
        example:
          'Generic AI line: "I am extremely passionate about joining your prestigious organization." Better: "I ran my college marketing club\'s Instagram and grew weekly reach from 300 to 900, which is why this internship interests me."',
      },
      {
        heading: '5. Ten Rules for an Honest Profile',
        bullets: [
          'Never invent experience, companies, or projects.',
          'Never exaggerate skill levels.',
          'Never change real numbers.',
          'Read and verify every sentence AI writes.',
          'Customize your resume for each job.',
          'Only add keywords that are true for you.',
          'Keep your own voice.',
          'Turn weaknesses into learning goals.',
          'AI helps you communicate; it does not create your identity.',
          'You are responsible for everything you submit.',
        ],
      },
      {
        heading: 'Activity 1: Build a Truthful Targeted Bullet',
        steps: [
          'Pick a real job posting and list 5 skills or projects you genuinely have.',
          'Ask AI to turn them into 4 resume bullets targeted at the posting.',
          'Replace any generic phrase with a specific keyword from the posting.',
          'Delete any claim you cannot back up.',
        ],
        example:
          'AI writes "Led a team of 10". You only helped in a team of 4, so correct it to "Contributed to a 4-person survey project". Accuracy beats impressiveness.',
      },
    ],
  },
  {
    chapterId: 11,
    title: 'AI Research & Fact Verification',
    objective: 'Research with AI, trace claims to real sources, and avoid citing something unverified.',
    topics: ['AI is not a source', 'Who, when, where, how many', 'The citation trap', 'The research formula'],
    activity: 'Trace three AI claims to their original sources and cross-check the most important one.',
    discussion: 'A source can be real and still not support the claim. How do you catch that?',
    keyTakeaway: 'AI gives an answer. Research gives evidence. Always find the original source and check it says what AI claims.',
    sections: [
      {
        heading: '1. AI Is Not a Source',
        body:
          'AI can help you find, explain, summarize, and compare information, but it is rarely the original source of a fact. Every statistic came from somewhere: a government report, a company filing, a research organization, or a news article.',
        example:
          'AI says India\'s GDP grew by a certain percent. Your next question is "according to whom?" The authoritative source might be a government statistics office or an international body.',
      },
      {
        heading: '2. Four Questions for Every Claim',
        bullets: [
          'Who said it? A neutral researcher and a company selling the product have different incentives.',
          'When was it measured? An old study may not describe today.',
          'Where? A global survey may not represent India.',
          'How many people? 50 people and 50,000 people are not equally reliable.',
        ],
      },
      {
        heading: '3. The Citation Trap',
        body:
          'AI may give a citation that is real but does not say what AI claims. Verifying that a source exists is not enough. Verify that it supports the exact claim.',
        example:
          'AI: "70% of students use AI for academic research." Source actually says: "70% of surveyed students have experimented with generative AI." Experimenting and using for research are different claims.',
      },
      {
        heading: '4. Different AI Tools, Different Answers',
        body:
          'Ask three tools the same research question and you will get three different emphases, such as logistics, customer acquisition, or competition. That does not mean one is lying. It means you need sources to decide.',
      },
      {
        heading: '5. The Research Formula',
        steps: [
          'Discover with AI.',
          'Find the source.',
          'Trace the claim to its origin.',
          'Verify the number, date, and population.',
          'Cross-check with a second credible source.',
          'Cite it properly.',
          'Write using only what survived verification.',
        ],
      },
      {
        heading: 'Activity 1: Trace and Verify Three Claims',
        steps: [
          'Choose a business topic, such as digital payments in India.',
          'Ask AI for an overview with sources and pick three important claims.',
          'For each claim, find the original source and note claim, source, date, and verified yes or no.',
          'Cross-check your most important claim with a second independent source.',
        ],
        example:
          'Claim 1 traced to an industry report from 2025 and verified. Claim 2 traced to a news article that quotes a different number, so you use the report\'s number. Claim 3 has no findable source, so you leave it out.',
      },
    ],
  },
  {
    chapterId: 12,
    title: 'Competitor Analysis & SWOT',
    objective: 'Build a structured SWOT analysis with AI and fact-check it before using it.',
    topics: ['What a SWOT is', 'Internal vs external factors', 'Asking AI for structure', 'Verifying competitor claims'],
    activity: 'Build a SWOT for a company and a competitor, then verify at least two claims.',
    discussion: 'Which SWOT quadrant did AI handle best, and which needed the most correction?',
    keyTakeaway: 'AI structures competitor thinking quickly, but competitor facts still need source verification.',
    sections: [
      {
        heading: '1. What Is a SWOT?',
        table: {
          columns: ['Quadrant', 'Meaning', 'Where it comes from'],
          rows: [
            ['Strengths', 'What the company does well', 'Inside the company'],
            ['Weaknesses', 'Where it is limited or falls short', 'Inside the company'],
            ['Opportunities', 'Trends it could benefit from', 'Outside the company'],
            ['Threats', 'Outside risks that could hurt it', 'Outside the company'],
          ],
        },
      },
      {
        heading: '2. Internal vs External: The Common Mistake',
        body:
          'Strengths and weaknesses are about the company itself. Opportunities and threats come from the outside world, such as market trends, regulation, new competitors, or changing customer behavior. AI often repeats the same ideas in all four boxes. Push it to separate them.',
        example:
          'Wrong: Opportunity: "we have a great brand." That is a strength. Right: Opportunity: "growing demand for online grocery delivery in small cities."',
      },
      {
        heading: '3. Asking AI for a Useful SWOT',
        prompt:
          'Create a SWOT table comparing [Company A] and [Competitor B] based on public information. Keep strengths and weaknesses internal and opportunities and threats external. Give 3 points each. Mark anything you are unsure about and do not invent figures.',
      },
      {
        heading: '4. Verify Before You Trust',
        body:
          'Competitor claims such as market share, recent launches, or weaknesses may be outdated or invented. Verify at least two specific claims against the company website, an annual report, or a reputable news article.',
        bullets: [
          'Pick the claims that would change a decision if they were wrong.',
          'Check date and source for each.',
          'Replace unverifiable claims with "needs verification".',
        ],
      },
      {
        heading: 'Activity 1: Build and Fact-Check a SWOT',
        steps: [
          'Pick a company and a direct competitor in the same market.',
          'Ask AI for a SWOT comparing them.',
          'Verify two specific claims against real sources.',
          'Note which claims were wrong, outdated, or unfindable, and whether AI sounded confident anyway.',
        ],
        example:
          'AI says Competitor B launched a new app last month. The company site shows the launch was last year. The claim sounded confident but was outdated, so you correct the SWOT.',
      },
    ],
  },
  {
    chapterId: 13,
    title: 'Excel with AI',
    objective: 'Use AI to clean data and build formulas in Excel while verifying every result.',
    topics: ['Data cleaning', 'Describing business problems to AI', 'Verifying formulas', 'Outliers and judgment'],
    activity: 'Clean a dataset, build five formulas, and review outliers with business judgment.',
    discussion: 'Why must you never use a formula you cannot explain?',
    keyTakeaway: 'AI can suggest cleaning steps and formulas, but you decide what is correct and you verify the result by hand.',
    sections: [
      {
        heading: '1. The Golden Rule',
        body:
          'AI can help you spot a problem and suggest a fix. You decide whether the fix is correct. Never delete or change a row only because AI said so.',
      },
      {
        heading: '2. Common Data Problems',
        table: {
          columns: ['Problem', 'Example', 'Excel helper'],
          rows: [
            ['Extra spaces', ' Priya Sharma ', 'TRIM'],
            ['Inconsistent case', 'DELHI, delhi, Delhi', 'PROPER'],
            ['True duplicates', 'Same order entered twice', 'Remove Duplicates'],
            ['Missing values', 'Blank city or phone', 'Filter and review'],
            ['Mixed date formats', '03/04/25 and 3 April 2025', 'Standardize with DATE'],
          ],
        },
      },
      {
        heading: '3. Duplicate or Repeat Customer?',
        body:
          'Before removing duplicates, decide what one row represents. A customer may legitimately appear many times if each row is a different order. Only remove rows that are the same order entered twice.',
        example:
          'Two rows for "Anil Verma" on different dates with different products are repeat purchases. Two identical rows with the same order ID and date are true duplicates.',
      },
      {
        heading: '4. Describe the Business Problem, Not Just the Formula',
        prompt:
          'I want to calculate the revenue for each sale where units sold is in column E and price is in column F. What formula should I use, and what does each part mean?',
        body: 'Then ask AI to explain the formula step by step and check it manually on three rows.',
        table: {
          columns: ['Metric', 'Formula idea'],
          rows: [
            ['Revenue', 'Units Sold x Price'],
            ['Discount Amount', 'Revenue x Discount %'],
            ['Net Revenue', 'Revenue - Discount Amount'],
            ['Total Cost', 'Units Sold x Cost per Unit'],
            ['Profit Margin', '(Net Revenue - Total Cost) / Net Revenue'],
          ],
        },
      },
      {
        heading: '5. Outliers Need Business Judgment',
        body:
          'AI can flag an unusual value. Only you can decide, using business context, whether it is a data-entry error or a real big customer. Define what "best customer" means before you rank anyone.',
        bullets: [
          'A value with an extra digit may be a typing error.',
          'A very large order from a company may be a real bulk buyer.',
          'When unsure, flag it for follow-up rather than deleting it.',
        ],
      },
      {
        heading: 'Activity 1: Clean, Calculate, Verify',
        steps: [
          'Open a messy sales sheet and list every problem you can find.',
          'Fix capitalization and spaces with PROPER and TRIM.',
          'Build Revenue and Net Revenue columns with AI help and explain each formula in your own words.',
          'Calculate three rows by hand and confirm they match.',
        ],
        example:
          'Row 12: 10 units x Rs. 200 = Rs. 2,000 revenue; 10% discount gives Rs. 1,800 net. The formula shows Rs. 1,800, so it is correct.',
      },
    ],
  },
  {
    chapterId: 14,
    title: 'Charts & KPI Dashboards',
    objective: 'Choose meaningful KPIs and charts and build an honest one-page dashboard.',
    topics: ['What a KPI is', 'Choosing the right chart', 'Misleading charts', 'Observation vs hypothesis'],
    activity: 'Pick KPIs, choose charts, and build a one-page dashboard with fact-checked insights.',
    discussion: 'Can a chart be factually correct and still mislead?',
    keyTakeaway: 'Start with the business question, not the chart. Show few KPIs, pick the right visual, and separate what the data shows from what you guess.',
    sections: [
      {
        heading: '1. KPI vs Raw Data',
        body:
          'A KPI (Key Performance Indicator) is a number that summarizes something important about performance. A raw column such as TransactionID does not summarize anything on its own.',
        table: {
          columns: ['Raw data', 'Possible KPI'],
          rows: [
            ['Sales per transaction', 'Total Sales, Average Order Value'],
            ['Cost and Profit columns', 'Total Profit, Profit Margin'],
            ['Date and Sales', 'Month-over-month Growth'],
            ['Product and Sales', 'Top Product'],
          ],
        },
      },
      {
        heading: '2. Choosing the Right Chart',
        table: {
          columns: ['What you want to show', 'Best chart'],
          rows: [
            ['A trend over time', 'Line chart'],
            ['A comparison between categories', 'Bar chart'],
            ['One headline number', 'KPI card'],
            ['A small share of a whole (2-4 parts)', 'Pie chart, used sparingly'],
          ],
        },
        body: 'A pie chart with 15 slices is unreadable. Use a bar chart instead.',
      },
      {
        heading: '3. Charts That Mislead Without Lying',
        bullets: [
          'A truncated axis makes small changes look huge.',
          'Average salary hides a few very high earners; median shows the typical person.',
          'Cherry-picked date ranges hide the bigger picture.',
        ],
        example:
          'If 99 employees earn Rs. 30,000 and one earns Rs. 30,00,000, the average looks high but the median stays near Rs. 30,000. The median describes a typical employee better.',
      },
      {
        heading: '4. Observation vs Hypothesis',
        body:
          'When AI explains your dashboard, separate what the numbers directly show from what AI guessed. Both can appear in the same paragraph.',
        table: {
          columns: ['Type', 'Example'],
          rows: [
            ['Observation', 'Sales grew every month from January to December'],
            ['Hypothesis', 'Growth was caused by the festival campaign (not in the data)'],
          ],
        },
      },
      {
        heading: '5. The Growth-vs-Profit Check',
        body:
          'Sales growth alone is not business growth. Compare Sales, Cost, and Profit each month. If sales rise but profit does not, discounts or costs may be eating the gain.',
      },
      {
        heading: 'Activity 1: Build a One-Page Dashboard',
        steps: [
          'Write 3 questions a manager would ask about the sales data.',
          'Choose 5 to 7 KPIs and the chart type for each before building anything.',
          'Build KPI cards on top, a monthly trend line in the middle, and product and region bars at the bottom.',
          'Ask AI for insights, then mark each as observation or hypothesis and rewrite unsupported claims as questions.',
        ],
        example:
          'AI says "profit fell because of rising ad spend." Your data has no ad spend, so rewrite it as a question: "Did ad spend or discounts reduce profit in September?"',
      },
    ],
  },
  {
    chapterId: 15,
    title: 'PowerPoint with AI',
    objective: 'Turn a business brief into a clear, evidence-based 5-slide story.',
    topics: ['Presentation story structure', 'Message-driven titles', 'Weak vs better prompts', 'The CEO Test'],
    activity: 'Create a 5-slide story from a brief and test it with the CEO Test.',
    discussion: 'What did AI state as fact that the brief never mentioned?',
    keyTakeaway: 'A presentation is a story with a recommendation. Give AI a real brief, then review for invented facts and unsupported advice.',
    sections: [
      {
        heading: '1. The 5-Slide Story',
        steps: [
          'Current situation: what is happening now.',
          'Key business problem: what is not working.',
          'Evidence: the numbers or facts that prove it.',
          'Business insight: what the evidence means.',
          'Recommendation: what to do next.',
        ],
      },
      {
        heading: '2. Message-Driven Titles',
        table: {
          columns: ['Label title', 'Message-driven title'],
          rows: [
            ['Sales Performance', 'Sales Grew 18%, but Profit Grew Only 4%'],
            ['Customer Feedback', 'Delivery Delays Drive Most Complaints'],
            ['Market Overview', 'Students Buy Cheap Drinks and Skip Food'],
          ],
        },
        body: 'A reader should understand your point from the titles alone.',
      },
      {
        heading: '3. Weak Prompt vs Better Prompt',
        body:
          'Asking "Make a PowerPoint about customer satisfaction" gives a generic deck. A better prompt supplies the audience, the decision it supports, real data, and what to focus on.',
        prompt:
          'Create a 5-slide presentation for the cafe owner. Objective: decide how to raise revenue without raising prices. Use this brief: [paste real data]. Focus on: current situation, problem, evidence, insight, recommendation. For each slide give a message-driven title, at most 3 points, and a suggested visual. Do not invent statistics.',
      },
      {
        heading: '4. The CEO Test',
        body: 'Imagine a CEO asks three questions in order. Your deck should answer all three without you talking over it.',
        bullets: ['So what? (why does this matter)', 'Why? (what is the evidence)', 'What do you recommend? (what should we do)'],
      },
      {
        heading: '5. Fact, Hypothesis, Recommendation',
        table: {
          columns: ['Type', 'Meaning'],
          rows: [
            ['Fact', 'Directly supported by your data'],
            ['Hypothesis', 'A possible explanation that still needs testing'],
            ['Recommendation', 'A proposed action based on facts and judgment'],
          ],
        },
        body: 'AI often blurs these three. Keep them clearly apart.',
      },
      {
        heading: 'Activity 1: Brief to 5-Slide Story',
        steps: [
          'Read the coffee shop brief and write what is going well, the real problem, and the opportunity.',
          'Run the 5-slide prompt in an AI tool.',
          'Cut one unnecessary slide, simplify an overloaded one, and rewrite one generic title.',
          'Ask AI "What evidence from the brief supports this recommendation?" and check whether it really holds up.',
        ],
        example:
          'Brief says customers grew 25% but order value stayed flat. AI recommends "launch a loyalty app", which the brief never supports. You reduce it to a safer recommendation: "Test combo offers to lift order value."',
      },
    ],
  },
  {
    chapterId: 16,
    title: 'AI Presentation Enhancement',
    objective: 'Polish a presentation with visual hierarchy, sharper wording, better visuals, and natural speaker notes.',
    topics: ['Visual hierarchy', 'Sharp wording', 'Matching chart to message', 'Speaker notes', 'Final quality check'],
    activity: 'Improve one slide with BIG/MEDIUM/SMALL hierarchy and then run a full-deck check.',
    discussion: 'What is the difference between a functional presentation and a persuasive one?',
    keyTakeaway: 'Make one idea obvious per slide, use sharp specific wording, and speak in your own voice, not AI\'s.',
    sections: [
      {
        heading: '1. Visual Hierarchy: BIG, MEDIUM, SMALL',
        body: 'A slide should have one clear idea. Use size to show importance.',
        table: {
          columns: ['Level', 'Purpose', 'Example'],
          rows: [
            ['BIG', 'The headline finding', '18% Sales Growth'],
            ['MEDIUM', 'The supporting number', 'Sales rose from Rs. 15.7L to Rs. 18.5L'],
            ['SMALL', 'Extra context', 'Growth was highest in the North region'],
          ],
        },
      },
      {
        heading: '2. Sharp, Not Just Short',
        body:
          'Short sentences are not always better. A sharp sentence is short enough to read quickly and specific enough to be accurate.',
        table: {
          columns: ['Boring', 'Sharp'],
          rows: [
            ['There has been a considerable increase in complaints about delivery.', 'Delivery complaints rose 40% in March.'],
            ['Sales were up.', 'Sales grew 18%, but discounting held profit growth to 4%.'],
          ],
        },
      },
      {
        heading: '3. Matching Chart to Message',
        bullets: [
          'Line chart for a trend.',
          'Bar chart for a comparison.',
          'KPI card for one important number.',
          'Flow diagram for a process.',
          'Map only if geography matters.',
        ],
        body: 'Remove icons, gradients, and stock photos that do not help the audience understand.',
      },
      {
        heading: '4. Speaker Notes in Your Own Voice',
        body:
          'AI speaker notes often sound formal and robotic. Use them as a starting point, read them aloud, circle anything you would never say, and rewrite it as if explaining to a classmate. If notes for one slide approach 500 words, the slide is trying to do too much.',
      },
      {
        heading: '5. The Final Quality Check',
        bullets: [
          'Story: does the deck flow from situation to recommendation?',
          'Slides: does each slide earn its place?',
          'Visual hierarchy: is the key point obvious?',
          'Content: is it accurate and consistent?',
          'Visuals: does each one help understanding?',
          'Consistency: fonts, numbers, terms, and tone match.',
          'Speaker notes: natural and not word-for-word.',
          'Delivery: can you present it in the time given?',
          'Business value: would the owner act on it?',
        ],
      },
      {
        heading: 'Activity 1: The One-Slide Test',
        steps: [
          'Pick one slide and ask what the audience should remember in one sentence.',
          'Rewrite it with BIG, MEDIUM, and SMALL levels.',
          'Ask AI to review the slide as a presentation consultant without changing the facts.',
          'Run the Audience Test: show it to a classmate for a few seconds and ask for the main point.',
        ],
        example:
          'Your classmate says the main point is "sales went up". You intended "profit grew far less than sales". Your BIG line did not carry the real message, so you rewrite it.',
      },
    ],
  },
]
