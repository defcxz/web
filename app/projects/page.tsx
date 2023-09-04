import styles from '../../app/styles/projects.module.css'
import { BsArrowUpRightCircle } from 'react-icons/bs'
import Link from 'next/link'
import content from './projects.content.json'


// async function getProjects () {
//   const projects = await getProjectEntries();
//   return projects;
// }


export default function Projects() {
  // const project = await getProjects();
  return (
   <div className={styles.container}>
      <h1 className={styles.title}>Proyectos</h1>
      <div className={styles.proyectos}>
      {content.projects.map((project, index) => (
        <div className={`${styles.card} delay-${index + 1}`} key={project.id} style={{ animationDelay: `${(index + 1) * .7}s` }}>
          <Link href={project.url} target="_blank">
            <div className={styles.nameCard}>
              <p>{project.name}</p>
              <BsArrowUpRightCircle />
            </div>
          </Link>
        </div>
        ))}
      </div>
   </div>
  )
}
