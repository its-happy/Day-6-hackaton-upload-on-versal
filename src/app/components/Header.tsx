"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const fetchSearchResults = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    try {
      const results = await client.fetch(
        `*[_type == "product" && productName match $data] {
          productName,
          "slug": slug.current,
          "image_url": image.asset->url,
          price
        }`,
        { data: `*${query}*` }
      );
      setSearchResults(results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    fetchSearchResults(query);
  };

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-gray-200 h-[36px] flex justify-between items-center px-4">
        <div>
          <Image src="/logo1.png" alt="Logo" width={30} height={30} />
        </div>
        <div className="flex gap-2 text-black font-medium text-sm">
          <Link href="/help">Help</Link>
          <span className="border-l border-black h-4 mx-2"></span>
          <Link href="/join-us">Join Us</Link>
          <span className="border-l border-black h-4 mx-2"></span>
          <Link href="/sign-in">Sign In</Link>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white h-[58px] flex justify-between items-center px-6">
        <div>
          <Image src="/logo2.png" alt="Logo" width={50} height={50} />
        </div>

        <div className="hidden lg:flex justify-center gap-8 text-black font-medium text-lg">
          <Link href="/">Home</Link>
          <Link href="/new">New & Featured</Link>
          <Link href="/new">Men</Link>
          <Link href="/new">Women</Link>
          <Link href="/new">SNKRS</Link>
        </div>

        {/* Search and Cart for Medium and Smaller Screens */}
        <div className="flex items-center gap-4 lg:hidden">
          {/* Search Button */}
          <button onClick={() => setMobileSearchOpen(!mobileSearchOpen)}>
            <IoSearchOutline className="text-xl md:text-2xl text-gray-600" />
          </button>

          {/* Cart Button */}
          <Link href="/cart">
            <FaShoppingCart className="text-black text-xl md:text-2xl cursor-pointer" />
          </Link>

          {/* Menu Button */}
          <button onClick={toggleMenu}>
            <HiOutlineMenu className="text-xl md:text-2xl" />
          </button>
        </div>

        {/* Search Bar and Cart for Large Screens */}
        <div className="hidden lg:flex items-center gap-6 relative">
          <div className="relative">
            <IoSearchOutline className="absolute left-4 top-2.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              className="p-2 w-[180px] h-[40px] border border-gray-300 rounded-2xl pl-10 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            {searchResults.length > 0 && (
              <div className="absolute z-50 bg-white border border-gray-300 rounded-md mt-1 w-[180px] max-h-[200px] overflow-y-auto shadow-md">
                {searchResults.map((result: any) => (
                  <Link
                    key={result.slug}
                    href={`/dynamic/${result.slug}`}
                    onClick={() => {
                      setSearchQuery(""); 
                      setSearchResults([]); 
                    }}
                  >
                    <div className="flex items-center gap-2 p-2 hover:bg-gray-100">
                      <Image
                        src={result.image_url}
                        alt={result.productName}
                        width={40}
                        height={40}
                        className="rounded-sm"
                      />
                      <div>
                        <p className="text-sm font-medium">{result.productName}</p>
                        <p className="text-xs text-gray-500">₹ {result.price}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Cart Button */}
          <Link href="/cart">
            <FaShoppingCart className="text-black text-xl cursor-pointer" />
          </Link>
        </div>
      </nav>

      {/* Search Bar for Mobile */}
      {mobileSearchOpen && (
        <div className="bg-white p-4">
          <div className="relative">
            <IoSearchOutline className="absolute left-4 top-2.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              className="p-2 w-full h-[40px] border border-gray-300 rounded-2xl pl-10 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            {searchResults.length > 0 && (
              <div className="absolute z-50 bg-white border border-gray-300 rounded-md mt-1 w-full max-h-[200px] overflow-y-auto shadow-md">
                {searchResults.map((result: any) => (
                  <Link
                    key={result.slug}
                    href={`/dynamic/${result.slug}`}
                    onClick={() => {
                      setSearchQuery(""); 
                      setSearchResults([]);
                      setMobileSearchOpen(false); 
                    }}
                  >
                    <div className="flex items-center gap-2 p-2 hover:bg-gray-100">
                      <Image
                        src={result.image_url}
                        alt={result.productName}
                        width={40}
                        height={40}
                        className="rounded-sm"
                      />
                      <div>
                        <p className="text-sm font-medium">{result.productName}</p>
                        <p className="text-xs text-gray-500">₹ {result.price}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center bg-white p-4 space-y-4">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/new" onClick={() => setMenuOpen(false)}>New & Featured</Link>
          <Link href="/men" onClick={() => setMenuOpen(false)}>Men</Link>
          <Link href="/women" onClick={() => setMenuOpen(false)}>Women</Link>
          <Link href="/kids" onClick={() => setMenuOpen(false)}>Kids</Link>
          <Link href="/sale" onClick={() => setMenuOpen(false)}>Sale</Link>
          <Link href="/snkrs" onClick={() => setMenuOpen(false)}>SNKRS</Link>
        </div>
      )}
    </header>
  );
}

export default Header;
