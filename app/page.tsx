import styles from './styles/page.module.css';
import Image from 'next/image';
import content from './content.json';
import Projects from '../pages/projects/projects';
import Contact from './components/contact';


export default function Home() {
  
  return (
    <main className={styles.main}>
      <div className={`${styles.grid} ${styles.fade}`}>
        <section id="projects" className={styles.projects}>
          <Projects />
        </section>
        <h1 className={styles.title}>
          {content.descripcion}
        </h1>
        <div className={styles.icon}>
            <a href="https://www.instagram.com/defcxz">
              <Image src="/IMGs/instagram.svg" alt="instagram-logo" width={60} height={60}/>
            </a>
            <a href="https://www.github.com/defcxz">
              <Image src="/IMGs/github.svg" alt="github-logo" width={60} height={60}/>
            </a>
            <a href="mailto:ma.gomez@duocuc.cl">
              <Image src="/IMGs/mail.svg" alt="mail-logo" width={60} height={60}/>
            </a>
        </div>
      </div>
      {/* <Image src="/IMGs/mi-logo.svg" className={styles.logobg} alt="foto" width={500} height={500}/> */}
      {/* <section id="contact" className={styles.contact}>
        <Contact />
      </section> */}
    </main>
  )
}