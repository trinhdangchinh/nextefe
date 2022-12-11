import React from "react";
import { ComponentProps } from "../models/component";
function ProductCard(props) {
  return (
    <div>
      <div className="box-shadow1 card1 ">
        <a href={props.href}>
          <div className="img_frame aspect-[3/2] bg-dev object-cover">
            <img className="card1__img" src={props.src} alt={props.alt} />
          </div>
          <div className="card1__text p-[16px] text-center text-Tnm ">
            <span className="">{props.title}</span>
            <div className="btn-outline text-nm mx-[30px] my-[20px]  border-solid border-[2px] border-prim rounded-[3px] ">
              TÌM HIỂU THÊM
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
