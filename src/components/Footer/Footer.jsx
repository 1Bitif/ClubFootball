import {
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Youtube size={20} />, name: "YouTube" },
    { icon: <Instagram size={20} />, name: "Instagram" },
    { icon: <Twitter size={20} />, name: "Twitter" },
    { icon: <Facebook size={20} />, name: "Facebook" },
    { icon: <Linkedin size={20} />, name: "LinkedIn" },
  ];

  const footerLinks = [
    t('footer.accessibility'),
    t('footer.fairProcessingNotice'),
    t('footer.cookiePolicy'),
    t('footer.modernSlaveryStatement'),
    t('footer.privacyPolicy'),
    t('footer.termsOfUse'),
    t('footer.contactUs'),
    t('footer.sitemap'),
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-[#001838] text-white pt-12 px-4 sm:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-8 border-b border-white/20">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-40 md:w-48"
          >
            <img 
              src="./images/logo.svg" 
              alt={t('footer.manchesterCityLogoAlt')} 
              className="w-full h-auto" 
            />
          </motion.div>

          {/* Language and Social */}
          <div className="flex flex-col items-center gap-6 w-full lg:w-auto">
            <div className="flex flex-col md:flex-row items-center gap-6 w-full justify-between">
              {/* Language Selector */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 p-2 rounded-full bg-[#154284] hover:bg-[#3bd6ff] hover:text-[#154284] transition-all duration-300 cursor-pointer"
                onClick={() => changeLanguage(i18n.language === 'en' ? 'fr' : 'en')}
              >
                <Globe size={18} />
                <span className="font-medium">{i18n.language === 'en' ? 'English' : 'Français'}</span>
              </motion.div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href="#"
                    aria-label={social.name}
                    className="p-2 rounded-full bg-[#154284] text-[#3bd6ff] hover:bg-[#3bd6ff] hover:text-[#154284] transition-all duration-300"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {footerLinks.map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  className="text-sm md:text-base font-medium hover:underline hover:text-[#3bd6ff] transition-colors duration-200"
                  whileHover={{ x: 3 }}
                >
                  {link}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 py-8">
          {/* Copyright */}
          <motion.p 
            className="text-sm md:text-base"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            &copy; {t('footer.copyright', { year: currentYear })}
          </motion.p>

          {/* Fan Support */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <NavLink 
              to="#" 
              className="text-sm md:text-base font-medium underline hover:no-underline hover:text-[#3bd6ff] transition-colors duration-200"
            >
              {t('footer.fanSupport')}
            </NavLink>
          </motion.div>

          {/* Footer Image */}
          <motion.div 
            className="w-40 md:w-48"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <img 
              src="./images/footerImage.png" 
              alt={t('footer.partnersAlt')} 
              className="w-full h-auto" 
            />
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};