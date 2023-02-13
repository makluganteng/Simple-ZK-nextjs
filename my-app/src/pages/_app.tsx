import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script';
declare global {
  interface Window {
    // you'll need to explicitly specify the
    // type of arguments & function return type
    snarkjs: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (<>
  <Component {...pageProps} />
  <Script id="snarkjs" src="snarkjs.min.js" />
  </>
  )
}
