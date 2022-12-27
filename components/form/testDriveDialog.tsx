import TestDriveForm from "./tesDriveForm";
export default function TestDriveDialog() {
  return (
    <>
      <div className="text-w w-[90vw] md:w-[70vw] lg:w-[50vw] fixed z-50 text-Tnm bg-key px-[3vw] py-[5vh] translate-x-[-50%] left-[50%] top-[50%] translate-y-[-50%]">
        <div className=" bg-prim2 text-center  p-[16px] my-[3vh]  align-middle  ">
          ĐĂNG KÝ NHẬN BÁO GIÁ XE VINFAST MỚI NHẤT
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className=" ">
            <p className="camket-heading"> Báo giá có:</p>
            <ul className="text-Tnm text-w m-[2vh] list-disc">
              <li className="">Báo Giá Giảm 10% Trực Tiếp vào Giá Bán</li>
              <li className="">Miễn lãi suất trong 2 năm (Lãi suất về 0%) </li>
              <li className="">Phương Án Trả Góp, Lãi Suất / Tháng</li>
            </ul>
            <p className="">
              * Ngay sau khi nhận được yêu cầu chúng tôi sẽ gửi Báo giá Ưu đãi
              đến quý khách trong thời gian sớm nhất.
            </p>
          </div>
          <div className=" ">
            <TestDriveForm></TestDriveForm>
          </div>
        </div>
      </div>
    </>
  );
}
//
