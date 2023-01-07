import styles from './styles/page.module.css'
import { BsArrowRightShort } from 'react-icons/bs'
import { form } from './components/form'

export default function Home() {
  
  return (

    <div className={styles.container}>
      <main className={styles.main}>
        
        <div className={styles.grid}>

          <img className={styles.medark} src="/IMGs/medark.svg" alt="Mario G." width="60%"/>

          <div className={styles.side}>
            <h1 className={styles.title}>
              Mario G.
            </h1>
            <p className={styles.description}>
              20 años. Programador y Aspirante a Ingeniero en Informática.
            </p>
              <hr className={styles.separador}/>

            <div className={styles.icon}>
              <p className={styles.subtitle}>Puedes encontrarme aquí!</p>
              <a href="https://www.instagram.com/defcxz">
                <img src="IMGs/instagram.svg" alt="instagram-logo"/>
                <p className={styles.socialDescription}>De vez en cuando publico aquí</p>
              </a>
              <a href="mailto:mralejandrogu@gmail.com">
                <img src="IMGs/mail.svg" alt="mail-logo"/>
                <p className={styles.socialDescription}>Mi correo, por si gustas contactarme por ahí</p>
              </a>
              <a href="https://www.github.com/defcxz">
                <img src="IMGs/github.svg" alt="github-logo"/>
                <p className={styles.socialDescription}>Aquí tengo algunos proyectos de programación!</p>
              </a>
              <a href="https://sptfyy.glitch.me/h4nrb">
                <img src="IMGs/spotify.svg" alt="spotify-logo"/>
                <p className={styles.socialDescription}>Mis gustos musicales 🎶💃🏻</p>
              </a>
            </div>
              {/* <form action="#" method="post" className={styles.formulario}>
                <input className={styles.input} type="text" id="msg" name="msg" placeholder='Te gustaría decir algo?'/>
                <button className={styles.submit} type="submit"><BsArrowRightShort/></button>
              </form> */}
              <form/>
          </div>
        </div>
    </main>
  </div>
  )
}