import seamless_payments from '@/public/seamless_payments.png';
import smart_investing from '@/public/smart_investing.png';
import wealth_management from '@/public/wealth_management.png';
import financial_planning from '@/public/financial_planning.png';
import { Testing } from '@/components/Testing';
import { ComponentType } from 'react';


export interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  component: ComponentType;
}

export const links = [
    {
      url: '/',
      linkTo: 'Home',
    },
    {
      url: '/dashboard',
      linkTo: 'App',
    },
    {
      url: '/about',
      linkTo: 'About',
    },
  ];

  // For desktop
export const phrases = ['Building the future', 'Game.'];
export const paragraphPhrases = [
  "Lorem lorem lorem lorem lorem lorem lorem",
  'nisarg thakkar pawan ak.',
];

// For mobile
export const mobilePhrases = ['Building the future', 'Game'];
export const mobileParagraphPhrases = [
  "Experience the future of gaming with Griffin. We're",
  'here to empower your gaming journey.',
];

  
  export const menu = {
    open: {
      width: '250px',
      height: '300px',
      top: '-25px',
      right: '-25px',
      transition: { duration: 0.75, type: 'tween', ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: '55px',
      height: '40px',
      top: '0px',
      right: '-4px',
      transition: {
        duration: 0.75,
        delay: 0.35,
        type: 'tween',
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };


  type FAQItem = {
    question: string;
    answer: string;
  };
  
  export const desktopHeaderPhrase = ['Frequently asked', 'questions'];
  export const mobileHeaderPhrase = ['Frequently', 'asked', 'questions'];
  export const animate = {
    initial: {
      y: '100%',
      opacity: 0,
    },
    open: (i: number) => ({
      y: '0%',
      opacity: 1,
      transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
    }),
  };
  
  export const faqData: FAQItem[] = [
    {
      question: 'Why do I use Griffins?',
      answer:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      question: 'How does a Game Developer Earn from Griffin?',
      answer:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      question: 'What types of transactions can I perform with Griffin?',
      answer:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      question: 'What benefits does Griffin offer over other platforms?',
      answer:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];


// For desktop
export const desktopHeaderPhrases = [
  'Elevate Your Financial',
  'Journey with Griffin',
];
export const desktopParagraphPhrase = [
  'Griffin offers a world of financial possibilities. From playing game to payments,',
  "we've got you covered. Join us and unlock your potential today.",
];

// For mobile
export const mobileParagraphPhrase = [
  'Griffin offers a world of financial possibilities. From',
  "gaming to payments, we've got you covered.",
  'Join us and unlock your potential today.',
];

export const offers = [
  {
    illustration: seamless_payments,
    title: 'Seamless Payments',
    details:
      'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem',
  },
  {
    illustration: smart_investing,
    title: 'Smart Gaming',
    details:
      'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem',
  },
  {
    illustration: wealth_management,
    title: 'Unity Game Integration',
    details:
      'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem',
  },
  {
    illustration: financial_planning,
    title: 'Multiple Games',
    details:
      'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem',
  },
];


export const projects: Project[] = [
  {
    id: 1,
    title: "Game 1: Pepe Maze",
    des: "A Survival Game challenges players to stay alive in a hostile environment for as long as possible.",
    img: "/game.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    component: Testing,
  },
  {
    id: 2,
    title: "Game 2: Lorem Ipsum",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "/game.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    component: Testing,
  },
  {
    id: 3,
    title: "Game 3: Lorem Ipsum",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "/game.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    component: Testing,
  },
  {
    id: 4,
    title: "Game 4: Lorem Ipsum",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "/game.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    component: Testing,
  },
];