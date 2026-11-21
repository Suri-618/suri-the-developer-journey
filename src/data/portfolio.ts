
/* SURI — THE DEVELOPER JOURNEY
   Portfolio content. Keep component-facing types compatible with the original site.
*/

export type Palette = {
  from: string;
  via: string;
  to: string;
  accent: string;
};

const crimson: Palette = {
  from: '#40121d',
  via: '#190d16',
  to: '#09090d',
  accent: '#ff3d5a',
};

const violet: Palette = {
  from: '#251943',
  via: '#110f20',
  to: '#09090d',
  accent: '#b98bff',
};

const ocean: Palette = {
  from: '#102c42',
  via: '#0c1724',
  to: '#09090d',
  accent: '#4cc9ff',
};

const jade: Palette = {
  from: '#10382e',
  via: '#0d1c19',
  to: '#09090d',
  accent: '#46e3a8',
};

const amber: Palette = {
  from: '#402c13',
  via: '#1c1710',
  to: '#09090d',
  accent: '#ffb547',
};

export const profile = {
  fullName: 'Surendra Kumar Battagani',
  displayName: 'Suri',
  firstName: 'SURI',
  seriesTag: 'THE DEVELOPER JOURNEY',
  originalLabel: 'A SURI ORIGINAL',
  role: 'Software Developer | AI & ML Undergraduate',
  tagline: ['Software Developer', 'AI & ML', 'Open-Source Contributor'],
  intro:
    'I am an Artificial Intelligence and Machine Learning undergraduate who enjoys building practical software, exploring intelligent systems and turning ideas into working products.',
  location: 'Vijayawada, Andhra Pradesh, India',
  email: 'suri86438@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/surendra-kumar-202b76337',
    github: 'https://github.com/Suri-618',
  },
  resumePdf: '/assets/my_resume_for_wells_fargo.pdf',
  portrait: {
    src: '/assets/portrait-1100.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'SURI portfolio portrait',
  },
  interests: [
    'Full-Stack Development',
    'Artificial Intelligence',
    'Problem Solving',
    'Software Engineering',
  ],
};

export const education = [
  {
    school: 'Aditya University',
    place: 'Andhra Pradesh, India',
    degree: 'B.Tech — Artificial Intelligence & Machine Learning',
    period: '2024 – 2028',
    score: 'CGPA 7.0',
  },
];

