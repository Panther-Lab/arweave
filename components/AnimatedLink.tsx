'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';

type AnimationProps = {
  rest: {
    y: number;
  };
  hover: {
    y: number;
    transition: {
      duration: number;
      ease: number[];
      type: string;
    };
  };
};

type AnimatedLinkProps = {
  title: string;
};

type AnimatedWordProps = {
  title: string;
  animations: AnimationProps;
  isHovered: boolean;
};

const titleAnimation: Variants = {
  rest: {
    transition: {
      staggerChildren: 0.005,
    },
  },
  hover: {
    transition: {
      staggerChildren: 0.005,
    },
  },
};

const letterAnimation: AnimationProps = {
  rest: {
    y: 0,
  },
  hover: {
    y: -25,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: 'tween',
    },
  },
};

const letterAnimationTwo: AnimationProps = {
  rest: {
    y: 25,
  },
  hover: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: 'tween',
    },
  },
};

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative cursor-pointer flex flex-col overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatedWord
        title={title}
        animations={letterAnimation}
        isHovered={isHovered}
      />
      <div className="absolute top-0">
        <AnimatedWord
          title={title}
          animations={letterAnimationTwo}
          isHovered={isHovered}
        />
      </div>
    </motion.div>
  );
};

const AnimatedWord: React.FC<AnimatedWordProps> = ({ title, animations, isHovered }) => (
  <motion.span
    className="whitespace-nowrap relative"
    variants={titleAnimation}
    initial="rest"
    animate={isHovered ? 'hover' : 'rest'}
  >
    {title.split('').map((char, i) =>
      char === ' ' ? (
        <motion.span key={i}>&nbsp;</motion.span>
      ) : (
        <motion.span
          className="relative inline-block whitespace-nowrap text-link-color text-base font-normal md:text-background md:text-xl md:font-medium"
          variants={animations}
          key={i}
        >
          {char}
        </motion.span>
      )
    )}
  </motion.span>
);

export default AnimatedLink;
