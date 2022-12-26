import React from "react";
import Heroimage from "../images/illustration-working.svg";

const HeroSection = () => {
  return (
    <div>
      <section className="py-10 lg:py-20">
        <div className="px-5 lg:max-w-5xl lg:mx-auto xl:max-w-6xl 2xl:px-0 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 ">
          <article className="text-center md:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-slate-900">
              More than just shorter links
            </h1>
            <p className="lg:text-lg mb-10 text-slate-400">
              Build your brand's recognitionand get detailed insights on how
              your links are performing.
            </p>
            <button className="btn bg-cyan-600 py-2 px-4 text-white cursor-pointer rounded-full">
              Get Started
            </button>
          </article>

          <article>
            <img src={Heroimage} alt="Heroimage" />
          </article>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
