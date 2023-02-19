import theme from 'theme';
import 'styles/globals.css';
import dynamic from 'next/dynamic';
import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import { useLiveReload } from 'next-contentlayer/hooks';
import createEmotionCache from 'utils/createEmotionCache';
import { EmotionCache, ThemeProvider } from '@emotion/react';
import MainLayout from 'components/Layout/MainLayout';

const Analytics = dynamic(() => import('components/SEO/Analytics'), { ssr: true });

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) {
  useLiveReload();

  return (
    <>
      <Analytics />
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </CssBaseline>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default MyApp;
