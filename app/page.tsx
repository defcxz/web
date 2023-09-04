import styles from './styles/page.module.css';
import Image from 'next/image';
import content from './content.json';
import Projects from './projects/page';

export default function Home() {

  const socialmedia = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/defcxz',
      icon: '/assets/instagram.svg'
    },
    {
      name: 'Github',
      url: 'https://www.github.com/defcxz',
      icon: '/assets/github.svg'
    },
    {
      name: 'Mail',
      url: 'mailto:ma.gomez@duocuc.cl',
      icon: '/assets/mail.svg'
    },

  ]

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <h1 className={`${styles.title}`}>
          {content.descripcion}
        </h1>
        <p className={`${styles.subtitle}`}>
          Social media
        </p>

        <div className={styles.socialmedia}>
          {socialmedia.map((item, index) => (
            <div>
              <a href={item.url} key={index} className={styles.socialmediacontainer}>
                <Image src={item.icon} alt={`${item.name}-logo`} width={60} height={60} />
                <p>{item.name}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
