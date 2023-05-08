import styles from './styles/page.module.css';
import Image from 'next/image';
import content from './content.json';
import Projects from '../pages/projects/projects';

export default function Home() {
  
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <section id="projects" className={styles.projects}>
          <Projects />
        </section>
        <h1 className={`${styles.title} ${styles.fade}`}>
          {content.descripcion}
        </h1>
        <div className={styles.icon}>
          <a href="https://www.instagram.com/defcxz">
            <Image src="/assets/instagram.svg" alt="instagram-logo" width={60} height={60}/>
          </a>
          <a href="https://www.github.com/defcxz">
            <Image src="/assets/github.svg" alt="github-logo" width={60} height={60}/>
          </a>
          <a href="mailto:ma.gomez@duocuc.cl">
            <Image src="/assets/mail.svg" alt="mail-logo" width={60} height={60}/>
          </a>
        </div>
      </div>
      {/* <section id="contact" className={styles.contact}>
        <Contact />
      </section> */}
    </main>
  )
}