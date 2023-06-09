import Link from "next/link";
import { getBlogEntries } from "../api/utils";
import styles from './posts.module.css'

async function getPosts() {
  const posts = await getBlogEntries();
  return posts;
}

export default async function Posts() {
  const posts = await getPosts();
   
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Posts</h1>
      <p className={styles.subtitle}>Porque sí, también me gusta escribir.</p>
      {posts.map((post) => (
        <Link href={`/posts/${post.slug}`} key={post.id}>
            <>
            <li className={styles.list}>
              <h2>{post.title}</h2>
              <p className={styles.date}>{post.date}</p>
            </li>
            </>
        </Link>
      ))}
    </main>
   );
}