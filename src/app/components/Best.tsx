import React from 'react';
import Image from 'next/image';
import { PiLessThan, PiGreaterThan } from 'react-icons/pi';
import Link from 'next/link';
function BestOfAirMax() {
  const products = [
    {
      name: "Nike Air Max Pulse",
      description: "Women's Shoes",
      price: "₹ 13,995",
      image: "/Image4.png",
    },
    {
      name: "Nike Air Max Pulse",
      description: "Men's Shoes",
      price: "₹ 13,995",
      image: "/Image (2).png",
    },
    {
      name: "Nike Air Max 97 SE",
      description: "Men's Shoes",
      price: "₹ 16,995",
      image: "/Image (3).png",
    },
  ];

  return (
    <div className="w-full max-w-full mx-auto">
      <section className="bg-white pt-6 px-10">
        <div className="flex justify-between items-center">
          <h2 className="font-bold">Best of Air Max</h2>
          <div className="flex items-center gap-4">
            <h3 className="text-gray-950">Shop</h3>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border bg-gray-200 hover:bg-gray-300 cursor-pointer">
                <PiLessThan className="text-black text-opacity-20 text-xl" />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full border bg-gray-300 hover:bg-gray-400 cursor-pointer">
                <PiGreaterThan className="text-black text-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10 mt-6">
        {products.map((product, index) => (
          <div key={index}>
            <div>
              <Link href="/new">
             <Image
              src={product.image}
              alt={product.name}
              width={420}
              height={400}
              className="lg:h-[400px] h-[300px]"
            /></Link></div>
            <h1 className="font-bold mt-4">{product.name}</h1>
            <p className="text-slate-400">{product.description}</p>
            <p className="font-bold">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestOfAirMax;
