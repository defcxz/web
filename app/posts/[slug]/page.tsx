'use client';

import { usePathname, useRouter } from "next/navigation";
import { BiLeftArrowAlt } from "react-icons/bi";
import styles from '../posts.module.css';
import { getBlogEntries } from "../../api/utils";
import Link from "next/link";
import PostBody from "../../components/Posts/post-body";


export async function getPostSlug ({params}) {
   const slug = params?.slug; // Obtener el slug de la URL
   const posts = await getBlogEntries();
   const post = posts.find((post) => post.slug === slug); // Buscar el post por el slug
   const filteredPosts = posts.filter((post) => post.slug); // Filtrar los posts sin slug
   return {
     props: { posts: filteredPosts, post },
   };
};


export async function generateStaticParams() {
   const allPosts = await getBlogEntries();
   const paths = allPosts.map(({ slug }) => ({ params: { slug }}));
   return [{
     paths,
     fallback: true,
   }]
}

export default async function Post({ post }){

   return (
      <main className={styles.main}>
         <div className={styles.header}>
            <Link href="/posts/">
               <BiLeftArrowAlt className={styles.back} height={100} width={100}/>
            </Link>
            <h1 className={styles.title}>{post.title}</h1>
         </div>
         <p className={styles.dateInPost}>{post.date}</p>
         <PostBody content={post.content} />
      </main>
   );
}


