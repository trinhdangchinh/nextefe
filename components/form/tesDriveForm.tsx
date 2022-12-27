import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "./input";
let schema = yup.object().shape({
  name: yup
    .string()
    .typeError("Phải là chữ")
    .required("Không để trống")
    .max(40, "Nhiều nhất 40 ký tự"),
  phoneNum: yup
    .number()
    .required("Không để trống")
    .typeError("Phải là số")
    .min(10, "Ít nhất 10 chữ số"),
});
const cars = ["Vf9", "Vf8", "Vfe34", "Fadil", "LuxA 2.0"];
let dayTime = new Date();
export default function TestDriveForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log("render lai");

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  const classNormal =
    " border-solid border-[1px] w-[100%] mt-[2px] p-[2px] focus:box-border box-border focus:border-[1px] rounded-[4px] text-Tnm placeholder:text-Tsm ";
  const classInvalid = " border-prim focus:border-prim ";
  const classValid = " border-key ";
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="block px-[10px] ">
        <div className="text-Tnm">
          {"Báo giá xe ngày " +
            dayTime.getDate() +
            "/" +
            (dayTime.getMonth() + 1) +
            "/" +
            dayTime.getFullYear()}
        </div>
        <label htmlFor="cars" className=" ">
          Chọn xe
        </label>
        <select
          {...register("car")}
          id="cars"
          className={classNormal + "text-key"}
        >
          {cars.map((car, i) => (
            <option key={i} value={car}>
              {car}
            </option>
          ))}
        </select>

        <Input
          register={register}
          error={errors}
          className={classNormal}
          classErrorName={classInvalid}
          classNormalName={classValid}
          label="Họ và Tên"
          id="name"
          required
        />

        <Input
          register={register}
          error={errors}
          label="Số điện thoại"
          id="phoneNum"
          required
          className={classNormal}
          classErrorName={classInvalid}
          classNormalName={classValid}
        />
        <input
          type="checkbox"
          id="req1"
          {...register("installment")}
          value="true"
        />
        <label htmlFor="req1"> Tính trả góp</label>
        <br />
        <input
          type="checkbox"
          id="req2"
          {...register("totalCost")}
          value="true"
        />
        <label htmlFor="req2"> Tính lăn bánh</label>
        <br />
        <textarea
          id="request"
          {...register("request")}
          className={classNormal}
          placeholder=" Yêu cầu khác"
        ></textarea>
        <div>
          <input
            type="submit"
            value="GỬI ĐĂNG KÝ"
            className="bg-linkb mt-[10px] px-[20px] py-[10px] rounded-[4px] w-[100%] "
          />
        </div>
      </form>
    </div>
  );
}
