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

let key = 1;

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
          <NavMob menu={menuList} />
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
