"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const checkoutSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(10, "Address must be at least 10 characters"),
  postalCode: z.string().min(5, "Postal code must be at least 5 characters"),
  city: z.string(),
  state: z.string(),
  paymentMethod: z.string(),
  cardNumber: z.string().min(16, "Card number must be at least 16 digits"),
  expiryDate: z.string(),
  cvc: z.string().min(3, "CVC must be at least 3 digits"),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

const DynamicCheckoutPage = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [deliveryDate, setDeliveryDate] = useState("Mon, 27 Mar - Wed, 12 Apr");
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const onSubmit = async (data: CheckoutFormData) => {
    const formData = {
      userDetails: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        postalCode: data.postalCode,
        city: data.city,
        state: data.state,
      },
      paymentDetails: {
        method: data.paymentMethod,
        cardNumber: data.cardNumber,
        expiryDate: data.expiryDate,
        cvc: data.cvc,
      },
      orderDetails: cart.map((item) => ({
        productName: item.productName,
        productImage: item.image_url,
        quantity: item.quantity,
        price: item.price,
        size: item.size,
      })),
      totalPrice: getTotalPrice(),
      deliveryDate,
    };

    try {
      await client.create({
        _type: "checkout",
        ...formData,
      });
      setSuccessMessage("Checkout successfully!");
      localStorage.removeItem("cart");
      setCart([]);
      reset(); 
    } catch (error) {
      console.error("Error saving order:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-between p-6 bg-gray-100">
      {/* Left Section */}
      <div className="md:w-2/3 pr-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <h2 className="text-lg font-bold mb-4">Enter your name and address:</h2>
          <input
            type="text"
            placeholder="First Name"
            {...register("firstName")}
            name="firstName" 
            className="w-full border p-2 rounded-md"
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
          <input
            type="text"
            placeholder="Last Name"
            {...register("lastName")}
            name="lastName" 
            className="w-full border p-2 rounded-md"
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            name="email" 
            className="w-full border p-2 rounded-md"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          <input
            type="tel"
            placeholder="Phone"
            {...register("phone")}
            name="phone" 
            className="w-full border p-2 rounded-md"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          <textarea
            placeholder="Address"
            {...register("address")}
            name="address" 
            className="w-full border p-2 rounded-md"
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Postal Code"
              {...register("postalCode")}
              name="postalCode" 
              className="w-1/2 border p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="City"
              {...register("city")}
              name="city" 
              className="w-1/2 border p-2 rounded-md"
            />
          </div>
          <input
            type="text"
            placeholder="State"
            {...register("state")}
            name="state" 
            className="w-full border p-2 rounded-md"
          />

          <h2 className="text-lg font-bold mt-6">Payment Details</h2>
          <select
            {...register("paymentMethod")}
            name="paymentMethod" 
            className="w-full border p-2 rounded-md"
          >
            <option value="">Select Payment Method</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
          </select>
          {errors.paymentMethod && <p className="text-red-500 text-sm">{errors.paymentMethod.message}</p>}
          <input
            type="text"
            placeholder="Card Number"
            {...register("cardNumber")}
            name="cardNumber" 
            className="w-full border p-2 rounded-md"
          />
          {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber.message}</p>}
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Expiry Date"
              {...register("expiryDate")}
              name="expiryDate" 
              className="w-1/2 border p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="CVC"
              {...register("cvc")}
              name="cvc" 
              className="w-1/2 border p-2 rounded-md"
            />
          </div>
          {errors.cvc && <p className="text-red-500 text-sm">{errors.cvc.message}</p>}

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md mt-4">
            Checkout
          </button>
          {successMessage && <p className="text-green-500 text-sm mt-4">{successMessage}</p>}
        </form>
      </div>

      {/* Cart Section (Right Section) */}
      <div className="md:w-1/3">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Order Summary</h2>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div key={index} className="flex items-start gap-4 mb-4">
                {item.image_url ? (
                  <Image
                    src={item.image_url}
                    alt={item.productName || "Product Image"}
                    width={80}
                    height={80}
                    className="object-cover rounded-lg"
                  />
                ) : (
                  <div className="w-20 h-20 bg-gray-300 rounded-lg"></div>
                )}
                <div>
                  <h3 className="font-bold">{item.productName || "Unnamed Product"}</h3>
                  <p className="text-sm text-gray-600">Qty: {item.quantity || 1}</p>
                  <p className="text-sm text-gray-600">Price: ₹{item.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
          <div className="flex justify-between border-t pt-4">
            <span className="font-bold">Total:</span>
            <span className="font-bold">₹{getTotalPrice()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicCheckoutPage;
