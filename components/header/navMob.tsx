import React from "react";
import Link from "next/link";
export default function NavMob(props) {
  const menuList = ["VFe34", "VF7", "VF8", "VF9"];

  return (
    <>
      <div className="w-[30px] h-[30px] text-w l-[-50%] translate-x-[50%] top-[50%] translate-y-[50%] ">
        {props.btn}
      </div>
      <div
        id="nav__mb"
        className="nav__mb nav__mb-showhide bg-prim fixed top-[80px] left-0 w-[100%] z-50 px-[7vw] py-[2vh] hidden"
      >
        <ul className="nav__mb-list grid ">
          {props.menu.map((item, i) => (
            <li key={i} className="my-[1vh]">
              <a href={item.link} className="nav__mb-link text-Tnm text-w ">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
