import {
  backend,
  creator,
  css,
  figma,
  forst,
  git,
  goldenbee,
  html,
  javascript,
  kc,
  kozh,
  kozhin,
  mobile,
  mono,
  moscow,
  nextjs,
  portland,
  reactjs,
  redux,
  republic,
  soul,
  studio24,
  tailwind,
  typescript,
  web,
} from '../assets';

import FramerIcon from '../assets/icons/framer.svg';
import NextjsIcon from '../assets/icons/next-js.svg';
import RouterIcon from '../assets/icons/react-router.svg';
import ReactIcon from '../assets/icons/react.svg';
import ReduxIcon from '../assets/icons/redux.svg';
import SassIcon from '../assets/icons/sass.svg';
import SteroidsIcon from '../assets/icons/steroids.png';
import Typescript from '../assets/icons/typescript.svg';
import VueIcon from '../assets/icons/vue.svg';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Stuff Engineer',
    icon: web,
  },
  {
    title: 'Web Developer',
    icon: backend,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  // {
  //   title: 'LangChain Developer',
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'Trainee/Junior FrontEnd Developer',
    company_name: '24Pixels Studio',
    icon: studio24,
    iconBg: '#2A1F22',
    date: 'January 2021 - November 2021',
    points: [
      'Worked in a team with 4 other trainees on 3 different projects, interacted with designers and developers, made up according to figma and psd layouts.',
      'Programmed sliders, forms, sidebars, adapted sites for mobile devices and tablets, did cross-browser and responsive layout.',
      'Worked according to the agile method, weekly sprints through git-flow.',
      'Used Aria and semantic layout so that people with disabilities could use sites, learned how to use SASS and LESS preprocessors, BEM methodology, often used Bootstrap for quick layout, converted sites into installable PWA applications.',
    ],
  },
  {
    title: 'FrontEnd Developer',
    company_name: 'KozhinDev Studio',
    icon: kozh,
    iconBg: '#000',
    date: 'January 2022 - June 2022',
    points: [
      'Participated in the development of the company’s internal framework - Steroids (which has React under the hood in conjunction with Redux).',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Built projects from scratch using NextJS, implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
      'Worked on mobile app for local supermarket chain based on React Native',
    ],
  },
  {
    title: 'Web Developer | Team Lead | Stuff Engineer',
    company_name: 'Keep Calm',
    icon: kc,
    iconBg: '#f9f9f9',
    date: 'October 2022 - Now',
    points: [
      'Designed architecture and developed applications from scratch, ensuring high code quality and compliance with business requirements.',
      'Conducted interviews and training of new employees, facilitating their rapid integration into the team and professional development.',
      "Implemented new methodologies (Scrum, FSD, TBD) and technologies (GSAP, Bun, ISR, Million.js), which contributed to the team's efficiency.",
      'Wrote documentation, participated in code reviews and provided constructive feedback to other developers to improve code quality.',
      'Participated in the development of a grading system for the promotion and development of employees in the company, which contributed to the creation of a transparent career growth system.',
      'Optimized projects by transferring them from GSSP and CSR to ISR on demand, implementing Million.js to improve productivity.',
      'Accelerated the work of legacy projects by transferring them from Create React App to Vite + Bun + Million.js. Converted a web app into an Android app using Capacitor, expanding the reach of the product.',
    ],
  },
];

const projects = [
  {
    name: 'GoldenBee Estate',
    description: 'Luxury real estate sales platform in the UAE.',
    icons: [NextjsIcon, ReduxIcon, Typescript, SassIcon],
    image: goldenbee,
    source_code_link: 'https://goldenbee.estate/',
  },
  {
    name: 'KozhinDev',
    description: 'Homepage of web developer studio in Siberia.',
    icons: [ReactIcon, ReduxIcon, RouterIcon, Typescript, SteroidsIcon, SassIcon],
    image: kozhin,
    source_code_link: 'https://kozhindev.com/',
  },
  {
    name: 'Portland',
    description: 'Real estate sales platform in Moscow.',
    icons: [ReactIcon, ReduxIcon, RouterIcon, SassIcon],
    image: portland,
    source_code_link: 'https://portland.forma.ru/',
  },
  {
    name: 'Soul',
    description: 'Real estate sales platform in Moscow.',
    icons: [NextjsIcon, ReduxIcon, Typescript, SassIcon],
    image: soul,
    source_code_link: 'https://soul.forma.ru/',
  },
  {
    name: 'Republic',
    description: 'Real estate sales platform in Moscow.',
    icons: [NextjsIcon, ReduxIcon, Typescript, FramerIcon, SassIcon],
    image: republic,
    source_code_link: 'https://republic.forma.ru/',
  },
  {
    name: 'Forst',
    description: 'Real estate sales platform in Moscow.',
    icons: [VueIcon, SassIcon],
    image: forst,
    source_code_link: 'https://forst.forma.ru/',
  },
  {
    name: 'Mono',
    description: 'Real estate sales platform in Moscow.',
    icons: [NextjsIcon, Typescript, FramerIcon, SassIcon],
    image: mono,
    source_code_link: 'https://mono.ru/',
  },
  {
    name: 'Moscow Restaurants',
    description: 'Guide for restaurants in Moscow.',
    icons: [NextjsIcon, Typescript, SassIcon],
    image: moscow,
    source_code_link: 'https://moscowrestaurant.ru/',
  },
];

export { services, technologies, experiences, projects };
