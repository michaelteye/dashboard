import { useState } from "react";
import { useNavigate } from "react-router-dom";
import aloevera from "../components/images/Aloevera.png";
import FacebookSvg from "../components/images/svgs/facebook";
import GoogleSvg from "../components/images/svgs/google";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate successful authentication regardless of credentials
    if (username.trim() !== "" && password.trim() !== "") {
      // Authentication successful
      navigate("/home");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${aloevera})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3, // Adjust the opacity of the image as needed
        }}
      />

      {/* Linear Gradient */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-r from-blue-600 to-purple-500"
        style={{ opacity: 0.7 }} // Adjust the opacity of the gradient as needed
      />

      <div className="relative z-20">
        <div className="bg-white shadow-2xl rounded-md p-20 max-w-md w-full">
          <h2 className="text-2xl font-semibold my-4 text-center text-[#43335a]">Sign In</h2>
          <form onSubmit={handleSubmit}>
          <div className="mb-4">
              
              <input
                className=" shadow-lg border-t-2 rounded-md py-2 px-8 w-full"
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              
              <input
                className="shadow-lg border-t-2 rounded-md py-2 px-8 my-6 w-full"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="password"
              />
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            {/* Login Button */}
            <div className="items-center flex  justify-center mb-4 mx-auto">
              <button
                className="bg-[#bc59d5]  hover:bg-[#bc59d5] text-white font-bold py-3 px-10 rounded-3xl focus:outline-none focus:shadow-outline mr-4"
                type="submit"
              >
                SIGN IN
              </button>

              
            </div>
            <div className="flex justify-center">
              <p className="text-gray-600 text-sm pt-4">or login with</p>

            </div>



            {/* Social Login Icons */}
            <div className="flex items-center pt-8 space-x-2 justify-center">
              {/* Facebook Icon */}
              <FacebookSvg className="text-blue-400 rounded-full  shadow-xl "/>

              {/* Google Icon */}
             <GoogleSvg className="text-red-500 rounded-full shadow-xl "/>
            </div>
            <div className="py-10 flex justify-center text-red-600 ">
                <p>Sign Up</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
