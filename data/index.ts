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
  
  