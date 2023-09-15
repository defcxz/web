"use client";

import styles from './projects.module.css';
import Image from 'next/image';
import content from '../content.json';
import { useState } from 'react';

export default function Projects() {

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
    <main>
      <p className={`${styles.subtitle}`}>
        Projects
      </p>
      <div className={styles.list}>
        {sortedProjects.map((item) => (
          <div key={item.id}>
            <div
              onClick={() => toggleProject(item.id)} // Llama a toggleProject al hacer clic
              className={`${styles.container2} ${styles.glowing}`}
            >
              <Image src='/assets/arrow.svg' alt={`${item.name}-logo`} width={60} height={60} />
              <p className={styles.link}>{item.name}</p>
            </div>
            {openProjectId === item.id && (
              <div
                className={styles.projectContent}
              >
                <div className={styles.itemYear}>
                  <p>{item.year}</p>
                </div>
                <div className={styles.itemDescription}>
                  <p>{item.description}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  )
}
