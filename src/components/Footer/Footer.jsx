import {
  FacebookIcon,
  Globe,
  InstagramIcon,
  LinkedinIcon,
  Twitter,
  Youtube,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col  justify-evenly items-center bg-[#001838] py-6 px-16 ">
      <div className=" flex gap-6 items-center border-b border-white/40"> 
      <div className="flex justify-center items-center py-4 w-[200px]">
        <img src="./images/logo.svg" alt="Logo" className="" />
      </div>
      <div className="flex flex-col justify-center items-center w-full   gap-4">
        <div className="flex gap-4 justify-center items-center w-full ">
          <div className="border-r px-6 border-white/40">
            <span className="flex items-center gap-2 p-2 rounded-full text-white bg-[#154284] hover:text-[#154284] hover:bg-[#3bd6ff] transition duration-300">
              <Globe />
              En
            </span>
          </div>
          <div className="flex items-center gap-4 ">
            <span className="flex items-center gap-2 p-2 rounded-full text-[#3bd6ff] bg-[#154284] hover:text-[#154284] hover:bg-[#3bd6ff] transition duration-300">
              <YoutubeIcon size={28} />
            </span>
            <span className="flex items-center gap-2 p-2 rounded-full text-[#3bd6ff] bg-[#154284] hover:text-[#154284] hover:bg-[#3bd6ff] transition duration-300">
              <InstagramIcon size={28} />
            </span>
            <span className="flex items-center gap-2 p-2 rounded-full text-[#3bd6ff] bg-[#154284] hover:text-[#154284] hover:bg-[#3bd6ff] transition duration-300">
              <svg
                width="28"
                height="28"
                viewBox="0 0 1200 1227"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_228_1261)">
                  <path
                    d="M714.2 519.3L1160.9 0H1055L667.1 450.9L357.3 0H0L468.5 681.8L0 1226.4H105.9L515.5 750.2L842.7 1226.4H1200L714.2 519.3ZM569.2 687.8L521.7 619.9L144 79.7H306.6L611.4 515.7L658.9 583.6L1055.1 1150.3H892.5L569.2 687.8Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_228_1261">
                    <rect width="1200" height="1227" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span className="flex items-center gap-2 p-2 rounded-full text-[#3bd6ff] bg-[#154284] hover:text-[#154284] hover:bg-[#3bd6ff] transition duration-300">
              <FacebookIcon size={28} />
            </span>
            <span className="flex items-center gap-2 p-2 rounded-full text-[#3bd6ff] bg-[#154284] hover:text-[#154284] hover:bg-[#3bd6ff] transition duration-300">
              <LinkedinIcon size={28} />
            </span>
          </div>
        </div>
        <div className="flex flex-wrap font-bold text-xl text-white w-full items-center uppercase justify-center gap-4">
          <h1 className="hover:underline cursor-pointer">ACCESSIBILITY</h1>
          <h1 className="hover:underline cursor-pointer">Fair Processing Notice</h1>
          <h1 className="hover:underline cursor-pointer">Cookie Policy</h1>
          <h1 className="hover:underline cursor-pointer">Modern Slavery Statement</h1>
          <h1 className="hover:underline cursor-pointer">Privacy Policy</h1>
          <h1 className="hover:underline cursor-pointer">Terms of Use</h1>
          <h1 className="hover:underline cursor-pointer">Contact Us</h1>
          <h1 className="hover:underline cursor-pointer">Sitemap</h1>
        </div>
      </div>
      </div>
      <div className="flex justify-between items-center w-full py-4">
        <NavLink  to="" className="text-xl text-white focus:outline-none underline hover:no-underline">Fan Support</NavLink>
        <div className="flex w-[370px] ">
        <img src="./images/footerImage.png" alt="image" className="" />
      </div>
      <h1 className="text-lg text-white">Manchester City FC Ltd {currentYear}</h1>
      </div>
    </div>
  );
};
