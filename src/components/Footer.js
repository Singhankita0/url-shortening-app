import React from "react";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";
import logo from "../images/logo.svg";

const Footer = () => {
  return (
    <div>
      <footer className="bg-slate-700 py-10 lg:py-20">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5 px-5 lg:max-w-5xl lg:mx-auto xl:max-w-6xl 2xl:px-0">
          <section>
            <img src={logo} alt="" className="text-white" />
          </section>
          <section>
            <h3 className="text-white font-bold text-lg">Features</h3>
            <ul>
              <li>
                <a className="text-slate-200 text-sm" href="">
                  Link Shortening
                </a>
              </li>
              <li>
                <a className="text-slate-200 text-sm" href="">
                  Branded Links
                </a>
              </li>
              <li>
                <a className="text-slate-200 text-sm" href="">
                  Analytics
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-white font-bold text-lg">Resources</h3>
            <ul>
              <li>
                <a className="text-slate-200 text-sm" href="">
                  Blog
                </a>
              </li>
              <li>
                <a className="text-slate-200 text-sm" href="">
                  Developers
                </a>
              </li>
              <li>
                <a className="text-slate-200 text-sm" href="">
                  Support
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-white font-bold text-lg">Company</h3>
            <ul>
              <li>
                <a className="text-slate-200 text-sm" href="">
                  About
                </a>
              </li>
              <li>
                <a className="text-slate-200 text-sm" href="">
                  Our Team
                </a>
              </li>
              <li>
                <a className="text-slate-200 text-sm" href="">
                  Careers
                </a>
              </li>
              <li>
                <a className="text-slate-200 text-sm" href="">
                  Contact
                </a>
              </li>
            </ul>
          </section>

          <section>
            <ul className="flex items-center">
              <li>
                <img src={facebook} alt="" />
              </li>
              <li className="ml-4">
                <img src={twitter} alt="" />
              </li>
              <li className="mx-5">
                <img src={pinterest} alt="" />
              </li>
              <li>
                <img src={instagram} alt="" />
              </li>
            </ul>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
