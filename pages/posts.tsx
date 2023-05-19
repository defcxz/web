import { GetStaticProps } from "next";
import { getBlogEntries } from "./api/utils";

import styles from '../app/styles/posts.module.css'
import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
   const posts = await getBlogEntries();
   return {
     props: { posts },
   };
};
 

export default function Posts( { posts }) {
   return (
      <main className={styles.main}>
         <h1 className={styles.title}>Posts</h1>
         <p className={styles.subtitle}>Porque sí, también me gusta escribir.</p>
         {posts.map((post) => (
            <Link href={`/posts/${post.id}`} key={post.id}>
               <li className={styles.list}>
                  <h2>{post.title}</h2>
                  <p className={styles.date}>{post.date}</p>
               </li> 
            </Link>
         ))}  
      </main>
   );
}
