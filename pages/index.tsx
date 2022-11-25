// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/globals.css";
// import Card from "./components/card.js";
// import MainLayout from "../layout/main";
import Link from "next/link";
import { GetStaticProps, GetStaticPropsContext } from "next";
import * as React from "react";
import MainLayout from "../layout";
export interface PostListPageProps {
  posts: any[];
}
export default function PostListPage({ posts }: PostListPageProps) {
  return (
    <div>
      Post List Page
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
PostListPage.Layout = MainLayout;
// export default function Home() {
//   return (
//     <div>
//       <div className="max-w-7xl mx-auto p-vw grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div>
//           <Card />
//         </div>
//         <div>
//           <Card />
//         </div>
//         <div>
//           <Card />
//         </div>
//       </div>
//     </div>
//   );
// }
// Home.Layout = MainLayout;

export const getStaticProps: GetStaticProps<PostListPageProps> = async (
  context: GetStaticPropsContext
) => {
  const response = await fetch("https://vinfastauto3s.vn/wp-json/wp/v2/posts");
  const data = await response.json();
  const postTits = data.map((x: any) => ({
    id: x.id,
    title: x.title.rendered,
  }));
  // console.log(postTits);
  return {
    props: {
      posts: postTits,
    },
  };
};
