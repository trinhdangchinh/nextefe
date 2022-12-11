import * as React from "react";
import { LayoutProps } from "../../models/common";
import Link from "next/link";
import Image from "next/image";
export interface IMainLayoutProps {}
import sitelogo from "../../public/logo-vinfast-500x150.png";
import FooterSideNav from "../footer/footerSideNav";
import FooterMobNav from "../footer/footerMobNav";
import FooterAbout from "../footer/footerAbout";
import NavMob from "../header/navMob";

const menuList = [
  { text: "VFe34", link: "./" },
  { text: "VF7", link: "./" },
  { text: "VF8", link: "./" },
  { text: "VF9", link: "./" },
];

const menuBtn = [
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="bars"
    className="svg-inline--fa fa-bars fa-w-14"
    role="img"
    viewBox="0 0 448 512"
  >
    <path
      fill="currentColor"
      d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
    />
  </svg>,
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="times"
    className="svg-inline--fa fa-times fa-w-11"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 352 352"
  >
    <path
      id="svg_1"
      d="m207.6,161l107.72,-107.72c6.23,-6.23 6.23,-16.34 0,-22.58l-25.03,-25.03c-6.23,-6.23 -16.34,-6.23 -22.58,0l-107.71,107.73l-107.72,-107.72c-6.23,-6.23 -16.34,-6.23 -22.58,0l-25.02,25.02c-6.23,6.23 -6.23,16.34 0,22.58l107.72,107.72l-107.72,107.72c-6.23,6.23 -6.23,16.34 0,22.58l25.03,25.03c6.23,6.23 16.34,6.23 22.58,0l107.71,-107.73l107.72,107.72c6.23,6.23 16.34,6.23 22.58,0l25.03,-25.03c6.23,-6.23 6.23,-16.34 0,-22.58l-107.73,-107.71z"
      fill="currentColor"
    ></path>
  </svg>,
];

export default function MainLayout({ children }: LayoutProps) {
  return (
    <>
      <header className="header__nav h-[80px] w-[100vw] bg-key fixed z-50 top-0">
        <div className="flex h-full mx-[1vw] items-center ">
          <div className="header__logo  relative ml-[5vw]">
            <a href="http://vinfastauto3s.vn">
              <img
                src="./logo-vinfast-500x150.png"
                className="max-h-[50px]"
                alt="vinfast logo"
              />
            </a>
          </div>
          {/* <!-- Nav PC --> */}

          <div className="nav__pc relative  hidden md:block w-[calc(100vw-300px)]">
            <div className="flex items-center relative mx-[5vw]  text-w">
              <ul className="nav__list flex ">
                {menuList.map((item, i) => (
                  <li key={i} className="nav__link mx-[1vw]">
                    <a key={i} className="typo-1 text-cw" href="">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="header_laithu-btn right-0  absolute bg-prim px-6 py-2  h-min rounded-[10px] onClick=showHide('header-form_shh')">
                ĐĂNG KÝ LÁI THỬ
              </div>
            </div>
          </div>

          {/* <!-- End Nav PC -->*/}
        </div>

        <div className="nav_mob md:hidden w-[80px] h-[100%] absolute right-0 top-0 ">
          <NavMob menu={menuList} btn={menuBtn[1]} />
        </div>
      </header>
      <div className="mt-[80px]"></div>

      <div>{children}</div>
      <footer>
        <FooterAbout></FooterAbout>
        <FooterSideNav></FooterSideNav>
        <FooterMobNav></FooterMobNav>
      </footer>
    </>
  );
}
