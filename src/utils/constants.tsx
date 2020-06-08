import { go, breeze, react, nowU } from '../assets/index';

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
    display: 'email',
    icon: 'far fa-envelope',
    url: 'mailto:reeannvirginia@gmail.com',
  },
];

export const navItems = ['About', 'Experience', 'Projects'];

export const dotTimes = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5];

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
    name: 'now-U',
    description:
      'Non-profit organization aiming to drive change through monthly-coordinated campaigns centered around social and environmental issues.',
    url: 'https://now-u.com/',
    image: nowU,
    highlights: 'React, SCSS, React-Router',
  },
  {
    name: 'CareCloud Go',
    description:
      'Next-gen cloud-based Practice Management/EHR with micro-frontend architecture with drag an drop views, realtime collaboration.',
    url: 'https://www.carecloud.com/go/',
    image: go,
    highlights: 'JavaScript/React, GraphQL, SCSS, Firebase, React JSON Schema, Single-Spa, JSS',
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
      'A component library housing 20+ reusable components completed with smooth animations, accessibility, unit tests and without material-ui.',
    url: 'https://storybook.js.org/',
    image: react,
    highlights: 'React, TypeScript, SCSS, JSS, pdfJS, Jest, Enzyme',
  },
];
