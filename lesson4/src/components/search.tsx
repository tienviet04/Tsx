import { useForm, SubmitHandler } from "react-hook-form";
import moment from "moment";
import { useNavigate } from "react-router-dom";

type SearchForm = {
  toStation: string;
  fromStation: string;
  startTime_gte: string;
};
const Search = (props: { onSearch: (query: string) => void }) => {
  const navi = useNavigate();

  const {
    register,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
    handleSubmit,
  } = useForm<SearchForm>();

  const onSubmit: SubmitHandler<SearchForm> = async (data) => {
    const query = new URLSearchParams(data);
    props.onSearch(query.toString());
    navi("/detail");
  };
  return (
    <form
      className="flex w-[1040px]  mr-auto ml-[271px] py-5 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full h-auto  grid grid-cols-1 gap-4 bg-white rounded-lg border border-gray-300">
        <div className="hidden sm:block ">
          <nav
            className="-mb-px flex gap-6 justify-center mt-3 "
            aria-label="Tabs"
          >
            <a
              href="#"
              className="inline-flex shrink-0 items-center gap-2 border-b-2 border-sky-500 px-1 pb-4 text-[15px] font-medium text-sky-600"
              aria-current="page"
            >
              <i className="fa-solid fa-bus-simple"></i>
              Xe khách
            </a>
            <a
              href="#"
              className="inline-flex shrink-0 items-center gap-2 border-b-2 border-white px-1 pb-4 text-[15px] font-medium "
              aria-current="page"
            >
              <i className="fa-solid fa-plane"></i>
              Máy bay
            </a>
            <a
              href="#"
              className="inline-flex shrink-0 items-center gap-2 border-b-2 border-white px-1 pb-4 text-[15px] font-medium  "
              aria-current="page"
            >
              <i className="fa-solid fa-train"></i>
              Tàu hoả
            </a>
          </nav>
        </div>
        <div className="hidden sm:block ">
          <div className="mb-px flex  justify-center mt-3 pb-4 ">
            <div className="flex rounded-l-lg border border-gray-300 ">
              <div className="mt-3">
                <img
                  src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/pickup_vex_blue_24dp.svg"
                  alt=""
                />
              </div>
              <div>
                <p className="text-[12px] text-gray-400">Nơi xuất phát</p>
                <div className="">
                  <input
                    type="text"
                    list="HeadlineActArtist"
                    id="HeadlineAct"
                    className="rounded-lg"
                    {...register("fromStation")}
                    required
                    placeholder="Ninh Bình"
                  />

                  <div>
                    <datalist id="HeadlineActArtist">
                      <option value="Hà Nội">Hà Nội</option>
                      <option value="Ninh Bình">Ninh Bình</option>
                      <option value="Hà Giang">Hà Giang</option>
                      <option value="Nho Quan">Nho Quan</option>
                      <option value="Kim Sơn">Kim Sơn</option>
                      <option value="Hoà Bình">Hoà Bình</option>
                      <option value="Hải Phòng">Hải Phòng</option>
                    </datalist>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex border border-gray-300 ">
              <div className="mt-3">
                <img
                  src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/dropoff_new_24dp.svg"
                  alt=""
                />
              </div>
              <div>
                <p className="text-[12px] text-gray-400">Nơi đến</p>
                <div className="">
                  <input
                    type="text"
                    list="HeadlineActArtist"
                    id="HeadlineAct"
                    className="rounded-lg"
                    {...register("toStation")}
                    required
                    placeholder="Ninh Bình"
                  />

                  <div>
                    <datalist id="HeadlineActArtist">
                      <option value="Hà Nội">Hà Nội</option>
                      <option value="Ninh Bình">Ninh Bình</option>
                      <option value="Hà Giang">Hà Giang</option>
                      <option value="Nho Quan">Nho Quan</option>
                      <option value="Kim Sơn">Kim Sơn</option>
                      <option value="Hoà Bình">Hoà Bình</option>
                      <option value="Hải Phòng">Hải Phòng</option>
                    </datalist>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  border border-gray-300 ">
              <div className="mt-3">
                <img
                  src="https://storage.googleapis.com/fe-production/svgIcon/event_vex_blue_24dp.svg"
                  alt=""
                />
              </div>
              <div>
                <p className="text-[12px] text-gray-400">Ngày đi</p>
                <div>
                  <input
                    min={moment().format("YYYY-MM-DD")}
                    {...register("startTime_gte")}
                    className="rounded-r-lg"
                    type="date"
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="rounded-r-lg border border-gray-300 px-7 py-2">
                <i
                  className="fa-solid fa-plus mr-3"
                  style={{ color: "#2474e5" }}
                ></i>
                <button className=" inline-block  text-[15px] font-medium text-[#2474e5] ">
                  Thêm ngày về
                </button>
              </div>
            </div>
            <div className="pl-4 flex  ">
              <button
                type="submit"
                className=" inline-block rounded border  bg-[#FFC700] px-7 py-2 text-[17px] font-medium text-black hover:bg-yellow-300 "
              >
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Search;
