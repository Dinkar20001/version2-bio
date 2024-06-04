import React, { useState } from "react";
import MegaMenu from "./AI";

const Hoverpeptide = () => {
  return (
    <>
      <li className="relative group px-0 py-0">
        <button className="hover:opacity-50 cursor-pointer">
          Buy Peptides
        </button>
        <div className="absolute top-0  transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[280px] transform">
          <div className="relative top-6 p-6 bg-white rounded-xl shadow-2xl w-full">
            <div className="w-3 h-3 bg-blue-300 transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[2rem] duration-500 ease-in-out rounded-sm"></div>

            <div className="z-10">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <ul className="mt-3 text-md">
                      <MegaMenu />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default Hoverpeptide;
