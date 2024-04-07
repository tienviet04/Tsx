import React from "react";
function Dashboard() {
  return (
    <>
      <div className=" px-6 2xl:px-0 bg-gray-200 w-full flex justify-center items-center py-10 md:py-16 lg:py-32">
        <div className="mx-auto container">
          <div className="">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full">
              <div className="flex items-center">
                <i
                  className="fa-solid fa-bus-simple fa-2xl"
                  style={{ color: "#797a7c" }}
                ></i>
                <p className="px-4 text-2xl text-[#797a7c]">Vexere</p>
              </div>
              <div className="flex items-center">
                <i
                  className="fa-solid fa-bus-simple fa-2xl"
                  style={{ color: "#797a7c" }}
                ></i>
                <p className="px-4 text-2xl text-[#797a7c]">Vexere</p>
              </div>
              <div className="flex items-center">
                <i
                  className="fa-solid fa-bus-simple fa-2xl"
                  style={{ color: "#797a7c" }}
                ></i>
                <p className="px-4 text-2xl text-[#797a7c]">Vexere</p>
              </div>
              <div className="flex items-center">
                <i
                  className="fa-solid fa-bus-simple fa-2xl"
                  style={{ color: "#797a7c" }}
                ></i>
                <p className="px-4 text-2xl text-[#797a7c]">Vexere</p>
              </div>
              <div className="flex items-center">
                <i
                  className="fa-solid fa-bus-simple fa-2xl"
                  style={{ color: "#797a7c" }}
                ></i>
                <p className="px-4 text-2xl text-[#797a7c]">Vexere</p>
              </div>
            </div>
          </div>
          <div className="mt-16 lg:mt-32 lg:flex justify-between items-start w-full">
            <p className="xl:3/5 text-base md:text-base lg:text-base lg:leading-9 text-gray-700 font-normal xl:pr-8">
              Được thành lập từ năm 2013, VeXeRe đã xây dựng được tên tuổi hàng
              đầu với bề dày hoạt động trong lĩnh vực thương mại điện tử, công
              nghệ và du lịch. VeXeRe tự hào là đơn vị đi đầu trong sự nghiệp
              cách mạng ngành xe khách và du lịch Việt Nam bao gồm các giải
              pháp: đặt vé & phương tiện thông minh cho hành khách, phần mềm
              quản lý hiệu quả cho nhà xe (BMS - Bus Management System) và phần
              mềm hỗ trợ bán vé hiệu quả cho đại lý (AMS- Agent Management
              System).
            </p>
            <div className="sm:flex justify-center xl:justify-end w-full l pt-10 lg:pt-0">
              <img src="https://cdn.tuk.dev/assets/components/111220/lc-4/map.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
