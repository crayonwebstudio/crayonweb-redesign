export interface ServiceSection {
  heading: string;
  paragraphs: string[];
}

export interface ServiceDetail {
  heading: string;
  text: string;
}

export interface Service {
  slug: string;
  title: string;
  short: string;
  intro: string;
  deliverables?: string[];
  sections: ServiceSection[];
  detailList?: ServiceDetail[];
  benefits?: string[];
  whyUs?: string[];
  tags?: string[];
  faqs?: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: 'web-design',
    title: 'Web Design',
    short:
      'User-centric web design that drives engagement and conversions. We craft beautiful, mobile-friendly websites with exceptional UX.',
    intro:
      'At Crayonweb, we specialize in professional web design services that help your business stand out in the digital landscape. Our approach focuses on creating visually compelling, user-friendly websites tailored to your brand identity and business goals. Whether you are launching a new site or revamping an existing one, our experienced designers prioritize both form and function.',
    deliverables: [
      'Custom Website Design',
      'Responsive Design',
      'Website Redesign and Refresh',
      'UI/UX Design',
      'CMS Integration',
      'SEO Integration',
    ],
    sections: [
      {
        heading: 'Responsive and mobile-friendly design',
        paragraphs: [
          'With the majority of users browsing on mobile devices, responsive design is no longer optional. We build websites that automatically adapt to different screen sizes, providing a seamless and enjoyable user experience on smartphones, tablets, and desktops alike. This ensures your audience always interacts with your content in the best possible way.',
        ],
      },
      {
        heading: 'User-centric web design',
        paragraphs: [
          'Effective web design starts with understanding your users. We apply UX/UI best practices to create clear navigation paths and intuitive layouts that engage visitors and guide them towards desired actions. Our designs simplify the user journey, resulting in higher satisfaction and improved conversion rates.',
        ],
      },
      {
        heading: 'Custom visual design aligned with your brand',
        paragraphs: [
          'Every business is unique, and your website should be, too. Our design team collaborates closely with you to craft a custom look and feel that authentically represents your brand. From color schemes to typography and interactive elements, every detail is thoughtfully designed to leave a lasting impression.',
        ],
      },
      {
        heading: 'Latest web design trends and best practices',
        paragraphs: [
          'Staying ahead means incorporating modern design trends balanced with timeless usability principles. We implement SEO-friendly structures, fast-loading pages, and accessibility features to ensure your website reaches and resonates with the widest audience possible. Partner with Crayonweb for web design services that combine creativity, technology, and strategy to create digital experiences that captivate, convert, and grow your business.',
        ],
      },
    ],
    tags: ['UX/UI Design Services', 'Web Content Accessibility', 'Latest Web Design Trends'],
    faqs: [
      {
        q: 'What makes a well-structured website layout?',
        a: 'A well-structured website layout balances visual appeal with functionality, guiding visitors smoothly through your content. It uses clear navigation, consistent branding, and responsive design to create an engaging user experience that supports your business goals.',
      },
      {
        q: 'Why partner with a business agency for web design?',
        a: 'Partnering with a business agency ensures expert strategic guidance, consistent brand messaging, and access to a full team of specialists who collaborate to build and elevate your brand effectively across all channels. An agency offers a diverse team with broad expertise, proven processes, and robust resources, enabling comprehensive solutions and faster delivery compared to individual freelancers who may have limited capacity.',
      },
      {
        q: 'How much does branding cost?',
        a: 'Branding costs vary based on project scope and complexity. We offer tailored packages to fit your needs and budget, contact us for a personalized quote and consultation.',
      },
    ],
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    short:
      'We specialize in delivering innovative web solutions tailored to your business needs.',
    intro:
      'At Crayonweb, we deliver comprehensive web development services designed to bring your digital vision to life. Our expert team builds custom websites and web applications that are visually engaging, functionally robust, and scalable to grow with your business.',
    deliverables: [
      'Custom Web Development',
      'Responsive Design',
      'E-Commerce Development',
      'Website Maintenance',
      'Custom Web Application',
    ],
    sections: [
      {
        heading: 'Our Web Design and Development Services',
        paragraphs: [
          'Our front-end development focuses on creating responsive, interactive interfaces using the latest technologies such as HTML, CSS, JavaScript, React, Angular, and Vue.js. We ensure your website looks great and performs flawlessly across all devices.',
          'On the back-end, we develop secure and efficient server-side solutions that handle business logic, database interactions, and application workflows. Using frameworks like Laravel, PHP, Node.js, and Java, we deliver scalable web architectures tailored to your unique requirements.',
          'We offer full-stack development services that seamlessly integrate front-end and back-end systems for high performance and maintainability. Our expertise extends to e-commerce website development, building custom online stores with smooth user experiences and secure payment integrations.',
          'Crayonweb also provides CMS development solutions that empower your team to manage content effortlessly, alongside ongoing website maintenance to keep your site updated, secure, and running optimally.',
          'Security and performance are our priorities; we implement best practices to protect your website from cyber threats while ensuring fast loading times and reliable operation. Partner with Crayonweb for professional web development services that combine innovation, quality, and strategic insight to elevate your online presence.',
        ],
      },
    ],
    benefits: [
      'Increase online visibility and brand credibility',
      'Improve user engagement and customer retention',
      'Drive more leads and conversions',
      'Stay ahead with the latest web technologies',
      'Secure and scalable solutions for future growth',
    ],
  },
  {
    slug: 'branding-and-identity',
    title: 'Branding And Identity',
    short:
      'Make your brand memorable. We create logos, brand identities, and visuals that reflect your vision and resonate with your audience.',
    intro:
      'Branding and identity services are at the heart of every project. A strong brand goes beyond a simple logo. It is about creating a unique story, visual language, and experience that connects with your audience and sets your business apart.',
    deliverables: [
      'Brand Strategy',
      'Logo Design',
      'Brand Messaging',
      'Visual Identity',
      'Brand Guidelines',
      'Rebranding',
    ],
    sections: [
      {
        heading: 'What Is Branding and Identity?',
        paragraphs: [
          'Branding defines how your business is perceived. The identity brings this vision to life through cohesive visual elements, messaging, and tone. Together, they establish trust, foster recognition, and build an emotional connection with customers.',
        ],
      },
      {
        heading: 'Our Comprehensive Process',
        paragraphs: [
          'Discovery and Brand Strategy: We start with in-depth research into your business, industry, and goals. Strategic brand positioning ensures your identity aligns with your vision and target market.',
          'Logo Design and Visual Elements: Our creative team crafts distinctive logos and selects color palettes, typography, and graphic elements to communicate your brand personality.',
          'Messaging and Voice: We help define your brand tone and key messages, ensuring consistency across digital and print channels.',
          'Brand Guidelines: You will receive a complete guide covering visuals, language, and usage to maintain brand consistency wherever your business is represented.',
        ],
      },
    ],
    benefits: [
      'Stand out and be instantly recognizable in your industry',
      'Build credibility and foster loyalty among your customers',
      'Achieve consistency across all marketing platforms',
    ],
    tags: [
      'branding',
      'brand identity',
      'visual identity',
      'logo design',
      'brand strategy',
      'business branding',
      'brand guidelines',
      'creative services',
      'rebranding',
      'professional branding',
      'messaging',
      'brand consistency',
      'company identity',
      'marketing',
      'graphic design',
    ],
  },
  {
    slug: 'smart-growth-marketing',
    title: 'Smart Growth Marketing',
    short:
      'Boost your online visibility. Improve rankings, attract traffic, and grow your brand with targeted SEO and digital marketing campaigns.',
    intro:
      'We offer comprehensive SEO and Digital Marketing services designed to maximize your online presence and accelerate business growth. Our team combines the technical expertise of SEO with creative and targeted digital marketing strategies to attract, engage, and convert your ideal customers.',
    deliverables: [
      'Custom SEO Strategy',
      'On-Page SEO',
      'Off-Page SEO',
      'Technical SEO',
      'Local SEO Services',
      'E-commerce SEO',
      'Content Writing',
      'SEO Audits',
      'App Store SEO',
    ],
    sections: [
      {
        heading: 'How it works',
        paragraphs: [
          'Our SEO services start with thorough keyword research and competitive analysis, followed by meticulous on-page optimization and technical improvements. We build authoritative backlinks and enhance your local search profile to improve rankings and visibility across search engines.',
          'Complementing SEO, our digital marketing solutions include expertly managed PPC campaigns that deliver immediate traffic, compelling social media marketing to foster brand engagement, and tailored content marketing that educates and influences your audience. We also design email marketing campaigns aimed at nurturing leads and driving repeat business.',
          'By integrating SEO and digital marketing efforts, we offer a holistic strategy that leverages multiple channels for maximum reach and performance. We continually monitor campaign data to optimize for the best ROI, and provide transparent reporting so you stay informed about progress and results. Partner with Crayonweb Studio to benefit from a partner who understands the full digital marketing ecosystem and is committed to your success with customized, measurable strategies.',
        ],
      },
    ],
    whyUs: [
      'Experienced Industry Experts',
      'Customized Strategies',
      'Integrated Approach',
      'Transparent Reporting',
      'Proven Track Record',
      'Customer-Centric Support',
    ],
    tags: [
      'SEO services',
      'search engine optimization',
      'on-page SEO',
      'off-page SEO',
      'technical SEO',
      'keyword research',
      'link building',
      'local SEO',
      'SEO audit',
      'SEO strategy',
      'content optimization',
    ],
  },
  {
    slug: 'media-creation-services',
    title: 'Media Creation Services',
    short:
      'Professional product photography and expert video editing to create high-quality visuals that showcase your brand at its best.',
    intro:
      'Our Creative Visual Production services help brands captivate their audiences with stunning, professional-quality visual content. From initial concept development and storyboarding to the final cut, we deliver comprehensive video production, motion graphics, and animation services designed to tell your story effectively.',
    deliverables: [
      'Brand Profile Videos',
      'Educational Videos',
      'Corporate Video Production',
      'Motion Graphics',
      'Post-Production Editing',
      'Product Demonstration Videos',
      'Social Media Video',
      'Training and Tutorial',
    ],
    sections: [
      {
        heading: 'More than aesthetics',
        paragraphs: [
          'Our team specializes in producing dynamic videos, engaging animations, and polished post-production edits that align with your marketing goals and brand identity. Whether it is corporate videos, marketing campaigns, educational content, or event coverage, we ensure your visuals make a lasting impression.',
          'We understand that creative visual content is more than just aesthetics. It is about building emotional connections and driving viewer action. Our creative process is collaborative and tailored to your needs, guaranteeing you receive compelling media assets that boost brand awareness, increase engagement, and support business growth.',
        ],
      },
      {
        heading: 'Commercial and advertising videos',
        paragraphs: [
          'Commercial and advertising videos are professionally crafted visual content aimed at promoting products, services, or brands across various media platforms including TV, social media, and digital advertising networks. These videos are designed not only to capture attention quickly but also to create an emotional connection with the audience, convey compelling brand stories, and persuade viewers to take action, such as making a purchase or engaging with the brand.',
          'By combining storytelling, high-quality visuals, sound design, and strategic messaging, commercial videos enhance brand recall and differentiate businesses in competitive markets. They support marketing goals by increasing brand awareness, driving conversions, and improving SEO and online visibility through engaging multimedia content.',
        ],
      },
    ],
    detailList: [
      {
        heading: 'Brand Storytelling',
        text: 'Strategically crafted narratives that highlight brand values, mission, and unique selling points.',
      },
      {
        heading: 'High Production Quality',
        text: 'Professional filming, sound, lighting, and editing to ensure a polished, impactful video.',
      },
      {
        heading: 'Targeted Messaging',
        text: 'Content tailored to specific audience demographics, platforms, and campaign goals.',
      },
      {
        heading: 'Emotional Engagement',
        text: 'Use of music, tone, and visuals to evoke emotions and build strong audience connections.',
      },
      {
        heading: 'Multi-Platform Utility',
        text: 'Videos optimized for TV, online ads, social media, websites, and email marketing.',
      },
    ],
    whyUs: [
      'Creative Expertise',
      'Tailored Solutions',
      'High-End Production Quality',
      'Strategic Approach',
      'End-to-End Service',
      'Proven Results',
    ],
    tags: [
      'commercial video',
      'advertising video',
      'brand video production',
      'promotional video',
      'video marketing',
      'corporate advertising',
      'video branding',
      'TV commercials',
      'social media ads',
      'video storytelling',
      'product demo video',
      'video content creation',
      'call-to-action video',
      'high-quality production',
      'marketing campaign video',
    ],
  },
  {
    slug: 'ai-powered-business-solutions',
    title: 'AI-Powered Business Solutions',
    short:
      'We build custom AI agents and automated workflows using tools like ChatGPT, Claude, and n8n to streamline tasks and boost productivity.',
    intro:
      'Our AI-Powered Business Solutions combine advanced artificial intelligence with deep industry expertise to transform how your business operates and communicates. We specialize in deploying AI tools that automate routine tasks, generate dynamic marketing content, and produce high-quality videos with cutting-edge generative AI technology.',
    deliverables: [
      'AI Strategy Consulting',
      'AI Integration with Business',
      'Custom AI Solution',
      'AI-Powered Video Production',
      'Generative AI',
      'AI Chatbot Development',
      'Predictive Analytics',
      'Ongoing AI Support',
    ],
    sections: [
      {
        heading: 'What we do',
        paragraphs: [
          'Our AI-driven video production services streamline the creative process, delivering personalized, engaging visuals faster and more cost-effectively than traditional methods. Using models like GPT-4 and advanced computer vision, we craft videos that resonate with your audience while maintaining brand consistency.',
          'Beyond video, our AI solutions enhance user engagement through chatbots and predictive analytics, helping you make smarter decisions and achieve scalable growth. We provide end-to-end AI integration, from strategy and development to maintenance and continuous improvement.',
          'Partner with Crayonweb to harness the power of AI and fuel your business innovation in a competitive digital landscape.',
        ],
      },
    ],
    detailList: [
      {
        heading: 'AI-Powered Video Production',
        text: 'Leveraging AI tools to automate and enhance video creation, editing, and personalization at scale.',
      },
      {
        heading: 'Custom AI Solutions Development',
        text: 'Building tailored AI algorithms and integrations that optimize business workflows and decision-making.',
      },
      {
        heading: 'Creative Visual Content Production',
        text: 'Professional video production, motion graphics, animation, and post-production services to elevate brand storytelling.',
      },
      {
        heading: 'AI-Driven Marketing Automation',
        text: 'Implementing AI tools for personalized marketing campaigns, customer segmentation, and real-time analytics.',
      },
      {
        heading: 'End-to-End Project Consulting and Support',
        text: 'Comprehensive guidance from initial AI strategy through development, deployment, and continuous optimization.',
      },
    ],
    whyUs: [
      'Innovative Expertise',
      'Tailored Strategies',
      'End-to-End Service',
      'Proven Results',
      'Collaborative Partnership',
      'Future-Ready Solutions',
    ],
    tags: [
      'AI-powered business solutions',
      'artificial intelligence',
      'AI automation',
      'machine learning',
      'AI video production',
      'generative AI',
      'AI content creation',
      'AI marketing tools',
      'AI analytics',
      'AI chatbot',
      'AI-driven video editing',
      'AI-powered marketing',
      'business process automation',
      'AI video generator',
      'AI digital transformation',
    ],
  },
  {
    slug: 'mobile-application',
    title: 'Mobile Application',
    short:
      'We design and develop custom mobile apps that deliver seamless user experiences and drive business growth.',
    intro:
      'We deliver comprehensive mobile app development services that empower businesses to connect with their audiences like never before. Our expert team develops custom applications for iOS, Android, and cross-platform frameworks, ensuring high performance, scalability, and seamless user experiences.',
    deliverables: [
      'Native Mobile App',
      'Cross-Platform App',
      'Hybrid App',
      'Progressive Web App',
      'Enterprise Mobile App',
      'Wearable App',
    ],
    sections: [
      {
        heading: 'How we build',
        paragraphs: [
          'Our native app development leverages platform-specific technologies such as Swift and Kotlin to build fast, reliable apps that harness device-specific capabilities fully. For businesses looking for efficient multi-platform solutions, we offer cross-platform and hybrid app development using React Native and Flutter, balancing cost and performance.',
          'User experience is critical in mobile app success. Our design team creates intuitive and engaging UI/UX tailored to your brand and users needs, focusing on accessibility and smooth navigation.',
          'We tailor enterprise mobile apps that integrate with your existing systems like CRM and ERP, streamlining operations and improving employee productivity.',
          'Our commitment extends beyond development, offering ongoing maintenance and support to keep your app secure, updated, and functioning smoothly.',
          'From initial consultation to deployment and post-launch support, our dedicated process ensures your vision turns into a successful mobile app that drives your business forward.',
        ],
      },
    ],
    whyUs: [
      'Experienced Team',
      'Custom Solutions',
      'Cutting-Edge Technology',
      'End-to-End Support',
      'User-Centered Design',
      'Agile Methodology',
    ],
    tags: [
      'mobile app development',
      'iOS app development',
      'Android app development',
      'cross-platform apps',
      'hybrid app development',
      'React Native',
      'Flutter apps',
      'mobile UI/UX design',
      'app maintenance',
      'enterprise mobile apps',
      'app integration',
      'app testing',
      'mobile app security',
      'app prototyping',
      'mobile app launch',
    ],
  },
  {
    slug: 'cms-solution',
    title: 'CMS Solution',
    short:
      'Smart, scalable CMS solutions that make managing your website simple and hassle-free.',
    intro:
      'We specialize in delivering CMS solutions designed to transform the way you manage your digital content. Whether you need a simple website content management system or a sophisticated enterprise-level platform, our experts guide you through selecting, customizing, and implementing the ideal CMS solution for your business.',
    deliverables: [
      'Multi-language CMS',
      'Custom CMS Development',
      'CMS Integration',
      'CMS Migration',
      'Modeling and Workflow',
      'Maintenance and Support',
      'Headless CMS Solutions',
      'User Training and Guide',
    ],
    sections: [
      {
        heading: 'Content Management System',
        paragraphs: [
          'A Content Management System (CMS) is software that provides a user-friendly interface for creating, editing, organizing, and publishing digital content. It separates content management from website design and structure, allowing marketers and content creators to focus on crafting high-quality content without programming skills. The two main parts of a CMS are the front end (what users see on the website) and the back end (the content management interface). Our solutions include traditional CMS options and modern headless CMS architectures that enable content delivery to multiple digital channels seamlessly.',
          'We work with a wide range of CMS platforms including WordPress, Drupal, Contentful, Sitecore, and CoreMedia, ensuring tailored solutions whether for small businesses or large enterprises.',
          'Our comprehensive CMS services cover platform selection, custom development, seamless migration from legacy systems, content modeling, staff training, and ongoing support to keep your content strategy agile and effective.',
        ],
      },
    ],
    detailList: [
      {
        heading: 'Custom CMS Development',
        text: 'Building tailored content management systems to meet unique business requirements.',
      },
      {
        heading: 'CMS Integration',
        text: 'Integrating CMS with existing business software, APIs, and e-commerce platforms.',
      },
      {
        heading: 'CMS Migration',
        text: 'Seamlessly migrating content from legacy platforms to modern CMS with zero downtime.',
      },
      {
        heading: 'Content Modeling and Workflow Design',
        text: 'Structuring content types, user roles, and approval workflows for smooth editorial management.',
      },
      {
        heading: 'CMS Maintenance and Support',
        text: 'Ongoing updates, security patches, troubleshooting, and feature enhancements.',
      },
      {
        heading: 'Multi-site and Multi-language CMS',
        text: 'Managing multiple websites or localized versions from a single CMS platform.',
      },
      {
        heading: 'Headless CMS Solutions',
        text: 'Implementing API-driven CMS architectures for omnichannel content delivery.',
      },
      {
        heading: 'SEO-Friendly CMS Setup',
        text: 'Ensuring CMS platforms support SEO best practices with clean URLs, metadata, and performance optimization.',
      },
      {
        heading: 'User Training and Documentation',
        text: 'Educating clients on CMS use, content editing, and best practices.',
      },
      {
        heading: 'Performance Optimization',
        text: 'Enhancing site speed, scalability, and reliability within the CMS environment.',
      },
    ],
    benefits: [
      'Ease of Use: intuitive editors and workflows simplify content creation and publishing.',
      'Collaboration: role-based permissions enable teams to work efficiently without overlap.',
      'Scalability: handle increasing content needs, multi-site, and multilingual content effortlessly.',
      'Security: robust features protect your digital assets and user information.',
      'Marketing Integration: built-in SEO and analytics tools enhance content performance.',
    ],
    whyUs: [
      'Customized Solutions',
      'Expert Team',
      'Seamless Integration',
      'Robust Security',
      'Ongoing Support',
      'Scalable and Future-Proof',
    ],
    tags: [
      'CMS',
      'Content Management System',
      'Website Management',
      'CMS Development',
      'Custom CMS Solutions',
      'Headless CMS',
      'CMS Integration',
      'CMS Migration',
      'Multi-site Management',
      'SEO Friendly CMS',
      'Digital Content Management',
      'CMS Support',
      'Content Editing',
      'User Roles and Permissions',
      'Website Maintenance',
    ],
  },
];
