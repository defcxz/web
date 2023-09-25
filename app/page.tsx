import styles from './styles/page.module.css'
import Image from 'next/image';
import logo from '../public/assets/mi-logo.svg'
import content from './content.json';

export default function Home() {

  return (
    <main className={styles.main}>
      <Image
        className={styles.logo}
        src={logo}
        width={45}
        height={45}
        alt="Logo"
      />
      <nav className={styles.nav}>
        <ul>
          <li><a href="#">{'>>'}</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Photography</a></li>
        </ul>
      </nav>

      <h1 className={styles.title}>
        Development.
        <br>
        </br>
        Design.
        <br>
        </br>
        Creativity.
      </h1>
      <p className={styles.name}>
        {content.nombre}
      </p>
      <p className={styles.year}>
        MMXXIII
      </p>
    </main>
  )
}
