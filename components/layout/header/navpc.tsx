


export default function NavPc (){
    return ( {/* <!-- Nav PC --> */}
        <div className="nav__pc relative flex items-center hidden lg:visible mx-[80px] w-[calc(100%-500px)] text-w">
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
        </div>

        {/* <!-- End Nav PC -->*/})
}