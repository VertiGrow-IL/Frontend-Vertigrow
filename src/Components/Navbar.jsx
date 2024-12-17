import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo/Logo Vertigrow Blok.png";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Mengatur scroll event
  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (route) => {
    navigate(route);
    setMenuOpen(false); // Menutup menu setelah navigasi
  };

  const isActive = (path) =>
    location.pathname === path
      ? "text-green-900 font-bold"
      : "text-black hover:text-green-900";

  return (
    <section
      className={`${
        scrolling ? "bg-white shadow-lg" : "bg-transparent"
      } fixed top-0 left-0 w-full z-50 py-1 px-20 transition-all duration-300`}
    >
      {/* Div untuk navbar */}
      <div className="w-full flex justify-between items-center px-14 text-lg">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleClick("/")}>
          <img src={Logo} alt="VertiGrow Logo" className="h-12 w-12" />
          <h3 className="text-2xl font-semibold">VertiGrow</h3>
        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu Navigasi */}
        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute lg:static top-16 left-0 w-full lg:w-auto flex-col lg:flex-row items-center lg:flex gap-6 lg:bg-transparent p-4 lg:p-0 z-40 bg-white`}
        >
          <li
            className={`cursor-pointer ${isActive("/")}`}
            onClick={() => handleClick("/")}
          >
            Beranda
          </li>
          <li
            className={`cursor-pointer ${isActive("/tentang-kami")}`}
            onClick={() => handleClick("/tentang-kami")}
          >
            Tentang Kami
          </li>
          <li
            className={`cursor-pointer ${isActive("/layanan-kami")}`}
            onClick={() => handleClick("/layanan-kami")}
          >
            Layanan Kami
          </li>

          {/* Tombol Masuk dan Daftar */}
          <div className="flex flex-col lg:flex-row gap-3 lg:mt-0">
            <button
              className="bg-[#EC744A] hover:bg-orange-700 rounded-full font-semibold text-[#F8F8F9] w-32 py-2 text-lg"
              onClick={() => handleClick("/masuk")}
            >
              Masuk
            </button>
          </div>
        </ul>
      </div>
    </section>
  );
}
