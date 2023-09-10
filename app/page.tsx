import styles from './styles/page.module.css';
import Image from 'next/image';
import content from './content.json';
import Projects from './projects/page';

export default function Home() {


  return (
    <main className={styles.main}>
      <h1 className={`${styles.title}`}>
        {content.descripcion}
      </h1>
      <div className={styles.grouplist}>
        <p className={`${styles.subtitle}` }>
          Social media
        </p>
        <div className={styles.list}>
          {content.socialmedia.map((item) => (
            <div key={item.id}>
              <a href={item.url} target='_blank' className={`${styles.container2} ${styles.glowing}`}>
                <Image src={item.icon} alt={`${item.name}-logo`} width={60} height={60} />
                <p className={styles.link}>{item.name}</p>
              </a>
            </div>
          ))}
        </div>


        <Projects />
      </div>
    </main>
  )
}
