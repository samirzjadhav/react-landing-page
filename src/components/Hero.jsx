import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 pt-44 pb-16 sm:px-6 lg:px-8"
    >
      {/* left col */}
      <div className="w-full md:w-1/2 space-y-8">
        {/* star badge */}
        <div className=" flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group">
          <span className="text-blue-600 group-hover:scale-110 transition-transform">
            ★
          </span>
          <span className="text-sm font-medium"> jump start your growth</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ">
          We boost the growth for
          <span className="text-blue-600 relative inline-block">
            {" "}
            Startup to Fortune 500
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60"></span>
          </span>{" "}
          Companies
          <span className="inline-block ml-2 animate-pulse">⏰</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-xl">
          Get the most accurate leads, sales people training and conversions,
          tools and more — all within the same one billing.
        </p>
        <div className="flex gap-3 max-w-md">
          <input
            type="text"
            placeholder="Email address"
            className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transtion-all text-gray-600"
          />
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 cursor-pointer transiton-all hover:shadow-lg hover:shadow-blue-100 active:scale-95">
            {" "}
            →
          </button>
        </div>
      </div>
      {/* Right col */}
      <div className="w-full md:w-1/2 ">right</div>
    </section>
  );
};

export default Hero;
