import dynamic from 'next/dynamic';
import Navbar from 'components/Layout/Navbar';
import { Montserrat } from '@next/font/google';
import { Container, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';

// Dynamic imports
const Footer = dynamic(() => import('components/Layout/Footer'));
const ScrollToTop = dynamic(() => import('components/Layout/ScrollToTop'));

const montserrat = Montserrat({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

type Props = { children: React.ReactNode };

const MainLayout = ({ children }: Props) => {
  const [isWindow, setIsWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') setIsWindow(true);
  }, []);

  return (
    <Stack className={montserrat.className}>
      <Navbar />
      <Container maxWidth="xl" sx={{ py: 10, minHeight: '90vh' }}>
        {children}
      </Container>
      <Footer />
      {isWindow && <ScrollToTop />}
    </Stack>
  );
};

export default MainLayout;
