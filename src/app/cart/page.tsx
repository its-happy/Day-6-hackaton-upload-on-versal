"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(cartItems);
  }, []);

  const removeFromCart = (index: number) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQuantity = (index: number, type: string) => {
    const updatedCart = [...cart];
    const item = updatedCart[index];

    if (type === "increase") {
      item.quantity += 1;
    } else if (type === "decrease" && item.quantity > 1) {
      item.quantity -= 1;
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    router.push("/checkoutt");
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md space-y-4 sm:space-y-0"
            >
              {/* Product Info */}
              <div className="flex flex-col sm:flex-row items-center sm:gap-4 w-full sm:w-auto">
                <Image
                  src={item.image_url}
                  alt={item.productName}
                  width={80}
                  height={60}
                  className="object-cover rounded-md"
                />
                <div className="mt-2 sm:mt-0">
                  <h2 className="text-lg sm:text-xl font-semibold">
                    {item.productName}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600">
                    Price: ₹ {item.price}
                  </p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => updateQuantity(index, "decrease")}
                  className="bg-gray-300 text-black px-2 py-1 rounded-md"
                >
                  -
                </button>
                <span className="text-lg sm:text-xl font-semibold">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(index, "increase")}
                  className="bg-gray-300 text-black px-2 py-1 rounded-md"
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(index)}
                className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition w-full sm:w-auto"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total Price */}
          <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-200 p-4 rounded-lg shadow-md">
            <h2 className="text-lg sm:text-xl font-semibold">Total</h2>
            <p className="text-lg sm:text-xl font-bold">₹ {getTotal().toLocaleString()}</p>
          </div>

          {/* Checkout Button */}
          <div className="mt-4 flex justify-center">
            <button
              onClick={handleCheckout}
              className="bg-orange-600 text-white py-2 px-6 rounded-lg hover:bg-orange-700 transition w-full sm:w-auto"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
