import Link from "next/link";
import React from "react";
import { BiSolidGrid } from "react-icons/bi";

const HomeHeader = () => {
  return (
    <header className=" flex justify-end p-5 text-sm">
      <div className=" flex space-x-4 items-center">
        <Link href={"https://mail.google.com/mail/u/0/?pli=1#inbox"}>
          Gmail
        </Link>
        <Link
          href={"https://www.google.com/imghp?hl=en&tab=ri&authuser=0&ogbl"}
        >
          Images
        </Link>
        <BiSolidGrid className=" bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />
        <button className=" bg-blue-500 px-6 py-2 text-white rounded-md font-medium hover:brightness-105 hover:shadow-md transition-shadow">
          Sign in
        </button>
      </div>
    </header>
  );
};

export default HomeHeader;
