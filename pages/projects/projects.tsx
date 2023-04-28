import styles from '../../app/styles/projects.module.css'
import content from './projects.content.json'
import { BsArrowUpRightCircle } from 'react-icons/bs'

export default function Projects() {
  return (
   <div className={styles.container}>
      <h1>Proyectos</h1>
      <div className={styles.proyectos}>
         {content.projects.map((project) => (
            <div className={styles.card} key={project.id}>
              <a href={project.url} target="_blank">
                <div className={styles.nameCard}>
                  <p>{project.name}</p>
                  {/* <p className={styles.year}>{project.year}</p> */}
                  <BsArrowUpRightCircle />
                </div>
              </a>
            </div>
         ))}
      </div>
   </div>
  )
}