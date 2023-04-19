import styles from './styles/page.module.css';
import Image from 'next/image';
import content from './content.json';
import Projects from './components/projects';
import Contact from './components/contact';


export default function Home() {
  
  return (
    <main className={styles.main}>
      <div className={`${styles.grid} ${styles.fade}`}>

        <h1 className={styles.title}>
          {content.nombre}
        </h1>
        <div className={styles.icon}>
          <p className={styles.subtitle}>Puedes encontrarme aquí!</p>
            <a href="https://www.instagram.com/defcxz">
              <Image src="/IMGs/instagram.svg" alt="instagram-logo" width={60} height={60}/>
              <p className={styles.socialDescription}>De vez en cuando publico aquí</p>
            </a>
            <a href="https://www.github.com/defcxz">
              <Image src="/IMGs/github.svg" alt="github-logo" width={60} height={60}/>
              <p className={styles.socialDescription}>Aquí tengo algunos proyectos de programación!</p>
            </a>
            <a href="mailto:ma.gomez@duocuc.cl">
              <Image src="/IMGs/mail.svg" alt="mail-logo" width={60} height={60}/>
              <p className={styles.socialDescription}>Mi correo, por si gustas contactarme por ahí</p>
            </a>
        </div>

        <p className={styles.description}>
          {content.descripcion}
        </p>
      </div>
      <section id="projects" className={styles.projects}>
        <Projects />
      </section>
      <section id="contact" className={styles.contact}>
        <Contact />
      </section>
    </main>
  )
}