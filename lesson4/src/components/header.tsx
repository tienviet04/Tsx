const Header = () => {
  return (
    <header className="bg-blue-500 ">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-1">
            <a href="/">
              <img
                src="https://storage.googleapis.com/fe-production/svgIcon/icon_vxr_full_2.svg"
                alt=""
              />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-3 text-sm">
                <li>
                  <a
                    className="text-white transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Quản lý đơn hàng{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Mở bán vé trên Vexere{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Trở thành đối tác{" "}
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-{#0D2E59} shadow"
                  href="#"
                >
                  Hotline
                </a>

                <div className="hidden sm:flex">
                  <a
                    className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-{#0D2E59} shadow"
                    href="#"
                  >
                    Sign in
                  </a>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
