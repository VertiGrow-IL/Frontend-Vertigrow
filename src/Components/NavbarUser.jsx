import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function NavbarUser() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 0);
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogout = () => {
    console.log("User logged out");
    navigate("/masuk");
  };

  const isActive = (path) =>
    location.pathname === path
      ? "text-[#387F39] font-bold"
      : "text-black hover:text-[#387F39]";

  return (
    <nav
      className={`bg-[#F8F8F9] fixed top-0 left-0 w-full z-50 py-3 px-4 transition-shadow ${
        scrolling ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="Logo-Vertigrow.png"
            alt="VertiGrow Logo"
            className="w-14 h-14"
          />
          <h3 className="text-xl font-semibold">VertiGrow</h3>
        </div>

        {/* Menu */}
        <ul
          className={`lg:flex items-center gap-3 font-semibold ${
            menuOpen
              ? "flex flex-col items-center justify-center space-y-4 py-4 bg-[#F8F8F9]"  // background here
              : "hidden"
          } lg:static absolute top-full left-0 w-full lg:w-auto z-40 transition-all duration-300`}
        >
          <li>
            <Link
              to="/verti-guide"
              className={`block ${isActive("/verti-guide")} text-center no-underline`}
            >
              VertiGuide
            </Link>
          </li>
          <li>
            <Link
              to="/eco-limbah"
              className={`block ${isActive("/eco-limbah")} text-center no-underline`}
            >
              EcoLimbah
            </Link>
          </li>
          <li>
            <Link
              to="/chatbot-mr-grow"
              className={`block ${isActive("/chatbot-mr-grow")} text-center no-underline`}
            >
              Chatbot Mr.Grow
            </Link>
          </li>

          {/* Avatar pada Mode Mobile */}
          <li className="block lg:hidden">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <img
                src="https://i.pinimg.com/originals/81/2e/7e/812e7e9c8f8686c4ebd4f98f477e46de.jpg"
                alt="User Profile"
                className="w-10 h-10 rounded-full"
              />
              <span
                className={`transform transition-transform ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </div>
            {dropdownOpen && (
              <div className="absolute mt-2 w-36 bg-white rounded-md shadow-lg border">
                <ul>
                  <li
                    className="py-2 px-4 hover:text-red-500 cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-8 h-8 text-black"
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

        {/* Avatar Desktop */}
        <div className="hidden lg:block relative">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img
              src="https://i.pinimg.com/originals/81/2e/7e/812e7e9c8f8686c4ebd4f98f477e46de.jpg"
              alt="User Profile"
              className="w-10 h-10 rounded-full"
            />
            <span
              className={`transform transition-transform ${
                dropdownOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          </div>
          {dropdownOpen && (
            <div className="absolute mt-2 w-36 bg-white rounded-md shadow-lg border">
              <ul>
                <li
                  className="py-2 px-4 hover:text-red-500 cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
