import { createClient } from 'contentful';
import { formatDistanceToNow } from 'date-fns';

const space_id = process.env.CONTENTFUL_SPACE_ID;
const access_token = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;

const client = createClient({
  space: space_id ? space_id : '',
  environment: 'master',
  accessToken: access_token ? access_token : '',
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
