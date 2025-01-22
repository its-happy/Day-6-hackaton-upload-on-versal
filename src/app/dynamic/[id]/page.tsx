"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function FetchProductDetails({ params }: { params: Promise<any> }) {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1); // Quantity state
  const [id, setId] = useState<string | null>(null);

  // Unwrap params to extract `id`
  useEffect(() => {
    async function unwrapParams() {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    }
    unwrapParams();
  }, [params]);

  // Fetch product details
  useEffect(() => {
    if (!id) return;

    async function fetchData() {
      try {
        const query = `*[_type == "product" && slug.current == $id][0] {
          productName,
          category,
          inventory,
          price,
          colors,
          status,
          "image_url": image.asset->url,
          description
        }`;

        const mydata = await client.fetch(query, { id });
        setProduct(mydata);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  // Handle quantity changes
  const handleQuantityChange = (type: string) => {
    setQuantity((prev) =>
      type === "increase" ? prev + 1 : prev > 1 ? prev - 1 : 1
    );
  };

  const addToCart = () => {
    const cartItem = { ...product, quantity };
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item added to cart! Please click on cart icon.');
  };

  // Loading state
  if (loading) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>
    );
  }

  // No product found
  if (!product) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold text-red-600">Data Not Found</h1>
        <p className="text-gray-600 mt-4">We couldn't find the data you're looking for.</p>
        <a href="/new" className="mt-6 text-blue-500 underline">
          Back to Products Page
        </a>
      </div>
    );
  }

  // Product details
  return (
    <div className="p-5">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start gap-10">
        {/* Product Image */}
        <div className="flex-1 max-w-[500px] mx-auto lg:mx-0">
          <Image
            src={product.image_url}
            alt={product.productName}
            width={500}
            height={500}
            className="object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-[32px] font-bold mb-4">{product.productName}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <p className="text-[24px] font-semibold text-orange-600 mb-4">
            ₹ {product.price.toLocaleString()}
          </p>
          <div className="space-y-3">
            <p className="text-gray-600">
              <strong>Category:</strong> {product.category}
            </p>
            <p className="text-gray-600">
              <strong>Available Colors:</strong> {product.colors.join(", ")}
            </p>
            <p className="text-gray-600">
              <strong>Inventory:</strong> {product.inventory}
            </p>
            <p className="text-gray-600">
              <strong>Status:</strong>{" "}
              <span
                className={`${
                  product.status ? "text-green-600" : "text-red-600"
                } font-semibold`}
              >
                {product.status ? "In Stock" : "Out of Stock"}
              </span>
            </p>
          </div>

          {/* Quantity Selector */}
          <div className="mt-6 flex items-center gap-4">
            <button
              onClick={() => handleQuantityChange("decrease")}
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              onClick={() => handleQuantityChange("increase")}
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={addToCart}
            className="px-6 py-3 mt-6 bg-black text-white font-semibold rounded-lg hover:bg-gray-800"
          >
            Add {quantity} to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default FetchProductDetails;
