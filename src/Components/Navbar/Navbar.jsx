import React from "react";
import { FaPlus } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="w-11/12 mx-auto flex justify-between items-center py-4">
        <h2 className="font-bold text-[24px]">CS — Ticket System</h2>

        <div className="hidden md:flex items-center gap-4">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Changelog</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Download</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
          <button className="px-4 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:from-[#7B49F5] hover:to-[#B37CFF] rounded-md">
            <p className="flex items-center gap-2 text-white">
              <FaPlus />
              New Ticket
            </p>
          </button>
        </div>
        <div className="dropdown md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="flex flex-col items-center gap-2 menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow right-0"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Changelog</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Download</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <button className="px-4 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-md">
                <p className="flex items-center gap-2 text-white">
                  <FaPlus />
                  New Ticket
                </p>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
