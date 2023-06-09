import { useRouter } from 'next/router';

export default function Head() {

  const router = useRouter();
  const pageTitle = getPageTitle(router.pathname);
  return (
    <>

    
    <title>Inicio</title>
    <meta content="width=device-width, initial-scale=1" name="viewport" />

    <meta property="description" content="Mi portafolio web." />

    <meta property="twitter:card" content="summary_large_image"></meta>
    <meta property="twitter:image" content="/favicon.ico"></meta>
    <meta property="twitter:title" content="Twitter link preview title"></meta>
    <meta property="twitter:description" content="Twitter link preview description"></meta>


    <meta property="og:title" content="Mario G."></meta>
    <meta property="og:description" content="Mi portafolio web." />
    <meta property="og:image" content="/favicon.ico"></meta>
    <meta property="og:url" content="https://mgu.vercel.app"></meta>
    
    <link rel="icon" href="/favicon.ico" />
  </>
  )
}


function getPageTitle(pathname: string): string {
  const sign = ' — Mario G.'; 

  return 'Home' + sign;
}