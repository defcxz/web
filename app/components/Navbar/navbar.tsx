import Link from 'next/link';
import styles from './navbar.module.css';

export default function Navigationbar(){

    // const links = [
    //     {
    //         title: 'Posts',
    //         url: '/posts',
    //     },
    //     {
    //         title: 'Resumé',
    //         url: '/docs/Resume.pdf',
    //     },
    // ];


    return (
        <nav className={`${styles.nav}`}>
            <ul>
                <Link className={styles.name} href="/" as="/">Mario G.</Link>
                <Link className={`nav_item`} href={'/posts'} as={'/posts'}>
                    Posts
                </Link>   
                <Link className={`nav_item`} href={'/docs/Resume.pdf'} as={'/docs/Resume.pdf'}>
                    Resumé
                </Link>

                
                {/* {
                    links.map((link, index) => (
                        <Link className={`nav_item ${link.url}`} key={index} href={link.url} as={link.url}>
                            {link.title}
                        </Link>     
                    ))
                } */}
            </ul>
        </nav>
    )
   
}