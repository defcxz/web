import Link from 'next/link';
import styles from './navbar.module.css';

export default function Navigationbar(){

    const links = [
        {
            title: 'Posts',
            url: '/posts',
        },
        {
            title: 'Resumé',
            url: '/docs/Resume.pdf',
        },
    ];


    return (
        <nav className={`${styles.nav}`}>
            <ul>
                <Link className={styles.name} href="/" as="/">Mario G.</Link>
                {
                    links.map((link) => (
                        <Link className={`nav_item ${link.url}`} href={link.url} as={link.url}>
                            {link.title}
                        </Link>     
                    ))
                }
            </ul>
        </nav>
    )
   
}