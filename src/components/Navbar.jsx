import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="shadow-2xl bg-green-500 fixed z-10 w-full">
      <div className="max-w-[1140px] mx-auto py-4">
        <div className="flex justify-between items-center gap-10">
          <div>
            <Link to="/">
              <h1 className="text-black text-2xl font-bold cursor-pointer">
                E-commerce
              </h1>
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="text"
              placeholder="Search Your Favi Items"
              className="w-[400px] h-[30px] bg-slate-200 text-black outline-none py-2 px-2 text-lg rounded-md"
            />
            <button className="bg-black text-white px-2.5 py-1 rounded-md">
              Search
            </button>
          </div>
          <ul className="flex justify-between gap-5 items-center">
            <li className="text-md cursor-pointer text-black hover:underline hover:underline-offset-8">
              <Link to="/">Home</Link>
            </li>
            <li className="text-md cursor-pointer text-black hover:underline hover:underline-offset-8">
              <Link to="/">Cart</Link>
            </li>
            <li className="text-md cursor-pointer text-black hover:underline hover:underline-offset-8">
              <Link to="/login">Login</Link>
            </li>
            <li className="text-md cursor-pointer text-black hover:underline hover:underline-offset-8">
              <Link to="/">Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
