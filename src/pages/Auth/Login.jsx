import { useNavigate } from "react-router-dom";
import SideImage from "../../assets/SideImage.png";
import IconGoogle from "../../assets/Icon-Google.png";

import Input from "../../components/Input";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center pt-8">
      {/* Side Image  */}

      <div className="flex-1">
        <img src={SideImage} alt="Side Image" className="w-full h-[550px]" />
      </div>

      {/* Login form */}

      <div className="flex-1 grid place-content-center">
        <div>
          <h1 className="text-3xl mb-3 font-semibold">Create an account</h1>
          <p className="mb-8">Enter your details below</p>
        </div>
        <form action="" className="flex flex-col gap-6">
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email or Phone Number" />
          <Input type="password" placeholder="Password" />
          <button
            type="submit"
            className="bg-[#DB4444] text-white py-2.5 rounded text-sm"
          >
            Create Account
          </button>
          <button
            type="submit"
            className="border py-2.5 rounded text-sm flex items-center justify-center gap-2"
          >
            <img src={IconGoogle} alt="Google" className="w-5 h-5" />
            Sign up with Google
          </button>
        </form>
        <p className="mt-4">
          Already have account?{" "}
          <a href="" className="border-b font-semibold">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
