import styles from './styles/navbar.module.css';
import Image from 'next/image';

export default function Navbar(){
   return (
        <nav className={styles.nav}>
            <ul>
                <li><Image className={styles.logo} alt="Mi logo" src="/IMGs/mi-logo.svg" width={30} height={30}></Image></li>
                <li><a href="#">Inicio</a></li>
                <li className={styles.separador}></li>
                <li><a href="#">Mis proyectos</a></li>
                <li className={styles.separador}></li>
                <li><a href="#">Tecnologías</a></li>
                <li className={styles.separador}></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
   )
   
}