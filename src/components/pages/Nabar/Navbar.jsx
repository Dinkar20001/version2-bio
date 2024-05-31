import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showdropdown, setShowdropdown] = useState(false);

  return (
    <>
      <div className="text-black-900">
        <nav className="bg-white border-b-2 border-gray-200 border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Bioplentypeps
              </span>
            </Link>

            <div className="flex md:order-1">
              <button
                type="button"
                data-collapse-toggle="navbar-search"
                aria-controls="navbar-search"
                aria-expanded="false"
                className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
              <div className="relative w-96 hidden md:block">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search icon</span>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
              </div>

              {/* mobile view cart */}

              <div className="flex justify-center items-center md:hidden gap-1 cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <MdOutlineShoppingCart className="w-6 h-6" />
              </div>

              {/* Mobile view menu buttons */}
              <button
                data-collapse-toggle="navbar-search"
                type="button"
                onClick={() => setShowdropdown(!showdropdown)}
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-search"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile view */}

            <div
              className={`items-center justify-between ${
                showdropdown ? "" : "hidden"
              } w-full md:flex md:w-auto md:order-1`}
              id="navbar-search"
            >
              <div className="relative mt-3 md:hidden">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
              </div>

              <ul className="flex flex-col justify-start items-start p-4 md:p-0 mt-4 font-medium border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <div className="flex justify-center items-center gap-1 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent cursor-pointer md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    <span>
                      <FaRegUserCircle className="w-6 h-6" />
                    </span>
                    <Link to="signin">
                      Sign in
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex justify-center items-center gap-1 cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    <MdOutlineShoppingCart className="w-6 h-6" />
                    <a href="#">
                      My Cart
                    </a>
                  </div>
                </li>

                <li>
                  <div className="flex md:hidden hover:underline transition-All duration-500 hover:text-gray-500 hover:scale-110 hover:font-bold justify-center items-center gap-1 cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    <a href="#">
                      Buy Peptides
                    </a>
                  </div>
                </li>

                <li>
                  <div className="flex md:hidden hover:underline transition-All duration-500 hover:text-gray-500 hover:scale-110 hover:font-bold justify-center items-center gap-1 cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    <a href="#">
                      Peptide Specials
                    </a>
                  </div>
                </li>

                <li>
                  <div className="flex md:hidden hover:underline transition-All duration-500 hover:text-gray-500 hover:scale-110 hover:font-bold justify-center items-center gap-1 cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    <a href="#">
                      Peptide Blog
                    </a>
                  </div>
                </li>

                <li>
                  <div className="flex md:hidden hover:underline transition-All duration-500 hover:text-gray-500 hover:scale-110 hover:font-bold justify-center items-center gap-1 cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    <Link to="pepdite-information">
                      Peptide Information
                    </Link>
                  </div>
                </li>

                <li>
                    <Link to="ourcompany">
                  <div className="flex md:hidden hover:underline transition-All duration-500 hover:text-gray-500 hover:scale-110 hover:font-bold justify-center items-center gap-1 cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                      Our Company
                  </div>
                    </Link>
                </li>

                <li>
                    <Link to="contact">
                  <div className="flex md:hidden hover:underline transition-All duration-500 hover:text-gray-500 hover:scale-110 hover:font-bold justify-center items-center gap-1 cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                      Contact Us
                  </div>
                    </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-screen-xl relative hidden md:flex flex-wrap items-center justify-between mx-auto p-4">
            <div>
              <ul className="flex gap-9">
                <li className="hover:underline transition-All duration-500 hover:text-gray-500 hover:scale-110 hover:font-bold">
                  <a href="#">Buy Peptides</a>
                </li>
                <li className="hover:underline transition-All duration-500 hover:text-gray-500 hover:scale-110 hover:font-bold">
                  <a href="#">Peptides Specials</a>
                </li>
                <li className="hover:underline transition-All duration-500 hover:text-gray-500 hover:scale-110 hover:font-bold">
                  <a href="#">Peptides Blog</a>
                </li>
                <li className="hover:underline transition-All duration-500 hover:text-gray-500 hover:scale-110 hover:font-bold">
                  <Link to="pepdite-information">Peptides Information</Link>
                </li>
              </ul>
            </div>

            <div>
              <ul className="flex gap-9">
                <li className="hover:underline transition-All duration-500 hover:text-gray-500 hover:scale-110 hover:font-bold">
                  <Link to="ourcompany">Our Company</Link>
                </li>
                <li className="hover:underline transition-All duration-500 hover:text-gray-500 hover:scale-110 hover:font-bold">
                  <Link to="contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
