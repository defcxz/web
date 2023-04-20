import styles from '../styles/projects.module.css'
import content from './projects.content.json'
import { BsArrowUpRightCircle } from 'react-icons/bs'

export default function Projects() {
  return (
   <div className={styles.container}>
      <h1>Mis proyectos</h1>
      <div className={styles.proyectos}>
         {content.projects.map((project) => (
            <div className={styles.card} key={project.id} style={{ backgroundImage: `url(${project.image})` }}>
              <p>{project.description}</p>
              <div className={styles.nameCard}>
                  <h2>{project.name}</h2>
                  <a href={project.url} target="_blank">
                  {/* <p className={styles.year}>{project.year}</p> */}
                    <BsArrowUpRightCircle />
                  </a>
              </div>
            </div>
         ))}
      </div>
   </div>
  )
}