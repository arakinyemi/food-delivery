import { Input } from "@/components/ui/input";
import Link from "next/link";
import { CiShoppingCart, CiMenuBurger } from "react-icons/ci";
import { useState } from "react";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
    return (
      <div className="flex justify-between items-center bg-white shadow-md px-[30px] md:px-[50px] lg:px-[100px] py-6">
        <div className="flex justify-between items-center gap-4">
          <CiMenuBurger className="text-2xl sm:text-3xl hidden max-md:block cursor-pointer" onClick={()=>setShowSearch(!showSearch)} />
          <h1 className="font-bold text-xl sm:text-2xl">
            <Link href="/">SharpSharp</Link>
          </h1>
        </div>
        <div className={`flex-1 ${showSearch ? 'max-md:absolute max-md:top-[100px] max-md:left-[0] max-md:w-screen' : 'max-md:hidden'}`}>
          <Input 
            type="text"
            className="w-[80%] xl:w-[40%] m-auto border-2 border-gray-400 focus:border-none"
            placeholder="Search Products..."
          />
        </div>
        <div className="flex gap-4 text-sm sm:text-xl font-semibold items-center">
          <Link href="/products">All Products</Link>
          <Link href="/cart" className="relative">
            <CiShoppingCart className="text-3xl sm:text-4xl" />
            <span className="bg-black text-white rounded-full flex justify-center items-center w-[20px] h-[20px] text-[10px] absolute right-[-5px] top-[-3px]">2</span>
          </Link>
        </div>
      </div>
    );
  }
  