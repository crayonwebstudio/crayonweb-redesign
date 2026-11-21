export interface RequirementGroup {
  heading: string;
  items: string[];
}

export interface Role {
  slug: string;
  title: string;
  summary: string;
  vacancies: string;
  type: string;
  location: string;
  experience: string;
  hours: string;
  days: string;
  salary: string;
  about: string[];
  requirements: RequirementGroup[];
}

export const roles: Role[] = [
  {
    slug: 'ui-ux-designer',
    title: 'UI/UX Designer',
    summary:
      'Crayonweb is seeking a creative UI/UX Designer to craft intuitive, visually engaging digital experiences. Collaborate with developers and creatives to design websites, apps, and digital products that delight users and drive results.',
    vacancies: '03',
    type: 'Full Time (On Site)',
    location: 'Bhavnagar, Gujarat',
    experience: '1+ Years',
    hours: '10 AM to 07 PM',
    days: 'Weekly 6 days (Mon to Sat)',
    salary: 'As Per Eligibility',
    about: [
      'Crayonweb is seeking a talented and passionate UI/UX Designer to join our innovative digital agency. As part of our creative team, you will be responsible for designing visually compelling and user-friendly digital experiences across websites, mobile applications, and web platforms. You will collaborate closely with web developers, creative artists, TYPO3 specialists, and mobile app experts to ensure a seamless, intuitive experience for our users.',
      'In this role, you will translate business requirements and user needs into wireframes, prototypes, and high-fidelity designs, ensuring that every interface is functional, aesthetically appealing, and optimized for engagement. You will conduct user research, usability testing, and collaborate with stakeholders to iterate on designs that enhance usability and drive meaningful results.',
      'At Crayonweb, we value creativity, collaboration, and innovation. You will have the opportunity to work on a diverse range of projects, from corporate websites and mobile applications to custom digital solutions, while continuously developing your skills and exploring new design trends. Our inclusive and supportive work culture ensures your ideas are heard, your contributions recognized, and your professional growth nurtured.',
      'We are looking for someone who is detail-oriented, creative, and passionate about crafting exceptional user experiences. Strong skills in UI/UX design tools, wireframing, prototyping, and responsive design are essential. Knowledge of TYPO3 or other CMS platforms is a plus.',
    ],
    requirements: [
      {
        heading: 'Technical and Design Skills',
        items: [
          'Proficiency in design and prototyping tools (Figma, Adobe XD, Sketch, InVision)',
          'Strong understanding of user-centered design principles',
          'Wireframing, mockups, and high-fidelity UI design',
          'Responsive and mobile-first design',
          'Familiarity with HTML, CSS, and basic front-end concepts',
          'Knowledge of TYPO3 or other CMS platforms (optional but a plus)',
        ],
      },
      {
        heading: 'Analytical and Research Skills',
        items: [
          'Conducting user research and usability testing',
          'Analyzing user behavior and translating insights into design improvements',
          'A/B testing and data-driven design decisions',
        ],
      },
      {
        heading: 'Soft Skills',
        items: [
          'Strong communication and collaboration with cross-functional teams',
          'Problem-solving and creative thinking',
          'Attention to detail and design consistency',
          'Time management and ability to handle multiple projects',
        ],
      },
    ],
  },
  {
    slug: 'business-development-executive',
    title: 'Business Development Executive',
    summary:
      'Crayonweb is looking for a proactive Business Development Executive to drive growth, build client relationships, and identify new business opportunities. Join our team and help expand our digital solutions to new markets.',
    vacancies: '01',
    type: 'Full Time (On Site)',
    location: 'Bhavnagar, Gujarat',
    experience: '1+ Years',
    hours: '10 AM to 07 PM',
    days: 'Weekly 6 days (Mon to Sat)',
    salary: 'As Per Eligibility',
    about: [
      'Crayonweb is seeking a driven and enthusiastic Business Development Executive to join our growing IT team. In this role, you will be at the forefront of building client relationships, identifying new business opportunities, and promoting our digital solutions across industries. You will collaborate closely with our technical experts, marketing strategists, and project managers to craft tailored solutions that deliver measurable value to clients.',
      'As a Business Development Executive, you will engage in market research, lead generation, and client interactions, turning prospects into long-term partnerships. Your responsibilities will include presenting proposals, negotiating contracts, and contributing to revenue growth. With strong communication and interpersonal skills, you will play a key role in expanding Crayonweb’s presence and helping businesses embrace digital transformation.',
      'At Crayonweb, we believe in innovation, collaboration, and professional growth. This role gives you the opportunity to work on diverse projects, explore new markets, and develop your expertise in IT solutions. Our supportive culture values initiative and fresh ideas, ensuring your efforts are recognized while you grow with us.',
    ],
    requirements: [
      {
        heading: 'Business and Communication Skills',
        items: [
          'Strong verbal and written communication skills with the ability to present ideas clearly',
          'Proven ability in lead generation, client acquisition, and relationship management',
          'Excellent negotiation and persuasion skills to close deals effectively',
          'Ability to understand client needs and translate them into tailored IT solutions',
        ],
      },
      {
        heading: 'Analytical and Strategic Skills',
        items: [
          'Market research and competitor analysis to identify growth opportunities',
          'Strong business acumen and goal-oriented approach',
          'Ability to prepare proposals, business presentations, and sales reports',
          'Data-driven mindset to evaluate performance and optimize strategies',
        ],
      },
      {
        heading: 'Preferred Experience (a plus)',
        items: [
          'Experience in IT services, SaaS, or digital solutions sales',
          'Familiarity with CRM tools (HubSpot, Zoho, Salesforce, etc.)',
          'Knowledge of web, mobile, and enterprise technologies to align solutions with client needs',
        ],
      },
    ],
  },
  {
    slug: 'seo-executive',
    title: 'SEO Executive',
    summary:
      'Crayonweb is seeking an SEO Executive to optimize websites, improve search rankings, and drive organic traffic. Join our team to implement strategies that enhance online visibility and boost business growth.',
    vacancies: '01',
    type: 'Full Time (On Site)',
    location: 'Bhavnagar, Gujarat',
    experience: '1+ Years',
    hours: '10 AM to 07 PM',
    days: 'Weekly 6 days (Mon to Sat)',
    salary: 'As Per Eligibility',
    about: [
      'Crayonweb is seeking a skilled and motivated SEO Executive to join our digital team. In this role, you will be responsible for optimizing websites, improving search engine rankings, and driving organic traffic that delivers measurable business results. You will work closely with our content creators, developers, and marketing specialists to implement SEO strategies that align with client objectives and industry best practices.',
      'As an SEO Executive, you will conduct keyword research, on-page and off-page optimization, technical SEO audits, and performance tracking. You will stay updated with the latest search engine algorithms, trends, and tools to ensure our projects remain competitive and visible in search results. Your role will be crucial in enhancing user experience, increasing online visibility, and maximizing ROI for our clients.',
      'At Crayonweb, we value innovation, collaboration, and growth. This position offers the opportunity to work on diverse projects across multiple industries, experiment with new SEO techniques, and sharpen your expertise in digital marketing. Our supportive work environment ensures your ideas are valued, your efforts recognized, and your career path nurtured.',
    ],
    requirements: [
      {
        heading: 'Technical and SEO Skills',
        items: [
          'Strong knowledge of on-page and off-page SEO techniques',
          'Proficiency with SEO tools such as Google Analytics, Google Search Console, SEMrush, Ahrefs, or Moz',
          'Experience in keyword research, content optimization, and link-building strategies',
          'Understanding of technical SEO: site structure, page speed, crawlability, and mobile optimization',
          'Familiarity with CMS platforms (WordPress, TYPO3, or similar)',
        ],
      },
      {
        heading: 'Analytical and Reporting Skills',
        items: [
          'Ability to track, analyze, and report SEO performance metrics',
          'Competence in conducting competitor analysis and market research',
          'Data-driven mindset to optimize strategies and improve ROI',
          'Knowledge of SEO trends, search engine algorithm updates, and best practices',
        ],
      },
      {
        heading: 'Preferred Experience (a plus)',
        items: [
          'Experience in local SEO, eCommerce SEO, or international SEO campaigns',
          'Basic understanding of HTML, CSS, and website structure',
          'Strong communication skills to coordinate with content creators and development teams',
        ],
      },
      {
        heading: 'Soft Skills',
        items: [
          'Analytical thinking: ability to interpret data and make informed decisions',
          'Attention to detail: ensuring all on-page elements, keywords, and SEO tasks are precise',
          'Communication skills: clearly explaining SEO strategies and collaborating with content and development teams',
          'Problem-solving: identifying SEO issues and finding creative, effective solutions',
          'Time management: handling multiple projects and meeting deadlines efficiently',
          'Adaptability: staying updated with changing search engine algorithms and trends',
          'Teamwork: collaborating with marketing, content, and web development teams',
          'Creativity: suggesting innovative strategies to improve organic visibility',
        ],
      },
    ],
  },
  {
    slug: 'front-end-developer',
    title: 'Front-End Developer',
    summary:
      'Crayonweb is seeking a talented Front-End Developer to build responsive, visually engaging websites and web applications. Collaborate with designers and developers to create seamless user experiences across all devices.',
    vacancies: '03',
    type: 'Full Time (On Site)',
    location: 'Bhavnagar, Gujarat',
    experience: '1+ Years',
    hours: '10 AM to 07 PM',
    days: 'Weekly 6 days (Mon to Sat)',
    salary: 'As Per Eligibility',
    about: [
      'Crayonweb is looking for a talented and passionate Front-End Developer to join our innovative digital team. In this role, you will be responsible for developing responsive, user-friendly web interfaces and translating design concepts into high-quality code. You will work closely with UI/UX designers, back-end developers, and project managers to create engaging digital experiences that meet client objectives.',
      'As a Front-End Developer, you will implement modern web technologies such as HTML, CSS, JavaScript, and popular frameworks like React or Next.js. You will optimize applications for speed, accessibility, and performance, ensuring seamless functionality across devices and browsers. Collaboration with the team will be key as you contribute to planning, coding, testing, and delivering projects that exceed client expectations.',
      'At Crayonweb, we value innovation, creativity, and continuous learning. This role provides the opportunity to work on diverse projects, explore cutting-edge technologies, and enhance your development skills. Our inclusive and supportive work environment encourages your ideas, recognizes your contributions, and nurtures your professional growth.',
    ],
    requirements: [
      {
        heading: 'Technical Skills',
        items: [
          'Proficiency in HTML, CSS, and JavaScript, with strong understanding of web standards and best practices',
          'Experience with front-end frameworks/libraries such as React, Next.js, or Vue.js',
          'Knowledge of responsive and mobile-first design principles',
          'Familiarity with version control systems (e.g. Git) and package managers (npm, Yarn)',
          'Understanding of cross-browser compatibility, accessibility, and performance optimization',
          'Experience with API integration and basic understanding of back-end concepts',
        ],
      },
      {
        heading: 'Preferred Experience (a plus)',
        items: [
          'Familiarity with UI/UX principles and design tools (Figma, Adobe XD, Sketch)',
          'Experience with CSS preprocessors like Sass or LESS',
          'Understanding of SEO best practices for front-end development',
          'Knowledge of testing frameworks and code optimization techniques',
        ],
      },
      {
        heading: 'Soft Skills',
        items: [
          'Problem-solving: ability to troubleshoot issues and find efficient solutions',
          'Communication skills: clearly convey technical concepts to designers, developers, and non-technical stakeholders',
          'Attention to detail: ensure pixel-perfect implementation and maintain high-quality code standards',
          'Teamwork and collaboration: work effectively with designers, developers, and project managers',
          'Adaptability: learn and adopt new technologies and frameworks as needed',
          'Time management: handle multiple tasks and meet project deadlines efficiently',
        ],
      },
    ],
  },
];
