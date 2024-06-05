import React from "react";
import { Link } from "react-router-dom";

const Productlist = () => {
  const peptides = [
    { name: "Semaglutide 1mg/vial", link: "/semaglutide-1mg" },
    { name: "Semaglutide 2mg/vial", link: "/semaglutide-2mg" },
    { name: "Tirzepatide 5mg/vial", link: "/tirzepatide-5mg" },
    { name: "Tirzepatide 5mg/vial", link: "/tirzepatide-5mg-2" },
    { name: "Tirzepatide 12.5mg/vial", link: "/tirzepatide-12-5mg" },
    { name: "Retratrutide 4mg/vial", link: "/retratrutide-4mg" },
    { name: "Retratrutide 8mg/vial", link: "/retratrutide-8mg" },
    { name: "Somatropin 4iu/vial", link: "/somatropin-4iu" },
    { name: "Somatropin 10iu/vial", link: "/somatropin-10iu" },
    { name: "Somatropin 12iu/vial", link: "/somatropin-12iu" },
    { name: "GHRP6 5mg/vial", link: "/ghrp6-5mg" },
    { name: "GHRP6 10mg/vial", link: "/ghrp6-10mg" },
    { name: "HGH fragment 2mg/vial", link: "/hgh-fragment-2mg" },
    { name: "HGH fragment 5mg/vial", link: "/hgh-fragment-5mg" },
    { name: "CJC 1295 w/o DAC 2mg/vial", link: "/cjc1295-no-dac-2mg" },
    { name: "CJC 1295 w/o DAC 5mg/vial", link: "/cjc1295-no-dac-5mg" },
    { name: "CJC 1295 DAC 2mg/vial", link: "/cjc1295-dac-2mg" },
    { name: "CJC 1295 DAC 5mg/vial", link: "/cjc1295-dac-5mg" },
    { name: "TB500 2mg/vial", link: "/tb500-2mg" },
    { name: "TB500 5mg/vial", link: "/tb500-5mg" },
    { name: "TB500 10mg/vial", link: "/tb500-10mg" },
    { name: "BPC157 2mg/vial", link: "/bpc157-2mg" },
    { name: "BPC157 5mg/vial", link: "/bpc157-5mg" },
    { name: "BPC157 10mg/vial", link: "/bpc157-10mg" },
    { name: "IGF 1LR3 100mcg/vial", link: "/igf1lr3-100mcg" },
    { name: "IGF 1LR3 1mg/vial", link: "/igf1lr3-1mg" },
  ];

  const blends = [
    { text: "BPC157, TB500 10mg Blend", link: "/link-to-bpc157-tb500" },
    { text: "CJC1295, GMRP2 10mg Blend", link: "/link-to-cjc1295-gmrp2" },
    { text: "CJC1295, GMRP6 10mg Blend", link: "/link-to-cjc1295-gmrp6" },
    {
      text: "CJC1295, Hexarelin 10mg Blend",
      link: "/link-to-cjc1295-hexarelin",
    },
    {
      text: "CJC1295, Iplamorelin 10mg Blend",
      link: "/link-to-cjc1295-iplamorelin",
    },
    {
      text: "CJC1295, Ipamorelin GHRP2 Blend",
      link: "/link-to-cjc1295-ipamorelin-ghrp2",
    },
    {
      text: "Fragment, CJC1295, Ipamorelin Blend",
      link: "/link-to-fragment-cjc1295-ipamorelin",
    },
    {
      text: "Fragment, ModGRF, Ipamorelin Blend",
      link: "/link-to-fragment-modgrf-ipamorelin",
    },
    { text: "ModGRF, GHRP2, 10mg Blend", link: "/link-to-modgrf-ghrp2" },
    { text: "ModGRF, GHRP6, 10mg Blend", link: "/link-to-modgrf-ghrp6" },
    {
      text: "ModGRF, Hexarelin, 10mg Blend",
      link: "/link-to-modgrf-hexarelin",
    },
    {
      text: "ModGRF, Ipamorelin, 10mg Blend",
      link: "/link-to-modgrf-ipamorelin",
    },
    {
      text: "ModGRF, Ipamorelin, GHRP2 Blend",
      link: "/link-to-modgrf-ipamorelin-ghrp2",
    },
    {
      text: "Sermorelin, GHRP2, 10mg Blend",
      link: "/link-to-sermorelin-ghrp2",
    },
    {
      text: "Sermorelin, GHRP6, 10mg Blend",
      link: "/link-to-sermorelin-ghrp6",
    },
    {
      text: "Sermorelin, Ipamorelin, 10mg Blend",
      link: "/link-to-sermorelin-ipamorelin",
    },
    {
      text: "Sermorelin, GHRP6, GHRP2 10mg Blend",
      link: "/link-to-sermorelin-ghrp6-ghrp2",
    },
    {
      text: "Tesamoreli, CJC1295, Ipamorelin 12mg Blend",
      link: "/link-to-tesamoreli-cjc1295-ipamorelin",
    },
    {
      text: "Tesamoreli, Ipamorelin 8mg Blend",
      link: "/link-to-tesamoreli-ipamorelin",
    },
  ];

  const Proteins = [
    { name: "IGF-1 DES 1mg", url: "/igf-1-des-1mg" },
    { name: "IGF-1 LR3 1mg", url: "/igf-1-lr3-1mg" },
    { name: "IGF-1 LR3 Receptor 100mcg", url: "/igf-1-lr3-receptor-100mcg" },
    { name: "IGF-1 LR3 Receptor Grade 1mg", url: "/igf-1-lr3-receptor-grade-1mg" }
  ];

  const Cosmetic = [
    { name: "Acetyl Hexapeptide-3 (Argireline)", url: "acetyl-hexapeptide-3" },
    { name: "AHK (Tripeptide-3)", url: "ahk-tripeptide-3" },
    { name: "AHK-Cu (Copper Peptide)", url: "ahk-cu" },
    { name: "Decapetitude-12", url: "decapetitude-12" },
    { name: "GHK Basic 200mg (Tripeptide-1)", url: "ghk-basic-200mg" },
    { name: "GHK-Cu 200mg (Copper Peptide)", url: "ghk-cu-200mg" },
    { name: "GHK-Cu 500mg (Copper Peptide)", url: "ghk-cu-500mg" },
    { name: "GHK-Cu 1000mg (Copper Peptide)", url: "ghk-cu-1000mg" },
    { name: "Lipopeptide (Biopeptide EL)", url: "lipopeptide" },
    { name: "Matrixyl (Palmitoyl Pentapeptide-3)", url: "matrixyl" },
    { name: "Melanostatin DM", url: "melanostatin-dm" },
    { name: "Nonapeptide-1", url: "nonapeptide-1" },
    { name: "Pal-AHK", url: "pal-ahk" },
    { name: "Pal-GHK (Palmitoyl Tripeptide-1)", url: "pal-ghk" },
    { name: "Palmitoyl Dipeptide-6", url: "palmitoyl-dipeptide-6" },
    { name: "Pentapeptide-18 (Leuphasyl)", url: "pentapeptide-18" },
    { name: "Rigin (Palmitoyl Tetrapeptide-7)", url: "rigin" },
    { name: "SNAP-8 200mg", url: "snap-8-200mg" },
    { name: "Syn-AKE", url: "syn-ake" },
    { name: "Syn-Coll (Palmitoyl Tripeptide-5)", url: "syn-coll" },
    { name: "Tripeptide-19 (Collagen peptide)", url: "tripeptide-19" },
    { name: "Vialox (Pentapeptide-3V)", url: "vialox" },
  ];

  return (
    <>
      <section>
        <div>
          <h5 className="text-red-500 mb-3 font-bold">Purchase Peptide</h5>
          <ul>
            {peptides.map((peptide, index) => (
              <li key={index} className="text-sm mt-1 hover:text-blue-400">
                <Link href={peptide.link} className="text-sm mt-1">
                  {peptide.name}
                </Link>
              </li>
            ))}
          </ul>

          <h5 className="text-red-500 mt-5 mb-3 font-bold">Peptide Capsules</h5>
          <Link to="/">
            <p className="text-sm">MK-677 (Ibutamoren)</p>
          </Link>

          {/* Peptide blends */}
          <h5 className="text-red-500 mt-5 mb-3 font-bold">Peptide Blends</h5>

          <div>
            {blends.map((blend, index) => (
              <p key={index} className={`text-sm `}>
                <Link to={blend.link}>{blend.text}</Link>
              </p>
            ))}
          </div>

          {/* Peptide Proteins */}
          <h5 className="text-red-500 mt-5 mb-3 font-bold">IGF-1 Proteins</h5>

          <div>
            {Proteins.map((product, index) => (
              <p key={index} className={`text-sm ${index > 0 ? "mt-1" : ""}`}>
                <Link to={product.url}>{product.name}</Link>
              </p>
            ))}
          </div>

          <h5 className="text-red-500 mt-5 mb-3 font-bold">
            Cosmetic Peptides
          </h5>

          <div>
      {Cosmetic.map((peptide, index) => (
        <p className={`text-sm`} key={index}>
          <Link to={peptide.url}>
            {peptide.name}
          </Link>
        </p>
      ))}
    </div>
        </div>
      </section>
    </>
  );
};

export default Productlist;
