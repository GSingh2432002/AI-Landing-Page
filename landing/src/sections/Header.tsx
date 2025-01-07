"use client";

import LogoIcon from "../assets/logo.webp";
import MenuIcon from "../assets/icon-menu.svg";
import { Button } from "../components/Button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Close krne ke liye hamburger ko.
  useEffect(() => {
    const handleClick = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [menuOpen]);

  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative">
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
          <div>
            <img
              src={LogoIcon.src}
              alt="Logo"
              className="h-10 w-10 rounded-lg border border-white/15 shadow-[0_0_20px_rgba(147,197,253,0.5)] object-cover"
            />
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition">
                Features
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Product
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Action
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Pricing
              </a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <motion.div
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 10px 20px rgba(140, 69, 255, 0.5)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button>Book a Call</Button>
            </motion.div>
            <MenuIcon
              className="md:hidden cursor-pointer"
              onClick={(e:any) => {
                e.stopPropagation();
                toggleMenu();
              }}
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 text-white z-20 flex items-center justify-center"
          >
            <p className="text-xl font-semibold">Coming Soon</p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};