import Link from 'next/link';
import styles from './navbar.module.css';

export default function Navigationbar(){

    const links = [
        {
            title: 'Sobre mí',
            url: '#about',
        },
        {
            title: 'Photography',
            url: '#photography',
        },
        {
            title: 'Resumé',
            url: '/docs/Resume.pdf',
        },
    ];


    return (
        <main className={styles.main}>
            <nav className={`${styles.nav} ${styles.fade}`}>
                <ul>
                    <Link className={styles.name} href="#">Mario G.</Link>
                    {
                        links.map((link, index) => (
                            <Link className={`nav_item ${link.url}`} key={index} href={link.url}>
                                {link.title}
                            </Link>     
                        ))
                    }
                    {/* <li className={styles.name}><a href="#">Mario G.</a></li>
                    <li><a href="#">Sobre mí</a></li>
                    <li className={styles.separador}></li>
                    <li><a href="#projects">Photography</a></li>
                    <li className={styles.separador}></li>
                    <li><a href="/docs/Resume.pdf" target="_blank">Resumé</a></li> */}
                </ul>
            </nav>
        </main>
    )
   
}