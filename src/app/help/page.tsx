import React from "react";
import { IoIosPhonePortrait } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import ReportPage from "@/components/ui/Report";

function HelpPage() {
  return (
    <div className="pt-20 px-8 lg:px-20">
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-center text-[30px] font-bold uppercase">Get Help</h1>
      </div>

      {/* Help Content */}
      <div className="lg:w-2/3 mx-auto text-center">
        <p className="leading-8 text-lg text-gray-700">
          Welcome to the Help page. Our goal is to provide quick assistance and 
          answers to common questions. If you need further support, please use 
          the contact options below or submit a report through our form.
        </p>
        <p className="leading-8 text-lg text-gray-700 mt-4">
          We’re here to assist you with issues related to your orders, payments, 
          delivery, or general inquiries. Feel free to reach out, and we’ll ensure 
          your concerns are addressed promptly.
        </p>
      </div>

      {/* Contact Section */}
      <div className="mt-16 flex flex-col lg:flex-row justify-center text-center lg:gap-20">
        {/* Phone */}
        <div className="mb-8 lg:mb-0">
          <IoIosPhonePortrait className="text-[70px] text-blue-500 mx-auto" />
          <h2 className="text-lg font-bold mt-4">Call Us</h2>
          <p className="text-gray-600">
            000 800 919 0566 <br />
            Available 24/7
          </p>
        </div>
        {/* Email */}
        <div className="mb-8 lg:mb-0">
          <IoIosMail className="text-[70px] text-blue-500 mx-auto" />
          <h2 className="text-lg font-bold mt-4">Email Us</h2>
          <p className="text-gray-600">
            support@example.com <br />
            Response within 24 hours
          </p>
        </div>
        {/* Location */}
        <div>
          <FaLocationDot className="text-[70px] text-blue-500 mx-auto" />
          <h2 className="text-lg font-bold mt-4">Visit Us</h2>
          <p className="text-gray-600">
            123 Main Street, <br />
            abc City, xyz Country
          </p>
        </div>
      </div>

      {/* Report Section */}
      <div className="mt-16">
        <h1 className="text-[22px] font-bold text-center">Report Section</h1>
        <p className="text-sm mt-2 italic text-center">
          If you’re facing any issues or have suggestions, please fill out the form below. Our team will review your report and get back to you promptly.
        </p>
        <div className="mt-6">
       <ReportPage/>
        </div>
      </div>
    </div>
  );
}

export default HelpPage;
