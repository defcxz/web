'use client';

import styles from './styles/page.module.css'
import { Form } from './components/form'
import { Tooltip } from '@nextui-org/react' 

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
              <Tooltip content={"De vez en cuando publico aquí"} placement="bottom" rounded color="invert">
                <a href="https://www.instagram.com/defcxz">
                  <img src="IMGs/instagram.svg" alt="instagram-logo"/>
                  <p className={styles.socialDescription}>De vez en cuando publico aquí</p>
                </a>
              </Tooltip>
              {/* <a href="mailto:mralejandrogu@gmail.com">
                <img src="IMGs/mail.svg" alt="mail-logo"/>
                <p className={styles.socialDescription}>Mi correo, por si gustas contactarme por ahí</p>
              </a> */}
              <Tooltip content={"Aquí tengo algunos proyectos de programación!"} placement="bottom" rounded color="invert">
                <a href="https://www.github.com/defcxz">
                  <img src="IMGs/github.svg" alt="github-logo"/>
                  <p className={styles.socialDescription}>Aquí tengo algunos proyectos de programación!</p>
                </a>
              </Tooltip>
              <Tooltip content={"Quieres saber cuáles son mis gustos musicales?"} placement="bottom" rounded color="invert">
                <a href="https://open.spotify.com/user/lameavollaiiita?si=ce05a56774b043c1">
                  <img src="IMGs/spotify.svg" alt="spotify-logo"/>
                  <p className={styles.socialDescription}>Mis gustos musicales 🎶💃🏻</p>
                </a>
              </Tooltip>
            </div>
              <Form/>
          </div>
        </div>
    </main>
  </div>
  )
}