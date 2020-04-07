import { go, breeze, storybook } from '../assets';
export const pages = [
  { display: 'home', icon: 'home', url: '/' },
  { display: 'about', icon: 'user-female', url: '/about' },
  { display: 'work', icon: 'laptop', url: '/work' },
  { display: 'contact', icon: 'ringing-phone', url: '/contact' },
];

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

export const skills = [
  'responsive design',
  'graphql',
  'css-in-js',
  'typescript',
  'cloud firestore',
  'es6',
  'express',
  'apollo client',
  'realtime database',
  'react-router',
  'jest',
  'enzyme',
];

export const projects = [
  {
    name: 'CareCloud Go',
    description: 'Next-generation cloud-based EHR/practice management software.',
    url: 'https://www.carecloud.com/go/',
    image: go,
    highlights:
      'Micro-frontend architecture, drag and drop views, realtime collab., React Context for state management',
  },
  {
    name: 'Breeze',
    description: 'An award-winning patient intake and registration app with 20k+ users.',
    url: 'https://www.carecloud.com/breeze/',
    image: breeze,
    highlights: 'Migrated UI from Angular to React with Redux state management within a tight 3-month deadline.',
  },
  {
    name: 'Component Library',
    description: 'React component library built on Storybook with 20+ reusable components.',
    url: 'https://storybook.js.org/',
    image: storybook,
    highlights: 'Complete with smooth animations, accessibility, unit tests and without material-ui. ',
  },
];
