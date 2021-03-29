import { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/styles.scss';
import '../styles/test.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
