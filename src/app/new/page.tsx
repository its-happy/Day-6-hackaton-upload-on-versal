import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Newsidebar from '../components/Newsidebar';


async function fetchProductData() {
  const query = `*[_type == "product"] {
    productName,
    category,
    inventory,
    price,
    colors,
    status,
    "imageUrl": image.asset->url,
    description,
    slug
  }`;

  const products = await client.fetch(query);
  return products;
}

export default async function ProductList() {
  const products = await fetchProductData();

  return (
    <div>
      <div className="flex ml-3">
        <div className='hidden md:midden lg:block'>
        <Newsidebar />
        </div>
        <div>
          <div className="p-5">
            <h1 className="text-[30px] font-bold text-center">Products</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
              {products.map((product:any) => (
                <div key={product.slug.current} className="">
                  <Link href={`/dynamic/${product.slug.current}`}>
                    <Image
                      src={product.imageUrl}
                      alt={product.productName}
                      width={348}
                      height={348}
                      className="object-cover"
                    />
                  </Link>
                  <h1 className="text-xl font-bold mt-2">{product.productName}</h1>
                  <p className="text-lg text-gray-600 mt-2">{product.category}</p>
                  <p className="text-lg text-gray-600 mt-2">Colour: {product.colors.join(', ')}</p>
                  <p className="text-[17px] font-bold mt-2 text-black">Price: ₹ {product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="pt-10 ml-6 pb-6">
          <div className="border-t border-slate-400 mb-2">
            <h2 className="text-[18px] font-semibold pt-6 flex justify-center">Related Categories</h2>
          </div>
          <div className="pt-6 space-x-2 space-y-2">
            <button className="bg-white text-black py-2 px-8 rounded-full border border-gray-500">
              Best Selling Products
            </button>
            <button className="bg-white text-black py-2 px-8 rounded-full border border-gray-500">
              Best Shoes
            </button>
            <button className="bg-white text-black py-2 px-8 rounded-full border border-gray-500">
              New Basketball Shoes
            </button>
            <button className="bg-white text-black py-2 px-8 rounded-full border border-gray-500">
              New Football Shoes
            </button>
            <button className="bg-white text-black py-2 px-8 rounded-full border border-gray-500">
              New Men&apos;s Shoes
            </button>
            <button className="bg-white text-black py-2 px-8 rounded-full border border-gray-500">
              New Running Shoes
            </button>
            <button className="bg-white text-black py-2 px-8 rounded-full border border-gray-500">
              Best Men&apos;s Shoes
            </button>
            <button className="bg-white text-black py-2 px-8 rounded-full border border-gray-500">
              New Jordan Shoes
            </button>
            <button className="bg-white text-black py-2 px-8 rounded-full border border-gray-500">
              Best Women&apos;s Shoes
            </button>
            <button className="bg-white text-black py-2 px-8 rounded-full border border-gray-500">
              Best Training &amp; Gym
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
