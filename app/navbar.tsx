import styles from './styles/navbar.module.css';
import Image from 'next/image';

export default function Navigationbar(){
   return (
        <nav className={`${styles.nav} ${styles.fade}`}>
            <ul>
                <li><a href="#"><Image className={styles.logo} alt="Mi logo" src="/IMGs/mi-logo.svg" width={40} height={40}></Image></a></li>
                <li><a href="#">Sobre mí</a></li>
                <li className={styles.separador}></li>
                <li><a href="#projects">Mis proyectos</a></li>
                <li className={styles.separador}></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
   )
   
}