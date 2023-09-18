import Image from 'next/image';
import logo from '../../../public/assets/mi-logo.svg'
import styles from './footer.module.css';

export default function Footer() {
   return (
      <footer className={styles.footer}>
         <Image 
            src={logo} 
            alt="logo"
            className={styles.logo}
            priority
         />
         <p>MMXXIII</p>
      </footer>
   )

}