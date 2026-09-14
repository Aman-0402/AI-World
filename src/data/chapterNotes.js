export const chapterNotes = [
  {
    chapterId: 17,
    title: 'Social Media Strategy & Content Calendar',
    objective: 'Build a structured social media strategy.',
    topics: [
      'Platform selection',
      'Content pillars',
      'Content types',
      'Posting frequency',
      'Content calendars',
      'AI content generation',
    ],
    activity: 'Create a one-month content calendar for a sample brand.',
    discussion: 'How can you prevent AI content from becoming repetitive?',
    keyTakeaway: 'AI handles content volume; humans maintain brand consistency.',
    sections: [
      {
        heading: '1. What Social Media Strategy Means',
        body:
          'Social media strategy means planning what a brand should post, where it should post, who it is speaking to, and what result it wants. It is not just posting randomly every day. A good strategy connects business goals with audience needs.',
        bullets: [
          'Goal: what the business wants to achieve, such as awareness, store visits, enquiries, sales, or engagement.',
          'Audience: who the brand wants to reach, such as college students, working professionals, parents, or small business owners.',
          'Platform: where the audience spends time, such as Instagram, LinkedIn, YouTube, Facebook, or WhatsApp.',
          'Content: what the brand will post, such as tips, offers, product posts, stories, reels, or testimonials.',
          'Calendar: when each post will be published.',
        ],
      },
      {
        heading: '2. Platform Selection',
        body:
          'Platform selection means choosing the right social media platform for the right audience. A business does not need to post everywhere. It should focus on the platforms where its target customers are active and where the content format fits the business.',
        bullets: [
          'Instagram works well for visual products, student brands, food, fashion, cafes, gyms, beauty, lifestyle, and short videos.',
          'LinkedIn works well for B2B companies, jobs, internships, professional services, business education, and expert content.',
          'YouTube works well for tutorials, product demos, reviews, long-form education, and storytelling.',
          'Facebook can work for local communities, events, older audiences, groups, and regional promotions.',
          'WhatsApp works well for direct updates, local offers, customer follow-up, and small business communication.',
        ],
        example:
          'Example: A college cafe should focus more on Instagram and WhatsApp because students respond well to visual posts, stories, reels, and quick offers. A software company selling to HR managers should focus more on LinkedIn because the audience is professional.',
      },
      {
        heading: '3. Content Pillars',
        body:
          'Content pillars are the main categories of content a brand posts again and again. They help the brand avoid confusion and repetition. Instead of asking AI to "give posts", the brand first decides what types of content it wants.',
        bullets: [
          'Product pillar: posts about products, features, new arrivals, menu items, or services.',
          'Education pillar: tips, how-to content, explainers, facts, and useful information.',
          'Community pillar: customer stories, student moments, staff highlights, events, or local culture.',
          'Promotion pillar: discounts, offers, limited-time deals, launches, and announcements.',
          'Behind-the-scenes pillar: process, making-of content, workplace culture, preparation, packaging, or daily operations.',
        ],
        example:
          'Example for CampusBrew cafe: Product posts show coffee and snacks. Education posts explain coffee types. Community posts show students studying or relaxing. Promotion posts announce combos. Behind-the-scenes posts show how a drink is prepared.',
      },
      {
        heading: '4. Content Types',
        body:
          'Content type means the format of the post. The same content pillar can become different content types. This makes the page more interesting because every post does not look the same.',
        bullets: [
          'Image post: best for simple announcements, offers, product photos, and quotes.',
          'Carousel: best for tips, step-by-step explanations, comparisons, and educational posts.',
          'Reel or short video: best for quick demonstrations, trends, behind-the-scenes content, and storytelling.',
          'Story: best for polls, quick updates, countdowns, daily offers, and informal communication.',
          'Testimonial: best for customer feedback, trust building, and social proof.',
          'Live or event post: best for launches, workshops, campus activities, and special sessions.',
        ],
      },
      {
        heading: '5. Posting Frequency',
        body:
          'Posting frequency means how often the brand posts. The goal is to stay visible without posting low-quality content. More posts are not always better. Consistency is more important than volume.',
        bullets: [
          'Beginner level: 3 posts per week and 2-3 stories per week.',
          'Moderate level: 4-5 posts per week and regular stories.',
          'High activity level: daily stories, 4-6 posts per week, and 2-3 reels per week.',
          'Do not post just to fill the calendar. Every post should have a purpose.',
        ],
        example:
          'Example: A small cafe can post Monday product highlight, Wednesday student tip, Friday weekend offer, and use stories for quick daily updates.',
      },
      {
        heading: '6. Content Calendar',
        body:
          'A content calendar is a planned table that shows what will be posted on which date. It keeps the brand organized. It also helps the team check whether the content is balanced or repetitive.',
        bullets: [
          'Date: when the post will go live.',
          'Platform: where it will be posted.',
          'Content pillar: product, education, community, promotion, or behind-the-scenes.',
          'Format: reel, image, carousel, story, or video.',
          'Topic: what the post is about.',
          'Caption idea: the written message.',
          'CTA: what the audience should do next, such as visit, save, comment, share, DM, or sign up.',
        ],
      },
      {
        heading: '7. AI Content Generation',
        body:
          'AI can help generate many content ideas quickly, but students must guide it properly. If the prompt is vague, AI often gives repeated, generic, or unrealistic content. A good prompt gives the brand, audience, objective, pillars, platform, and rules.',
        prompt:
          'Create a one-month Instagram content calendar for CampusBrew, a college coffee shop. Target audience: college students aged 18-24. Objectives: increase store visits, brand awareness, and student engagement. Content pillars: Products, Student lifestyle, Coffee education, Community, and Promotions. For each content idea, provide Date, Content pillar, Format, Topic, Caption idea, and CTA. Use varied formats. Do not repeat topics. Do not make every post promotional. Avoid unsupported claims and generic motivational captions.',
      },
      {
        heading: '8. How to Prevent Repetitive AI Content',
        body:
          'AI becomes repetitive when the prompt is too broad or when the user asks for too many ideas without clear rules. To prevent repetition, give AI strong boundaries and then review the output yourself.',
        bullets: [
          'Ask AI not to repeat topics, hooks, CTAs, or formats.',
          'Give content pillars so every post has a different purpose.',
          'Ask for a mix of education, promotion, community, product, and behind-the-scenes content.',
          'Remove generic phrases such as "Do not miss out", "Level up", "Best ever", and "Perfect for everyone".',
          'Check if two posts are actually the same idea written in different words.',
          'Ask AI to explain why each post fits the audience and objective.',
        ],
        prompt:
          'Review this content calendar. Find repeated ideas, repeated hooks, repeated CTAs, too many promotional posts, generic captions, and unsupported claims. Suggest specific improvements, but do not invent new facts about the brand.',
      },
      {
        heading: '9. Sample One-Month Content Calendar',
        body:
          'This is a simple example for a college cafe. Students can use the same structure for any brand.',
        table: {
          columns: ['Week', 'Pillar', 'Format', 'Topic', 'CTA'],
          rows: [
            ['Week 1', 'Product', 'Image post', 'New cold coffee flavor', 'Visit today'],
            ['Week 1', 'Community', 'Story poll', 'Which snack should return?', 'Vote in poll'],
            ['Week 2', 'Education', 'Carousel', 'How to choose coffee before class', 'Save this post'],
            ['Week 2', 'Promotion', 'Story', 'Student combo offer', 'Show college ID'],
            ['Week 3', 'Behind-the-scenes', 'Reel', 'Making the most ordered drink', 'Comment your favorite'],
            ['Week 3', 'Community', 'Image post', 'Student study corner feature', 'Tag a friend'],
            ['Week 4', 'Product', 'Carousel', 'Top 3 snacks for group study', 'Share with your group'],
            ['Week 4', 'Promotion', 'Image post', 'Weekend group offer', 'Visit this weekend'],
          ],
        },
      },
      {
        heading: '10. Final Checklist for Students',
        body:
          'Before submitting the activity, check whether your strategy is clear and usable.',
        bullets: [
          'I selected platforms based on audience, not popularity only.',
          'I created 4-5 clear content pillars.',
          'I used different content formats, not only image posts.',
          'My posting frequency is realistic for the brand.',
          'My one-month calendar has dates, topics, formats, captions, and CTAs.',
          'I checked AI output for repetition and unsupported claims.',
          'My final calendar still sounds like the brand, not like generic AI content.',
        ],
      },
    ],
  },
  {
    chapterId: 18,
    title: 'Customer Personas & Buyer Journey',
    objective: 'Create customer personas and buyer journey maps.',
    topics: [
      'Customer personas',
      'Demographics',
      'Pain points',
      'Goals',
      'Customer segmentation',
      'Buyer journey',
      'Touchpoints',
    ],
    activity: 'Create 2 customer personas and a buyer journey map.',
    discussion: 'What real customer data should support an AI-generated persona?',
    keyTakeaway: 'Good personas are based on evidence, not AI assumptions.',
    sections: [
      {
        heading: '1. What a Customer Persona Means',
        body:
          'A customer persona is a simple profile of a type of customer. It helps a business understand who the customer is, what they need, what problem they face, and why they may buy a product. A persona is not one real person. It is a useful picture of a customer group.',
        bullets: [
          'Name: a simple fictional name to make the persona easy to remember.',
          'Age and life stage: student, working professional, parent, business owner, or another group.',
          'Needs: what the customer is looking for.',
          'Pain points: problems, frustrations, or difficulties the customer faces.',
          'Goals: what the customer wants to achieve.',
          'Buying behavior: how the customer searches, compares, decides, and buys.',
        ],
        example:
          'Example: For a college cafe, one persona can be Riya, a 20-year-old student who wants affordable snacks, fast service, and a quiet place to sit between classes.',
      },
      {
        heading: '2. Demographics',
        body:
          'Demographics are basic facts about customers. They help the business understand the customer group clearly. Demographics should be realistic and connected to the product.',
        bullets: [
          'Age group, such as 18-24 or 25-35.',
          'Gender, only if it matters for the product or campaign.',
          'Location, such as college campus, city area, residential society, or business district.',
          'Occupation, such as student, employee, entrepreneur, parent, or freelancer.',
          'Income or spending level, such as low budget, moderate budget, or premium buyer.',
          'Education level, if it affects how the customer understands or chooses the product.',
        ],
        example:
          'Example: A budget food brand near a college should not create a premium corporate persona unless that audience is actually likely to buy from it.',
      },
      {
        heading: '3. Pain Points',
        body:
          'Pain points are the problems customers want solved. Strong marketing usually starts from pain points because people pay attention when a message connects to their real problem.',
        bullets: [
          'Functional pain point: a practical problem, such as slow delivery, high price, confusing app, or limited options.',
          'Emotional pain point: a feeling, such as stress, fear of missing out, embarrassment, boredom, or lack of confidence.',
          'Financial pain point: concern about price, value for money, discounts, or wasted spending.',
          'Time pain point: not enough time, long waiting, difficult process, or too many steps.',
        ],
        example:
          'Example: A student may not only want coffee. The real pain point may be needing a quick, affordable drink before the next class.',
      },
      {
        heading: '4. Goals',
        body:
          'Goals are what the customer wants to achieve. Goals are different from pain points. A pain point is the problem. A goal is the desired result after the problem is solved.',
        bullets: [
          'A student may want to save money and still enjoy time with friends.',
          'A working professional may want to look polished without spending too much time.',
          'A parent may want a safe, reliable, and simple solution.',
          'A business owner may want more customers, less manual work, or better sales.',
        ],
        example:
          'Example: Pain point: the student has very little time between classes. Goal: get food quickly and reach class on time.',
      },
      {
        heading: '5. Customer Segmentation',
        body:
          'Customer segmentation means dividing customers into smaller groups based on common needs or behavior. One business can have many customer segments, and each segment may need a different message.',
        bullets: [
          'Demographic segmentation: age, occupation, income, location, or education.',
          'Behavioral segmentation: how often they buy, what they buy, when they buy, and how they use the product.',
          'Need-based segmentation: budget buyers, convenience seekers, premium buyers, or quality-focused buyers.',
          'Lifestyle segmentation: fitness-focused, career-focused, family-focused, social, or trend-conscious customers.',
        ],
        example:
          'Example: A gym can have student beginners, working professionals, and serious fitness users. All three may use the same gym, but their reasons for joining are different.',
      },
      {
        heading: '6. Buyer Journey',
        body:
          'The buyer journey is the path a customer follows before and after buying. It helps the business understand what the customer needs at each stage.',
        bullets: [
          'Awareness: the customer first notices the problem or discovers the brand.',
          'Consideration: the customer compares options and checks whether the product fits their need.',
          'Decision: the customer chooses whether to buy or not.',
          'Post-purchase: the customer uses the product and decides whether to return, recommend, or complain.',
        ],
      },
      {
        heading: '7. Touchpoints',
        body:
          'Touchpoints are the places where the customer interacts with the brand. A touchpoint can happen before purchase, during purchase, or after purchase.',
        bullets: [
          'Social media post, reel, story, or ad.',
          'Website, landing page, Google search result, or online review.',
          'Store visit, phone call, WhatsApp message, or sales conversation.',
          'Packaging, bill, delivery message, customer support, or follow-up message.',
          'Friend recommendation, influencer post, or campus event.',
        ],
        example:
          'Example: For a cafe, touchpoints can include an Instagram reel, a poster near campus, a WhatsApp offer, the menu board, the payment counter, and a feedback message after purchase.',
      },
      {
        heading: '8. Using AI to Create Personas',
        body:
          'AI can help create personas quickly, but it should not be allowed to invent everything freely. Students must give the AI clear information and then check whether the persona sounds realistic.',
        prompt:
          'Create 2 realistic customer personas for [product/service]. Target location is [city/campus/area]. The business goal is [goal]. For each persona, include name, age range, occupation, budget level, goals, pain points, buying behavior, preferred platforms, and what message would attract them. Use simple language. Do not make generic statements. Mark any assumption clearly as an assumption.',
      },
      {
        heading: '9. Real Customer Data That Should Support a Persona',
        body:
          'A good persona should be supported by evidence. AI can make a draft, but real business decisions should use real customer data wherever possible.',
        bullets: [
          'Customer surveys: what customers say they need, like, dislike, or expect.',
          'Sales data: what products sell most, when people buy, and which offers work.',
          'Website or social media analytics: age group, location, engagement, clicks, saves, and comments.',
          'Customer reviews: common compliments, complaints, questions, and objections.',
          'Customer support messages: repeated problems customers ask about.',
          'Observation: what staff notice in-store or during customer conversations.',
          'Competitor reviews: what people praise or complain about in similar products.',
        ],
        prompt:
          'Review this customer persona. Tell me which parts are supported by the information I provided and which parts are assumptions. Create a table with columns: Persona detail, Evidence provided, Assumption, How to verify. Do not invent evidence.',
      },
      {
        heading: '10. Sample Buyer Journey Map',
        body:
          'This example shows how one student-customer persona may move from first noticing a cafe to becoming a repeat customer.',
        table: {
          columns: ['Stage', 'Customer Thought', 'Touchpoint', 'Business Action'],
          rows: [
            ['Awareness', 'I need a quick snack before class.', 'Instagram story or campus poster', 'Show a simple combo offer with price.'],
            ['Consideration', 'Is it affordable and nearby?', 'Menu board, Google listing, friend recommendation', 'Show price, distance, and popular items clearly.'],
            ['Decision', 'Can I get it fast?', 'Store counter or WhatsApp order', 'Make ordering quick and highlight fast service.'],
            ['Post-purchase', 'Was it worth buying again?', 'Feedback message or loyalty card', 'Ask for feedback and offer a repeat-visit benefit.'],
          ],
        },
      },
      {
        heading: '11. Activity Guide',
        body:
          'For the class activity, create two customer personas for the same brand. Then create one buyer journey map for each persona or one combined journey map showing where they are different.',
        bullets: [
          'Step 1: Choose one sample brand, such as a cafe, gym, clothing store, study app, salon, or delivery service.',
          'Step 2: Write what you already know about the likely customers before opening AI.',
          'Step 3: Use AI to create 2 personas, but ask it to mark assumptions clearly.',
          'Step 4: Build a buyer journey map with awareness, consideration, decision, and post-purchase stages.',
          'Step 5: Add at least one touchpoint and one business action for every stage.',
          'Step 6: Review the personas and remove anything that sounds fake, too broad, or unsupported.',
        ],
      },
      {
        heading: '12. Final Checklist for Students',
        body:
          'Before submitting, use this checklist to make sure your personas and journey map are useful.',
        bullets: [
          'I created 2 different personas, not two copies with different names.',
          'Each persona has demographics, goals, pain points, and buying behavior.',
          'I wrote which details are evidence and which are assumptions.',
          'My buyer journey has awareness, consideration, decision, and post-purchase stages.',
          'Each journey stage has at least one touchpoint.',
          'The marketing message matches the customer pain point.',
          'I did not accept AI assumptions without checking them.',
        ],
      },
    ],
  },
  {
    chapterId: 19,
    title: 'A/B Ad Copy & CTA Generation',
    objective: 'Generate and evaluate advertising variations.',
    topics: [
      'Headlines',
      'Ad copy',
      'CTA design',
      'A/B testing',
      'Conversion metrics',
      'AI copy generation',
    ],
    activity: 'Generate 5 headline + CTA combinations.',
    discussion: 'Which metric should determine the winning variation?',
    keyTakeaway: 'AI generates variations; real-world testing determines winners.',
    sections: [
      {
        heading: '1. What Ad Copy Means',
        body:
          'Ad copy is the written text used in an advertisement. It can include the headline, body text, offer, benefit, and call-to-action. Good ad copy is short, clear, and focused on what the customer cares about.',
        bullets: [
          'Headline: the first line people notice.',
          'Body copy: the short explanation below the headline.',
          'Benefit: what the customer gets.',
          'Offer: the deal, feature, or reason to act now.',
          'CTA: the action you want the customer to take.',
        ],
        example:
          'Example: For a gym, weak ad copy says "Join our gym today." Better ad copy says "Start your fitness routine with flexible student plans. Book a free trial this week."',
      },
      {
        heading: '2. Headlines',
        body:
          'A headline is the most important line in an ad because it decides whether the audience will stop and read more. A headline should be clear before it tries to be clever.',
        bullets: [
          'Problem headline: shows the customer problem, such as "No time for a full workout?"',
          'Benefit headline: shows the result, such as "Get fit with 30-minute training sessions."',
          'Curiosity headline: creates interest, such as "The easiest way students build a fitness habit."',
          'Offer headline: shows the deal, such as "Student fitness plans from Rs. 999/month."',
          'Urgency headline: gives a time reason, such as "Free trial available this week only."',
        ],
        example:
          'Example: A headline for a cafe can be "Quick coffee between classes" because it connects directly to a student situation.',
      },
      {
        heading: '3. Ad Copy',
        body:
          'Ad copy explains the headline in one or two short lines. It should not try to say everything. It should give enough information for the customer to understand the benefit and next step.',
        bullets: [
          'Keep sentences short.',
          'Use simple words customers naturally understand.',
          'Focus on one main benefit.',
          'Avoid exaggerated claims like "best in the city" unless there is proof.',
          'Match the copy to the audience and platform.',
        ],
        example:
          'Example: "Grab a cold coffee and sandwich combo before your next lecture. Fast service, student-friendly price, and campus-side pickup."',
      },
      {
        heading: '4. CTA Design',
        body:
          'CTA means Call-To-Action. It tells the audience what to do next. A strong CTA is clear, specific, and matched to the stage of the customer journey.',
        bullets: [
          'Awareness CTA: Learn more, See the menu, Watch the demo, Follow for tips.',
          'Engagement CTA: Comment your choice, Vote in the poll, Save this post, Tag a friend.',
          'Lead CTA: Book a free trial, Send us a DM, Download the guide, Register now.',
          'Purchase CTA: Order now, Visit today, Claim the offer, Buy before Sunday.',
          'Retention CTA: Visit again, Share feedback, Join the loyalty list, Refer a friend.',
        ],
        example:
          'Example: "Buy now" may be too strong for a customer who just discovered the brand. "See the menu" may work better at the awareness stage.',
      },
      {
        heading: '5. A/B Testing',
        body:
          'A/B testing means comparing two versions of an ad to see which one performs better. Version A and Version B should usually change only one major thing, such as the headline or CTA. If everything changes at once, it becomes hard to know what caused the result.',
        bullets: [
          'Test one difference at a time when possible.',
          'Show both versions to similar audience groups.',
          'Use the same platform and time period if possible.',
          'Decide the winning metric before the test starts.',
          'Do not choose the winner only because you personally like it.',
        ],
        example:
          'Example: Version A uses "Quick coffee between classes" and Version B uses "Student combo from Rs. 99." If Version B gets more store visits, the offer-focused headline may be stronger for that audience.',
      },
      {
        heading: '6. Conversion Metrics',
        body:
          'A conversion metric is the number used to judge whether an ad worked. The best metric depends on the campaign goal. Likes are not always the best metric.',
        bullets: [
          'Awareness goal: reach, impressions, video views, or profile visits.',
          'Engagement goal: comments, shares, saves, poll votes, or direct messages.',
          'Lead generation goal: form fills, registrations, calls, or enquiries.',
          'Sales goal: purchases, orders, coupon use, store visits, or revenue.',
          'Retention goal: repeat purchases, loyalty sign-ups, reviews, or referrals.',
        ],
        example:
          'Example: If the goal is store visits, the winning ad should not be chosen only by likes. It should be judged by visits, coupon redemptions, or messages asking for location/menu.',
      },
      {
        heading: '7. Using AI to Generate Ad Variations',
        body:
          'AI is useful for quickly generating many headline and CTA options. But students must give AI the product, audience, benefit, tone, and campaign goal. Without those details, AI will produce generic ad lines.',
        prompt:
          'Generate 5 ad variations for [product/service]. Target audience: [audience]. Campaign goal: [awareness/engagement/leads/sales]. Main benefit: [benefit]. Tone: simple, clear, and business-friendly. For each variation, provide Headline, 1-line ad copy, CTA, intended customer journey stage, and why it may work. Do not make unsupported claims or fake statistics.',
      },
      {
        heading: '8. How to Evaluate AI Ad Copy',
        body:
          'AI may create many options, but not every option is good. Students should check whether the ad is clear, believable, specific, and matched to the audience.',
        bullets: [
          'Is the headline easy to understand in 2-3 seconds?',
          'Does the copy explain one clear benefit?',
          'Is the CTA specific and suitable for the campaign goal?',
          'Does the ad avoid fake proof, fake numbers, and exaggerated claims?',
          'Would the target audience actually care about this message?',
          'Is this variation different from the other variations, or just rewritten?',
        ],
        prompt:
          'Review these 5 ad variations. Score each one from 1 to 5 for clarity, audience fit, CTA strength, uniqueness, and risk of unsupported claims. Then recommend which 2 should be tested first and explain why. Do not choose based only on creativity.',
      },
      {
        heading: '9. Sample A/B Ad Copy Table',
        body:
          'This sample table shows how students can compare headline and CTA combinations before choosing what to test.',
        table: {
          columns: ['Version', 'Headline', 'CTA', 'Best Metric', 'Why Test It'],
          rows: [
            ['A', 'Quick coffee between classes', 'See today\'s menu', 'Profile visits', 'Tests whether convenience attracts students.'],
            ['B', 'Student combo from Rs. 99', 'Claim the combo', 'Coupon use', 'Tests whether price offer drives action.'],
            ['C', 'Your study break just got better', 'Tag your study group', 'Comments/tags', 'Tests whether social positioning creates engagement.'],
            ['D', 'Cold coffee ready in minutes', 'Visit before class', 'Store visits', 'Tests whether speed matters most.'],
            ['E', 'Need a campus-side snack?', 'DM for the menu', 'Direct messages', 'Tests whether direct enquiry is easier than visiting first.'],
          ],
        },
      },
      {
        heading: '10. Which Metric Should Decide the Winner?',
        body:
          'The winning metric should match the campaign objective. If the objective is sales, likes should not decide the winner. If the objective is awareness, purchases may not be the first metric to judge.',
        bullets: [
          'For awareness, choose reach, impressions, or profile visits.',
          'For engagement, choose comments, shares, saves, or poll responses.',
          'For enquiries, choose direct messages, calls, or form submissions.',
          'For sales, choose purchases, store visits, coupon redemptions, or revenue.',
          'For repeat customers, choose repeat visits, loyalty sign-ups, or referrals.',
        ],
        example:
          'Example: If a cafe wants more students to visit this week, coupon use or store visits should matter more than likes.',
      },
      {
        heading: '11. Activity Guide',
        body:
          'For the class activity, students must generate 5 headline + CTA combinations and decide which one should be tested first.',
        bullets: [
          'Step 1: Choose one product or service.',
          'Step 2: Write the target audience and campaign goal.',
          'Step 3: Use AI to generate 5 headline + CTA combinations.',
          'Step 4: Put all 5 variations in a table.',
          'Step 5: Choose the best metric for each variation.',
          'Step 6: Select the top 2 variations for A/B testing and explain why.',
          'Step 7: Remove or rewrite any copy that sounds exaggerated, repetitive, or unsupported.',
        ],
      },
      {
        heading: '12. Final Checklist for Students',
        body:
          'Before submitting, check that your ad copy is testable and realistic.',
        bullets: [
          'I created 5 different headline + CTA combinations.',
          'Each variation targets the same audience and campaign goal.',
          'Each variation has a clear CTA.',
          'I selected a metric that matches the campaign objective.',
          'I did not choose a winner based only on personal preference.',
          'I removed fake numbers, unsupported claims, and over-promising language.',
          'I explained which variation should be tested first and why.',
        ],
      },
    ],
  },
  {
    chapterId: 20,
    title: 'AI Marketing Campaign Planning',
    objective: 'Create an end-to-end AI-assisted marketing campaign.',
    topics: [
      'Campaign objectives',
      'Target audience',
      'Messaging pillars',
      'Content strategy',
      'Channel selection',
      'Campaign timeline',
      'Brand voice',
    ],
    activity: 'Create a complete campaign brief for a sample product launch.',
    discussion: 'How should brand guidelines control AI-generated content?',
    keyTakeaway: 'AI can build campaign components, but humans must maintain strategic coherence.',
    sections: [
      {
        heading: '1. What a Marketing Campaign Means',
        body:
          'A marketing campaign is a planned set of messages and activities designed to achieve one clear business goal. A campaign can promote a product launch, sale, event, service, app, course, or brand awareness activity. It is not one random post. It is a connected plan.',
        bullets: [
          'A campaign has one main objective.',
          'It speaks to a defined target audience.',
          'It uses clear messaging pillars.',
          'It chooses channels that match the audience.',
          'It follows a timeline.',
          'It keeps the same brand voice across every message.',
        ],
        example:
          'Example: A new cafe launching near a college may run a two-week campaign to introduce its student combo offer through Instagram reels, stories, posters, and WhatsApp messages.',
      },
      {
        heading: '2. Campaign Objectives',
        body:
          'A campaign objective explains what the business wants to achieve. Without a clear objective, AI may create a campaign that looks creative but does not support the business goal.',
        bullets: [
          'Awareness objective: make more people know about the brand or product.',
          'Engagement objective: make people comment, share, save, vote, or reply.',
          'Lead objective: collect enquiries, sign-ups, calls, or registrations.',
          'Sales objective: increase purchases, store visits, orders, or revenue.',
          'Retention objective: bring existing customers back again.',
        ],
        example:
          'Example: "Get more likes" is weak. "Increase student visits during lunch hours for the new combo offer" is much clearer.',
      },
      {
        heading: '3. Target Audience',
        body:
          'The target audience is the group of people the campaign is made for. A campaign should not speak to everyone. It should speak clearly to the people most likely to care.',
        bullets: [
          'Who are they? Students, parents, professionals, business owners, or another group.',
          'Where are they? Campus, city area, office district, online community, or local market.',
          'What do they need? Convenience, low price, quality, status, speed, trust, or support.',
          'What problem do they have? High cost, lack of time, confusion, poor options, or low trust.',
          'What action should they take after seeing the campaign?',
        ],
        example:
          'Example: A student audience may care about price, speed, and social hangout space. A corporate audience may care more about quality, reliability, and professionalism.',
      },
      {
        heading: '4. Messaging Pillars',
        body:
          'Messaging pillars are the main ideas the campaign repeats in different ways. They keep the campaign focused. Each pillar should connect to a customer need or product benefit.',
        bullets: [
          'Value pillar: why the product is worth buying.',
          'Convenience pillar: how the product saves time or effort.',
          'Trust pillar: why the customer can believe the brand.',
          'Lifestyle pillar: how the product fits the customer\'s daily life.',
          'Offer pillar: what deal, launch benefit, or special reason exists now.',
        ],
        example:
          'Example for a study app launch: Learn faster, Track progress, Study anywhere, Prepare with confidence, Start free this week.',
      },
      {
        heading: '5. Content Strategy',
        body:
          'Content strategy explains what type of content will be posted during the campaign and why. It connects campaign objectives with practical content ideas.',
        bullets: [
          'Educational content explains a problem or teaches something useful.',
          'Product content shows features, benefits, use cases, or demonstrations.',
          'Social proof content shows reviews, testimonials, user stories, or results.',
          'Promotional content explains offers, deadlines, discounts, or launch benefits.',
          'Engagement content asks questions, runs polls, invites comments, or encourages sharing.',
        ],
        example:
          'Example: For a product launch, the first posts can build awareness, the middle posts can explain benefits, and the final posts can push the launch offer.',
      },
      {
        heading: '6. Channel Selection',
        body:
          'Channel selection means choosing where the campaign will appear. The right channel depends on the audience, content type, budget, and campaign objective.',
        bullets: [
          'Instagram: useful for visual products, reels, stories, student audiences, food, fashion, beauty, fitness, and lifestyle.',
          'LinkedIn: useful for professional services, B2B products, hiring, training, consulting, and business audiences.',
          'YouTube: useful for product demos, tutorials, storytelling, reviews, and long explanations.',
          'WhatsApp: useful for local offers, customer follow-up, small business updates, and direct communication.',
          'Email: useful for detailed updates, launch announcements, reminders, and existing customer lists.',
          'Offline channels: posters, flyers, events, store displays, and campus promotion.',
        ],
        example:
          'Example: A local food campaign may use Instagram, WhatsApp, and campus posters. A software launch for HR managers may use LinkedIn, email, and webinars.',
      },
      {
        heading: '7. Campaign Timeline',
        body:
          'A campaign timeline shows what happens before, during, and after the launch. It prevents last-minute random posting and makes the campaign easier to manage.',
        bullets: [
          'Pre-launch: create curiosity, introduce the problem, tease the product, and collect interest.',
          'Launch: announce the product, explain the offer, show key benefits, and guide people to act.',
          'Post-launch: share feedback, answer questions, remind people, and encourage repeat action.',
          'Review: check metrics and learn what worked or failed.',
        ],
        example:
          'Example: Week 1 can tease the launch. Week 2 can announce the product. Week 3 can show benefits and testimonials. Week 4 can push the final offer and review results.',
      },
      {
        heading: '8. Brand Voice',
        body:
          'Brand voice is the way a brand sounds in writing. It controls the words, tone, style, and personality of the campaign. AI should follow the brand voice so the campaign does not sound different in every post.',
        bullets: [
          'Friendly voice: simple, warm, conversational.',
          'Professional voice: clear, formal, reliable.',
          'Youthful voice: energetic, casual, relatable.',
          'Premium voice: polished, calm, confident.',
          'Helpful voice: educational, patient, supportive.',
        ],
        example:
          'Example: A college cafe can sound friendly and youthful. A financial consultancy should sound professional and trustworthy.',
      },
      {
        heading: '9. How Brand Guidelines Should Control AI Content',
        body:
          'Brand guidelines should give AI clear limits. Without guidelines, AI may use words, claims, visuals, and tone that do not fit the brand.',
        bullets: [
          'Tell AI the brand tone: friendly, premium, professional, youthful, or helpful.',
          'Give banned words or phrases the brand should not use.',
          'Give preferred words or phrases the brand uses often.',
          'Give visual rules such as colors, fonts, logo placement, and image style.',
          'Give claim rules such as no fake statistics, no "best" claims, and no exaggeration.',
          'Ask AI to explain how each piece of content matches the brand guidelines.',
        ],
        prompt:
          'Use these brand guidelines to rewrite the campaign content. Brand tone: [tone]. Audience: [audience]. Preferred words: [words]. Avoid these words/claims: [list]. Keep the message simple and consistent. Do not invent statistics, awards, customer numbers, or guarantees.',
      },
      {
        heading: '10. Using AI to Build a Campaign Brief',
        body:
          'A campaign brief is a document that explains the full campaign plan. AI can help create the first draft, but students must check whether all parts work together.',
        prompt:
          'Create a complete marketing campaign brief for a sample product launch. Product: [product]. Target audience: [audience]. Campaign objective: [objective]. Brand voice: [tone]. Timeline: [number of weeks]. Budget level: [low/medium/high]. Include campaign objective, audience profile, customer pain points, messaging pillars, content strategy, channel selection, campaign timeline, sample posts, CTAs, success metrics, and possible risks. Use simple language. Do not invent unsupported claims.',
      },
      {
        heading: '11. Sample Campaign Brief',
        body:
          'This sample shows how a simple launch campaign can be organized.',
        table: {
          columns: ['Part', 'Example'],
          rows: [
            ['Product', 'CampusBrew student combo meal'],
            ['Objective', 'Increase student visits during lunch hours for the first month.'],
            ['Audience', 'College students aged 18-24 near campus.'],
            ['Pain Point', 'Students want quick, affordable food between classes.'],
            ['Messaging Pillars', 'Affordable, quick, tasty, campus-friendly.'],
            ['Channels', 'Instagram reels, Instagram stories, WhatsApp, campus posters.'],
            ['Timeline', '1 week teaser, 1 week launch, 2 weeks reminders and offers.'],
            ['CTA', 'Visit today, show college ID, DM for menu.'],
            ['Metric', 'Store visits, combo sales, story replies, coupon use.'],
          ],
        },
      },
      {
        heading: '12. Campaign Risk Check',
        body:
          'Before using an AI-generated campaign, check the plan for weak thinking. A campaign can look complete but still fail if the pieces do not connect.',
        bullets: [
          'Does the campaign objective match the content?',
          'Does the channel match the audience?',
          'Does the message solve a real customer problem?',
          'Does the CTA tell people exactly what to do?',
          'Are the success metrics connected to the objective?',
          'Are there any unsupported claims or fake statistics?',
          'Does every post sound like the same brand?',
        ],
        prompt:
          'Review this campaign brief for strategic coherence. Check whether the objective, audience, message, channels, timeline, CTAs, and metrics fit together. Identify weak assumptions, unsupported claims, repeated ideas, and anything that does not match the brand voice. Suggest improvements in simple language.',
      },
      {
        heading: '13. Activity Guide',
        body:
          'For the class activity, create a complete campaign brief for a sample product launch.',
        bullets: [
          'Step 1: Choose a sample product launch.',
          'Step 2: Define the campaign objective clearly.',
          'Step 3: Write the target audience and their main pain point.',
          'Step 4: Create 3-5 messaging pillars.',
          'Step 5: Choose the best channels for the audience.',
          'Step 6: Build a simple campaign timeline.',
          'Step 7: Use AI to draft the campaign brief.',
          'Step 8: Review the AI output for brand voice, consistency, and unsupported claims.',
        ],
      },
      {
        heading: '14. Final Checklist for Students',
        body:
          'Before submitting, make sure your campaign brief is complete and connected.',
        bullets: [
          'My campaign has one clear objective.',
          'My target audience is specific.',
          'My messaging pillars match customer needs.',
          'My channels match where the audience spends time.',
          'My timeline has pre-launch, launch, and post-launch activity.',
          'My brand voice is clear and consistent.',
          'My metrics match the campaign objective.',
          'I removed unsupported claims, fake numbers, and repeated generic content.',
        ],
      },
    ],
  },
]

export function getChapterNoteById(chapterId) {
  return chapterNotes.find((note) => String(note.chapterId) === String(chapterId))
}
