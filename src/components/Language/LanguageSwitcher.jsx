import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const flags = [
    {
      code: "fr",
      name: "Français",
      flag: "https://flagcdn.com/w40/fr.png",
    },
    {
      code: "en",
      name: "English",
      flag: "https://flagcdn.com/w40/gb.png",
    },
  ];

  const getCurrentLanguage = () => {
    return flags.find((flag) => flag.code === i18n.language) || flags[0];
  };

  const currentLang = getCurrentLanguage();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative z-50" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center bg-transparent px-4 py-3 rounded-md text-sm"
      >
        <img
          src={currentLang.flag}
          alt={currentLang.name}
          className="w-6 h-4 mr-2 object-cover"
        />
        <span className="inline">{currentLang.name}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute left-4/12 top-0  lg:top-full lg:left-0 mt-2 pt-2 bg-gray-50 rounded-md shadow-lg w-36  "
          >
            <div className="absolute -left-2 lg:-top-2 lg:left-4 w-4 h-4 bg-gray-50 transform rotate-45"></div>
            {flags.map((flag, index) => (
              <button
                key={index}
                onClick={() => changeLanguage(flag.code)}
                className="items-center w-full px-4 py-3 text-left  hover:bg-gray-100 text-sm flex"
              >
                <img
                  src={flag.flag}
                  alt={flag.name}
                  className="w-6 h-4 mr-2 object-cover"
                />
                <span className="inline">{flag.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LanguageSwitcher;