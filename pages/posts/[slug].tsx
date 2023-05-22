import { BiLeftArrowAlt } from "react-icons/bi";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import styles from './posts.module.css'
import { GetStaticProps, GetStaticPaths } from "next";
import { getBlogEntries } from "../api/utils";
import Link from "next/link";
import PostBody from "../../app/components/Posts/post-body";


export default function Post({ post }){

   const router = useRouter();

   if(router.isFallback && !post) {
      return <ErrorPage statusCode={404} />
   }

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

export const getStaticProps: GetStaticProps = async ({params}) => {
   const slug = params?.slug; // Obtener el slug de la URL
   const posts = await getBlogEntries();
   const post = posts.find((post) => post.slug === slug); // Buscar el post por el slug
   const filteredPosts = posts.filter((post) => post.slug); // Filtrar los posts sin slug
   return {
     props: { posts: filteredPosts, post },
   };
};

export async function getStaticPaths() {
   const allPosts = await getBlogEntries();
   const paths = allPosts.map(({ slug }) => ({ params: { slug }}));
   return {
     paths,
     fallback: true,
   }
}
