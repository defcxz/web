import styles from './styles/page.module.css';
import Image from 'next/image';
import content from './content.json';
import Projects from '../pages/projects/projects';

export default function Home() {

  const socialmedia = [
    {
      name: 'instagram',
      url: 'https://www.instagram.com/defcxz',
      icon: '/assets/instagram.svg'
    },
    {
      name: 'github',
      url: 'https://www.github.com/defcxz',
      icon: '/assets/github.svg'
    },
    {
      name: 'mail',
      url: 'mailto:ma.gomez@duocuc.cl',
      icon: '/assets/mail.svg'
    }
  ]
  
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
            {socialmedia.map((item, index) => (
              <a href={item.url} key={index}>
                <Image src={item.icon} alt={`${item.name}-logo`} width={60} height={60}/>
              </a>
            ))}
          </div>
        </div>
      </main>
  )
}