import content from '../../content.json';

async function getProject(slug) {
  const res = await content.projects
  const data = await res
 
  const project = data.find((p) => p.slug === slug);

  console.log(project)

  return project
}

export default async function Project(slug) {
  const project = await getProject(slug);
  console.log(project);
  return (
    <div> 
      {/* <h1>{project?.name}</h1>
      <p>{project?.description}</p> */}
    </div>
  );
}

// En este ejemplo, se espera que el slug se pase como una prop llamada "slug".
