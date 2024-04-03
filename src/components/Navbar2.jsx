import { useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

const Navbar2 = () => {
  const [open, setOpen] = useState(false);

  const handleNav = () => setOpen(!open);
  return (
    <div className="bg-white shadow-lg w-full mx-auto">
      <nav className="w-full flex justify-between items-center mx-auto max-w-[1240px] py-3 px-4 md:px-2">
        {/* desktop */}
        <div className="flex items-center w-full justify-between">
          {/* left side */}
          <div className="flex items-center gap-12 justify-start w-full">
            {/* Logo & Menu */}
            <div className="flex items-center justify-between md:w-auto w-full">
              {/* search */}
              <div className="md:hidden z-40">
                <FaSearch
                  size={24}
                  className={open ? "text-white hidden" : "text-black"}
                />
              </div>
              {/* logo */}
              <div className="z-40">
                <h1
                  className={`text-3xl font-bold  uppercase ${
                    open ? "text-white" : "text-black"
                  }`}
                >
                  logo
                </h1>
              </div>
              {/* open & close */}
              <div className="md:hidden z-40">
                {!open ? (
                  <FaBars
                    size={25}
                    onClick={handleNav}
                    className="text-black cursor-pointer"
                  />
                ) : (
                  <FaTimes
                    size={25}
                    onClick={handleNav}
                    className="text-white cursor-pointer"
                  />
                )}
              </div>
            </div>
            {/* navigation */}
            <div className="hidden items-center justify-start md:flex w-full">
              <ul className="flex justify-between gap-8 text-black text-[14px] items-center">
                <li>
                  <a href="#" className="hover:underline underline-offset-8">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline underline-offset-8">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline underline-offset-8">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline underline-offset-8">
                    Contact
                  </a>
                </li>
                <li>
                  <button className="bg-blue-800 text-white py-2 px-8 rounded-md hover:bg-blue-500 ">
                    Sign Up
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {/* search bar */}
          <div className="w-full md:flex hidden justify-end items-center relative">
            <input
              type="text"
              className="w-1/2 border-gray-400 border rounded-md py-2 px-4"
            />
            <FaSearch className="text-gray-400 absolute right-3" />
          </div>
        </div>

        {/* mobile */}
        <div
          className={`fixed top-0 w-full h-full duration-300 bg-gray-500 ease-in-out  py-[20px] px-[30px] ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <nav className="flex flex-col items-center justify-center mt-24">
            <ul className="flex flex-col justify-between gap-8 text-white text-[16px] items-center">
              <li>
                <a href="#" className="hover:underline underline-offset-8">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline underline-offset-8">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline underline-offset-8">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline underline-offset-8">
                  contact
                </a>
              </li>
              <li>
                <button className="bg-blue-800 text-white py-2 px-8 rounded-md hover:bg-blue-500 ">
                  Sign Up
                </button>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-8 justify-center mt-24">
            <FaInstagram size={24} className="hover:scale-110 cursor-pointer" />
            <FaFacebook size={24} className="hover:scale-110 cursor-pointer" />
            <FaTwitter size={24} className="hover:scale-110 cursor-pointer" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;
