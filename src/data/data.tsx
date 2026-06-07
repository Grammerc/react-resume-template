import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  GlobeAltIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import FacebookIcon from '../components/Icon/FacebookIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Portfolio',
  description: "An OJT ready Portfolio",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Raphael Matthew E. Perocho.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Cebu-based <strong className="text-stone-100">Computer Engineering student</strong> focusing on Full Stack web development, embedded systems, and database management, currently studying at <strong className="text-stone-100">Cebu Institute of Technology - University</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me hitting the court for <strong className="text-stone-100">Pickleball</strong>,
        working on <strong className="text-stone-100">Personal Projects</strong>, or working on my language skills{' '}
        <strong className="text-stone-100">English, Tagalog, and Mandarin</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Disciplined and detail-oriented Computer Engineering undergraduate with a strong foundation in full-stack web development, database management, and analog hardware configuration. Experienced in structuring multi-tenant relational database schemas, scripting dynamic gameplay state machines, and prototyping operational amplifier circuits. Proven academic diligence as a consistent Dean’s Lister, eager to apply technical skills in a practical engineering environment.`,
  aboutItems: [
    { label: 'Location', text: 'Talisay City, Cebu, Philippines', Icon: MapIcon },
    { label: 'Age', text: '22', Icon: CalendarIcon },
    { label: 'Nationality', text: 'Filipino', Icon: FlagIcon },
    { label: 'Interests', text: 'Pickleball, Personal Dev Projects, Tech Trends', Icon: SparklesIcon },
    { label: 'Study', text: 'Cebu Institute of Technology - University', Icon: AcademicCapIcon },
    { label: 'Employment', text: 'Student / OJT Applicant', Icon: BuildingOffice2Icon },
    { label: 'Portfolio', text: 'raphael-portfolio.netlify.app', Icon: GlobeAltIcon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Tagalog',
        level: 8,
      },
      {
        name: 'Mandarin',
        level: 1,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Typescript',
        level: 9,
      },
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Tailwind CSS',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Supabase',
        level: 8,
      },
      {
        name: 'Node.js',
        level: 5,
      },
      {
        name: 'Rest APIs',
        level: 4,
      },
    ],
  },
  {
    name: 'Hardware Systems',
    skills: [
      {
        name: 'Microcontrollers',
        level: 9,
      },
      {
        name: 'Circuit Layouts',
        level: 7,
      },
      {
        name: 'Troubleshooting',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'DevFlow - Multi-Tenant Project (SaaS)',
    description: 'A project management and work tracking web application featuring secure multi-tenant routing and role-based access control to isolate team development workflows.',
    url: '/assets/project-placeholder.pdf',
    image: porfolioImage1,
  },
  {
    title: 'TypeSlasher - Typing Rogue-lite RPG Game',
    description: 'A typing-based rogue-lite RPG game built in Godot Engine where progression mechanics and combat encounters are driven entirely by player typing input speed and accuracy.',
    url: '/assets/project-placeholder.pdf',
    image: porfolioImage2,
  },
  {
    title: 'Analog Temperature Monitoring & Automated Cooling System',
    description: 'A purely analog, microcontroller-free physical hardware circuit that utilizes an operational amplifier to automatically trigger a cooling fan and buzzer based on real-time thermal shifts.',
    url: '/assets/project-placeholder.pdf',
    image: porfolioImage3,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2023 - Present',
    location: 'Cebu Institute of Technology - University',
    title: 'Bachelor of Science in Computer Engineering (BSCpE)',
    content: <p>Specializing in embedded hardware systems, circuit design, and full-stack application development. Active in laboratory research and technical projects.</p>,
  },
  {
    date: ' 2021 - 2023 ',
    location: 'University of San Jose - Recoletos',
    title: 'Science, Technology, Engineering, and Mathematics (STEM)',
    content: <p>A dedicated student who exceled in Math and Sciences. </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2024 - 2025',
    location: 'Cebu Institute of Technology - University',
    title: 'Departmental Academic Distinction',
    content: (
      <p>
        Maintained a high academic standard, achieving consistent placement as a 2nd-Year Dean's Lister and Honor Roll awardee within the engineering department.
      </p>
    ),
  },
  {
    date: '2026',
    location: 'Academic SaaS Application',
    title: 'Full-Stack Developer & Database Designer',
    content: (
      <p>
        Contributed as a core developer for a specialized multi-tenant Software-as-a-Service (SaaS) platform built to track development workflows. Structured the relational database tables and designed the role-based access control (RBAC) layers for isolated data workspaces.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'rpma092@gmail.com',
      href: 'mailto:rpma092@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Talisay City, Cebu, Philippines',
      href: 'https://www.google.com/maps/place/Talisay+City,+Cebu,+Philippines',
    },
    {
      type: ContactType.Facebook,
      text: 'Raphael Perocho',
      href: 'https://facebook.com',
    },
    {
      type: ContactType.Github,
      text: 'Grammerc',
      href: 'https://github.com/Grammerc',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/Grammerc' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/' },
  { label: 'Facebook', Icon: FacebookIcon, href: 'https://www.facebook.com/Raphhhyyy/' },
];
