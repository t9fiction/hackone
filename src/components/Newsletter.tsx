import React from "react";

const Newsletter = () => {
  return (
    <div className="container my-16 px-6 mx-auto">
      <section className="mb-32 text-gray-800 text-center">
        <div className="flex flex-wrap justify-center relative">
          <div className="grow-0 shrink-0 flex-basis w-full lg:w-6/12 px-3">
            <h2 className="text-3xl font-bold mb-5">
              Subscribe to the Newsletter
            </h2>

            <h1 className="hidden lg:flex lg:text-[90px] font-bold tracking-widest mx-auto -z-10 top-0 opacity-10 absolute">Newsletter</h1>

            <p className=" mb-5">
              Get the latest information and promo offers directly
            </p>

            <div className="md:flex flex-row">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="bg-primary rounded-none text-white py-2 px-4 shadow-sm hover:text-gray-100"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
