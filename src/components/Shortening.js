import bgMobile from "../images/bg-shorten-mobile.svg";
import bgDesktop from "../images/bg-shorten-desktop.svg";
import React, { useState } from "react";

const Shortening = () => {
  const [shortenedLinks, setShortenedLinks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.url.value;
    fetch(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
      .then((res) => res.json())
      .then((data) => {
        setShortenedLinks([...shortenedLinks, data.result.short_link]);
      });
    // console.log(shortenedLinks);

    const ShortenedLinkCard = ({ link }) => {
      const [copiedText, setCopiedText] = useState("");
      return (
        <div
          key={link.short_link}
          className="flex items-center justify-between shadow-md p-4 rounded-lg"
        >
          <div className="flex items-center justify-between w-full pr-4 font-semibold">
            <div className="text-gray-600">{link.original_link}</div>
            <div className="text-cyan-600">{link.short_link}</div>
          </div>
          <button
            className={`w-32 py-2 text-white rounded-lg font-semibold ${
              copiedText ? "bg-gray-600" : "bg-gray-600"
            }`}
            onClick={() => {
              navigator.clipboard.writeText(link.short_link);
              setCopiedText(link.short_link);
            }}
          >
            {copiedText ? "Copied" : "Copy"}
          </button>
        </div>
      );
    };
  };
  return (
    <div>
      <section className="px-5 lg:max-w-5xl lg:mx-auto xl:max-w-6xl 2xl:px-0 shortener relative">
        <picture>
          <source media="(min-width: 768px)" srcSet={bgDesktop} />
          <img src={bgMobile} alt="" />
        </picture>

        <form onSubmit={handleSubmit} className="form">
          <div className="flex flex-col md:flex-row">
            <input
              type="url"
              name="url"
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
