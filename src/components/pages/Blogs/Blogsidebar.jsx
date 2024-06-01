import React from "react";
import { Link } from "react-router-dom";

const Blogsidebar = () => {
  const links = [
    { text: "General Peptide Information", url: "/" },
    {
      text: "Alzheimer's",
      url: "/",
    },
    { text: "Antioxidants", url: "/" },
    { text: "Bone Density", url: "/" },
    {
      text: "Cardiac Function",
      url: "/",
    },
    {
      text: "Cellular Energy (Mitochondrial Function)",
      url: "/",
    },
    {
      text: "Cellular Senesence",
      url: "/",
    },
    { text: "Cerebrolysin", url: "/" },
    {
      text: "Cognition",
      url: "/",
    },
    {
      text: "Eye Research",
      url: "/",
    },
    { text: "GH Releasers", url: "/" },
  ];
  return (
    <>
      <section className="border lg:p-6 rounded-md">
        <h3 className="text-xl mb-3 lg:mb-5 font-bold text-black">
          Search the blog
        </h3>

        <form className="flex items-center max-w-sm mx-auto">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Find some..."
              required
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4"
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
        </form>

        <h3 className="text-xl my-3 lg:my-5 font-bold text-black">
          Categories
        </h3>

        <ul className="text-gray-500 text-sm">
          {links.map((link, index) => (
            <li
              key={index}
              className="hover:text-orange-400 transition-all duration-200"
            >
              <Link to={link.url}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Blogsidebar;
