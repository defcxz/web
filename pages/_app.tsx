import '../app/globals.css';
import Navigationbar from '../app/components/Navbar/navbar';
import Footer from '../app/components/footer';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }) {

  const router = useRouter();
  const pageTitle = getPageTitle(router.pathname);

  return (
    <>
    <Head>
      <title>{pageTitle}</title>
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