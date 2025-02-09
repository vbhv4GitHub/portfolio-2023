'use client';

import dynamic from 'next/dynamic';
import Navbar from 'components/Layout/Navbar';
import React, { useEffect, useState } from 'react';
import { Source_Code_Pro } from 'next/font/google';

// Dynamic imports
const Footer = dynamic(() => import('components/Layout/Footer'));
const ScrollToTop = dynamic(() => import('components/Layout/ScrollToTop'));

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

type Props = { children: React.ReactNode };

const MainLayout = ({ children }: Props) => {
  const [isWindow, setIsWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') setIsWindow(true);
  }, []);

  return (
    <div className={`flex flex-col min-h-screen ${sourceCodePro.className}`}>
      <Navbar />
      <main className="container flex-grow px-4 py-6 mx-auto sm:px-6 sm:py-10 max-w-7xl md:w-3xl">{children}</main>
      <Footer />
      {isWindow && <ScrollToTop />}
    </div>
  );
};

export default MainLayout;
