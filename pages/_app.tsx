import theme from 'theme';
import 'styles/globals.css';
import dynamic from 'next/dynamic';
import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from 'utils/createEmotionCache';
import { EmotionCache, ThemeProvider } from '@emotion/react';

const Analytics = dynamic(() => import('components/SEO/Analytics'), { ssr: true });

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) {
  return (
    <>
      <Analytics />
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Component {...pageProps} />
          </CssBaseline>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default MyApp;
