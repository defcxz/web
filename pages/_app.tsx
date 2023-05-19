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
  switch (pathname) {
    case '/':
      return 'Home';
    case '/posts':
      return 'Posts';
    case '/about':
      return 'About';
    default:
      return 'Home';
  }
}