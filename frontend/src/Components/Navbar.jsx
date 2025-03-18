import React, { useState, useRef } from "react";
import { MagnifyingGlassIcon,ShoppingCartIcon, UserIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const menuItems = [
  { name: "For Me", image: "first.jpg", link: "/for-me" },
  { name: "Jeans", image: "sec.jpg", link: "/jeans" },
  { name: "Shirts", image: "third.png", link: "/shirts" },
  { name: "T-Shirts", image: "fourth.jpg", link: "/t-shirts" },
  { name: "Trousers", image: "fifth.jpg", link: "/trousers" },
  { name: "Joggers", image: "jogg.avif", link: "/joggers" },
  { name: "Shorts", image: "shorts.jpg", link: "/shorts" },
];

function Navbar() {
  const [menuOpen, setMenuOpen]=useState(false);
  const scrollRef=useRef(null);

  const scrollLeft=()=>{
    if (scrollRef.current) 
    {
      scrollRef.current.scrollBy(
        {left:-100,behavior: "smooth" }
      );
    }
  };

  const scrollRight=()=>{
    if (scrollRef.current)
   {
      scrollRef.current.scrollBy(
        { left:100, behavior:"smooth" }
      );
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="flex items-center  h-[55px] px-6">
        <h1 className="flex items-center text-white font-bold bg-red-500 p-4">MADE UP</h1>

    
        <div className="hidden pl-[5vh] md:flex gap-5">
          {menuItems.map((item) => (
            <a key={item.name} href={item.link} className="font-bold md:pl-20 hover:text-red-600">
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex items-center pl-[15vh] md:pl-[20vh] gap-6">
 
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-900 cursor-pointer" />
        <ShoppingCartIcon className="h-6 w-6 text-gray-900 cursor-pointer" />

        <UserIcon className="hidden md:block h-6 w-6 text-gray-900 cursor-pointer" />

        <Bars3Icon 
          className="h-8 w-8 text-gray-900 cursor-pointer md:hidden" 
          onClick={() => setMenuOpen(true)} />
</div>

      </div>

    
      <div className="relative md:hidden bg-gray-100">
      
        <button onClick={scrollLeft} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
          ❮
        </button>

        <div ref={scrollRef} className="overflow-x-auto flex space-x-4 px-4 py-2 scrollbar-hide gap-5">
  {menuItems.map((item) => (
    <a key={item.name} href={item.link} className="flex flex-col items-center text-sm font-bold">
      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300 flex items-center justify-center">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover"
        />
      </div>
      {item.name}
    </a>
  ))}
</div>


        <button onClick={scrollRight} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
          ❯
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end" onClick={() => setMenuOpen(false)}>
          <div className="w-[300px] h-full bg-white shadow-lg p-6 flex flex-col" onClick={(e) => e.stopPropagation()}>
            <XMarkIcon className="h-8 w-8 text-gray-900 self-end cursor-pointer" onClick={() => setMenuOpen(false)} />

            <ul className="mt-4 space-y-4 text-lg font-semibold">
              <li className="text-red-600 hover:text-red-600 cursor-pointer">My Profile</li>
              <li className="hover:text-red-600 cursor-pointer">My Wish List</li>
              <li className="hover:text-red-600 cursor-pointer">My Orders</li>
              <li className="hover:text-red-600 cursor-pointer">My Addresses</li>
              <hr className="border-gray-300 my-2" />
              <li className="text-red-600 hover:text-red-600 cursor-pointer">Brand</li>
              <li className="hover:text-red-600 cursor-pointer">The Made Up Story</li>
              <li className="hover:text-red-600 cursor-pointer">Franchise & Suppliers</li>
              <li className="hover:text-red-600 cursor-pointer">Store Locator</li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
