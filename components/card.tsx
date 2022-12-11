import React from "react";
import { ComponentProps } from "../models/component";
function Card(props) {
  return (
    <div>
      <div className="box-shadow1 card1  ">
        <a href={props.href} className="">
          <div className="img_frame aspect-[3/2] bg-dev object-cover">
            <img
              className="card1__img"
              src={props.src ? props.src : ""}
              alt=""
            />
          </div>
          <div className="card1__text p-[16px] ">
            <h3 className=" card1-heading text-Tnm mb-[8px] ">
              {props.title ? props.title : "Tiêu đề đang cập nhật"}
            </h3>
            <p className="home__news-desc text-Tsm my-[8px]">
              {props.excerpt ? props.excerpt : "Nội dung đang cập nhật"}
            </p>
            <div className="home__news-date text-Tnm mt-[8px] pt-[8px] border-t">
              {props.date ? props.date : "Ngày đang cập nhật"}
            </div>
            {/* <div>{children}</div> */}
          </div>
        </a>
      </div>
    </div>
  );
}

export default Card;
