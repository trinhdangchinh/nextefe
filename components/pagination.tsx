function Pagination(props) {
  return (
    <div>
      <div className="pagination topbot-lmg box-v">
        <a href={props.prev ? props.prev : "./"}>
          <span>« Trước</span>
        </a>

        {props.pages.map((pageNum, i) => (
          <a
            key={i}
            className="pagination-number inline-block w-[30px] h-[30px] m-[10px] rounded-[100%] bg-gray1 "
            href={pageNum.link}
          >
            <span>{pageNum.num}</span>
          </a>
        ))}
        <a href={props.next ? props.next : "./"}>
          <span className="">Tiếp »</span>
        </a>
      </div>
    </div>
  );
}

export default Pagination;
