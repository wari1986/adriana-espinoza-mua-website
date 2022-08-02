import React from "react";
import Link from "next/link";
// import { AiOutlineShopping } from "react-icons/ai";

// import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {


  return (
    <div className='pt-8 px-4'>
      <div>
        <p className="text-3xl text-[#2B2B2B]">
          <Link href="/">ADRIANA ESPINOZA makeup artist | hairstylist</Link>
        </p>
      </div>
      <div className="text-sm space-y-4 my-12 text-[#666666] ">
        <p className="active:text-[#333333] text-bold">
          <Link href="/">Home</Link>
        </p>
        <p className="active:text-[#333333] text-bold">
          <Link href="/portfolio">Portfolio</Link>
        </p>
        <div className="flex justify-end">
          <p className="active:text-[#333333] text-bold">
            <Link href="/contactForm">Connect</Link>
          </p>
          <button className="pl-2">+</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
