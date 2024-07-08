"use client";

import Image from "next/image";
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  AbsoluteLinks,
  BurgerMenu,
} from "./styles";
import raft_logo from "@/public/logo.svg";
import ic_bars from "@/public/ic_bars.svg";
import GetStartedButton from "@/components/AppButton/AppButton";
import AnimatedLink from "@/components/AnimatedLink/AnimatedLink";
import { useState } from "react";
import { motion } from "framer-motion";
import { links, menu } from "@/data/index";
import { Button } from "../ui/button";
import ConnectionButton from "../ConnectButton/ConnectionButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <Inner>
        <LogoContainer>
          <Image src={raft_logo} alt="raft_logo" priority />
          <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
            <motion.div
              variants={menu}
              animate={isOpen ? "open" : "closed"}
              initial="closed"></motion.div>
            <Image src={ic_bars} alt="bars" />
          </BurgerMenu>
        </LogoContainer>
        <Nav className={isOpen ? "active" : ""}>
          {links.map((link, i) => (
            <AnimatedLink key={i} title={link.linkTo} />
          ))}
        </Nav>
        <CallToActions className={isOpen ? "active" : ""}>
          <AnimatedLink title="Go to App" />
          <GetStartedButton padding="0.5rem 0.75rem" />
        </CallToActions>
      </Inner>
    </Wrapper>
  );
};

export default Header;
