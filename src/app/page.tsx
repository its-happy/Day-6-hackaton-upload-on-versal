

import React from 'react'
import Link from 'next/link'
import Best from './components/Best'
import Featured from './components/Featured'
// import Gear from './components/Gear'
import Ddont from './components/Ddont'
import Essential from './components/Essential'
import Image from 'next/image'


function page() {
  return (
    <div>
      {/* <Header/> */}
      <div>
      <section className="flex justify-center items-center h-58  bg-gray-200 ">
            <div className="flex justify-center items-center flex-col  pb-4">
            <h3 className="text-xl text-black font-bold">Hello Nike App</h3>
         <p className="text-sm text-black sm" >
         <span>Download the app to access everything Nike.</span>
           <Link href={"/"} className='font-bold underline'> Get Your Great</Link>
        </p>
        </div>
        </section>
      </div>
      <div>
       </div>
       <div>
          <Image src="/main.png" alt="" width={1344} height={700} className='pl-10 pr-10'/>
          <div className='flex justify-center items-center flex-col p-8'>
            <p className='text-sm font-bold px-24'>First look</p>
            <h2 className='text-6xl font-bold uppercase ' >Nike Air Max Pulse</h2>
            <p className=' pt-4 text-center'>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br />
              —designed to push you past your limits and help you go to the max</p>
              <div className="flex justify-center items-center gap-3 pt-6">
                <Link href="/new"><button className="bg-black text-white py-2 px-8 rounded-full">Shop Air Max</button></Link>

              </div>
          </div>
       </div>
      <div>
        <Best/>
      </div>
      <div>
        <Featured/>
      </div>
      <div>
        {/* <Gear/> */}
      </div>
      <div>
      <Ddont/>
      </div>
      <div>
        <Essential/>
      </div>
     
    </div>
  
  )
}

export default page


