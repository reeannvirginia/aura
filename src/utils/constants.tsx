export const pages = [
  { display: '', icon: 'home' },
  { display: 'about', icon: 'user-female' },
  { display: 'work', icon: 'laptop' },
  { display: 'contact', icon: 'ringing-phone' },
];

export const links = [
  {
    display: 'resume',
    icon: 'https://img.icons8.com/small/32/000000/open-resume.png',
    url: process.env.PUBLIC_URL + '/assets/resume.pdf',
  },
  {
    display: 'linkedin',
    icon: 'https://img.icons8.com/ios-glyphs/30/000000/linkedin-2.png',
    url: 'https://www.linkedin.com/in/reeann-hansen-2943b05a/',
  },
  {
    display: 'github',
    icon: 'https://img.icons8.com/material-sharp/24/000000/github.png',
    url: 'https://github.com/reeannvirginia',
  },
];

export const skills = [
  'git',
  'react',
  'javascript',
  'ruby',
  'graphql',
  'typescript',
  'firestore',
  'es6',
  'sass',
  'css',
  'express',
  'html',
  'apollo client',
  'realtime database',
  'jest',
  'enzyme',
];

export const projects = [
  {
    name: 'CareCloud Go',
    description: 'Next-generation cloud-based EHR/practice management software.',
    url: 'https://www.carecloud.com/go/',
    image: process.env.PUBLIC_URL + 'assets/go.png',
    highlights: 'Micro-frontend architecture, drag and drop views, realtime collaboration.',
  },
  {
    name: 'Breeze',
    description: 'An award-winning patient intake and registration app with 20k+ users.',
    url: 'https://www.carecloud.com/breeze/',
    image: process.env.PUBLIC_URL + 'assets/breeze.jpg',
    highlights: 'Migrated app from angular in 3.5 months with small team using React/Redux',
  },
  {
    name: 'Component Library',
    description: 'In-house React component library with 20+ reusable components.',
    url: 'https://storybook.js.org/',
    image: process.env.PUBLIC_URL + 'assets/storybook.png',
    highlights: 'Complete with smooth animations, accessibility, unit tests and without material-ui. ',
  },
];
