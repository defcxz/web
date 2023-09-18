'use client'

import styles from './styles/page.module.css';
import Image from 'next/image';
import content from './content.json';
import { useState } from 'react';

export default function Home() {

  const [openProjectId, setOpenProjectId] = useState(null);

  // Función para realizar el efecto "acordeón" entre los proyectos.
  const toggleProject = (projectId) => {
    if (openProjectId === projectId) {
      setOpenProjectId(null);
    } else {
      setOpenProjectId(projectId);
    }
  };

  const sortedProjects = content.projects.slice().sort((a, b) => {
    return Number(b.year) - Number(a.year);
  });

  return (
    <main className={styles.main}>
      <p className={`${styles.title}`}>
        {content.nombre}
      </p>


      <div className={styles.grouplist}>
        <p className={`${styles.subtitle}`}>
          Social media
        </p>
        <div className={styles.list}>
          {content.socialmedia.map((item) => (
            <div key={item.id}>
              <a href={item.url} target='_blank' className={`${styles.container} ${styles.glowing}`}>
                <Image
                  className={styles.icon} 
                  src={item.icon} 
                  alt={`${item.name}-logo`} 
                  width={16} 
                  height={16}
                />
                <p className={styles.link}>{item.name}</p>
              </a>
            </div>
          ))}
        </div>

        <p className={`${styles.subtitle}`}>
          Projects
        </p>
        <div className={styles.list}>
          {sortedProjects.map((item) => (
            <div key={item.id}>
              <div
                onClick={() => toggleProject(item.id)} // Llama a toggleProject al hacer clic
                className={`${styles.container} ${styles.glowing}`}
              >
                <Image
                  className={styles.icon}
                  src='/assets/arrow.svg'
                  alt={`${item.name}-logo`}
                  width={16}
                  height={16}
                />
                <p className={styles.link}>{item.name}</p>
              </div>
              {openProjectId === item.id && (
                <div
                  className={styles.projectContent}
                >
                  {/* <Image
                    className={styles.cover}
                    src={item.image} 
                    alt="project-image"
                    fill
                  /> */}
                  <div className={styles.itemYear}>
                    <p>{item.year}</p>
                    {item.inDev && <span className={styles.badge}>In Development</span>}
                  </div>
                  <div className={styles.itemDescription}>
                    <p>{item.description}</p>
                    {/* <Link href={`${item.url}`}>
                      <p>Link al proyecto</p>
                    </Link> */}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
