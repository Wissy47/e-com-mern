import authImage from "../assets/imgs/auth-image.png"
import { Link } from "react-router"
const Signup = () => {
  return (
    <div className="grid gap-25 grid-flow-row-dense grid-cols-12 items-center mt-14">
      <div className="bg-[#CBE4E8] col-span-7 pt-29 pl-28 rounded-r-sm h-155">
        <img className="w-119" src={authImage} alt="auth-image" />
      </div>
      <div className="col-span-4">
        <h1 className="text-4xl mb-2.5">Create an account</h1>
        <p className="text-neutral-500">Enter your details below</p>
        <form>
          <div>
            <input
              className="w-full border-b-1 focus:outline-0 placeholder:text-neutral-400  mt-8 pt-2 border-neutral-400"
              type="text"
              placeholder="Name"
            />
          </div>
          <div>
            <input
              className="w-full border-b-1  mt-8 pt-2 placeholder:text-neutral-400 focus:outline-0  border-neutral-400"
              type="text"
              placeholder="Email or Phone Number"
            />
          </div>
          <div>
            <input
              className="w-full border-b-1 mt-8 pt-2 placeholder:text-neutral-400 focus:outline-0  border-neutral-400"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="mt-9">
            <button className="text-center w-full bg-[#EA4335] text-white rounded-sm py-3 cursor-pointer">
              Create Account
            </button>
          </div>
          <div className="mt-5">
            <button className="text-center w-full border-1 border-neutral-400 rounded-sm py-3 cursor-pointer">
              Sign up with Google
            </button>
          </div>
          <div className="mt-5 text-center text-neutral-400">
            <p>
              Already have an account?{" "}
              <Link to="/login">
                <span className="text-black underline cursor-pointer">
                  Log in
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup