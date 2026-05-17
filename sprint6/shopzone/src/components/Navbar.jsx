import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-400"
      : "text-gray-300 hover:text-white transition";

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="text-2xl font-bold tracking-tight"
          >
            ShopZone
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/shop" className={navLinkClass}>
              Shop
            </NavLink>

            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>

            <NavLink
              to="/cart"
              className="relative text-gray-300 hover:text-white transition"
            >
              Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-4 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </NavLink>
          </div>

          {/* Mobile Right Side */}
          <div className="md:hidden flex items-center gap-4">
            {/* Mobile Cart */}
            <NavLink
              to="/cart"
              onClick={closeMenu}
              className="relative text-gray-300 hover:text-white transition"
            >
              🛒
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </NavLink>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-white"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-4 text-sm font-medium">
            <NavLink
              to="/"
              onClick={closeMenu}
              className={navLinkClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/shop"
              onClick={closeMenu}
              className={navLinkClass}
            >
              Shop
            </NavLink>

            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={navLinkClass}
            >
              Contact
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;