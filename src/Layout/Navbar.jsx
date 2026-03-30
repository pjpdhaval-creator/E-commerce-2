import { Heart, Menu, Search, ShoppingBag, User2, X } from "lucide-react";
import React, { useState } from "react";
import { Link, Links } from "react-router-dom";

const NavBar = () => {
  const [ShowMenu, setShowMenu] = useState(false);
  return (
    <>
      <section>
        <nav className="bg-[#f5e9de] px-8 py-4 w-full h-auto  hidden md:flex items-center justify-between">
          <div className="flex justify-center">
            <img
              src="/logo.png"
              alt="logo"
              className="h-10 w-35 object-cover"
            />
          </div>

          <ul className="flex items-center justify-center text-lg font-normal gap-x-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/collection">Collection</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="flex items-center justify-center gap-x-6">
            <Search />
            <Heart />
            <ShoppingBag />
            <User2 />
          </div>
        </nav>

        {/* Mobie and Tablet */}
        <nav className="bg-[#f5e9de] px-8 py-4 w-full h-auto  md:hidden flex items-center justify-between">
          <div className="flex justify-center">
            <img
              src="/logo.png"
              alt="logo"
              className="h-25 w-35 object-cover"
            />
          </div>

          <div className="flex items-center justify-center gap-x-6">
            <Heart strokeWidth={1} />
            <ShoppingBag strokeWidth={1} />
            <User2
              strokeWidth={1}
              className=" active:scale-95 active:text-amber-600"
            />
            <Menu
              strokeWidth={1}
              onClick={() => {
                setShowMenu(true);
              }}
            />
          </div>
        </nav>
        {/* Side bar Panel */}
        {ShowMenu && (
          <section className=" ralative flex justify-end">
            <div className="w-[70%] z-200 bg-white/25 backdrop-blur-sm h-screen fixed top-0 flex items-center justify-center">
              <div className=" absolute top-2  right-4">
                {" "}
                <X
                  className="w-10 h-10   "
                  strokeWidth={4}
                  onClick={() => {
                    setShowMenu(false);
                  }}
                />
              </div>
              {/* links */}
              <ul className="flex flex-col items-center justify-center text-3xl font-semibold gap-y-12">
                <li>
                  <a to="">Home</a>
                </li>
                <li>
                  <a to="">Collection</a>
                </li>
                <li>
                  <a to="">About</a>
                </li>
                <li>
                  <a to="">Contact</a>
                </li>
              </ul>
            </div>
          </section>
        )}
      </section>
    </>
  );
};

export default NavBar;
