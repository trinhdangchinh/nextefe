import React from "react";

function Pagination() {
  const pageNumArray = [1, 2, 3, 4, 5];

  return (
    <div>
      <div className="pagination topbot-lmg box-v">
        <a href="">
          <span>« Trước</span>
        </a>

        {pageNumArray.map((pageNum) => (
          <a
            key={pageNum}
            className="pagination-number inline-block w-[30px] h-[30px] m-[10px] rounded-[100%] bg-gray1 "
            href=""
          >
            <span>{pageNum}</span>
          </a>
        ))}
        <a href="">
          <span className="">Tiếp »</span>
        </a>
      </div>
    </div>
  );
}

export default Pagination;
