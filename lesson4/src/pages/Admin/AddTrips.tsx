import { useLoaderData, useNavigate } from "react-router-dom";
import { IBusHouse } from "../../interfaces";
import { useForm, SubmitHandler } from "react-hook-form";
import { postTrip } from "../../api/trips.api";

type AddTripForm = {
  busHouseId: string;
  startTime: string;
  fromStation: string;
  toStation: string;
  station: string;
  seats: number;
  price: number;
};
const AddTrip = () => {
  const navi = useNavigate();
  const busHouses = useLoaderData() as IBusHouse[];
  const {
    register,
    handleSubmit,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    watch,
    formState: { errors },
  } = useForm<AddTripForm>();
  const onSubmit: SubmitHandler<AddTripForm> = async (data) => {
    try {
      await postTrip(data);
      navi("/admin/trips");
    } catch {
      alert("Thêm mới chuyến đi thất bại");
    }
  };
  return (
    <form className="w-full h-1/2" onSubmit={handleSubmit(onSubmit)}>
      <div className=" bg-white p-10">
        <div className="mt-8 md:flex items-center">
          <div className="flex flex-col">
            <label
              htmlFor="country"
              className="mb-3 text-lg font-medium leading-none text-gray-800"
            >
              Nhà xe
            </label>
            <div className="">
              <select
                {...register("busHouseId", { required: "Dữ liệu bắt buộc" })}
                className="w-64 bg-gray-100 text-[13px] font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              >
                {busHouses &&
                  busHouses.map((item) => (
                    <option value={item.id}>{item.name}</option>
                  ))}
              </select>
              <p className="text-red-500 text-sm italic">
                {errors.busHouseId?.message}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 md:flex items-center">
          <div className="flex flex-col">
            <label className="mb-3 text-lg font-medium leading-none text-gray-800">
              Thời gian bắt đầu
            </label>
            <input
              type="datetime-local"
              {...register("startTime")}
              className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
            />
          </div>
          <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
            <label className="mb-3 text-lg font-medium leading-none text-gray-800">
              Số ghế
            </label>
            <input
              type="number"
              {...register("seats")}
              className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              min={0}
            />
          </div>
          <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
            <label className="mb-3 text-lg font-medium leading-none text-gray-800">
              Giá
            </label>
            <input
              type="number"
              {...register("price")}
              className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              min={0}
            />
          </div>
        </div>
        <div className="mt-12 md:flex items-center">
          <div className="flex flex-col">
            <label
              htmlFor="country"
              className="mb-3 text-lg font-medium leading-none text-gray-800"
            >
              Bến xe
            </label>
            <div className="">
              <input
                type="text"
                {...register("station")}
                className="w-64 bg-gray-100 text-[13px] font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              />
            </div>
          </div>
          <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
            <label
              htmlFor="country"
              className="mb-3 text-lg font-medium leading-none text-gray-800"
            >
              Điểm đi
            </label>
            <div className="">
              <input
                type="text"
                {...register("fromStation", { required: "Dữ liệu bắt buộc" })}
                className="w-64 bg-gray-100 text-[13px] font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              />
              <p className="text-red-500 text-sm italic">
                {errors.fromStation?.message}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
            <label
              htmlFor="country"
              className="mb-3 text-lg font-medium leading-none text-gray-800"
            >
              Điểm đến
            </label>
            <div className="">
              <input
                {...register("toStation")}
                type="text"
                className="w-64 bg-gray-100 text-[13px] font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="flex items-center justify-center py-4 px-7 focus:outline-none bg-white border rounded border-gray-400 mt-7 md:mt-14 hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
        >
          <span className="text-sm font-medium text-center text-gray-800 capitalize">
            Thêm mới chuyến xe
          </span>
          <svg
            className="mt-1 ml-3"
            width={12}
            height={8}
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.01 3H0V5H8.01V8L12 4L8.01 0V3Z" fill="#242731" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default AddTrip;
