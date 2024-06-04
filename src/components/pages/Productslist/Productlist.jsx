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
          <p className="text-sm">MK-677 (Ibutamoren)</p>

          <h5 className="text-red-500 mt-5 mb-3 font-bold">Peptide Blends</h5>
          <p className="text-sm">BPC157, TB500 10mg Blend</p>
          <p className="text-sm mt-1">CJC1295, GMRP2 10mg Blend</p>
          <p className="text-sm mt-1">CJC1295, GMRP6 10mg Blend</p>
          <p className="text-sm mt-1">CJC1295, Hexarelin 10mg Blend</p>
          <p className="text-sm mt-1">CJC1295, Iplamorelin 10mg Blend</p>
          <p className="text-sm mt-1">CJC1295, Ipamorelin GHRP2 Blend</p>
          <p className="text-sm mt-1">Fragment, CJC1295, Ipamorelin Blend</p>
          <p className="text-sm mt-1">Fragment, ModGRF, Ipamorelin Blend</p>
          <p className="text-sm mt-1">ModGRF, GHRP2, 10mg Blend</p>
          <p className="text-sm mt-1">ModGRF, GHRP6, 10mg Blend</p>
          <p className="text-sm mt-1">ModGRF, Hexarelin, 10mg Blend</p>
          <p className="text-sm mt-1">ModGRF, Ipamorelin, 10mg Blend</p>
          <p className="text-sm mt-1">ModGRF, Ipamorelin, GHRP2 Blend</p>
          <p className="text-sm mt-1">Sermorelin, GHRP2, 10mg Blend</p>
          <p className="text-sm mt-1">Sermorelin, GHRP6, 10mg Blend</p>
          <p className="text-sm mt-1">Sermorelin, Ipamorelin, 10mg Blend</p>
          <p className="text-sm mt-1">Sermorelin, GHRP6, GHRP2 10mg Blend</p>
          <p className="text-sm mt-1">
            Tesamoreli, CJC1295, Ipamorelin 12mg Blend
          </p>
          <p className="text-sm mt-1">Tesamoreli, Ipamorelin 8mg Blend</p>

          <h5 className="text-red-500 mt-5 mb-3 font-bold">IGF-1 Proteins</h5>
          <p className="text-sm">IGF-1 DES 1mg</p>
          <p className="text-sm mt-1">IGF-1 LR3 1mg</p>
          <p className="text-sm mt-1">IGF-1 LR3 Receptor 100mcg</p>
          <p className="text-sm mt-1">IGF-1 LR3 Receptor Grade 1mg</p>

          <h5 className="text-red-500 mt-5 mb-3 font-bold">
            Cosmetic Peptides
          </h5>

          <p className="text-sm">Acetyl Hexapeptide-3 (Argireline)</p>
          <p className="text-sm mt-1">AHK (Tripeptide-3)</p>
          <p className="text-sm mt-1">AHK-Cu (Copper Peptide)</p>
          <p className="text-sm mt-1">Decapetitude-12</p>
          <p className="text-sm mt-1">GHK Basic 200mg (Tripeptide-1)</p>
          <p className="text-sm mt-1">GHK-Cu 200mg (Copper Peptide)</p>
          <p className="text-sm mt-1">GHK-Cu 500mg (Copper Peptide)</p>
          <p className="text-sm mt-1">GHK-Cu 1000mg (Copper Peptide)</p>
          <p className="text-sm mt-1">Lipopeptide (Biopeptide EL)</p>
          <p className="text-sm mt-1">Matrixyl (Palmitoyl Pentapeptide-3)</p>
          <p className="text-sm mt-1">Melanostatin DM</p>
          <p className="text-sm mt-1">Nonapeptide-1</p>
          <p className="text-sm mt-1">Pal-AHK</p>
          <p className="text-sm mt-1">Pal-GHK (Palmitoyl Tripeptide-1)</p>
          <p className="text-sm mt-1">Palmitoyl Dipeptide-6</p>
          <p className="text-sm mt-1">Pentapeptide-18 (Leuphasyl)</p>
          <p className="text-sm mt-1">Rigin (Palmitoyl Tetrapeptide-7)</p>
          <p className="text-sm mt-1">SNAP-8 200mg</p>
          <p className="text-sm mt-1">Syn-AKE</p>
          <p className="text-sm mt-1">Syn-Coll (Palmitoyl Tripeptide-5)</p>
          <p className="text-sm mt-1">Tripeptide-19 (Collagen peptide)</p>
          <p className="text-sm mt-1">Vialox (Pentapeptide-3V)</p>
        </div>
      </section>
    </>
  );
};

export default Productlist;
