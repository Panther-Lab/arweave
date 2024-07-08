'use client';

import Image from 'next/image';
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  AbsoluteLinks,
  BurgerMenu,
} from './styles';
import raft_logo from '@/public/logo.svg';
import ic_bars from '@/public/ic_bars.svg';
import AppButton from '@/components/Common/AppButton/AppButton';
import AnimatedLink from '@/components/AnimatedLink/AnimatedLink';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { links, menu } from '@/data/index';
import { Button } from '../ui/button';
import { ConnectButton } from "@arweave-wallet-kit/react";
import ConnectionButton from '../ConnectButton/ConnectionButton';


const CryptoHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <Inner>
        <LogoContainer>
          <Image src={raft_logo} alt="raft_logo" priority />
          <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
            <motion.div
              variants={menu}
              animate={isOpen ? 'open' : 'closed'}
              initial="closed"
            ></motion.div>
            <Image src={ic_bars} alt="bars" />
          </BurgerMenu>
        </LogoContainer>
        <Nav className={isOpen ? 'active' : ''}>
          {links.map((link, i) => (
            <AnimatedLink key={i} title={link.linkTo} />
          ))}
        </Nav>
        <CallToActions className={isOpen ? 'active' : ''}>
          <ConnectionButton/>
        </CallToActions>
      </Inner>
    </Wrapper>
  );
};

export default CryptoHeader;