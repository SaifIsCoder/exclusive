import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-xl font-bold"> Login Here!</h1>
      <button className="bg-red-300 px-4 py-1.5 rounded cursor-pointer" onClick={()=> navigate("/home")}>Go to Homepage</button>
    </div>
  );
};

export default Login;
