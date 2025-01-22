import React from "react";
import Link from "next/link";
import Image from "next/image";

function Page() {
  return (
    <div>
      <main>
        <section className="my-20">
          <div className="flex flex-col justify-center items-center max-w-lg mx-auto">
            <Image
              src="/logo2.png"
              alt="Nike Logo"
              width={65}
              height={35}
              className="pb-6"
            />
            <div className="items-center justify-center flex flex-col">
              <h1 className="font-bold text-xl">YOUR ACCOUNT</h1>
              <h1 className="font-bold text-xl">FOR EVERYTHING</h1>
              <h1 className="font-bold text-xl">NIKE</h1>
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
            </div>

            <div className="flex justify-between max-w-lg mx-auto mt-6 gap-x-10">
              <h1 className="text-slate-500 text-[12px] flex gap-1 items-center">
                <input type="checkbox" /> Keep me signed In
              </h1>
              <p className="text-slate-500 text-[12px]">
                Forgot your password?
              </p>
            </div>
            <div className="flex flex-col justify-center items-center mt-4">
              <p className="text-slate-500 text-[12px]">
                By logging in, you agree to Nike&apos;s <u>Privacy Policy</u>
              </p>
              <p className="text-slate-500 text-[12px]">
                and <u>Terms of Use</u>
              </p>
            </div>

            <button className="w-80 rounded-md bg-black text-white py-2 my-6">
              SIGN IN
            </button>
            <p className="text-slate-500 text-[12px]">
              Not a Member{" "}
              <u className="text-black">
                <Link href="/joinus">Join us?</Link>
              </u>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Page;
