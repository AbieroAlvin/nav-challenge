import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar1 = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);
  return (
    <div className="bg-transparent w-full mx-auto">
      <nav className="w-full flex justify-between items-center mx-auto max-w-[1240px] py-3 px-4 md:px-2">
        {/* desktop */}
        <div className="flex gap-6 items-center justify-between w-full">
          {/* logo & menu */}
          <div className="flex items-center justify-between w-full">
            {/* logo */}
            <div className="z-40">
              <h1 className="text-3xl font-bold md:text-black  uppercase">
                logo
              </h1>
            </div>
            {/* open & close */}
            <div className="md:hidden z-40">
              {!open ? (
                <FaBars
                  size={25}
                  onClick={handleClick}
                  className="text-black cursor-pointer"
                />
              ) : (
                <FaTimes
                  size={25}
                  onClick={handleClick}
                  className="text-white cursor-pointer"
                />
              )}
            </div>
          </div>

          {/* navigation */}
          <div className="hidden items-center md:flex justify-end w-full">
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

        {/* mobile */}
        <div
          className={`fixed top-0 w-full h-full duration-300 bg-gray-500 text-white ease-in-out py-[20px] px-[30px] ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <div className="flex items-center justify-center mt-24">
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
      </nav>
    </div>
  );
};

export default Navbar1;
