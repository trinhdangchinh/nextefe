import Link from "next/link";
import * as React from "react";
import { LayoutProps } from "../models/common";

async function ListPost({ children }: LayoutProps) {
  const res = await fetch("https://vinfastauto3s.vn/wp-json/wp/v2/posts");
  const data = await res.json();
  return (
    <div>
      <div>
        Post List Page
        <ul>
          {data.map((post: any) => (
            <li key={post.title.rendered}>
              <Link href={post.id}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default async function PostLayout({ children }: LayoutProps) {
  return ListPost;
}
