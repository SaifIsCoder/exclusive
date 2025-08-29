import { useState } from "react";
import { useNavigate } from "react-router-dom";

import IconGoogle from "../assets/Icon-Google.png";
import Input from "../components/Input";
const AuthForm = () => {
  const navigate = useNavigate();
  const [isRegister, setisRegister] = useState(true);

  const navigateToHome =()=>{
    navigate("/home")
  }
  return (
    <div>
      <div>
        <h1 className="text-3xl mb-3 font-semibold">
          {isRegister ? "Create an account" : "Log in to Exclusive"}
        </h1>
        <p className="mb-8">Enter your details below</p>
      </div>
      <form action="" className="flex flex-col gap-6">
        {isRegister && <Input type="text" placeholder="Name" />}
        <Input type="email" placeholder="Email or Phone Number" />
        <Input type="password" placeholder="Password" />

        {isRegister && (
          <>
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
            </button>{" "}
          </>
        )}
        {!isRegister && (
          <div className="flex justify-between items-center">
            <button className="p-2.5 px-4 bg-red-600 rounded-sm text-white font-medium" onClick={navigateToHome}>
              Login
            </button>
            <p className="text-red-600 font-semibold">Forget Password?</p>
          </div>
        )}
      </form>

      {isRegister && (
        <p className="mt-4 flex items-center gap-4">
          Already have account?{" "}
          <p
            className="border-b font-semibold"
            onClick={() => setisRegister(false)}
          >
            Log in
          </p>
        </p>
      )}
    </div>
  );
};

export default AuthForm;
