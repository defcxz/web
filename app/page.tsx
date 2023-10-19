import styles from './styles/page.module.css'
import content from './content.json';
export default function Home() {
  return (
    <main className={`${styles.main}`} id="main">
      <h1 className={styles.title}>
        Development.
        <br>
        </br>
        Design.
        <br>
        </br>
        <div className={styles.title_enfasis}>
          Creativity.
        </div>
      </h1>
      <div className={styles.name}>
        <p>
          {content.nombre}
        </p>
      </div>
      <div className={styles.year}>
        <p>
          MMXXIII
        </p>
      </div>
    </main>
  )
}
