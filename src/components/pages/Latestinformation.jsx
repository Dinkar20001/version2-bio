import React from "react";
import { MdOutlineMail } from "react-icons/md";

const Latestinformation = () => {
  return (
    <>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <section className="p-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          
          <div className="flex flex-col">
            <h2 className="font-bold text-4xl">Be the first to know</h2>
            <h6>
              Receive all the latest information on events, sales, & offers.
            </h6>
          </div>
          
          <div className="flex gap-3">
            <div className="relative mb-6">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <MdOutlineMail />
              </div>
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email Address"
              />
            </div>

            <div>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
            </div>
          </div>
        </div>
      </section>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    </>
  );
};

export default Latestinformation;
