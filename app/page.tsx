import styles from './styles/page.module.css';
import Image from 'next/image';
import content from './content.json';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <h1 className={`${styles.title}`}>
          {content.descripcion}
        </h1>

        <p className={`${styles.subtitle}`}>
          Social media
        </p>
        <div className={styles.list}>
          {content.socialmedia.map((item) => (
            <div key={item.id}>
              <a href={item.url} className={`${styles.container} ${styles.glowing}`}>
                <Image src={item.icon} alt={`${item.name}-logo`} width={60} height={60} />
                <p className={styles.link}>{item.name}</p>
              </a>
            </div>
          ))}
        </div>

        <p className={`${styles.subtitle2}`}>
          Projects
        </p>
        <div className={styles.list2}>
          {content.projects.map((item) => (
            <div key={item.id}>
              <a href={item.url} className={`${styles.container2} ${styles.glowing}`}>
                {/* <Image src={item.icon} alt={`${item.name}-logo`} width={60} height={60} /> */}
                <FiArrowUpRight />
                <p className={styles.link}>{item.name}</p>
              </a>
            </div>
          ))}
        </div>
        
      </div>
    </main>
  )
}
