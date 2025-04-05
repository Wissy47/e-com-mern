import {Link} from "react-router"

const Navbar = () => {
  return (
      <div className="border-b-1 border-neutral-300 pb-5.5">
        <nav className="md:max-w-10/12 grid grid-cols-12 items-end m-auto h-19">
          <div className="col-span-2">
            <span className="font-bold text-3xl">Exclusive</span>
          </div>
          <div className="col-span-6">
            <ul className="flex justify-evenly">
              <li>
                <Link className="capitalize" to={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="capitalize" to={"contact"}>
                  Contact
                </Link>
              </li>
              <li>
                <Link className="capitalize" to={"about"}>
                  About
                </Link>
              </li>
              <li>
                <Link className="capitalize" to={"signup"}>
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-4">
            <div className="text-right">
              <input
                className="bg-neutral-200 rounded-sm px-0.5 py-2 w-60 relative right-0"
                type="text"
                placeholder="What are you looking for?"
                name=""
                id=""
              />
            </div>
          </div>
        </nav>
      </div>
  );
}

export default Navbar