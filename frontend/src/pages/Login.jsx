import authImage from "../assets/imgs/auth-image.png"
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login, error } = useAuthStore();
  const handleLogin = async (e) => {
    e.preventDefault();
    if (email == "" || password =="") {
      toast.error("Please fill in all required feilds",{autoClose:3000});
      return
    }
    try {
      const loginData = await login(email, password);
      navigate("/");
      console.log(loginData)
      } catch (err) {
        toast.error(error);
    }
  

  }
  return (
    <div className="grid gap-25 grid-flow-row-dense grid-cols-12 items-center mt-14">
      <div className="bg-[#CBE4E8] col-span-7 pt-29 pl-28 rounded-r-sm h-155">
        <img className="w-119" src={authImage} alt="auth-image" />
      </div>
      <div className="col-span-4">
        <h1 className="text-4xl mb-2.5">Log in to Exclusive</h1>
        <p className="text-neutral-500">Enter your details below</p>
        <form onSubmit={handleLogin}>
          <div>
            <input
              className="w-full border-b-1  mt-8 pt-2 placeholder:text-neutral-400 focus:outline-0  border-neutral-400"
              type="text"
              placeholder="Email or Phone Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              className="w-full border-b-1 mt-8 pt-2 placeholder:text-neutral-400 focus:outline-0  border-neutral-400"
              type="password"
              placeholder="Password"
              autoComplete=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-9 flex justify-between items-center">
            <div>
              <button className="text-center w-40 bg-[#EA4335] text-white rounded-sm py-3 cursor-pointer">
                Log in
              </button>
            </div>
            <div className="">
              <button className="text-center text-[#EA4335] cursor-pointer">
                Forget Password?
              </button>
            </div>
          </div>
          <div className="mt-5 text-center text-neutral-400">
            <p>
              Don't have an account?{" "}
              <Link to="/signup">
                <span className="text-black underline cursor-pointer">
                  Sign up
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login