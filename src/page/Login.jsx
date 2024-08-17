import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <Navbar />
      <div
        className="min-h-screen text-black flex items-center justify-center bg-gradient-to-r
       from-green-300 to-green-800"
      >
        <section className="flex justify-center items-center py-24 rounded-md">
          <div
            className="px-3 bg-white p-2 py-5 w-full lg:max-w-[550px] md:max-w-[400px]
           max-w-[300px] mx-auto flex flex-col rounded-lg shadow-lg"
          >
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-center py-6 text-xl md:text-2xl font-bold text-blue-600">
                Login Page
              </h2>
              <form className="w-full">
                <div className="grid gap-2 lg:w-[500px] md:w-[350px] w-[270px]">
                  <label
                    htmlFor=""
                    className="py-1 text-left font-semibold ml-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="bg-slate-200 p-2 py-1.5 w-full outline-none rounded-md"
                  />
                </div>
                <div className="grid gap-2 lg:w-[500px] md:w-[350px] w-[270px]">
                  <label
                    htmlFor=""
                    className="py-1 text-left font-semibold ml-2"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="bg-slate-200 p-2 py-1.5 w-full outline-none rounded-md"
                    />
                    <div
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-2 cursor-pointer"
                    >
                      {showPassword ? (
                        <FaEyeSlash size={18} />
                      ) : (
                        <FaEye size={18} />
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center mt-6 py-2">
                  <button
                    className="px-5 w-full rounded-lg cursor-pointer bg-blue-600 text-lg 
 text-white text-center hover:scale-105 duration-300 hover:border-2 border-solid border-black"
                  >
                    Login
                  </button>
                </div>
              </form>
              <p className="text-center py-2 text-[16px] mt-4">
                Don't account then create ?{" "}
                <Link
                  to="/register"
                  className="text-gray-700 hover:text-green-500 hover:underline hover:underline-offset-8"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
