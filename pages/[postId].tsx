import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/dist/client/router";
import * as React from "react";
import Link from "next/link";
import MainLayout from "../components/layout";
import PostLayout from "../components/layout/postpage";

export interface PostPageProps {
  post: any;
}
// doi so 'post' lay duoi ham getStaticProps
export default function PostDetailPage({ post }: PostPageProps) {
  const router = useRouter();

  const [postList, setPostList] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://vinfastauto3s.vn/wp-json/wp/v2/posts"
      );
      const data = await response.json();
      const postTits = data.map((x: any) => ({
        id: x.id,
        title: x.title.rendered,
      }));
      setPostList(postTits);
    })();
  }, []);

  return (
    <div>
      <div>
        Post List Page
        <ul>
          {postList.map((post) => (
            <li key={post.id}>
              <Link href={`/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <h1>ParamsPage</h1>
      <p>Query: {JSON.stringify(router.query)}</p>
      <br />
      <h1>{post.title.rendered}</h1>
      <br />
      {post.excerpt.rendered}
    </div>
  );
}

PostDetailPage.Layout = MainLayout;

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("https://vinfastauto3s.vn/wp-json/wp/v2/posts");
  const data = await response.json();
  const idAray = data.map((post: any) => ({
    params: { postId: post.id.toString() },
  }));
  // console.log(idAray);
  return {
    paths: idAray,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async (
  context: GetStaticPropsContext
) => {
  // console.log("context", context.params?.postId);
  const postId = context.params?.postId;
  if (!postId) return { notFound: true };

  const response = await fetch(
    `https://vinfastauto3s.vn/wp-json/wp/v2/posts/${postId}`
  );
  const data = await response.json();

  return {
    props: {
      // post nay de render tren content
      post: data,
    },
  };
};
