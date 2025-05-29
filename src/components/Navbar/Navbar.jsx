import { ChevronDown, User2Icon, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "../Language/LanguageSwitcher";

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language === 'fr' ? 'Français' : 'English');
  const [openLang, setOpenLang] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleChangeLang = (selectedLang) => {
    setLang(selectedLang);
    setOpenLang(false);
    i18n.changeLanguage(selectedLang === 'Français' ? 'fr' : 'en');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3 }
    }
  };

  const mobileItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 z-50 w-full text-[#001838] font-bold shadow-md"
    >
      {/* Top Bar - Hide on small screens */}
      <div className="hidden sm:flex justify-between items-center bg-[#001838] px-4 py-2 w-full">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-full px-2 sm:px-4 bg-gradient-to-l from-[#1b5baf] to-[#98c5e9] py-1 flex items-center cursor-pointer"
        >
          <p className="text-xs sm:text-sm">{t('navbar.premiumMessage')}</p>
          <span className="font-bold text-white pl-2 hover:underline text-xs sm:text-sm">{t('navbar.premiumCta')}</span>
        </motion.div>

        <NavLink to="login" className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex gap-2 text-white items-center cursor-pointer group"
          >
            <motion.span
              whileHover={{ rotate: 10 }}
              className="bg-[#154284] p-1 rounded-full text-white group-hover:bg-[#1a5cb3] transition-colors duration-200"
            >
              <User2Icon size={18} />
            </motion.span>
            <p className="hover:underline transition-all duration-200 text-sm">{t('navbar.login')}</p>
          </motion.div>
        </NavLink>
      </div>

      {/* Main Navbar */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 w-full bg-[#98c5e9]"
      >
        <div className="flex items-center gap-4 lg:gap-10 flex-1">
          {/* Logo */}
          <motion.div variants={itemVariants}>
            <NavLink to="/" className="hover:opacity-90 transition-opacity duration-200">
              <motion.img
                whileHover={{ rotate: [0, -5, 5, 0] }}
                src="./images/logo.svg"
                alt="Logo"
                className="w-12 sm:w-14 lg:w-16"
              />
            </NavLink>
          </motion.div>

          {/* Desktop Navigation Links */}
          <motion.nav
            variants={containerVariants}
            className="hidden lg:flex items-center gap-6"
          >
            {['club', 'players', 'history', 'contact'].map((item) => (
              <motion.div key={item} variants={itemVariants}>
                <NavLink
                  to={`${item === 'club' ? '/' : `/${item}`}`}
                  className={({ isActive }) =>
                    `relative px-1 py-2 ${isActive ? "text-[#001838]" : "text-[#001838]/80"}`
                  }
                >
                  {t(`navbar.${item}`)}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    className="absolute bottom-0 left-0 h-0.5 bg-[#001838]"
                    transition={{ duration: 0.3 }}
                  />
                </NavLink>
              </motion.div>
            ))}
          </motion.nav>

          {/* Mobile Login Button - Show only on small screens */}
          <div className="sm:hidden ml-auto mr-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex gap-2 text-[#001838] items-center cursor-pointer group"
            >
              <NavLink to="login" className="flex items-center gap-4">
                <motion.span
                  whileHover={{ rotate: 10 }}
                  className="bg-[#154284] p-1 rounded-full text-white group-hover:bg-[#1a5cb3] transition-colors duration-200"
                >
                  <User2Icon size={16} />
                </motion.span>
              </NavLink>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Desktop */}
        <motion.div variants={itemVariants} className="hidden lg:flex items-center gap-6">
          {/* Language Selector */}
          <div className="relative">
            {/* <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1 cursor-pointer hover:text-[#154284] transition-colors duration-200"
              onClick={() => setOpenLang(!openLang)}
            >
              <span className="text-sm lg:text-base">{lang}</span>
              <motion.div
                animate={{ rotate: openLang ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={18} />
              </motion.div>
            </motion.div> */}

            <AnimatePresence>
              {/* {openLang && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  transition={{ duration: 0.2 }}
                  className="absolute top-8 right-0 w-36 bg-white rounded-lg shadow-lg overflow-hidden z-50"
                >
                  {["English", "Français"].map((language) => (
                    <motion.button
                      key={language}
                      whileHover={{ x: 5 }}
                      onClick={() => handleChangeLang(language)}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors duration-150 text-sm"
                    >
                     {language}
                    </motion.button>
                  ))}
                </motion.div>
              )} */}
              <LanguageSwitcher />
            </AnimatePresence>
          </div>

          {/* Wix Logo */}
          <motion.div whileHover={{ scale: 1.1 }}>
            <NavLink to="/" className="hover:opacity-80 transition-opacity duration-200">
              <img src="./images/wix_lockup.svg" alt="Wix" className="w-16 lg:w-20" />
            </NavLink>
          </motion.div>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 rounded-md hover:bg-[#001838]/10 transition-colors duration-200"
          aria-label={t('navbar.menuToggle')}
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="lg:hidden bg-[#98c5e9] border-t border-[#001838]/20 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-4">
              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                {['club', 'players', 'history', 'contact'].map((item, index) => (
                  <motion.div
                    key={item}
                    variants={mobileItemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink
                      to={`${item === 'club' ? '/' : `/${item}`}`}
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-lg transition-colors duration-200 ${
                          isActive
                            ? "bg-[#001838] text-white"
                            : "text-[#001838] hover:bg-[#001838]/10"
                        }`
                      }
                    >
                      {t(`navbar.${item}`)}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Language Selector */}
              <motion.div
                variants={mobileItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
                className="border-t border-[#001838]/20 pt-4"
              >
                <div className="relative">
                  {/* <motion.div
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-between px-4 py-3 bg-white/50 rounded-lg cursor-pointer"
                    onClick={() => setOpenLang(!openLang)}
                  >
                    <span className="text-[#001838] font-medium">{t('navbar.language')}: {lang}</span>
                    <motion.div
                      animate={{ rotate: openLang ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </motion.div> */}

                  <AnimatePresence>
                    {/* {openLang && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        transition={{ duration: 0.2 }}
                        className="mt-2 bg-white rounded-lg shadow-lg overflow-hidden"
                      >
                        {["English", "Français"].map((language) => (
                          <motion.button
                            key={language}
                            whileHover={{ x: 5 }}
                            onClick={() => handleChangeLang(language)}
                            className="w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors duration-150 text-[#001838]"
                          >
                            {language}
                          </motion.button>
                        ))}
                      </motion.div>
                    )} */}
                     <LanguageSwitcher />
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Mobile Bottom Section */}
              <motion.div
                variants={mobileItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 }}
                className="border-t border-[#001838]/20 pt-4 flex items-center justify-between"
              >
                <NavLink to="login" className="flex items-center gap-4">
                  <div className="flex items-center gap-3 text-[#001838]">
                    <motion.span
                      whileHover={{ rotate: 10 }}
                      className="bg-[#154284] p-2 rounded-full text-white"
                    >
                      <User2Icon size={18} />
                    </motion.span>
                    <span className="font-medium">{t('navbar.login')}</span>
                  </div>
                </NavLink>
                <NavLink to="/" className="hover:opacity-80 transition-opacity duration-200">
                  <img src="./images/wix_lockup.svg" alt="Wix" className="w-16" />
                </NavLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};