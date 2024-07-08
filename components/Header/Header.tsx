'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import logo from "/public/logo.svg"
//import raft_logo from '../../../../public/svgs/raft_logo.svg';
import ic_bars from '/public/ic_bars.svg';
// import { GetStartedButton } from '@/components';
import AnimatedLink from '@/components/AnimatedLink';
import {links, menu} from "../../data"
import { Button } from '../ui/button';
import ConnectionButton from '../ConnectButton/ConnectionButton';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="py-4 border-b border-gray-700 md:py-3">
      <div className="flex items-center justify-between w-[90%] max-w-[1440px] mx-auto">
        <div className="md:flex md:items-center md:justify-between md:w-full">
          <Image src={logo} alt="raft_logo" priority />
          <div className="relative md:block md:p-2">
            <motion.div
              variants={menu}
              animate={isOpen ? 'open' : 'closed'}
              initial="closed"
              className="absolute bg-emerald-600 w-[250px] h-[300px] rounded-[25px] z-10 top-12"
            ></motion.div>
            <Image
              src={ic_bars}
              alt="bars"
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-20 object-cover"
            />
          </div>
        </div>
        <div className={`flex items-center gap-15 relative mr-[-25.2rem] md:flex md:flex-col md:items-start md:gap-4 md:top-15 md:right-30 md:z-30 md:opacity-0 md:duration-500 md:delay-500 md:transition-all`}>
          {links.map((link, i) => (
            <AnimatedLink key={i} title={link.linkTo} />
          ))}
        </div>
        <div className={`flex items-center gap-4 md:absolute md:top-[13.75rem] md:z-30 md:right-12 md:opacity-0 md:duration-500 md:delay-500 md:transition-all`}>
          <AnimatedLink title="Login" />
          <Button className='p-2'>Get Started</Button>
        </div>
        
      </div>
    </section>
  );
};

export default Header;
