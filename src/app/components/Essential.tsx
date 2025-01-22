import Image from "next/image";
import React from "react";

function Essential() {
  return (
    <div>
      <section className="bg-white py-10 px-4 sm:px-8 lg:px-16">
        <h2 className="text-center text-2xl lg:text-3xl font-bold mb-8">
          The Essentials
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Image
    src="/Frame (6).png"
    alt="Men's Essentials"
    width={440} 
    height={540}
    className="w-full h-auto object-cover rounded-lg"
  />
  <Image
    src="/Image (111).png"
    alt="Women's Essentials"
    width={440}
    height={540} 
    className="w-full h-auto object-cover rounded-lg"
  />
  <Image
    src="/Image (4).png"
    alt="Kids' Essentials"
    width={440}
    height={540} 
    className="w-full h-auto object-cover rounded-lg"
  />
  </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <div>
            <h3 className="text-lg font-bold mb-2">Shoes</h3>
            <ul className="text-gray-500 space-y-1">
              <li>
                <a href="#">All Shoes</a>
              </li>
              <li>
                <a href="#">Custom Shoes</a>
              </li>
              <li>
                <a href="#">Jordan Shoes</a>
              </li>
              <li>
                <a href="#">Running Shoes</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Clothing</h3>
            <ul className="text-gray-500 space-y-1">
              <li>
                <a href="#">All Clothing</a>
              </li>
              <li>
                <a href="#">Modest Wear</a>
              </li>
              <li>
                <a href="#">Hoodies & Pullovers</a>
              </li>
              <li>
                <a href="#">Shirts & Tops</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Kids&apos;</h3>
            <ul className="text-gray-500 space-y-1">
              <li>
                <a href="#">Infant & Toddler Shoes</a>
              </li>
              <li>
                <a href="#">Kids&apos; Shoes</a>
              </li>
              <li>
                <a href="#">Kids&apos; Jordan Shoes</a>
              </li>
              <li>
                <a href="#">Kids&apos; Basketball Shoes</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">About Nike</h3>
            <ul className="text-gray-500 space-y-1">
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Sustainability</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Essential;
