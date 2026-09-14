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
]

export function getChapterNoteById(chapterId) {
  return chapterNotes.find((note) => String(note.chapterId) === String(chapterId))
}
