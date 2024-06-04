import React from 'react';
import { Link } from 'react-router-dom';
import './Bestseller.css'

const products = [
  {
    name: "Peptide Capsules",
    imgSrc: "https://www.peptidesciences.com/media/catalog/category/Screenshot_2.webp",
    link: "/",
  },
  {
    name: "Peptide Capsules",
    imgSrc: "https://www.peptidesciences.com/media/catalog/category/Screenshot_2.webp",
    link: "/",
  },
  {
    name: "Peptide Capsules",
    imgSrc: "https://www.peptidesciences.com/media/catalog/category/Screenshot_2.webp",
    link: "/",
  },
  {
    name: "Peptide Capsules",
    imgSrc: "https://www.peptidesciences.com/media/catalog/category/Screenshot_2.webp",
    link: "/",
  },
];

const ProductGrid = () => {
  return (
    <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
      {products.map((product, index) => (
        <div key={index} className="border grid grid-cols-2 product-design-bg rounded-md">
          <div className="h-full p-7 product-design-bg">
            <h2 className="font-bold text-2xl mb-6">{product.name}</h2>
            <Link to={product.link}>
              <button className="text-white button-bg-color hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-[#F7BE38]/50 me-2 mb-2">
                Shop Now
              </button>
            </Link>
          </div>
          <div className="p-1">
            <img
              src={product.imgSrc}
              alt="product img"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
