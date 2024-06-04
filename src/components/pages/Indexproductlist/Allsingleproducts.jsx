import React from "react";
import { Link } from "react-router-dom";

const products = [
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
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/5/-/5-amino-1mq_60_capsules__1.webp",
      name: "5-Amino-1MQ (60 Capsules)",
      originalPrice: "256",
      discountedPrice: "210.00",
      cartsystemlink: "/",
    },
    {
      id: 3,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/a/d/adipotide_10mg_1.webp",
      name: "Adipotide (FTPP) 10mg",
      originalPrice: "299",
      discountedPrice: "251.00",
      cartsystemlink: "/",
    },
    {
      id: 4,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/a/o/aod-9604_6mg_vial_img.webp",
      name: "AOD9604 5mg",
      originalPrice: "175",
      discountedPrice: "150.00",
      cartsystemlink: "/",
    },
    {
      id: 5,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/b/p/bpc-157_5mg_1.webp",
      name: "BPC-157 5mg",
      originalPrice: "85",
      discountedPrice: "70.00",
      cartsystemlink: "/",
    },
    {
      id: 6,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/c/j/cjc-1295_ipamorelin_10mg_blend_.png",
      name: "CJC-1295 w/DAC 2mg",
      originalPrice: "65",
      discountedPrice: "55.00",
      cartsystemlink: "/",
    },
    {
      id: 7,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/c/j/cjc-1295_ipamorelin_10mg_blend_.png",
      name: "CJC-1295 No DAC 2mg",
      originalPrice: "60",
      discountedPrice: "50.00",
      cartsystemlink: "/",
    },
    {
      id: 8,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/e/p/epithalon_epitalon_50mg.png",
      name: "Epitalon 10mg",
      originalPrice: "110",
      discountedPrice: "95.00",
      cartsystemlink: "/",
    },
    {
      id: 9,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/a/d/adipotide_10mg_1.png",
      name: "FTPP (Adipotide) 10mg",
      originalPrice: "299",
      discountedPrice: "251.00",
      cartsystemlink: "/",
    },
    {
      id: 10,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/g/h/ghrp-2_5mg_new.png",
      name: "GHRP-2 5mg",
      originalPrice: "55",
      discountedPrice: "45.00",
      cartsystemlink: "/",
    },
    {
      id: 11,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/g/h/ghrp-2_5mg_new.png",
      name: "GHRP-6 5mg",
      originalPrice: "50",
      discountedPrice: "40.00",
      cartsystemlink: "/",
    },
    {
      id: 12,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/g/h/ghrp-2_5mg_new.png",
      name: "GHRP-6 10mg",
      originalPrice: "95",
      discountedPrice: "80.00",
      cartsystemlink: "/",
    },
    {
      id: 13,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/p/t/pt-141_10mg.png",
      name: "Heptapeptide 6 2mg",
      originalPrice: "60",
      discountedPrice: "50.00",
      cartsystemlink: "/",
    },
    {
      id: 14,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/p/t/pt-141_10mg.png",
      name: "HK-1 Fragment 5mg",
      originalPrice: "75",
      discountedPrice: "65.00",
      cartsystemlink: "/",
    },
    {
      id: 15,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/p/t/pt-141_10mg.png",
      name: "HK-1 Fragment 10mg",
      originalPrice: "140",
      discountedPrice: "120.00",
      cartsystemlink: "/",
    },
    {
      id: 16,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/p/t/pt-141_10mg.png",
      name: "Hexarelin 2mg",
      originalPrice: "55",
      discountedPrice: "45.00",
      cartsystemlink: "/",
    },
    {
      id: 17,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/i/p/ipamorelin_2mg_1.webp",
      name: "Ipamorelin 2mg",
      originalPrice: "50",
      discountedPrice: "40.00",
      cartsystemlink: "/",
    },
    {
      id: 18,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/i/p/ipamorelin_5mg.png",
      name: "Ipamorelin 5mg",
      originalPrice: "95",
      discountedPrice: "80.00",
      cartsystemlink: "/",
    },
    {
      id: 19,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/i/p/ipamorelin_5mg.png",
      name: "MK-677 (Ibutamoren) 25mg * 60 Capsules",
      originalPrice: "120",
      discountedPrice: "100.00",
      cartsystemlink: "/",
    },
    {
      id: 20,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/i/p/ipamorelin_5mg.png",
      name: "MLT-0004 2mg",
      originalPrice: "60",
      discountedPrice: "50.00",
      cartsystemlink: "/",
    },
    {
      id: 21,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/i/p/ipamorelin_5mg.png",
      name: "MLT-0005 5mg",
      originalPrice: "95",
      discountedPrice: "80.00",
      cartsystemlink: "/",
    },
    {
      id: 22,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/i/p/ipamorelin_5mg.png",
      name: "MLT-0010 10mg",
      originalPrice: "140",
      discountedPrice: "120.00",
      cartsystemlink: "/",
    },
    {
      id: 23,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/i/p/ipamorelin_5mg.png",
      name: "MLT-0015 15mg",
      originalPrice: "200",
      discountedPrice: "175.00",
      cartsystemlink: "/",
    },
    {
      id: 24,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/i/p/ipamorelin_5mg.png",
      name: "MLT-0020 20mg",
      originalPrice: "260",
      discountedPrice: "225.00",
      cartsystemlink: "/",
    },
    {
      id: 25,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/i/p/ipamorelin_5mg.png",
      name: "MLT-0025 25mg",
      originalPrice: "320",
      discountedPrice: "280.00",
      cartsystemlink: "/",
    },
    {
      id: 26,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/i/p/ipamorelin_5mg.png",
      name: "Mod GRF 1-29 2mg",
      originalPrice: "45",
      discountedPrice: "40.00",
      cartsystemlink: "/",
    },
    {
      id: 27,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/i/p/ipamorelin_5mg.png",
      name: "Mod GRF 1-29 5mg",
      originalPrice: "95",
      discountedPrice: "85.00",
      cartsystemlink: "/",
    },
    {
      id: 28,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/i/p/ipamorelin_5mg.png",
      name: "NAFG 5mg",
      originalPrice: "75",
      discountedPrice: "65.00",
      cartsystemlink: "/",
    },
    {
      id: 29,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/i/p/ipamorelin_5mg.png",
      name: "PLT-0030 30mg",
      originalPrice: "360",
      discountedPrice: "320.00",
      cartsystemlink: "/",
    },
    {
      id: 30,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/i/p/ipamorelin_5mg.png",
      name: "PT-141 10mg",
      originalPrice: "110",
      discountedPrice: "95.00",
      cartsystemlink: "/",
    },
    {
      id: 31,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/i/p/ipamorelin_5mg.png",
      name: "SAR-001 10mg",
      originalPrice: "140",
      discountedPrice: "120.00",
      cartsystemlink: "/",
    },
    {
      id: 32,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/i/p/ipamorelin_5mg.png",
      name: "SAR-001 25mg",
      originalPrice: "320",
      discountedPrice: "280.00",
      cartsystemlink: "/",
    },
    {
      id: 33,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/i/p/ipamorelin_5mg.png",
      name: "ST-0010 10mg",
      originalPrice: "110",
      discountedPrice: "95.00",
      cartsystemlink: "/",
    },
    {
      id: 34,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/i/p/ipamorelin_5mg.png",
      name: "ST-0020 20mg",
      originalPrice: "200",
      discountedPrice: "175.00",
      cartsystemlink: "/",
    },
    {
      id: 35,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/i/p/ipamorelin_5mg.png",
      name: "ST-0030 30mg",
      originalPrice: "360",
      discountedPrice: "320.00",
      cartsystemlink: "/",
    },
    {
      id: 36,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/i/p/ipamorelin_5mg.png",
      name: "TAM-0010 10mg",
      originalPrice: "110",
      discountedPrice: "95.00",
      cartsystemlink: "/",
    },
    {
      id: 37,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/t/e/tesamorelin_ipamorelin_8mg_blend_.png",
      name: "TAM-0020 20mg",
      originalPrice: "200",
      discountedPrice: "175.00",
      cartsystemlink: "/",
    },
    {
      id: 38,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/t/e/tesamorelin_ipamorelin_8mg_blend_.png",
      name: "TAM-0030 30mg",
      originalPrice: "360",
      discountedPrice: "320.00",
      cartsystemlink: "/",
    },
    {
      id: 39,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/t/e/tesamorelin_ipamorelin_8mg_blend_.png",
      name: "TBP-001 10mg",
      originalPrice: "110",
      discountedPrice: "95.00",
      cartsystemlink: "/",
    },
    {
      id: 40,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/t/e/tesamorelin_ipamorelin_8mg_blend_.png",
      name: "TBP-002 20mg",
      originalPrice: "200",
      discountedPrice: "175.00",
      cartsystemlink: "/",
    },
    {
      id: 41,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/t/e/tesamorelin_ipamorelin_8mg_blend_.png",
      name: "TBP-003 30mg",
      originalPrice: "360",
      discountedPrice: "320.00",
      cartsystemlink: "/",
    },
    {
      id: 42,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/t/e/tesamorelin_ipamorelin_8mg_blend_.png",
      name: "TBP-004 40mg",
      originalPrice: "450",
      discountedPrice: "400.00",
      cartsystemlink: "/",
    },
    {
      id: 43,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/t/e/tesamorelin_ipamorelin_8mg_blend_.png",
      name: "TBP-005 50mg",
      originalPrice: "550",
      discountedPrice: "500.00",
      cartsystemlink: "/",
    },
    {
      id: 44,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/t/e/tesamorelin_ipamorelin_8mg_blend_.png",
      name: "TBP-006 60mg",
      originalPrice: "660",
      discountedPrice: "600.00",
      cartsystemlink: "/",
    },
    {
      id: 45,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/t/e/tesamorelin_ipamorelin_8mg_blend_.png",
      name: "TBP-007 70mg",
      originalPrice: "770",
      discountedPrice: "700.00",
      cartsystemlink: "/",
    },
    {
      id: 46,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/t/e/tesamorelin_ipamorelin_8mg_blend_.png",
      name: "TBP-007 70mg",
      originalPrice: "770",
      discountedPrice: "700.00",
      cartsystemlink: "/",
    },
    {
      id: 47,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/t/e/tesamorelin_ipamorelin_8mg_blend_.png",
      name: "TBP-007 70mg",
      originalPrice: "770",
      discountedPrice: "700.00",
      cartsystemlink: "/",
    },
    {
      id: 48,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/t/e/tesamorelin_ipamorelin_8mg_blend_.png",
      name: "TBP-007 70mg",
      originalPrice: "770",
      discountedPrice: "700.00",
      cartsystemlink: "/",
    },
    {
      id: 49,
      imageUrl: "https://www.peptidesciences.com/media/catalog/product/cache/17ff3f639a9ab9d5842ef1e99219b75f/t/e/tesamorelin_ipamorelin_8mg_blend_.png",
      name: "TBP-007 70mg",
      originalPrice: "770",
      discountedPrice: "700.00",
      cartsystemlink: "/",
    },
  ];
  

const Allsingleproducts = () => {
  return (
    <>
      <section>
        <div className="grid lg:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-3 mt-8">
          {products.map(product => (
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
                  <s className="font-bold text-center">{product.originalPrice}</s>
                  <h4 className="font-bold text-lg text-orange-600 text-center">
                    ${product.discountedPrice}
                  </h4>
                </div>

                <div className="flex justify-center mt-1 items-center">
                  <Link to={product.cartsystemlink}>
                    <button className="text-white button-bg-color hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-[#F7BE38]/50 me-2 mb-2">
                      Add to Cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Allsingleproducts;
