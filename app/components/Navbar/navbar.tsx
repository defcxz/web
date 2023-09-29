import Image from 'next/image'
import logo from '../../../public/assets/mi-logo.svg'
import { FiGithub } from 'react-icons/fi'
import Link from 'next/link'
import styles from './navbar.module.css'

export default function Navbar() {

  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.brand}>
          <Image
            className={styles.logo}
            src={logo}
            width={45}
            height={45}
            alt="Logo"
          />
        </li>
        <li className={styles.links}>
          <Link href="mailto:ma.gomez@duocuc.cl" target='_blank'>
            Mail
          </Link>
          <Link href="https://www.github.com/defcxz" target='_blank'>
            <FiGithub
              className={styles.github}
              size={25}
            />
          </Link>
        </li>
      </ul>
    </nav>
  )

}