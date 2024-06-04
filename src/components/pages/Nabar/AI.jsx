import React from "react";
import "./Navbar.css";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MegaMenu = () => {
  const products = [
    {
      id: 1,
      imageUrl:
        "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/i/g/igf-1_lr3_receptor_grade_100mcg_x_10_vials.webp",
      name: "IGF-1 LR3 (Receptor Grade) 100mcg * 10 Vials",
      originalPrice: "225",
      discountedPrice: "199.00",
      cartsystemlink: "/",
    },
    {
      id: 2,
      imageUrl:
        "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/i/g/igf-1_lr3_receptor_grade_100mcg_x_10_vials.webp",
      name: "IGF-1 LR3 (Receptor Grade) 100mcg * 10 Vials",
      originalPrice: "225",
      discountedPrice: "199.00",
      cartsystemlink: "/",
    },
    {
      id: 3,
      imageUrl:
        "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/i/g/igf-1_lr3_receptor_grade_100mcg_x_10_vials.webp",
      name: "IGF-1 LR3 (Receptor Grade) 100mcg * 10 Vials",
      originalPrice: "225",
      discountedPrice: "199.00",
      cartsystemlink: "/",
    },
    {
      id: 4,
      imageUrl:
        "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/i/g/igf-1_lr3_receptor_grade_100mcg_x_10_vials.webp",
      name: "IGF-1 LR3 (Receptor Grade) 100mcg * 10 Vials",
      originalPrice: "225",
      discountedPrice: "199.00",
      cartsystemlink: "/",
    },
  ];

  const IGFS = [
    {
      id: 1,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/i/g/igf-1_lr3_receptor_grade_100mcg_x_10_vials.webp",
      name: "IGF-1 LR3 (Receptor Grade) 100mcg * 10 Vials",
      originalPrice: "225",
      discountedPrice: "199.00",
      cartsystemlink: "/",
    },
    {
      id: 2,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/i/g/igf-1_lr3_receptor_grade_100mcg_x_10_vials.webp",
      name: "IGF-1 LR3 100mcg",
      originalPrice: "150",
      discountedPrice: "135.00",
      cartsystemlink: "/",
    },
    {
      id: 3,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/i/g/igf-1_des_1mg.webp",
      name: "IGF-1 DES 1mg",
      originalPrice: "250",
      discountedPrice: "220.00",
      cartsystemlink: "/",
    },
    {
      id: 4,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/i/g/igf-1_lr3_receptor_grade_100mcg_x_10_vials.webp",
      name: "IGF-1 EC 1mg",
      originalPrice: "275",
      discountedPrice: "250.00",
      cartsystemlink: "/",
    },
];


  return (
    <>
      <div className="menu-bar">
        <ul className="flex flex-col w-full">
          <li className="px-6 py-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
            <div className="w-full flex justify-between items-center">
              <a
                href="#"
                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
              >
                Peptides
              </a>
              <FaArrowRight />
            </div>
            <div className="dropdown-menu">
              <ul>
                <li className="-top-32 transition group-hover:translate-y-5 translate-y-0 opacity-0 group-hover:opacity-100 duration-500 ease-in-out group-hover:transform z-50 min-w-[60rem] transform">
                  <div className="px-6 py-4 bg-white rounded-xl shadow-xl w-full">
                    <h1 className="text-2xl font-bold mb-4">Buy Peptides</h1>

                    <div className="grid lg:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-3 mt-8">
                      {products.map((product) => (
                        <div key={product.id} className="border rounded-md">
                          <div className="flex justify-center items-center">
                            <img
                              width={140}
                              height={140}
                              src={product.imageUrl}
                              alt="card image"
                            />
                          </div>

                          <div>
                            <h5 className="font-bold text-sm text-center">
                              {product.name}
                            </h5>
                            <div className="flex justify-center gap-2 mt-5">
                              <s className="font-bold text-center">
                                {product.originalPrice}
                              </s>
                              <h4 className="font-bold text-lg text-orange-600 text-center">
                                ${product.discountedPrice}
                              </h4>
                            </div>

                            <div className="flex justify-center mt-1 items-center">
                              <Link to={product.cartsystemlink}>
                                <button
                                  type="button"
                                  className="text-white button-bg-color from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                >
                                  Add to cart
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link to="/">
                      <h4 className="mt-2 text-md flex items-center justify-end gap-1 underline">
                        View More Products <FaArrowRight />
                      </h4>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="p-2 px-6 py-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
            <div className="w-full flex justify-between items-center">
              <a
                href="#"
                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
              >
                IGF-1 Proteins
              </a>
              <FaArrowRight />
            </div>
            <div className="dropdown-menu">
              <ul>
                <li className="-top-44 transition group-hover:translate-y-5 translate-y-0 opacity-0 group-hover:opacity-100 duration-500 ease-in-out group-hover:transform z-50 min-w-[60rem] transform">
                  <div className="px-6 py-4 bg-white rounded-xl shadow-xl w-full">
                    <h1 className="text-2xl font-bold mb-4">IGF-1 Proteins</h1>

                    <div className="grid lg:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-3 mt-8">
                      {IGFS.map((product) => (
                        <div key={product.id} className="border rounded-md">
                          <div className="flex justify-center items-center">
                            <img
                              width={140}
                              height={140}
                              src={product.imageUrl}
                              alt="card image"
                            />
                          </div>

                          <div>
                            <h5 className="font-bold text-sm text-center">
                              {product.name}
                            </h5>
                            <div className="flex justify-center gap-2 mt-5">
                              <s className="font-bold text-center">
                                {product.originalPrice}
                              </s>
                              <h4 className="font-bold text-lg text-orange-600 text-center">
                                ${product.discountedPrice}
                              </h4>
                            </div>

                            <div className="flex justify-center mt-1 items-center">
                              <Link to={product.cartsystemlink}>
                                <button
                                  type="button"
                                  className="text-white button-bg-color from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                >
                                  Add to cart
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link to="/">
                      <h4 className="mt-2 text-md flex items-center justify-end gap-1 underline">
                        View More Products <FaArrowRight />
                      </h4>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="p-2 px-6 py-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
            <div className="w-full flex justify-between items-center">
              <a
                href="#"
                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
              >
                Cosmetic Peptides
              </a>
              <FaArrowRight />
            </div>
            <div className="dropdown-menu">
              <ul>
                <li className="-top-60 transition group-hover:translate-y-5 translate-y-0 opacity-0 group-hover:opacity-100 duration-500 ease-in-out group-hover:transform z-50 min-w-[60rem] transform">
                  <div className="px-6 py-4 bg-white rounded-xl shadow-xl w-full">
                    <h1 className="text-2xl font-bold mb-4">
                      Cosmetic Peptides
                    </h1>

                    <div className="grid lg:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-3 mt-8">
                      {products.map((product) => (
                        <div key={product.id} className="border rounded-md">
                          <div className="flex justify-center items-center">
                            <img
                              width={140}
                              height={140}
                              src={product.imageUrl}
                              alt="card image"
                            />
                          </div>

                          <div>
                            <h5 className="font-bold text-sm text-center">
                              {product.name}
                            </h5>
                            <div className="flex justify-center gap-2 mt-5">
                              <s className="font-bold text-center">
                                {product.originalPrice}
                              </s>
                              <h4 className="font-bold text-lg text-orange-600 text-center">
                                ${product.discountedPrice}
                              </h4>
                            </div>

                            <div className="flex justify-center mt-1 items-center">
                              <Link to={product.cartsystemlink}>
                                <button
                                  type="button"
                                  className="text-white button-bg-color from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                >
                                  Add to cart
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link to="/">
                      <h4 className="mt-2 text-md flex items-center justify-end gap-1 underline">
                        View More Products <FaArrowRight />
                      </h4>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="p-2 px-6 py-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
            <div className="w-full flex justify-between items-center">
              <a
                href="#"
                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
              >
                Peptide Blends
              </a>
              <FaArrowRight />
            </div>
            <div className="dropdown-menu">
              <ul>
                <li className="-top-72 transition group-hover:translate-y-5 translate-y-0 opacity-0 group-hover:opacity-100 duration-500 ease-in-out group-hover:transform z-50 min-w-[60rem] transform">
                  <div className="px-6 py-4 bg-white rounded-xl shadow-xl w-full">
                    <h1 className="text-2xl font-bold mb-4">Peptide Blends</h1>

                    <div className="grid lg:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-3 mt-8">
                      {products.map((product) => (
                        <div key={product.id} className="border rounded-md">
                          <div className="flex justify-center items-center">
                            <img
                              width={140}
                              height={140}
                              src={product.imageUrl}
                              alt="card image"
                            />
                          </div>

                          <div>
                            <h5 className="font-bold text-sm text-center">
                              {product.name}
                            </h5>
                            <div className="flex justify-center gap-2 mt-5">
                              <s className="font-bold text-center">
                                {product.originalPrice}
                              </s>
                              <h4 className="font-bold text-lg text-orange-600 text-center">
                                ${product.discountedPrice}
                              </h4>
                            </div>

                            <div className="flex justify-center mt-1 items-center">
                              <Link to={product.cartsystemlink}>
                                <button
                                  type="button"
                                  className="text-white button-bg-color from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                >
                                  Add to cart
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link to="/">
                      <h4 className="mt-2 text-md flex items-center justify-end gap-1 underline">
                        View More Products <FaArrowRight />
                      </h4>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="p-2 px-6 py-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
            <div className="w-full flex justify-between items-center">
              <a
                href="#"
                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
              >
                Peptide Capsules
              </a>
              <FaArrowRight />
            </div>
            <div className="dropdown-menu">
              <ul>
                <li className="-top-[350px] transition group-hover:translate-y-5 translate-y-0 opacity-0 group-hover:opacity-100 duration-500 ease-in-out group-hover:transform z-50 min-w-[60rem] transform">
                  <div className="px-6 py-4 bg-white rounded-xl shadow-xl w-full">
                    <h1 className="text-2xl font-bold mb-4">
                      Peptide Capsules
                    </h1>

                    <div className="grid lg:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-3 mt-8">
                      {products.map((product) => (
                        <div key={product.id} className="border rounded-md">
                          <div className="flex justify-center items-center">
                            <img
                              width={140}
                              height={140}
                              src={product.imageUrl}
                              alt="card image"
                            />
                          </div>

                          <div>
                            <h5 className="font-bold text-sm text-center">
                              {product.name}
                            </h5>
                            <div className="flex justify-center gap-2 mt-5">
                              <s className="font-bold text-center">
                                {product.originalPrice}
                              </s>
                              <h4 className="font-bold text-lg text-orange-600 text-center">
                                ${product.discountedPrice}
                              </h4>
                            </div>

                            <div className="flex justify-center mt-1 items-center">
                              <Link to={product.cartsystemlink}>
                                <button
                                  type="button"
                                  className="text-white button-bg-color from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                >
                                  Add to cart
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link to="/">
                      <h4 className="mt-2 text-md flex items-center justify-end gap-1 underline">
                        View More Products <FaArrowRight />
                      </h4>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MegaMenu;
