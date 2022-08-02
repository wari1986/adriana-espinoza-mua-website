import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { AiOutlineShareAlt } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="text-xs text-[#666666] px-4">
      <div className="flex justify-end space-x-3 my-4">
        <FaFacebookF />
        <FaInstagram />
        <FaTiktok />
        <AiOutlineShareAlt />
      </div>
      <div>
        <p>Adriana Espinoza</p>
      </div>
    </div>
  );
}

export default Footer
