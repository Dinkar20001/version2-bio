import React from "react";
import { FaPhoneAlt, FaFacebook, FaGooglePlus } from "react-icons/fa";
import { MdMyLocation, MdOutlineDateRange, MdOutlineMail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 p-3">
              <a href="https://flowbite.com/" className="flex items-center">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 me-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Bioplentypeps
                </span>
              </a>
              <p className="w-72">
              Lyotex Sciences has been working with scientists for over 19 years to provide the life science community with the latest and most innovative research tools available.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 lg:grid-cols-5">

            <div>
                <h2 className="mb-6 text-md font-bold text-gray-900 uppercase dark:text-white">
                 Information
                </h2>
                <ul className="text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Buy Peptides
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Peptide Specials
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Peptide Blog
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Peptide Information
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Our Company
                    </a>
                  </li>
                </ul>
              </div>
            <div>
                <h2 className="mb-6 text-md font-bold text-gray-900 uppercase dark:text-white">
                  Buy Peptides
                </h2>
                <ul className="text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Peptide Capsules
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Purchase Peptides
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Peptide Blends
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      IGF-1 Proteins
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Cosmetic Peptides
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-md font-bold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Terms of use
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Shipping & Payments
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Refunds & Returns
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-md font-bold text-gray-900 uppercase dark:text-white">
                  Support
                </h2>
                <ul className="text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      className="hover:underline "
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline"
                    >
                      more..
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-md font-bold text-gray-900 uppercase dark:text-white">
                  More Details
                </h2>
                <ul className="text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <span className="inline-block flex justify-start items-center gap-1">
                    <FaPhoneAlt />
                    <h4 className="font-bold"> Phone</h4>
                    </span>
                    <a href="#" className="hover:underline">
                      +91 0000 0000 00
                    </a>
                    <p className="text-sm">Mon - Fri 10AM - 6PM IST</p>
                  </li>

                  <li className="mb-4">
                    <span className="inline-block flex justify-start items-center gap-1">
                    <MdOutlineMail />
                    <h4 className="font-bold"> Email</h4>
                    </span>
                    <span className="inline-block">
                    <a href="#" className="hover:underline">
                      service@lyotex.com
                    </a>
                    </span>
                    <span className="inline-block">
                    <a href="#" className="hover:underline">
                      support@lyotex.com
                    </a>
                    </span>
                  </li>

                  <li className="mb-4">
                  <span className="inline-block flex justify-start items-center gap-1">
                  <MdOutlineDateRange />
                    <h4 className="font-bold"> Shipping Days</h4>
                    </span>
                    <p className="text-sm">
                    Orders placed and paid for after 12 PM IST from Mon to Sun will be shipped on the next business day.
                    </p>
                  </li>

                  <li className="mb-4">
                    <span className="inline-block flex justify-start items-center gap-1">
                    <MdMyLocation /> 
                    <h4 className="font-bold">Mailing Address</h4>
                    </span>
                    <address>
                    <p className="text-sm">
                    410208 Navi Mumbai Road Navi Mumbai, Maharashtra, IN
                    </p>
                    </address>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-1" />
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024 {''}
              <a href="https://flowbite.com/" className="hover:underline">
               Bioplentypeps.com™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <IoLogoLinkedin />
                <span className="sr-only">Linkdln page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <FaFacebook />
                <span className="sr-only">face book page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <FaSquareXTwitter />
                <span className="sr-only">Twitter page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <RiInstagramFill />
                <span className="sr-only">Instagram account</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <FaGooglePlus />
                <span className="sr-only">Gogole account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
