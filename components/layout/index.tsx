'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyles } from './GlobalStyles';
import Header from '../Header';
import Footer from '../Footer';
import Preloader from '../Preloader';
import { useState } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [complete, setComplete] = useState(false);
  return (
    <StyledComponentsRegistry>
      <ReactLenis
        root
      >
        <GlobalStyles />
        <Preloader setComplete={setComplete} />
        <div className={complete ? 'complete' : 'not_complete'}>
          <Header />
          {children}
          <Footer />
        </div>
      </ReactLenis>
    </StyledComponentsRegistry>
  );
};

export default Layout;