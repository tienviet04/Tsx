import { useRevalidator } from "react-router-dom";
import { deleteTrip } from "../../../api/trips.api";
import { ITrip } from "../../../interfaces";
import { Link } from "react-router-dom";

const Trip = (props: { data: ITrip }) => {
  const revali = useRevalidator();

  if (!props.data.busHouse) {
    return <div>NotFound.</div>;
  }

  const handleDelete = async (id?: number | string) => {
    try {
      if (id) {
        const confirmation = window.confirm("Bạn có chắc chắn muốn xoá không?");
        if (confirmation) {
          deleteTrip(id);
          revali.revalidate(); // Tự động cập nhật dữ liệu sau khi xoá
        }
      }
    } catch {
      alert("Xoá sản phẩm thất bại");
    }
  };

  return (
    <>
      <div className="bg-white  rounded-lg border border-gray-300 mb-6">
        <div className="grid grid-cols-1 gap-3 py-3 mx-4 ">
          <div className="flex">
            <div className="ml-3">
              <div>
                <p className="text-lg ">
                  <strong>Mã chuyến: {props.data.id}</strong>{" "}
                </p>
              </div>
              <div>
                <p className="my-2 text-xl">{props.data.busHouse.name}</p>
              </div>
              <div>
                <p className="text-lg">
                  <strong className="mr-1">Số ghế:</strong>
                  {props.data.seats}
                </p>
              </div>
              <div>
                <p className=" my-2 text-lg">
                  <strong className="mr-1">Khởi hành:</strong>
                  {props.data.startTime.toLocaleString()}
                </p>
              </div>
              <div>
                <p className=" my-2 text-lg">
                  <strong className="mr-1">Điểm đi:</strong>
                  {props.data.fromStation}
                </p>
              </div>
            </div>
            <div className=" mt-6 ml-auto mr-24 flex flex-col  gap-3 ">
              <div>
                <p className=" my-2 text-lg">
                  <strong className="mr-1">SĐT nhà xe:</strong>
                  {props.data.busHouse.phone}
                </p>
              </div>
              <div>
                <p className=" my-2 text-lg">
                  <strong className="mr-1">Bến xe:</strong>
                  {props.data.station}
                </p>
              </div>
              <div>
                <p className=" my-2 text-lg">
                  <strong className="mr-1">Điểm đến</strong>
                  {props.data.toStation}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex ml-[860px] mb-2">
          <Link to={"/admin/trips/" + props.data.id}>
            <button className="mr-2 nline-block rounded bg-gray-200 px-4 py-2 text-[12px] font-medium text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
              Sửa
            </button>
          </Link>
          <button
            onClick={() => handleDelete(props.data.id)}
            className="inline-block rounded bg-gray-200 px-4 py-2 text-[12px] font-medium text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
          >
            Xoá
          </button>
        </div>
      </div>
    </>
  );
};
export default Trip;
