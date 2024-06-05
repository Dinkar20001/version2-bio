import React from "react";
import { Link } from "react-router-dom";

const Specialpeptide = () => {
  // Data for the two groups of items
  const kits5 = [
    { id: 1, name: "GHRP-6 and Mod GRF 1-29", amount: "5mg x 5", price: "$345.00" },
    { id: 2, name: "GHRP-6 and Mod GRF 1-29", amount: "5mg x 5", price: "$345.00" },
    { id: 3, name: "GHRP-6 and Mod GRF 1-29", amount: "5mg x 5", price: "$345.00" },
    { id: 4, name: "GHRP-6 and Mod GRF 1-29", amount: "5mg x 5", price: "$345.00" },
    // Add more items as needed
  ];

  const kits10 = [
    { id: 1, name: "GHRP-6 and Mod GRF 1-29", amount: "5mg x 10", price: "$345.00" },
    { id: 2, name: "GHRP-6 and Mod GRF 1-29", amount: "5mg x 10", price: "$345.00" },
    { id: 3, name: "GHRP-6 and Mod GRF 1-29", amount: "5mg x 10", price: "$345.00" },
    { id: 4, name: "GHRP-6 and Mod GRF 1-29", amount: "5mg x 10", price: "$345.00" },
    // Add more items as needed
  ];

  return (
    <>
      <section>
        <li className="group py-2 px-3 md:py-0 md:px-0 lg:py-0 lg:px-0 ">
          <button className="hover:opacity-50 cursor-pointer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
            Peptides Specials
          </button>

          <div className="absolute top-0 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 max-w-screen-xl  transform">
            <div className="relative top-6 p-4 -left-20 bg-white dark:text-gray-900 rounded-xl shadow-2xl lg:w-full">
              <div className="w-3 h-3 bg-blue-300 transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[2rem] duration-500 ease-in-out rounded-sm"></div>
              <div className="z-10">
                <h2 className="font-bold text-xl py-2 mt-6">
                  10 Vial Peptide Kits (5 vials of each peptide)
                </h2>
                <ul className="grid lg:grid-cols-4 gap-2 md:grid-cols-2">
                  {/* Mapping over kits5 array */}
                  {kits5.map((kit) => (
                    <li key={kit.id} className="border rounded-lg flex px-1 py-2 gap-3">
                      <div>
                        <img width={95} src="https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/g/h/ghrp-6_5mg_x_5_and_mod_grf_1-29_cjc-1295_no_dac_5mg_x_5_.webp" alt="" />
                        <Link to="/viewproductsdetails">
                          <p className="text-[12px]">View Details</p>
                        </Link>
                      </div>
                      <div>
                        <h4 className="font-bold">{kit.name}</h4>
                        <h4 className="font-bold mt-5">{kit.amount}</h4>
                        <h4 className="font-bold text-blue-400 mt-2">{kit.price}</h4>
                        <button className='className="flex ml-16 mt-2 text-gray-900 button-bg-color text-white hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mb-2"'>
                          Add to cart
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                <h2 className="font-bold text-xl py-2 mt-10">
                  10 Vial Peptide Kits (10 vials of each peptide)
                </h2>
                <ul className="grid lg:grid-cols-4 gap-2 md:grid-cols-2">
                  {/* Mapping over kits10 array */}
                  {kits10.map((kit) => (
                    <li key={kit.id} className="border rounded-lg flex px-1 py-2 gap-3">
                      <div>
                        <img width={95} src="https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/g/h/ghrp-6_5mg_x_5_and_mod_grf_1-29_cjc-1295_no_dac_5mg_x_5_.webp" alt="" />
                        <Link to="/viewproductsdetails">
                          <p className="text-[12px]">View Details</p>
                        </Link>
                      </div>
                      <div>
                        <h4 className="font-bold">{kit.name}</h4>
                        <h4 className="font-bold mt-5">{kit.amount}</h4>
                        <h4 className="font-bold text-blue-400 mt-2">{kit.price}</h4>
                        <button className='className="flex ml-16 mt-2 text-gray-900 button-bg-color text-white hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mb-2"'>
                          Add to cart
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </li>
      </section>
    </>
  );
};

export default Specialpeptide;
