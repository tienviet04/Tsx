const Banner = () => {
  return (
    <div className="overflow-y-hidden">
      <div className="relative">
        <div></div>
        <img
          className="hidden lg:block h-[456px] w-full object-cover"
          src="https://229a2c9fe669f7b.cmccloud.com.vn/images/banner-main-vi.jpg"
          alt="randeer"
        />
        <div className=" absolute bottom-[200px] left-0">
          {/* search */}
          <div className=" grid grid-cols-1 w-[1090px] mr-auto ml-[auto]"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <div className="hidden sm:block ">
            <nav
              className="-mb-px flex gap-16 justify-center mt-3 bg-[#00000082] "
              aria-label="Tabs"
            >
              <p className="inline-flex shrink-0 items-center gap-2 px-1 py-3 text-[16px] font-medium text-white">
                <img
                  src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/verified_yellow.svg"
                  alt=""
                />
                Chắc chắn có chỗ
              </p>
              <p className="inline-flex shrink-0 items-center gap-2 px-1 py-3 text-[16px] font-medium text-white">
                <img
                  src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/headset_mic_yellow.svg"
                  alt=""
                />
                Hỗ trợ 24/7
              </p>
              <p className="inline-flex shrink-0 items-center gap-2 px-1 py-3 text-[16px] font-medium text-white">
                <img
                  src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/discount_yellow.svg"
                  alt=""
                />
                Nhiều ưu đãi
              </p>
              <p className="inline-flex shrink-0 items-center gap-2 px-1 py-3 text-[16px] font-medium text-white">
                <img
                  src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/monetization_on_yellow.svg"
                  alt=""
                />
                Thanh toán đa dạng
              </p>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
