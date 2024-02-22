import React, { useEffect, useRef }  from  "react";
import { FaUserCircle } from "react-icons/fa";

import { Navlinks } from "./Navbar";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineLogin } from "react-icons/hi";
import { useAuth0 } from "@auth0/auth0-react";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  const { loginWithRedirect, logout,isAuthenticated,user } = useAuth0();
  useEffect(()=>{
    document.addEventListener("click", handleClickOutside, true)
  },[])

  const refOne = useRef(null)
  const refTwo = useRef(null)
  const handleClickOutside = (e)=>{
    if (!refOne.current.contains(e.target)){
      setShowMenu(false)
      console.log("clicked outside")
    }
  }
  const handleClickLink = ()=>{
    setShowMenu(false)
  }
  
 
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
     ref={refOne}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          {isAuthenticated && <img src={user.picture} alt={user.name} className="rounded-full w-[60px]"/>}
          
          <div>
            {isAuthenticated && <h1>Hello, {user.name}</h1>}
            
            <h1 className="text-sm text-slate-500">Premium user</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {Navlinks.map((data) => (
              <li>
                <Link to={data.link} className="mb-5 inline-block" onClick={handleClickLink}>
                  {data.name}
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
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>
          Made with ❤ by <a href="#">Rohit</a>{" "}
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;