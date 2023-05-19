import { useRouter } from "next/router";
import ErrorPage from "next/error";

import { GetStaticProps } from "next";
import { getBlogEntries } from "../api/utils";

export default function Post({ post }){

   const router = useRouter();

   if(!router.isFallback && !post) {
      return <ErrorPage statusCode={404} />
   }

   return (
   <h1>{post.title}</h1>
   );
}

export const getStaticProps: GetStaticProps = async () => {
   const posts = await getBlogEntries();
   return {
     props: { posts },
   };
};
 

export async function getStaticPaths() {
   const allPosts = await getBlogEntries();
   return {
     paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
     fallback: true,
   }
}