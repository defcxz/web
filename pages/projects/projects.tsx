import styles from '../../app/styles/projects.module.css'
import { BsArrowUpRightCircle } from 'react-icons/bs'
import { GetStaticProps } from 'next'
import { getProjectEntries } from '../api/utils'
import content from './projects.content.json'



export default function Projects({ }) {
  return (
   <div className={styles.container}>
      <h1 className={styles.title}>Proyectos</h1>
      <div className={styles.proyectos}>
      {content.projects.map((project, index) => (
        <div className={`${styles.card} delay-${index + 1}`} key={project.id} style={{ animationDelay: `${(index + 1) * .7}s` }}>
          <a href={project.url} target="_blank">
            <div className={styles.nameCard}>
              <p>{project.name}</p>
              <BsArrowUpRightCircle />
            </div>
          </a>
        </div>
         ))}
      </div>
   </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjectEntries();
  return {
    props: { projects },
  };
}