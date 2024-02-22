import React, { useEffect, useRef, useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { useCartContext } from "../Context/cart_context";
import { useAuth0 } from "@auth0/auth0-react";
export const Navlinks = [
  {
    id: 1,
    name: "HOME",
    link: "/",
  },
  {
    id: 2,
    name: "PRODUCT",
    link: "/product",
  },
  {
    id: 1,
    name: "ABOUT",
    link: "/about",
  },
  {
    id: 1,
    name: "CONTACT",
    link: "/contact",
  },
];
const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { total_item } = useCartContext()
  const { loginWithRedirect, logout,isAuthenticated,user } = useAuth0();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  return (
    <div
      className="relative z-10 shadow-md w-full duration-300 flex justify-center
    "
    >
      <div className="container py-2 md:py-0 px-7">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-xl sm:text-xl md:text-2xl font-bold font-serif">E-Commerce</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <Link
                    to={link}
                    className={({ isActive }) => `text-lg font-medium ${isActive ? "text-gray-700" : "text-green-500"} hover:text-green-500 py-2 hover:border-b-2 hover:border-green-500 transition-colors duration-500`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
              
              {isAuthenticated?<button 
              className="bg-green-500 text-white px-6 py-2 rounded-lg  hover:bg-green-400"
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
              </button>:
              <button
              onClick={() => loginWithRedirect()}
              className="bg-green-500 text-white px-6 py-2 rounded-lg  hover:bg-green-400"><Link to="/login">Login</Link></button>
              }
              
              
              {/* cart icon */}
              <NavLink to="/cart" className="relative">
                <IoCartOutline className="w-9 h-9 cursor-pointer" />
                <span className="w-5 h-5 absolute rounded-full bg-green-500 top-0 right-0 text-white text-center font-semibold">{total_item}</span>

              </NavLink>
            </ul>
          </nav>
          {/* Mobile view  */}
          <div className="flex items-center gap-4 md:hidden ">
            {/* cart  */}
            <NavLink to="/cart" className="relative">
              <IoCartOutline className="w-9 h-9 cursor-pointer" />
              <span className="w-5 h-5 absolute rounded-full bg-green-500 top-0 right-0 text-white text-center font-semibold">{total_item}</span>

            </NavLink>
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default Navbar;