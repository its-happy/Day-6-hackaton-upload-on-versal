"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { client } from "@/sanity/lib/client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const reportSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

type ReportFormData = z.infer<typeof reportSchema>;

const ReportPage = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReportFormData>({
    resolver: zodResolver(reportSchema),
  });

  const onSubmit = async (data: ReportFormData) => {
    const formData = {
      name: data.name,
      email: data.email,
      message: data.message,
      date: new Date().toISOString(), 
    };

    try {
      await client.create({
        _type: "report", 
        ...formData,
      });
      setSuccessMessage("Your report has been successfully submitted!");
      reset();
    } catch (error) {
      console.error("Error submitting report:", error);
      alert("Failed to submit the report. Please try again.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 p-6">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-xl border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
          Submit a Report
        </h2>
        <p className="text-gray-600 text-sm text-center mb-6">
          Have an issue? Fill out the form below, and we’ll get back to you.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name")}
              className={`w-full border rounded-md p-3 text-sm ${
                errors.name
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className={`w-full border rounded-md p-3 text-sm ${
                errors.email
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              placeholder="Enter your message"
              {...register("message")}
              className={`w-full border rounded-md p-3 text-sm h-32 resize-none ${
                errors.message
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition duration-200"
          >
            Submit Report
          </button>
        </form>

        {successMessage && (
          <div className="mt-4 p-4 text-green-700 bg-green-100 border border-green-200 rounded-md text-center">
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportPage;
