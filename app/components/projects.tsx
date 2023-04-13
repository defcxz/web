import styles from '../styles/projects.module.css'
import content from './projects.content.json'

export default function Projects() {
  return (
   <div className={styles.container}>
      <h1>Mis proyectos</h1>
      <div className={styles.proyectos}>
         {content.projects.map((project) => (
            <div className={styles.card} key={project.id}>
               <h2>{project.name}</h2>
               <p>{project.description}</p>
            </div>
         ))}
      </div>
   </div>
  )
}