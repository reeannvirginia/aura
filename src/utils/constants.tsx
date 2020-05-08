import { go, breeze, react } from '../assets';

export const responsive = {
  largeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const links = [
  {
    display: 'linkedin',
    icon: 'fab fa-linkedin-in',
    url: 'https://www.linkedin.com/in/reeann-hansen-2943b05a/',
  },
  {
    display: 'github',
    icon: 'fab fa-github',
    url: 'https://github.com/reeannvirginia',
  },
  {
    display: 'resume',
    icon: 'fas fa-file-alt',

    url: process.env.PUBLIC_URL + '/resume.pdf',
  },
];

export const navItems = [
  { display: 'ABOUT' },
  { display: 'EXPERIENCE' },
  { display: 'PROJECTS' },
  { display: 'CONTACT' },
  { display: 'RESUME', url: process.env.PUBLIC_URL + '/resume.pdf' },
];

export const skills = [
  { display: 'JavaScript', level: 3 },
  { display: 'React', level: 3 },
  { display: 'TypeScript', level: 2 },
  { display: 'HTML5', level: 3 },
  { display: 'CSS3 & SCSS', level: 3 },
  { display: 'Responsive Design', level: 2 },
  { display: 'GraphQL', level: 3 },
  { display: 'TDD', level: 2 },
  { display: 'Adobe XD', level: 1 },
];

export const work = [
  {
    title: 'Software Engineer II',
    display: 'CareCloud',
    location: 'Miami, FL',
    time: 'Jan 2018 - Mar 2020',
    role: 'UI lead for EHR feature development',
    projects: 'Projects: Go, Breeze',
  },
  {
    title: 'Client Service Executive',
    display: 'PHD Media',
    location: 'Frankfurt, Germany',
    time: 'Sept 2015 - Sept 2017',
    role: 'Digital strategist for EMEA region',
    projects: 'Clients: SAP, Universal Studios, Starbucks',
  },
];

export const projects = [
  {
    name: 'CareCloud Go',
    description:
      'Next-generation cloud-based Practice Management/EHR app with micro-frontend architecture with drag an drop views, realtime collaboration.',
    url: 'https://www.carecloud.com/go/',
    image: go,
    highlights: 'JavaScript/React, GraphQL, SCSS, Firebase, React JSON Schema, Single-Spa, JSS, React-Router',
  },
  {
    name: 'Breeze',
    description:
      'An award-winning patient intake and registration app with 20k+ users. Migrated from Angular to React in 3 months with a small, but awesome team.',
    url: 'https://www.carecloud.com/breeze/',
    image: breeze,
    highlights: 'React, Redux, JSS',
  },
  {
    name: 'Component Library',
    description:
      'A component library housing 20+ reusable components completed with smooth animations, accessibility, unit test and without material-ui.',
    url: 'https://storybook.js.org/',
    image: react,
    highlights: 'React, TypeScript, SCSS, JSS, pdfJS, Jest, Enzyme',
  },
];
