import React from "react";
import CountryLookup from "./CountryLookup";

const Footer = () => {
  return (
    <footer className=" absolute bottom-0 text-sm text-gray-500 bg-[#f2f3f3] w-full">
      <div className=" border px-8 py-3">
        <CountryLookup />
      </div>
      <div className=" flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0">
        <ul className=" flex items-center space-x-6">
          <li className=" hover:underline">about</li>
          <li className=" hover:underline">advertising</li>
          <li className=" hover:underline">business</li>
          <li className=" hover:underline">how search works</li>
        </ul>
        <ul className=" flex items-center space-x-6">
          <li className=" hover:underline">privacy</li>
          <li className=" hover:underline">terms</li>
          <li className=" hover:underline">settings</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
