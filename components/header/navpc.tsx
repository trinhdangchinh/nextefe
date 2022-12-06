import React from "react";
import Link from "next/link";
export default function NavPc() {
  const menuList = ["VFe34", "VF7", "VF8", "VF9"];

  return (
    <div className="nav__pc relative flex items-center  lg:visible mx-[80px] w-[calc(100%-500px)] text-w">
      {/* <!-- Nav PC --> */}
      <ul className="nav__list flex ">
        {menuList.map((item, i) => (
          <li key={i} className="nav__link mx-[1vw]">
            <Link key={i} className="typo-1 text-cw" href="">
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <div className="header_laithu-btn right-0 absolute bg-prim px-6 py-2  h-min rounded-[10px] onClick=showHide('header-form_shh')">
        ĐĂNG KÝ LÁI THỬ
      </div>
      {/* <!-- End Nav PC -->*/}
    </div>
  );
}
