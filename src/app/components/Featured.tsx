import React from 'react';
import Image from 'next/image';

function Featured() {
  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <div className="pt-14 pl-4">
        <h1 className="font-bold text-lg">Featured</h1>
      </div>

      <div className="pt-6">
        <Image
          src="/Featured.png"
          alt="Featured Shoe"
          width={1344}
          height={700}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="text-center px-4">
        <h2 className="lg:text-6xl text-4xl font-bold pt-6">
          STEP INTO WHAT FEELS GOOD
        </h2>
        <p className="pt-4 text-lg">
          Cause everyone should know the feeling of running in that perfect pair.
        </p>
        <div className="pt-4">
          <button className="bg-black text-white px-7 py-2 rounded-full hover:bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-black">
            Find Your Shoe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
