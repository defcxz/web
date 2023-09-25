import styles from './styles/page.module.css'
import Image from 'next/image';
import logo from '../public/assets/mi-logo.svg'
import content from './content.json';

export default function Home() {

  return (
    <main className={styles.main}>

      <h1 className={styles.title}>
        Development.
        <br>
        </br>
        Design.
        <br>
        </br>
        Creativity.
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
