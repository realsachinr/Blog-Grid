import React from "react";

function Navbar() {
  return (
    <nav className=" bg-[#D3E3FD] w-full flex items-center justify-center font-opensons shadow-2xl ">
      <div className="flex  py-2  w-[1300px] justify-between items-center">
        <div
          className="w-14
      "
        >
          <img
            src="https://designing-world.com/wp-content/uploads/2019/01/tf-1.png"
            alt=""
          />
        </div>
        <div>
          <ul className="flex gap-5">
            <li>
              <a
                href="#"
                className="hover:border-b-2 border-black  hover:animate-ping"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:border-b-2 border-black hover:animate-ping"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:border-b-2 border-black hover:animate-ping"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:border-b-2 border-black hover:animate-ping"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex gap-5">
          <button className="py-1 px-3 bg-slate-600 text-white rounded-lg  hover:bg-black active:bg-gray-900 active:text-white focus:outline-none focus:ring focus:ring-gray-300">
            Login
          </button>
          <button className="py-1 px-3 bg-slate-600 text-white rounded-lg  hover:bg-black active:bg-gray-900 active:text-white focus:outline-none focus:ring focus:ring-gray-300">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
