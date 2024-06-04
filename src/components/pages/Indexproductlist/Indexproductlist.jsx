import React from "react";
import Productlist from "../Productslist/Productlist";
import Bestsellers from "../Bestsellers/Bestsellers";
import Allproducts from "./Allproducts";

const Indexproductlist = () => {
  return (
    <>
      <section className="mt-8 mb-10">
        <div className="max-w-screen-xl mx-auto p-3 flex flex-col md:flex-row">
          {/* Left side */}
          <div className="p-3 w-full md:w-3/12 mb-4 md:mb-0">
            <Productlist />
          </div>
          {/* Right side */}
          <div className="p-3 w-full md:w-9/12">
            <p className="text-[14px]">
              Peptide Sciences™ specializes in the synthesis of highly purified
              peptides, proteins and amino acid derivatives for scientific
              research and development. Peptide Sciences™ uses automated, and
              manual peptide synthesizers as well as solution and solid-phase
              peptide synthetic technology to offer the finest quality peptides
              and proteins that exceed 99% purity. From the initial stages of
              peptide synthesis to packaging and delivery, our company
              implements the most stringent quality control standards to ensure
              that all peptides arrive in their purest and most stable form. In
              house testing at all stages of production at our analytical test
              lab verifies our peptides sequential fingerprints for precision
              accuracy. This is achieved through highly accurate
              High-Performance Liquid Chromatography and Mass Spectrometry
              analysis, which scientifically proves the purity, accuracy and
              identity of each peptide.
            </p>

            <Bestsellers />
            <Allproducts/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Indexproductlist;
