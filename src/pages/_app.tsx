import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NumerologyProvider } from '../context/NumerologyContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NumerologyProvider>
      <Component {...pageProps} />
    </NumerologyProvider>
  );
}

export default MyApp;
