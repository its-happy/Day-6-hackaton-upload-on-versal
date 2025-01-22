import React from "react";

import Link from "next/link";
import Image from "next/image";
function page() {
  return (
    <div>
      <main>
        <section className="my-20">
          <div className="flex flex-col justify-center items-center max-w-lg mx-auto">
            <Image
              src={"/logo2.png"}
              alt="Nike Logo"
              width={65}
              height={35}
              className=" pb-5"
            />
            <div className="items-center justify-center flex flex-col">
              <h1 className="font-bold text-xl">BECOME A NIKE MEMBER</h1>
            </div>
            <div className="mt-10 mb-5 max-w-[280px] flex justify-center">
              <p className="text-slate-500 text-[12px">
                Create your Nike Member profile and get first access to the very
                best of Nike products, inspiration and community
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 mt-3">
              <input
                type="email"
                placeholder="Email"
                className="w-80 p-2 border border-gray-300 rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-80 p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="First Name"
                className="w-80 p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-80 p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Date of Birth"
                className="w-80 p-2 border border-gray-300 rounded-md"
              />

              <p className="text-slate-500 text-[12px]">
                Get a Nike Member Reward every year on your Birthday.
              </p>
              <input
                type="text"
                placeholder="Pakistan"
                className="w-80 p-2 border border-gray-300 rounded-md"
              />
              <div className="flex justify-between gap-x-10">
                <input
                  type="text"
                  placeholder="Male"
                  className="w-36 h-10 p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Female"
                  className="w-36 h-10 p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="flex justify-between max-w-[280px] mx-auto mt-6">
              <h1 className="text-slate-500 text-[12px] flex gap-1 items-center">
                <input type="checkbox" /> Sign up for emails to get updates from
                Nike on products, offers and your Member benefits
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center mt-4">
              <p className="text-slate-500 text-[12px]">
                By creating an account, you agree to Nike&apos;s{" "}
                <u>Privacy Policy</u>
              </p>
              <p className="text-slate-500 text-[12px]">
                and <u>Terms of Use</u>
              </p>
            </div>
            <Link href={"/joinus"}>
              <button className="w-80 rounded-md bg-black text-white py-2 my-6">
                JOIN US{" "}
              </button>
            </Link>
            <p className="text-slate-500 text-[12px]">
              Already a Member{" "}
              <Link href={"/login"}>
                <u className="text-black">Sign In?</u>
              </Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default page;
