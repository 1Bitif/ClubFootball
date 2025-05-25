import { ChevronDown, User, User2Icon } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [lang, setLang] = useState("English");
  const [openLang, setOpenLang] = useState(false);

  const handleChangeLang = (e) => {
    setLang(e.target.value);
    setOpenLang(false);
  };
  return (
    <div className="flex flex-col fixed top-0 z-50  justify-evenly items-center  w-full  text-[#001838] font-bold ">
      <div className="flex gap-4 justify-evenly bg-[#001838] py-2 items-center w-full ">
        <div className="rounded-full w-fit px-4 bg-gradient-to-l from-[#1b5baf] to-[#98c5e9] py-1 flex justify-center items-center">
          <p className="text-sm">Become Culer Premium and enjoy all its advantages</p>{" "}
          <span className="font-bold text-white pl-2">I WANT TO BE PREMUIM</span>
        </div>
        <div className="flex justify-end items-center gap-4">
          <div className="flex gap-2 text-white items-center cursor-pointer">
          <span className="bg-[#154284] p-1 rounded-full text-white">
          <User2Icon  />
          </span>
          <p className="hover:underline">Login</p>        
          </div>
        </div>
      </div>
      <div className="flex items-center justify-evenly gap-6 px-16 py-4 w-full bg-[#98c5e9] ">
        <div className="flex relative justify-start items-center gap-6 w-full ">
          <div className="flex justify-start items-start ">
            <NavLink to={"/"} className={""}>
              {" "}
              <img src="./images/logo.svg" alt="Logo" className=" w-[67px]" />
            </NavLink>
          </div>
          <div className="flex gap-4 justify-center items-center ">
            <NavLink to={"/"}>Club</NavLink>
            <NavLink to={"/"}>Players</NavLink>
            <NavLink to={"/"}>Hestory</NavLink>
            <NavLink to={"/"}>Contact</NavLink>
          </div>
        </div>
        <div className="flex flex-col relative justify-end">
          <div className={`flex gap-2 cursor-pointer `}>
            <span onClick={() => setOpenLang(!openLang)}>{lang}</span>
            <ChevronDown
              className={`transition-all duration-300 ${
                openLang ? "rotate-180 " : "rotate-0"
              }`}
            />
          </div>
          {openLang && (
            <div className=" absolute top-7 right-0 w-32 flex flex-col justify-center items-center gap-4 bg-white rounded-xl px-16 py-2 z-50 border">
              <button
                value={"English"}
                onClick={handleChangeLang}
                className="rounded-lg text-start  px-6 py-2 hover:bg-gray-200"
              >
                English
              </button>
              <button
                value={"Francais"}
                onClick={handleChangeLang}
                className="rounded-lg text-start px-6 py-2 hover:bg-gray-200"
              >
                Francais
              </button>
            </div>
          )}
        </div>
        <div className="flex">
          <NavLink to={"/"}>
            <img src="./images/wix_lockup.svg" alt="image" className="w-16" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
