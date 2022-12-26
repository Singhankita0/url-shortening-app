import React from "react";
import bgMobile from "../images/bg-boost-mobile.svg";
import bgDesktop from "../images/bg-boost-desktop.svg";

const FooterHead = () => {
  return (
    <div>
      <section className="boost relative">
        <picture>
          <source media="(min-width:768px )" srcset={bgDesktop} />
          <img src={bgMobile} alt="" />
        </picture>
        <div className="flex items-center justify-center flex-col boost-inner">
          <p className="text-4xl md:text-4xl font-bold mb-5 text-center text-white">
            Boost Your Links today
          </p>
          <button className="btn bg-cyan-600 py-2 px-4 text-white cursor-pointer rounded-full">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default FooterHead;
