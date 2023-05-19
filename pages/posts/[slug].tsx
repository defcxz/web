import { useRouter } from "next/router";
import ErrorPage from "next/error";

import { GetStaticProps, GetStaticPaths } from "next";
import { getBlogEntries } from "../api/utils";

export default function Post({ post }){

   const router = useRouter();

   if(router.isFallback && !post) {
      return <ErrorPage statusCode={404} />
   }

   return (
      <h1>{post.title}</h1>
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