const Topbar = () => {
  return (
    <>
      <div className="grid grid-flow-row-dense grid-cols-12 items-center  bg-black">
        <div className="col-span-8 md:col-span-10">
          <p className="text-center text-neutral-400 w-full lg:pl-[120px]">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <span className="underline cursor-pointer text-white">Shop Now</span>
          </p>
        </div>
        <div className="">
          <button
            className="text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            English
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdown"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  English
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Spanish
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topbar