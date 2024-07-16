import { AppProps } from 'next/app';
import { AddressProvider } from '../context/AddressContext';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AddressProvider>
      <Component {...pageProps} />
    </AddressProvider>
  );
}
