import authImage from "../assets/imgs/auth-image.png"
import { Link, useNavigate} from "react-router"
import { useAuthStore } from "../store/authStore";
import { useState } from "react";
import { toast } from "react-toastify";
const Signup = () => {
  const {signup, error} = useAuthStore();
  const [name , setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = async(e)=>{
    e.preventDefault();
       if (name == "" || email == "" || password == "") {
         toast.error("Please fill in all required feilds", { autoClose: 3000 });
         return;
       }
      try{
        await signup(name, email, password)
      }catch(e){
        toast.error(error)
      }

  }
  return (
    <div className="grid gap-25 grid-flow-row-dense grid-cols-12 items-center mt-14">
      <div className="bg-[#CBE4E8] col-span-7 pt-29 pl-28 rounded-r-sm h-155">
        <img className="w-119" src={authImage} alt="auth-image" />
      </div>
      <div className="col-span-4">
        <h1 className="text-4xl mb-2.5">Create an account</h1>
        <p className="text-neutral-500">Enter your details below</p>
        <form
        onSubmit={handleSubmit}
        >
          <div>
            <input
              className="w-full border-b-1 focus:outline-0 placeholder:text-neutral-400  mt-8 pt-2 border-neutral-400"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-9" >
            <button className="text-center w-full bg-[#EA4335] text-white rounded-sm py-3 cursor-pointer">
              Create Account
            </button>
          </div>
          <div className="mt-5">
            <button className="text-center flex gap-4 justify-center w-full border-1 border-neutral-400 rounded-sm py-3 cursor-pointer">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_821_6724)">
                  <path
                    d="M23.766 12.7764C23.766 11.9607 23.6999 11.1406 23.5588 10.3381H12.24V14.9591H18.7217C18.4528 16.4494 17.5885 17.7678 16.323 18.6056V21.6039H20.19C22.4608 19.5139 23.766 16.4274 23.766 12.7764Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12.2401 24.5008C15.4766 24.5008 18.2059 23.4382 20.1945 21.6039L16.3276 18.6055C15.2517 19.3375 13.8627 19.752 12.2445 19.752C9.11388 19.752 6.45946 17.6399 5.50705 14.8003H1.5166V17.8912C3.55371 21.9434 7.7029 24.5008 12.2401 24.5008V24.5008Z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.50253 14.8003C4.99987 13.3099 4.99987 11.6961 5.50253 10.2057V7.11481H1.51649C-0.18551 10.5056 -0.18551 14.5004 1.51649 17.8912L5.50253 14.8003V14.8003Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M12.2401 5.24966C13.9509 5.2232 15.6044 5.86697 16.8434 7.04867L20.2695 3.62262C18.1001 1.5855 15.2208 0.465534 12.2401 0.500809C7.7029 0.500809 3.55371 3.05822 1.5166 7.11481L5.50264 10.2058C6.45065 7.36173 9.10947 5.24966 12.2401 5.24966V5.24966Z"
                    fill="#EA4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_821_6724">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
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