export const experience = [
  {
    company: 'Technical Hub Pvt. Ltd.',
    role: 'Full Stack Development Intern',
    period: 'May – June 2026',
    points: [
      'Participated in the Project Space 8.0 Internship Program.',
      'Worked on full-stack development concepts and practical project implementation.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'certihub',
    title: 'CertiHub',
    year: '2026',
    genre: 'AI Platform · Full Stack',
    logline:
      'An AI-powered career development and certificate platform designed to help students manage credentials and explore career pathways.',
    stack: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'Firebase',
      'Cloudinary',
      'Tesseract.js',
      'Groq Vision',
    ],
    build: [
      'Developed front-end interfaces and visual interactions for the platform.',
      'Worked with a React and Vite front end connected to a Node.js and Express backend.',
      'Integrated Firebase services and cloud-based media handling.',
    ],
    features: [
      'Certificate portfolio management',
      'OCR-based certificate text extraction',
      'AI-assisted certificate analysis',
      'Student and institution workflows',
      'QR-based certificate verification',
      'Career development features',
    ],
    metrics: [
      { value: 'OCR', label: 'Certificate text extraction' },
      { value: 'AI', label: 'Certificate analysis' },
    ],
    github: 'https://github.com/Suri-618/CertiHub',
    palette: violet,
    motif: 'shield',
  },
  {
    id: 'resume-analyzer',
    title: 'AI Resume Analyzer',
    year: '2026',
    genre: 'AI / ML · Web Application',
    logline:
      'A resume analysis application combining machine-learning tools, a FastAPI backend and a modern web interface.',
    stack: [
      'Python',
      'scikit-learn',
      'pandas',
      'NumPy',
      'FastAPI',
      'React',
      'Vite',
      'Tailwind CSS',
      'Supabase',
      'pytest',
      'Docker',
    ],
    build: [
      'Built a Python-based analysis backend using FastAPI.',
      'Developed a React application for the user interface.',
      'Used Supabase for authentication and PostgreSQL data storage.',
      'Added automated tests and continuous integration workflows.',
    ],
    features: [
      'Resume document processing',
      'Machine-learning-based analysis',
      'User authentication',
      'PostgreSQL-backed data storage',
      'Automated test suite',
      'Docker-based development support',
    ],
    metrics: [
      { value: '281', label: 'Automated tests' },
    ],
    palette: ocean,
    motif: 'flow',
  },
  {
    id: 'letter-clash',
    title: 'Letter Clash',
    year: '2026',
    genre: 'Multiplayer Game · Real-Time',
    logline:
      'A two-player browser game where reaction speed and quick letter recognition decide each round.',
    stack: [
      'JavaScript',
      'React',
      'Vite',
      'Node.js',
      'Express',
      'Socket.IO',
      'MongoDB Atlas',
    ],
    build: [
      'Built a browser-based multiplayer game with a real-time server connection.',
      'Implemented server-authoritative game state and round handling.',
      'Integrated MongoDB Atlas for persistent game-related data.',
      'Designed a neon-inspired interface and responsive game experience.',
    ],
    features: [
      'Two-player online matches',
      'Room-code-based matchmaking',
      'Real-time letter reaction rounds',
      'Server-authoritative game logic',
      'Player health and damage system',
      'Leaderboard functionality',
    ],
    metrics: [
      { value: '2', label: 'Players per match' },
    ],
    palette: crimson,
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export type Certification = {
  issuer: string;
  name: string;
  link: string;
};

export const achievements: Achievement[] = [
  {
    id: 'internship',
    title: 'Project Space 8.0',
    org: 'Technical Hub Pvt. Ltd.',
    detail: 'Full Stack Development Intern · May – June 2026.',
    laurel: '2026',
  },
  {
    id: 'tests',
    title: '281 Tests',
    org: 'AI Resume Analyzer',
    detail: 'Automated pytest suite with continuous integration.',
    laurel: 'QA',
  },
  {
    id: 'originals',
    title: 'Three Originals',
    org: 'Featured Projects',
    detail: 'Built CertiHub, AI Resume Analyzer and Letter Clash in 2026.',
    laurel: 'BUILD',
  },
];
export const certifications: Certification[] = [];

export type Skill = {
  name: string;
  mono: string;
  note?: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  subtitle: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Programming foundations',
    skills: [
      { name: 'Python', mono: 'Py' },
      { name: 'C', mono: 'C' },
      { name: 'C++', mono: 'C+' },
      { name: 'JavaScript', mono: 'JS' },
      { name: 'Java', mono: 'J' },
      { name: 'TypeScript', mono: 'TS' },
      { name: 'HTML', mono: 'H' },
      { name: 'CSS', mono: '#' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces and experiences',
    skills: [
      { name: 'React', mono: 'R' },
      { name: 'Vite', mono: 'V' },
      { name: 'Tailwind CSS', mono: 'TW' },
      { name: 'Framer Motion', mono: 'FM' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'APIs and application logic',
    skills: [
      { name: 'Node.js', mono: 'N' },
      { name: 'Express.js', mono: 'EX' },
      { name: 'FastAPI', mono: 'FA' },
      { name: 'REST APIs', mono: 'API' },
      { name: 'Socket.IO', mono: 'IO' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Data and persistence',
    skills: [
      { name: 'MySQL', mono: 'MY' },
      { name: 'PostgreSQL', mono: 'PG' },
      { name: 'MongoDB', mono: 'MO' },
      { name: 'Firebase', mono: 'FB' },
      { name: 'Supabase', mono: 'SB' },
      { name: 'Oracle SQL', mono: 'OR' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    subtitle: 'Development workflow',
    skills: [
      { name: 'Git', mono: 'G' },
      { name: 'GitHub', mono: 'GH' },
      { name: 'VS Code', mono: 'VS' },
      { name: 'Docker', mono: 'DK' },
      { name: 'pytest', mono: 'PT' },
      { name: 'Vercel', mono: 'VC' },
      { name: 'Cloudinary', mono: 'CL' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'Fundamentals',
    subtitle: 'Core computer science',
    skills: [
      { name: 'Data Structures & Algorithms', mono: 'DSA' },
      { name: 'OOP', mono: 'OOP' },
      { name: 'DBMS', mono: 'DB' },
      { name: 'Operating Systems', mono: 'OS' },
      { name: 'Linux', mono: 'LX' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  React: ['CertiHub', 'AI Resume Analyzer', 'Letter Clash'],
  Vite: ['CertiHub', 'AI Resume Analyzer', 'Letter Clash'],
  'Tailwind CSS': ['CertiHub', 'AI Resume Analyzer'],
  'Framer Motion': ['CertiHub'],
  'Node.js': ['CertiHub', 'Letter Clash'],
  'Express.js': ['CertiHub', 'Letter Clash'],
  FastAPI: ['AI Resume Analyzer'],
  'Socket.IO': ['Letter Clash'],
  Python: ['AI Resume Analyzer'],
  'scikit-learn': ['AI Resume Analyzer'],
  MongoDB: ['Letter Clash'],
  Firebase: ['CertiHub'],
  Supabase: ['AI Resume Analyzer'],
  pytest: ['AI Resume Analyzer'],
  Docker: ['AI Resume Analyzer'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2024 – Present',
    synopsis:
      'The beginning of the B.Tech journey in Artificial Intelligence and Machine Learning, building foundations in programming and computer science.',
    episodes: [
      {
        code: 'S01E01',
        title: 'The University Chapter',
        description:
          'Started the undergraduate journey at Aditya University in Artificial Intelligence and Machine Learning.',
        tags: ['Education', 'AI & ML'],
        runtime: '2024',
        palette: violet,
      },
      {
        code: 'S01E02',
        title: 'Learning the Fundamentals',
        description:
          'Exploring programming languages, problem solving and core computer science concepts.',
        tags: ['Programming', 'DSA', 'OOP'],
        runtime: 'Ongoing',
        palette: ocean,
      },
    ],
  },
  {
    number: 2,
    title: 'Building Real Products',
    period: '2026',
    synopsis:
      'Moving from learning concepts to building applications, experimenting with AI features and developing full-stack systems.',
    episodes: [
      {
        code: 'S02E01',
        title: 'CertiHub',
        description:
          'Working on an AI-powered certificate portfolio and career development platform.',
        tags: ['React', 'Node.js', 'AI'],
        runtime: '2026',
        palette: violet,
      },
      {
        code: 'S02E02',
        title: 'AI Resume Analyzer',
        description:
          'Building a resume analysis application with machine learning, FastAPI and a React frontend.',
        tags: ['Python', 'FastAPI', 'ML'],
        runtime: '2026',
        palette: ocean,
      },
      {
        code: 'S02E03',
        title: 'Letter Clash',
        description:
          'Developing a real-time multiplayer browser game with server-authoritative gameplay.',
        tags: ['JavaScript', 'Socket.IO', 'Game'],
        runtime: '2026',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'The Next Chapter',
    period: 'In Progress',
    synopsis:
      'Continuing to improve engineering skills, contribute to meaningful projects and prepare for software development opportunities.',
    episodes: [
      {
        code: 'S03E01',
        title: 'Keep Building',
        description:
          'Improving existing projects, learning from feedback and strengthening software engineering fundamentals.',
        tags: ['Engineering', 'Projects'],
        runtime: 'Ongoing',
        palette: jade,
      },
      {
        code: 'S03E02',
        title: 'What Comes Next',
        description:
          'Exploring new opportunities in software development and applied AI.',
        tags: ['Career', 'Learning'],
        runtime: 'Coming next',
        palette: amber,
      },
    ],
  },
];

export type TopPick = {
  label: string;
  title: string;
  detail: string;
  palette: Palette;
};

export const topPicks: TopPick[] = [
  {
    label: 'Featured Project',
    title: 'CertiHub',
    detail: 'AI-powered certificate and career platform',
    palette: violet,
  },
  {
    label: 'AI / ML',
    title: 'Resume Analyzer',
    detail: 'Machine learning meets resume analysis',
    palette: ocean,
  },
  {
    label: 'Game Development',
    title: 'Letter Clash',
    detail: 'Real-time two-player browser game',
    palette: crimson,
  },
  {
    label: 'Experience',
    title: 'Internship',
    detail: 'Full Stack Development · Technical Hub',
    palette: amber,
  },
  {
    label: 'Focus',
    title: 'Problem Solving',
    detail: 'Building strong programming fundamentals',
    palette: jade,
  },
];

export type IntroSlide = {
  kicker: string;
  title: string;
  lines: string[];
  chips?: string[];
};

export const introSlides: IntroSlide[] = [
  {
    kicker: 'The Developer',
    title: 'Meet Suri',
    lines: [
      'Software Developer',
      'Artificial Intelligence & Machine Learning undergraduate',
      'Interested in building useful software products',
    ],
    chips: ['Software', 'AI & ML'],
  },
  {
    kicker: 'Education',
    title: 'The Foundation',
    lines: [
      'B.Tech — Artificial Intelligence & Machine Learning',
      'Aditya University',
      '2024 – 2028',
    ],
    chips: ['Programming', 'Computer Science'],
  },
  {
    kicker: 'Experience',
    title: 'The Internship',
    lines: [
      'Full Stack Development Intern',
      'Technical Hub Pvt. Ltd.',
      'Project Space 8.0 · May – June 2026',
    ],
    chips: ['Frontend', 'Backend'],
  },
  {
    kicker: 'Projects',
    title: 'Three Originals',
    lines: [
      'CertiHub — AI-powered certificate and career platform',
      'AI Resume Analyzer — ML-powered resume analysis',
      'Letter Clash — real-time multiplayer browser game',
    ],
    chips: ['React', 'Python', 'Node.js'],
  },
  {
    kicker: 'Engineering',
    title: 'The Toolkit',
    lines: [
      'Primary Programming Language: Python',
      'Also familiar with C, C++, Java and JavaScript',
      'Frontend and backend application development',
      'Databases, APIs, testing and deployment workflows',
    ],
    chips: ['Python', 'Full Stack', 'Development'],
  },
  {
    kicker: 'Current Mission',
    title: 'Keep Building',
    lines: [
      'Strengthen software engineering fundamentals',
      'Build practical applications and improve existing projects',
      'Explore opportunities in software development and AI',
    ],
    chips: ['Learning', 'Building'],
  },
];

export type ProfileId = 'suri' | 'recruiter' | 'developer' | 'creative';

export type SectionId =
  | 'about'
  | 'journey'
  | 'originals'
  | 'picks'
  | 'skills'
  | 'moments'
  | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'suri',
    name: 'Suri',
    blurb: 'The complete developer journey',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Experience, projects and skills first',
    color: '#4cc9ff',
    order: ['story', 'originals', 'skills', 'about', 'journey', 'picks', 'moments'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, technologies and engineering',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'about', 'picks', 'story', 'moments'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story and selected highlights',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'about', 'skills', 'moments', 'story'],
  },
];

export const sectionMeta: Record<
  SectionId,
  { nav: string; card: string; meta: string; palette: Palette }
> = {
  about: {
    nav: 'About',
    card: 'About Suri',
    meta: 'The Pilot · Education & introduction',
    palette: violet,
  },
  journey: {
    nav: 'Journey',
    card: 'My Journey',
    meta: `${seasons.length} Seasons · ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`,
    palette: amber,
  },
  originals: {
    nav: 'Projects',
    card: 'My Projects',
    meta: `${projects.length} Featured Projects`,
    palette: crimson,
  },
  picks: {
    nav: 'Highlights',
    card: 'Selected Highlights',
    meta: 'Featured work and focus areas',
    palette: jade,
  },
  skills: {
    nav: 'Skills',
    card: 'My Skills',
    meta: `${skillCategories.length} Categories`,
    palette: ocean,
  },
  moments: {
    nav: 'Credentials',
    card: 'Achievements & Certifications',
    meta: `${achievements.length} Awards · ${certifications.length} Certifications`,
    palette: crimson,
  },
  story: {
    nav: 'Resume',
    card: 'The Full Story',
    meta: 'Education · Experience · Projects',
    palette: violet,
  },
};
