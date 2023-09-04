import '../app/globals.css';
import Navigationbar from '../app/components/Navbar/navbar';
import Footer from '../app/components/Footer/footer';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }) {

  const router = useRouter();
  const pageTitle = getPageTitle(router.pathname);

  return (
    <>
    <Head>
      <title>Welcome home</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Mi portafolio web." />

      <meta property="description" content="Mi portafolio web." />
      <meta property="twitter:image" content="/favicon.ico"></meta>
      <meta property="og:title" content="Mario G."></meta>
      <meta property="og:description" content="Mi portafolio web." />
      <meta property="og:image" content="/favicon.ico"></meta>
      <meta property="og:url" content="https://mgu.vercel.app"></meta>
    </Head>
    <main>
      <Navigationbar />
        <Component {...pageProps} />
      <Footer />
    </main>
    </>
  )
}

function getPageTitle(pathname: string): string {
  const sign = ' — Mario G.';
  switch (pathname) {
    case '/':
      return 'Home' + sign;
    case '/posts':
      return 'Posts' + sign;
    case '/about':
      return 'About' + sign;
    default:
      return 'Post' + sign;
  }
}
