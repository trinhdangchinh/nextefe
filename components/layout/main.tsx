import * as React from "react";
import { LayoutProps } from "../../models/common";
import Link from "next/link";
import Image from "next/image";
export interface IMainLayoutProps {}
import sitelogo from "../../public/logo-vinfast-500x150.png";

const menuList = ["VFe34", "VF7", "VF8", "VF9"];

export default function MainLayout({ children }: LayoutProps) {
  return (
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
        <div className="nav__pc relative flex invisible lg:visible mx-[80px] w-[calc(100%-500px)] text-w">
          <ul className="nav__list flex ">
            {menuList.map((item) => (
              <li key={item} className="nav__link mx-[1vw]">
                <Link className="typo-1 text-cw" href="">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <div className="header_laithu-btn right-0 absolute bg-prim px-6 py-2 content-center top-[50%] translate-y-[-50%] h-min rounded-[10px] onClick=showHide('header-form_shh')">
            ĐĂNG KÝ LÁI THỬ
          </div>
        </div>

        {/* <!-- End Nav PC -->
                <!-- Nav mob --> */}
        {/* <div className="nav_mob l-0 m-uh c-uh invisible">
            <div
              id="nav__mb"
              className="nav__mb nav__mb-showhide l-0 m-uh c-12"
            >
              <ul className="nav__mb-list">
                <li className="col c-9 box-m1 ">
                  <Link href="" className="nav__mb-link typo-1 text-cw">
                    Danh muc
                  </Link>
                </li>
                <li className="col c-9 box-m1 ">
                  <Link href="" className="nav__mb-link typo-1 text-cw">
                    Danh muc
                  </Link>
                </li>
                <li className="col c-9 box-m1 ">
                  <Link href="" className="nav__mb-link typo-1 text-cw">
                    Danh muc
                  </Link> */}
        {/* </li>
                <li className="col c-9 box-m1 ">
                  <Link href="" className="nav__mb-link typo-1 text-cw">
                    Danh muc
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}
        {/* <!-- End nav mobile --> */}
      </div>
      <div className="sk__overlay nav__mb-showhide header-form_shh"></div>
      <br />
      <br />
      <div>{children}</div>
    </header>
  );
}
