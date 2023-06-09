import { formatDistanceToNow } from 'date-fns';

const space_id = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

const client = require('contentful').createClient({ 
  space: space_id ? space_id : '',
  environment: 'master',
  accessToken: accessToken ? accessToken : '',
});

// Retrieve the list of posts from Contentful
export async function getBlogEntries() {
  const posts = await client.getEntries({ content_type: 'posts' });
   return posts.items.map((post) => ({
    id: post.sys.id,
    title: post.fields.title,
    author: post.fields.author,
    content: JSON.stringify(post.fields.content),
    date: typeof post.fields.date === 'string' || typeof post.fields.date === 'number'
      ? formatDistanceToNow(new Date(post.fields.date), { addSuffix: true })
      : '',
    slug: post.fields.slug,
  }));
}

// Retrieve the list of projects from Contentful
export async function getProjectEntries() {
  const projects = await client.getEntries({ content_type: 'projects' });
  return projects.items.map((project) => ({
    id: project.sys.id,
    title: project.fields.title,
    content: JSON.stringify(project.fields.content),
    slug: project.fields.slug,
  }));
}