import Link from 'next/link'
import React from 'react'

function Newsidebar() {
  return (
    <div>
      <div className="my-20 max-w-[1300px] mx-auto flex gap-x-4 lg:gap-x-20">
      <section className="flex flex-col max-w-[200px]">
        <h1 className="font-semibold text-sm md:text-2xl">New (500)</h1>
        <div className="font-semibold text-[11px] lg:text-xl max-w-[150px] space-y-2 mt-6 flex flex-col">
          <Link href={""}>Shoes</Link>
          <Link href={""}>Sports Bras</Link>
          <Link href={""}>Tops & T-Shirts</Link>
          <Link href={""}>Hoodies & Sweatshirts</Link>
          <Link href={""}>Jackets</Link>
          <Link href={""}>Trousers & Tights</Link>
          <Link href={""}>Shorts</Link>
          <Link href={""}>Tracksuits</Link>
          <Link href={""}>Jumpsuits & Rompers</Link>
          <Link href={""}>Skirts & Dresses</Link>
          <Link href={""}>Socks</Link>
          <Link href={""}>Accessories & Equipment</Link>
        </div>
</section>
       
      <div>

      </div>
    </div>
    </div>
  )
}

export default Newsidebar
