import Link from "next/link";
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-6">
      <div className="flex justify-center gap-6 mb-6">
        <FaTwitter aria-label="Twitter" className="text-2xl cursor-pointer hover:text-gray-400" />
        <FaFacebook aria-label="Facebook" className="text-2xl cursor-pointer hover:text-gray-400" />
        <FaYoutube aria-label="YouTube" className="text-2xl cursor-pointer hover:text-gray-400" />
        <FaInstagram aria-label="Instagram" className="text-2xl cursor-pointer hover:text-gray-400" />
      </div>

      {/* Footer Sections */}
      <div className="flex flex-wrap justify-between gap-10">
        {/* FIND A STORE */}
        <div>
          <h3 className="text-sm font-bold mb-4">FIND A STORE</h3>
          <ul className="space-y-2 text-xs">
            <li><Link href="#" className="hover:underline">Become a Member</Link></li>
            <li><Link href="#" className="hover:underline">Sign Up for Email</Link></li>
            <li><Link href="#" className="hover:underline">Student Discounts</Link></li>
          </ul>
        </div>

        {/* GET HELP */}
        <div>
          <h3 className="text-sm font-bold mb-4">GET HELP</h3>
          <ul className="space-y-2 text-xs">
            <li><Link href="#" className="hover:underline">Order Status</Link></li>
            <li><Link href="#" className="hover:underline">Delivery</Link></li>
            <li><Link href="#" className="hover:underline">Returns</Link></li>
            <li><Link href="#" className="hover:underline">Payment Options</Link></li>
            <li><Link href="#" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>

        {/* ABOUT NIKE */}
        <div>
          <h3 className="text-sm font-bold mb-4">ABOUT NIKE</h3>
          <ul className="space-y-2 text-xs">
            <li><Link href="#" className="hover:underline">News</Link></li>
            <li><Link href="#" className="hover:underline">Careers</Link></li>
            <li><Link href="#" className="hover:underline">Investors</Link></li>
            <li><Link href="#" className="hover:underline">Sustainability</Link></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-10 flex flex-wrap justify-between items-center text-xs text-gray-400">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <IoLocationOutline className="text-lg" />
          <span>Pakistan</span>
          <span>© 2023 Nike, Inc. All Rights Reserved</span>
        </div>  

        {/* Footer Links */}
        <div className="flex gap-4">
          <Link href="#" className="hover:underline">Guides</Link>
          <Link href="#" className="hover:underline">Terms of Sale</Link>
          <Link href="#" className="hover:underline">Terms of Use</Link>
          <Link href="#" className="hover:underline">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
