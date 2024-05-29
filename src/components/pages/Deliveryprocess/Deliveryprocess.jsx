import React from "react";

const Deliveryprocess = () => {
  return (
    <>
      <section className="bg-gray-200">
        <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border mx-auto p-4">
          <div>
            <h5 className="font-bold text-sm">Rapid Delivery</h5>
            <p className="text-sm">
            Place your order by 12 PM PST to enjoy same day shipping.
            </p>
          </div>
          <div>
            <h5 className="font-bold text-sm">Complimentary Shipping</h5>
            <p className="text-sm">
            Enjoy free shipping on all orders exceeding $200. We’ve got you covered!
            </p>
          </div>
          <div>
            <h5 className="font-bold text-sm">Personalized Support</h5>
            <p className="text-sm">
            We value every customer and take pride in providing dedicated service.
            </p>
          </div>
          <div>
            <h5 className="font-bold text-sm">Premium Peptides</h5>
            <p className="text-sm">
            Our peptides and proteins boast a purity level exceeding 99%, ensuring top quality.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Deliveryprocess;
