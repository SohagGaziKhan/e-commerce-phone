import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="shadow-2xl bg-black text-white">
      <div className="flex max-w-[1140px] mx-auto justify-between gap-5 items-center py-4">
        <div className="flex flex-col gap-2 py-2">
          <h1 className="text-2xl font-bold cursor-pointer text-green-500">
            Our Company
          </h1>
          <ul className="flex flex-col gap-5">
            <li className="cursor-pointer text-md font-light hover:underline hover:underline-offset-8 hover:text-green-200">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer text-md font-light hover:underline hover:underline-offset-8 hover:text-green-200">
              <Link to="/login">Profile</Link>
            </li>
            <li className="cursor-pointer text-md font-light hover:underline hover:underline-offset-8 hover:text-green-200">
              <Link to="/login">Login</Link>
            </li>
            <li className="cursor-pointer text-md font-light hover:underline hover:underline-offset-8 hover:text-green-200">
              <Link to="/register">Register</Link>
            </li>
            <li className="cursor-pointer text-md font-light hover:underline hover:underline-offset-8 hover:text-green-200">
              <Link to="/register">Cart</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 py-2">
          <h1 className="text-2xl font-bold cursor-pointer text-green-500">
            Why Choose Us
          </h1>
          <ul className="flex flex-col gap-5">
            <li className="cursor-pointer text-md font-light hover:underline hover:underline-offset-8 hover:text-green-200">
              <Link to="/">Your Product</Link>
            </li>
            <li className="cursor-pointer text-md font-light hover:underline hover:underline-offset-8 hover:text-green-200">
              <Link to="/login">Your Cart</Link>
            </li>
            <li className="cursor-pointer text-md font-light hover:underline hover:underline-offset-8 hover:text-green-200">
              <Link to="/login">Your Profile</Link>
            </li>
            <li className="cursor-pointer text-md font-light hover:underline hover:underline-offset-8 hover:text-green-200">
              <Link to="/register">Your Website</Link>
            </li>
            <li className="cursor-pointer text-md font-light hover:underline hover:underline-offset-8 hover:text-green-200">
              <Link to="/register">Write blog</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 py-2">
          <h1 className="text-2xl font-bold cursor-pointer text-green-500">
            OUr Shop
          </h1>
          <ul className="flex flex-col gap-5">
            <li className="cursor-pointer text-md font-light hover:underline hover:underline-offset-8 hover:text-green-200">
              <Link to="/">Blog</Link>
            </li>
            <li className="cursor-pointer text-md font-light hover:underline hover:underline-offset-8 hover:text-green-200">
              <Link to="/login">Technology</Link>
            </li>
            <li className="cursor-pointer text-md font-light hover:underline hover:underline-offset-8 hover:text-green-200">
              <Link to="/login">Top Rating Product</Link>
            </li>
            <li className="cursor-pointer text-md font-light hover:underline hover:underline-offset-8 hover:text-green-200">
              <Link to="/register">Best Product</Link>
            </li>
            <li className="cursor-pointer text-md font-light hover:underline hover:underline-offset-8 hover:text-green-200">
              <Link to="/register">Our Services</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 py-2">
          <h1 className="text-2xl font-bold cursor-pointer text-green-500">
            ProjectWithSGK
          </h1>
          <ul className="flex flex-col gap-5">
            <li className="cursor-pointer text-md font-light hover:underline hover:underline-offset-8 hover:text-green-200">
              <Link to="/">Subscribe Your Channel</Link>
            </li>
            <li className="cursor-pointer text-md font-light hover:underline hover:underline-offset-8 hover:text-green-200">
              <Link to="/login">Please Like this Video</Link>
            </li>
            <li className="cursor-pointer text-md font-light hover:underline hover:underline-offset-8 hover:text-green-200">
              <Link to="/login">Please Share this Video</Link>
            </li>
            <li className="cursor-pointer text-md font-light hover:underline hover:underline-offset-8 hover:text-green-200">
              <Link to="/register">Please Comments Thsi Video</Link>
            </li>
            <li className="cursor-pointer text-md font-light hover:underline hover:underline-offset-8 hover:text-green-200">
              <Link to="/register">All DO please</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl font-bold cursor-pointer text-green-500">
            Follow Our Shop On Social Media
          </h1>
          <div className="flex items-center gap-5 py-4 justify-center">
            <span>
              <FaFacebook
                size={20}
                className="font-semibold cursor-pointer hover:text-blue-500"
              />
            </span>
            <span>
              <FaYoutube
                size={20}
                className="font-semibold cursor-pointer hover:text-red-500"
              />
            </span>
            <span>
              <FaInstagram
                size={20}
                className="font-semibold cursor-pointer hover:text-green-500"
              />
            </span>
            <span>
              <FaLinkedin
                size={20}
                className="font-semibold cursor-pointer hover:text-blue-500"
              />
            </span>
            <span>
              <FaGithub
                size={20}
                className="font-semibold cursor-pointer hover:text-slate-300"
              />
            </span>
          </div>
        </div>
      </div>
      {/* this is fotter bottom in copy right */}
      <div className="flex justify-center items-center py-4">
        <p className="text-[15px] font-light text-white text-center cursor-pointer">
          &copy; 2024 Design By SGK. All rights reserved BY ProjectWithSGK
        </p>
      </div>
    </div>
  );
};

export default Footer;
