import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Box, Stack, AppBar, Button, Container, IconButton } from '@mui/material';

const MenuIcon = dynamic(() => import('@mui/icons-material/Menu'));
const CloseIcon = dynamic(() => import('@mui/icons-material/Close'));
const SearchBox = dynamic(() => import('components/UI/SearchBox/SearchBox'));
const GithubIcon = dynamic(() => import('components/UI/SvgIcons/GithubIcon'));

const Navbar = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState<boolean>(false);

  return (
    <AppBar component="header" position="static" id="back-to-top-anchor">
      <Container
        maxWidth="xl"
        sx={{
          p: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: { md: 'row', sm: 'column', xs: 'column' },
        }}
      >
        <Stack width="100%" flexDirection="row" justifyContent="space-between">
          <Link href="/" passHref aria-label="vbhv4WebDev Logo">
            <Image className="cursor-pointer" src="/logo-84x84.png" alt="vbv4WebDev Logo" height={50} width={50} />
          </Link>
          <Box display={{ md: 'none' }}>
            <IconButton aria-label="Navigation Menu" onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}>
              {isNavMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
        </Stack>
        <Stack
          width="100%"
          gap={{ xs: 1, sm: 2 }}
          justifyContent="flex-end"
          sx={{
            flexDirection: { md: 'row' },
            display: { sm: isNavMenuOpen ? 'flex' : 'none', xs: isNavMenuOpen ? 'flex' : 'none', md: 'flex' },
            p: { xs: 2, sm: 2, md: 0 },
          }}
        >
          <Link passHref href="/">
            <Button sx={{ borderRadius: 4, alignSelf: { xs: 'flex-start', sm: 'flex-start', md: 'center' } }}>
              Home
            </Button>
          </Link>
          <Link passHref href="/blog">
            <Button sx={{ borderRadius: 4, alignSelf: { xs: 'flex-start', sm: 'flex-start', md: 'center' } }}>
              Blog
            </Button>
          </Link>

          <a target="_blank" rel="noreferrer" href="https://github.com/vbhv4GitHub" aria-label="Github profile">
            <Button
              variant="outlined"
              color="warning"
              startIcon={<GithubIcon className="animate-bounce" />}
              sx={{ my: { xs: 1, sm: 1, md: 0 }, minWidth: 120 }}
            >
              Github
            </Button>
          </a>
          <SearchBox />
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Navbar;
