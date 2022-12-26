import { useState } from "react";
import React from "react";
import logo from "../images/logo.svg";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
      <header className="px-5 py-5 lg:max-w-5xl lg:mx-auto xl:max-w-6xl 2xl:px-0">
        <div className="flex items-center justify-between">
          <img src={logo} alt="" />
          {openMenu && (
            <div className="absolute top-20 left-6 right-6 rounded bg-black text-white 400 text-center py-10 md:relative md:top-0 md:left-0 md:right-0 md:bg-transparent md:text-slate-500 md:text-left md:py-0 md:flex md:items-center">
              <nav>
                <ul className="flex items-start justify-start">
                  <li>
                    <a href="">Features</a>
                  </li>
                  <li className="my-5 md:my-0 md:mx-5">
                    <a href="">Pricing</a>
                  </li>
                  <li className="">
                    <a href="">Resources</a>
                  </li>
                </ul>
              </nav>
              {/* </div> */}

              <ul className="flex items-center ml-5">
                <li className="my-5 md:my-0 md:mr-5">
                  <button>Login</button>
                </li>
                <li>
                  <button className="btn bg-cyan-600 py-2 px-4 text-white cursor-pointer rounded-full">
                    Sign Up
                  </button>
                </li>
              </ul>
            </div>
          )}

          <button onClick={() => setOpenMenu(!openMenu)} className="uppercase">
            {openMenu ? "Close" : "Menu"}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
