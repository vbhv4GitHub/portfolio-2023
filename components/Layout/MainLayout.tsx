import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Container, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';

// Dynamic imports
const Navbar = dynamic(() => import('components/Layout/Navbar'));
const Footer = dynamic(() => import('components/Layout/Footer'));
const ScrollToTop = dynamic(() => import('components/Layout/ScrollToTop'));

type Props = {
  title?: string;
  children: React.ReactNode;
};

const MainLayout = ({ children, title }: Props) => {
  const [isWindow, setIsWindow] = useState(false);
  const titleString = title ? `${title} |` : null;

  useEffect(() => {
    if (typeof window !== 'undefined') setIsWindow(true);
  }, []);

  return (
    <Stack>
      <Head>
        <title>{`${titleString} vbhv4WebDev`}</title>
      </Head>
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
