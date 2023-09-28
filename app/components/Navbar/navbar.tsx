import Image from 'next/image'
import Link from 'next/link'
import styles from './navbar.module.css'
import logo from '../../../public/assets/mi-logo.svg'

export default function Navbar() {

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Image
            className={styles.logo}
            src={logo}
            width={45}
            height={45}
            alt="Logo"
          />
        </li>
      </ul>
    </nav>
  )

}