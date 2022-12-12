// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/globals.css";

import Link from "next/link";
import Image from "next/image";
import { GetStaticProps, GetStaticPropsContext } from "next";
import * as React from "react";
import MainLayout from "../components/layout";
import banner from "../public/post-banner-vinfast-20.08.21.jpg";
import Card from "../components/card";
import Pagination from "../components/pagination";
import HomeCardItem from "../components/homeCardItem";

import ProductCard from "../components/productCard";

export interface PostListPageProps {
  posts: any[];
}
const homeCardItems = [
  {
    text: "ĐỊA CHỈ ĐẠI LÝ",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="location-arrow"
        className="svg-inline--fa fa-location-arrow fa-w-16"
        role="img"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"
        />
      </svg>
    ),
    link: "./",
  },
  {
    text: "TẢI BÁO GIÁ XE",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" />
      </svg>
    ),
    link: "./",
  },
  {
    text: "HỖ TRỢ TRẢ GÓP",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="piggy-bank"
        className="svg-inline--fa fa-piggy-bank fa-w-18"
        role="img"
        viewBox="0 0 576 512"
      >
        <path
          fill="currentColor"
          d="M560 224h-29.5c-8.8-20-21.6-37.7-37.4-52.5L512 96h-32c-29.4 0-55.4 13.5-73 34.3-7.6-1.1-15.1-2.3-23-2.3H256c-77.4 0-141.9 55-156.8 128H56c-14.8 0-26.5-13.5-23.5-28.8C34.7 215.8 45.4 208 57 208h1c3.3 0 6-2.7 6-6v-20c0-3.3-2.7-6-6-6-28.5 0-53.9 20.4-57.5 48.6C-3.9 258.8 22.7 288 56 288h40c0 52.2 25.4 98.1 64 127.3V496c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-48h128v48c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-80.7c11.8-8.9 22.3-19.4 31.3-31.3H560c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16zm-128 64c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM256 96h128c5.4 0 10.7.4 15.9.8 0-.3.1-.5.1-.8 0-53-43-96-96-96s-96 43-96 96c0 2.1.5 4.1.6 6.2 15.2-3.9 31-6.2 47.4-6.2z"
        />
      </svg>
    ),
    link: "./",
  },
];
const postNews = [
  {
    img: "/CE16.png",
    title: "VINFAST LUXSA 2.0",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore veritatis quisquam, vel dicta minus eius magnam voluptatem assumenda, tempore, reprehenderit distinctio    nostrum aperiam doloribus illum vitae consequatur error modi? Exercitationem!",
    date: "21/08/2021",
  },
  {
    img: "/CE16.png",
    title: "VINFAST LUXSA 3.0",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore veritatis quisquam, vel dicta minus eius magnam voluptatem assumenda, tempore, reprehenderit distinctio    nostrum aperiam doloribus illum vitae consequatur error modi? Exercitationem!",
    date: "21/08/2021",
  },
  {
    img: "/CE16.png",
    title: "VINFAST LUXSA 3.0",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore veritatis quisquam, vel dicta minus eius magnam voluptatem assumenda, tempore, reprehenderit distinctio    nostrum aperiam doloribus illum vitae consequatur error modi? Exercitationem!",
    date: "21/08/2021",
  },
];
const productList = [
  {
    title: "VINFAST LuxA 2.0",
    img: "/CE16.png",
    alt: "anh",
    link: "./",
  },
  {
    title: "VINFAST LuxSA 2.0",
    img: "/CE16.png",
    alt: "anh",
    link: "./",
  },
  {
    title: "VINFAST Fadil",
    img: "/CE16.png",
    alt: "anh",
    link: "./",
  },
];
const pageNumArray = [
  { num: 1, link: "./" },
  { num: 2, link: "./" },
  { num: 3, link: "./" },
  { num: 4, link: "./" },
  { num: 5, link: "./" },
];

export default function HomePage({ posts }: PostListPageProps) {
  return (
    <div>
      <div className="body_content justify-items-center">
        <div className="grid grid-cols-12 gap-4 max-w-5xl mx-auto px-[5vw]">
          <div className="col-start-1 col-span-12">
            <Link href="">
              <Image className="" src={banner}></Image>
            </Link>
          </div>

          {homeCardItems.map((item, i) => (
            <div
              key={i}
              className="topbot-mmg  col-span-12 md:col-span-4 mt-[5vh]  shadow-[0_0_10px_grey] h-[150px] "
            >
              <HomeCardItem
                svg={item.svg}
                text={item.text}
                href={item.link}
              ></HomeCardItem>
            </div>
          ))}

          <div className="mt-[5vh] col-span-12 text-center uppercase text-Tmd">
            CÁC DÒNG SẢN PHẨM CHÍNH VINFAST
          </div>
          {productList.map((product, i) => (
            <div
              key={i}
              className="product_card col-span-12 md:col-span-4 mt-[5vh]  shadow-[0_0_10px_grey] h-fit"
            >
              <ProductCard
                title={product.title}
                src={product.img}
                alt={product.alt}
                href={product.link}
              ></ProductCard>
            </div>
          ))}
          <div className="mt-[5vh] col-span-12 text-center uppercase text-Tmd">
            tin tức -sự kiện
          </div>
          {postNews.map((post, index) => (
            <div
              key={index}
              className="product_card col-span-12 md:col-span-4 mt-[5vh]  shadow-[0_0_10px_grey] h-fit"
            >
              <Card
                className=""
                src={post.img}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                href=""
              />
            </div>
          ))}
          <div className="my-[5vh] col-span-12 text-center ">
            <Pagination pages={pageNumArray} />
          </div>
        </div>
      </div>
      {/* Post List Page
      <ul className="">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul> */}
    </div>
  );
}
HomePage.Layout = MainLayout;

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
