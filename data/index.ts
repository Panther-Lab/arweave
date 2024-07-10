import seamless_payments from '@/public/seamless_payments.png';
import smart_investing from '@/public/smart_investing.png';
import wealth_management from '@/public/wealth_management.png';
import financial_planning from '@/public/financial_planning.png';
import { NavItem, SidebarNavItem } from "@/type";



export interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link:string;
  imageLink:string;
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
export const phrases = ['Play. Earn. Thrive.', 'Discover the Future of Gaming on Arweave.'];
export const paragraphPhrases = [
  "Experience a platform built on transparency and fairness,",
  'ensuring equal opportunities for all.',
];

// For mobile
export const mobilePhrases = ['Play. Earn. Thrive.', 'Discover the Future of Gaming on Arweave.'];
export const mobileParagraphPhrases = [
  "Experience a platform built on transparency and fairness,",
  'ensuring equal opportunities for all.',
];

  
  export const menu = {
    open: {
      width: '290px',
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
        'Our platform offers a unique combination of session-based gaming, Play2Earn opportunities, and significant earning potential for Unity developers. Enjoy a secure, decentralized experience while playing, earning, and creating in a dynamic and rewarding ecosystem.',
    },
    {
      question: 'How does a Game Developer Earn from Griffin?',
      answer:
        'Unity developers can earn 80% of the total revenue generated from their session-based games. By leveraging our platform, developers can monetize their skills and creativity, reaching a vast audience of gamers eager for new and exciting content.',
    },
    {
      question: 'What types of transactions can I perform with the platform from the prespective of Web2 user?',
      answer:
        'As a Web2 user, you can try out the games on our platform. To access premium features or start earning rewards, youll need to connect your wallet. This allows you to fully participate in our Play2Earn ecosystem and enjoy the benefits of blockchain-based gaming.',
    },
    {
      question: 'What benefits does Griffin offer over other platforms?',
      answer:
        'Our platform stands out by allowing users to earn tokens, sell NFT assets in the marketplace, and distribute rewards to token holders. This creates a comprehensive and engaging gaming experience where players and developers alike can benefit from the innovative opportunities offered by Web3 technology.',
    },
  ];


// For desktop
export const desktopHeaderPhrases = [
  'Transform Your Playtime',
  'into Profits.',
];
export const desktopParagraphPhrase = [
  'Experience the future of gaming with our session-based Web3 platform. Play games to earn real rewards in our Play2Earn ecosystem,',
  "and if you're a Unity developer, create games and keep 80% of the revenue. Join us to play, earn, and develop in a secure, decentralized environment!",
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
    title: 'Earn as You Play',
    details:
      'Accumulate rewards through in-game achievements and progress.',
  },
  {
    illustration: smart_investing,
    title: 'Develop and Earn',
    details:
      'Unity developers can design and launch games on our platform, keeping a significant portion (80%) of the revenue.',
  },
  {
    illustration: wealth_management,
    title: 'Enjoy a Decentralized Experience',
    details:
      'Effortless token distribution, NFT asset marketplace, community rewards, and diverse gameplay.',
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
    img: "/pepe-maze.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link:"/pepe",
    imageLink:"/pepe-maze.png"
  },
  {
    id: 2,
    title: "Game 2: Out of Sight",
    des: "Out of Sight is a relaxing hidden object game designed to help you unwind. Play each level at your own pace and discover every secret the beautifully vibrant worlds have to offer.",
    img: "/sight.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link:"/sight",
    imageLink:"/sight.png"
  },
  {
    id: 3,
    title: "Game 3: Tennis",
    des: "Tennins Gaming is committed to creating a fun and immersive environment for all players, making it the perfect destination for gaming enthusiasts of all levels.",
    img: "/tennis2.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link:"/race",
    imageLink:"/tennis.png"
  },
  {
    id: 4,
    title: "Game 4: Soul Saver",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "/soul-saver.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link:"/soul",
    imageLink:"/soul-saver.png"
  },
  {
    id: 5,
    title: "Game 5: Cinemare",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "/cinemare.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link:"/cinemare",
    imageLink:"/cinemare.png"
  },
  {
    id: 6,
    title: "Game 4: Lorem Ipsum",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "/game.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link:"/pepe",
    imageLink:"/bg.png"
  },
];

export const navItems: NavItem[] = [
  {
    title: "Game Library",
    href: "/game",
    icon: "game",
    label: "Dashboard",
  },
  {
    title: "Marketplace",
    href: "/marketplace",
    icon: "marketplace",
    label: "marketplace",
  },
  {
    title: "Earn",
    href: "/earn",
    icon: "send",
    label: "send",
  },
  {
    title: "Top Up",
    href: "/topup",
    icon: "receipt",
    label: "receipt",
  },
  {
    title: "History",
    href: "/history",
    icon: "history",
    label: "history",
  },
  {
    title: "Profile",
    href: "/profile",
    icon: "profile",
    label: "profile",
  },
  {
    title: "Publish",
    href: "/publish",
    icon: "publish",
    label: "publish",
  },
];