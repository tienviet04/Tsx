import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function Index() {
  return (
    <div className=" bg-white flex items-center justify-center ">
      <div className="w-[1080px] h-auto">
        <div className="py-12 sm:py-8 px-4">
          {/* Carousel for desktop and large size devices */}
          <CarouselProvider
            className="lg:block hidden"
            naturalSlideWidth={100}
            naturalSlideHeight={1}
            isIntrinsicHeight={true}
            totalSlides={7}
            visibleSlides={4}
            step={1}
            infinite={true}
          >
            <div className="w-full relative flex items-center justify-center">
              <ButtonBack
                role="button"
                aria-label="slide backward"
                className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                id="prev"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonBack>
              <div className=" w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <Slider>
                  <div id="slider" className="">
                    <Slide index={0}>
                      <div className="mr-4">
                        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                          <img
                            alt=""
                            src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/destination/images/5/img_hero.png?v1"
                            className="h-36 w-full object-cover"
                          />

                          <div className="bg-[#9E947C]  sm:p-2">
                            <div className="ml-2">
                              <button>
                                <h3 className=" text-[18px] text-white">
                                  <strong>Sài Gòn - Nha Trang </strong>
                                </h3>
                              </button>

                              <p className="mb-4 line-clamp-3 text-[14px] text-white">
                                Từ 200.000đ
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>
                    </Slide>
                    <Slide index={1}>
                      <div className="mr-4">
                        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                          <img
                            alt=""
                            src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/destination/images/24/img_hero.png"
                            className="h-36 w-full object-cover"
                          />

                          <div className="bg-[#585279]  sm:p-2">
                            <div className="ml-2">
                              <button>
                                <h3 className=" text-[18px] text-white">
                                  <strong>Hà Nội - Hải Phòng </strong>
                                </h3>
                              </button>

                              <p className="mb-4 line-clamp-3 text-[14px] text-white">
                                Từ 100.000đ
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>
                    </Slide>
                    <Slide index={2}>
                      <div className="mr-4">
                        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                          <img
                            alt=""
                            src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/destination/images/3/img_hero.png"
                            className="h-36 w-full object-cover"
                          />

                          <div className="bg-[#C6324E]  sm:p-2">
                            <div className="ml-2">
                              <button>
                                <h3 className=" text-[18px] text-white">
                                  <strong>Sài Gòn - Đà Lạt </strong>
                                </h3>
                              </button>

                              <p className="mb-4 line-clamp-3 text-[14px] text-white">
                                Từ 234.000đ
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>
                    </Slide>
                    <Slide index={3}>
                      <div className="mr-4">
                        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                          <img
                            alt=""
                            src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/destination/images/22/img_hero.png"
                            className="h-36 w-full object-cover"
                          />

                          <div className="bg-[#4C6C8C]  sm:p-2">
                            <div className="ml-2">
                              <button>
                                <h3 className=" text-[18px] text-white">
                                  <strong>Sài Gòn - Nha Trang </strong>
                                </h3>
                              </button>

                              <p className="mb-4 line-clamp-3 text-[14px] text-white">
                                Từ 250.000đ
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>
                    </Slide>
                    <Slide index={4}>
                      <div className="mr-4">
                        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                          <img
                            alt=""
                            src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/destination/images/5/img_hero.png?v1"
                            className="h-36 w-full object-cover"
                          />

                          <div className="bg-[#9E947C]  sm:p-2">
                            <div className="ml-2">
                              <button>
                                <h3 className=" text-[18px] text-white">
                                  <strong>Sài Gòn - Nha Trang </strong>
                                </h3>
                              </button>

                              <p className="mb-4 line-clamp-3 text-[14px] text-white">
                                Từ 200.000đ
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>
                    </Slide>
                    <Slide index={5}>
                      <div className="mr-4">
                        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                          <img
                            alt=""
                            src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/destination/images/5/img_hero.png?v1"
                            className="h-36 w-full object-cover"
                          />

                          <div className="bg-[#9E947C]  sm:p-2">
                            <div className="ml-2">
                              <button>
                                <h3 className=" text-[18px] text-white">
                                  <strong>Sài Gòn - Nha Trang </strong>
                                </h3>
                              </button>

                              <p className="mb-4 line-clamp-3 text-[14px] text-white">
                                Từ 200.000đ
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>
                    </Slide>
                    <Slide index={6}>
                      <div className="mr-4">
                        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                          <img
                            alt=""
                            src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/destination/images/5/img_hero.png?v1"
                            className="h-36 w-full object-cover"
                          />

                          <div className="bg-[#9E947C]  sm:p-2">
                            <div className="ml-2">
                              <button>
                                <h3 className=" text-[18px] text-white">
                                  <strong>Sài Gòn - Nha Trang </strong>
                                </h3>
                              </button>

                              <p className="mb-4 line-clamp-3 text-[14px] text-white">
                                Từ 200.000đ
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>
                    </Slide>
                  </div>
                </Slider>
              </div>
              <ButtonNext
                role="button"
                aria-label="slide forward"
                className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                id="next"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L1 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      </div>
    </div>
  );
}
