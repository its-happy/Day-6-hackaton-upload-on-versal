import Image from "next/image";
import Link from "next/link";
import React from "react";

function Ddont() {
  return (
    <div>
      {/* Section Title */}
      <div className="px-8 py-6">
        <h1 className="text-xl font-bold">Don&apos;t Miss</h1>
      </div>

      {/* Image Section */}
      <div className="px-8">
        <Image
          src="/dont.png"
          alt="Flight Essentials"
          className="w-full h-auto"
          width={1200}
          height={500} 
        />
      </div>

    
      <div>
        <h2 className="lg:text-6xl text-4xl font-bold text-center pt-12">
          FLIGHT ESSENTIALS
        </h2>
        <p className="text-center pt-3 mx-4 lg:mx-0">
          Your built-to-last, all-week wears—but with style only Jordan Brand
          can deliver.
        </p>
      </div>

      {/* Shop Button */}
      <div className="flex justify-center pt-4">
       <Link href={"/new"}> <button className="bg-black text-white px-7 py-2 rounded-full hover:bg-gray-800">
          Shop
        </button></Link>
      </div>
    </div>
  );
}

export default Ddont;
