import React from "react";

function Card() {
  return (
    <div>
      <div className="box-shadow1 card1 ">
        <a href="">
          <div className="img_frame aspect-[3/2] bg-dev object-cover">
            <img className="card1__img" src="/CE16.png" alt="" />
          </div>
          <div className="card1__text p-[16px] text-center text-Tnm ">
            <span className="">VINFAST LuxA 2.0</span>
            <div className="btn-outline text-nm mx-[30px] my-[20px]  border-solid border-[2px] border-prim rounded-[3px] ">
              TÌM HIỂU THÊM
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Card;
