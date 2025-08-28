import { useNavigate } from "react-router-dom";
import SideImage from "../../assets/SideImage.png";

import AuthForm from "../../components/auth-form";
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
       <AuthForm />
       </div>
    </div>
  );
};

export default Login;
