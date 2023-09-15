import Image from 'next/image';
import styles from './footer.module.css';

export default function Footer() {
   return (
      <footer className={styles.footer}>
         <Image 
            src="/assets/mi-logo.svg" 
            alt="logo" 
            width={60} 
            height={60} 
            className={styles.logo}
            priority
         />
         <p>MMXXIII</p>
      </footer>
   )

}