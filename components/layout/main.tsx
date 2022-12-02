import * as React from "react";
import { LayoutProps } from "../../models/common";
import Link from "next/link";
import Image from "next/image";
export interface IMainLayoutProps {}
import sitelogo from "../../public/logo-vinfast-500x150.png";
import FooterSideNav from "../footerSideNav";
import FooterMobNav from "../footerMobNav";
import FooterAbout from "../footerAbout";

const menuList = ["VFe34", "VF7", "VF8", "VF9"];

export default function MainLayout({ children }: LayoutProps) {
  return (
    <>
      <header className="header__nav h-20 bg-key ">
        <div className="flex h-full mx-[1vw] items-center">
          <div className="header__logo w-52 relative ml-[5vw]">
            <Link href="http://vinfastauto3s.vn">
              <Image
                src={sitelogo}
                className="object-contain relative"
                alt="vinfast logo"
              />
            </Link>
          </div>

          {/* <!-- Nav PC --> */}
          <div className="nav__pc relative flex items-center invisible lg:visible mx-[80px] w-[calc(100%-500px)] text-w">
            <ul className="nav__list flex ">
              {menuList.map((item) => (
                <li key={item} className="nav__link mx-[1vw]">
                  <Link className="typo-1 text-cw" href="">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="header_laithu-btn right-0 absolute bg-prim px-6 py-2  h-min rounded-[10px] onClick=showHide('header-form_shh')">
              ĐĂNG KÝ LÁI THỬ
            </div>
          </div>

          {/* <!-- End Nav PC -->
                <!-- Nav mob --> */}
          <div className="nav_mob visible lg:invisible w-[80px] h-[100%] flex items-center">
            <div className="w-[30px] h-[30px] text-w ">
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
              </svg>
            </div>

            <div className="w-[30px] h-[30px] text-w invisible ">
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
              </svg>
            </div>

            <div className="nav_mob l-0 m-uh c-uh ">
              {/* <div id="nav__mb" className="nav__mb nav__mb-showhide l-0 m-uh c-12">
                        <ul className="nav__mb-list">
                            <li className="col c-9 box-m1 ">
                                <a href="" className="nav__mb-link typo-1 text-cw">Danh muc
                                </a>
                            </li>
                            <li className="col c-9 box-m1 ">
                                <a href="" className="nav__mb-link typo-1 text-cw">Danh muc
                                </a>
                            </li>
                            <li className="col c-9 box-m1 ">
                                <a href="" className="nav__mb-link typo-1 text-cw">Danh muc
                                </a>
                            </li>
                            <li className="col c-9 box-m1 ">
                                <a href="" className="nav__mb-link typo-1 text-cw">Danh muc
                                </a>
                            </li>
                        </ul>
                    </div> */}
            </div>
          </div>
          {/* <!-- End nav mobile --> */}
        </div>
        <div className="sk__overlay nav__mb-showhide header-form_shh"></div>
      </header>
      <div>{children}</div>
      <footer>
        <FooterAbout></FooterAbout>
        <FooterSideNav></FooterSideNav>
        <FooterMobNav></FooterMobNav>
      </footer>
    </>
  );
}
