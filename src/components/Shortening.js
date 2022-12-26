import bgMobile from "../images/bg-shorten-mobile.svg";
import bgDesktop from "../images/bg-shorten-desktop.svg";
import React from "react";

const Shortening = () => {
  return (
    <div>
      <section className="px-5 lg:max-w-5xl lg:mx-auto xl:max-w-6xl 2xl:px-0 shortener relative">
        <picture>
          <source media="(min-width: 768px)" srcSet={bgDesktop} />
          <img src={bgMobile} alt="" />
        </picture>

        <form className="form">
          <div className="flex flex-col md:flex-row">
            <input
              type="url"
              placeholder="Shorten a link here"
              className="w-full py-2 px-6 rounded-lg md:mb-0"
            />
            <button
              type="submit"
              className="btn bg-cyan-600 py-2 px-4 text-white cursor-pointer rounded-lg w-full md:w-40 md:ml-5"
            >
              Shorten
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Shortening;
