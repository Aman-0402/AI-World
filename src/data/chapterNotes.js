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
]

export function getChapterNoteById(chapterId) {
  return chapterNotes.find((note) => String(note.chapterId) === String(chapterId))
}
