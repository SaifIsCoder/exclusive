import React from "react";
import { Search } from "lucide-react";

const Navbar = () => {
  const navItems = [
    { item: "Home" },
    { item: "Contact" },
    { item: "About" },
    { item: "Sign Up" },
  ];

  return (
    <div>
      <div className="bg-black w-full py-2 text-white flex items-center text-sm">
        <p className="flex-1 text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <a href="" className="font-bold underline pl-3">
            ShopNow
          </a>
        </p>
        <p className="pr-16">English</p>
      </div>
      <header className="flex items-center justify-around pt-6 pb-2 border-b border-b-gray-300">
        {/* Logo  */}
        <h1 className="text-xl font-bold">Exclusive</h1>

        {/* nav items  */}
        <ul className="flex gap-6">
          {navItems.map((data, index) => (
            <li key={index} className="hover:underline cursor-pointer">
              {data.item}
            </li>
          ))}
        </ul>
        {/* searchbar  */}
        <div className="relative">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-[#F5F5F5] py-1.5 px-3 rounded w-60 focus:outline-0 pr-10"
          />
          <Search className="absolute right-2 top-1.5" />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
