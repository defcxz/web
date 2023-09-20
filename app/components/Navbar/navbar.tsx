import Link from 'next/link'
import styles from './navbar.module.css'
import content from '../../content.json'

export default function Navbar() {

  const links = [
    {
      title: 'Who am I?',
      url: '/about',
    },
  ];


  return (
    <nav className={`${styles.nav}`}>
      <ul>
        <Link className={styles.name} href="/">{content.nombre}</Link>
        {
          links.map((link, index) => (
            <Link className={`nav_item ${link.url} ${styles.url}`} key={index} href={link.url}>
              {link.title}
            </Link>
          ))
        }
      </ul>
    </nav>
  )

}