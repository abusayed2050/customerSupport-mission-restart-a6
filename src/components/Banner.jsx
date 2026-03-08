import React from 'react';
import pattern from "../assets/vector1.png";

const Banner = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-10">

      <div className="relative flex flex-col items-center justify-center 
      bg-linear-to-r from-purple-600 to-indigo-500 
      text-white p-10 rounded-xl overflow-hidden">

        <img
          src={pattern}
          alt="pattern"
          className="absolute left-0 top-0 h-full "
        />

        <img
          src={pattern}
          alt="pattern"
          className="absolute right-0 top-0 h-full scale-x-[-1] "
        />

        <div className="relative text-center">
          <h3 className="text-xl">In-Progress</h3>
          <p className="text-5xl font-bold mt-4">0</p>
        </div>

      </div>


      <div className="relative flex flex-col items-center justify-center 
      bg-linear-to-r from-green-600 to-teal-600 
      text-white p-10 rounded-xl overflow-hidden">

        <img
          src={pattern}
          alt="pattern"
          className="absolute left-0 top-0 h-full "
        />

        <img
          src={pattern}
          alt="pattern"
          className="absolute right-0 top-0 h-full scale-x-[-1] "
        />

        <div className="relative text-center">
          <h3 className="text-xl">Resolved</h3>
          <p className="text-5xl font-bold mt-4">0</p>
        </div>

      </div>

    </div>
  );
}

export default Banner;