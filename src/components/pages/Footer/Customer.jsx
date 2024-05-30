import React from "react";
import Latestinformation from "../Latestinformation";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";

const Customer = () => {
  const sections = [
    {
      title: "Shipment & Conveyance",
      content: "We provide numerous conveyance choices. GRATIS shipment with orders exceeding $200.00 (Grand Total), USPS Priority, FedEx 2 Day (2 business days), FedEx Overnight, FedEx Overnight - Signature Required, and FedEx Saturday Delivery for orders placed on Fridays before noon PST that require next-day delivery. Orders placed, paid, and processed before 12 noon PST typically ship out the same business day. Orders placed, paid, and processed after 12 noon PST and on weekends and holidays ship out the following business day."
    },
    {
      title: "Confidentiality & Safeguarding",
      content: "When you submit your order online, you're shielded by 256 Bit SSL (Secure Socket Layer) encryption technology on our impregnable server. We take your privacy earnestly and abide by all federal and state privacy laws to ensure your information is entirely secure and confidential. We will not divulge your personal or order information to anyone and will not utilize your information for any purpose other than fulfilling your order(s)."
    },
    {
      title: "Exchanges & Refunds",
      content: "Bioplentypeps.com gathers information about the usage of our website to offer a secure and personalized experience. This encompasses the customer's designation, email, purchase records, and shopping habits. We will gather information when you place an order with us."
    },
    {
      title: "Placing Orders",
      content: "You can place orders with PeptideSciences™ 24 hours a day, 7 days a week through our secure website. Once your order is submitted, approved, and payment is received, it will be fulfilled, appropriately packaged, and dispatched by a reputable delivery service such as USPS. We will provide you with details once your order has been dispatched."
    },
    {
      title: "Transaction, Pricing & Deals",
      content: "We accept payments via all major credit cards. We offer both individual and wholesale bulk pricing. Please refer to our product pages for quantity discounts. For substantial bulk discounts, please reach out to us via email."
    },
    {
      title: "Tracking Orders",
      content: "During checkout, you'll have the option to register or checkout as a guest. We recommend registration, though it's entirely optional. Registration doesn't add extra time and enables you to monitor order status, modify your account details, and access past orders by logging into our website. It also expedites checkout for future orders. If you opt not to create an account during checkout and have inquiries about your order status, please drop us an email. Alternatively, you can check out as a Guest."
    },
    {
      title: "Absolute Satisfaction",
      content: "We're dedicated to delivering exceptional quality and service, and we're here to assist you. If you have any queries or concerns regarding our service, please contact us to apprise us of the situation. We respond to ALL inquiries and requests."
    }
  ];

  return (
    <>
      <section>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <h2 className="mb-6 text-[22px] font-bold text-dark dark:text-white sm:text-[20px] lg:text-[25px] xl:text-[30px]">
            Client Support
          </h2>

          <ul>
            {sections.map((section, index) => (
              <li key={index} className="flex items-center justify-start">
                <span>
                  <BsDot className="w-7 h-7" />
                </span>
                {section.title}
              </li>
            ))}
          </ul>

          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="mb-2 mt-4 text-[20px] font-bold text-dark dark:text-white sm:text-[15px] lg:text-[20px] xl:text-[15px]">
                {section.title}
              </h2>
              <p className="mb-5 text-base leading-relaxed text-body-color dark:text-dark-6">
                {section.content}
              </p>
            </div>
          ))}

          <p className="mb-5 text-base leading-relaxed text-body-color dark:text-dark-6">
            Feel free to reach us at{" "}
            <Link className="underline" to="/">
              support@bioplentypeps.com
            </Link>{" "}
            for assistance.
          </p>
        </div>
      </section>

      <Latestinformation />
    </>
  );
};

export default Customer;
