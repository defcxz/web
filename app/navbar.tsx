import styles from './styles/navbar.module.css';
import Image from 'next/image';
import content from './content.json'

export default function Navigationbar(){
   return (
        <main className={styles.main}>
            <nav className={`${styles.nav} ${styles.fade}`}>
                <ul>
                {/* <Image className={styles.logo} alt="Mi logo" src="/IMGs/mi-logo.svg" width={40} height={40}></Image> */}
                    <li className={styles.name}><a href="#">{content.nombre}</a></li>
                    <li><a href="#">Sobre mí</a></li>
                    <li className={styles.separador}></li>
                    <li><a href="#projects">Photography</a></li>
                    <li className={styles.separador}></li>
                    <li><a href="/docs/Resume.pdf" target="_blank">Resumé</a></li>
                </ul>
            </nav>
        </main>
   )
   
}