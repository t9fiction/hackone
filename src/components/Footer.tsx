import Image from "next/image";
import React from "react";
import { FiFacebook } from "react-icons/fi";
import { RxResume } from "react-icons/rx";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl px-4 pt-4 sm:pt-8 md:pt-12 mx-auto space-t-8 sm:px-6 lg:space-t-16 lg:px-16">
        <div className="flex flex-col-reverse md:flex-row md:space-x-8 pb-8 w-full justify-between">
          <div className="flex flex-row md:flex-col w-full md:w-1/4 items-center justify-around py-6 md:py-0">
            <div className="">
              <Link href={"/"}>
                <Image
                  className=""
                  width={200}
                  height={200}
                  src="/images/Logo.webp"
                  alt=""
                />
              </Link>
            </div>

            <ul className="flex gap-6 md:mt-2">
              <li>
                <a
                  href="https://www.facebook.com/a4illusionist"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>

                  <FiFacebook size={24} />
                </a>
              </li>

              <li>
                <a
                  href="https://www.sohail-ishaque.com/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Portfolio</span>

                  <RxResume size={24} />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/t9fiction"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">GitHub</span>

                  <AiFillGithub size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sohail-ishaque/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">LinkedIn</span>

                  <AiOutlineLinkedin size={24} />
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-3/4 flex md:flex-row flex-col space-y-8 md:space-y-0 mx-auto md:justify-between ">
            <div className="flex flex-row w-full mx-auto">
              <div className="w-1/2 ">
                <p className="font-medium text-gray-900">Branches</p>

                <nav aria-label="Footer Navigation - Services" className="mt-6">
                  <ul className="space-y-4 text-sm">
                    
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Lahore
                      </a>
                    </li>

                    
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Karachi
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Islamabad
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="w-1/2">
                <p className="font-medium text-gray-900">Company</p>

                <nav aria-label="Footer Navigation - Company" className="mt-6">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        About
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Meet the Team
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Accounts Review
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="flex flex-row w-full mx-auto">
              <div className="w-1/2">
                <p className="font-medium text-gray-900">Helpful Links</p>

                <nav aria-label="Footer Navigation - Company" className="mt-6">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Contact
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        FAQs
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Live Chat
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="w-1/2">
                <p className="font-medium text-gray-900">Legal</p>

                <nav aria-label="Footer Navigation - Legal" className="mt-6">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Accessibility
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Returns Policy
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Refund Policy
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Hiring Statistics
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t py-2">
          <p className="text-xs text-gray-500 text-center py-4">
            &copy; 2022. Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
