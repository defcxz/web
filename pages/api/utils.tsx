import { createClient } from 'contentful';
import { formatDistanceToNow } from 'date-fns';

const client = createClient({
  space: 'xyjsqq0bqm3o',
  environment: 'master',
  accessToken: 'y29Liiu0I_IP6qsRYRLtmn5kuRLfUv9toNSGYgjKuiE'
});

// Retrieve the list of posts from Contentful
export async function getBlogEntries() {
   const posts = await client.getEntries({ content_type: 'posts' });
   return posts.items.map((post) => ({
    id: post.sys.id,
    title: post.fields.title,
    author: post.fields.author,
    content: JSON.stringify(post.fields.content),
    date: formatDistanceToNow(new Date(post.fields.date), { addSuffix: true }),
  }));
}