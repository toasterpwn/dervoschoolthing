import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="text-[#88C0D0] h-screen">
      <Navbar />
      <div className="text-4xl mx-auto">Url Shortener</div>
      <div className="m-10">
        <h1 className="text-xl m-2">Quick Shorten</h1>
        <form class="w-1/3" action="/quick" method="post">
          <div class="flex items-center border-b border-[#5E81AC] py-2">
            <input
              class="appearance-none bg-transparent border-none w-full text-[#81A1C1] mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              name="original_url"
              placeholder="https://long-domain.longass.tld/ape"
            />
            <input
              className="hover:text-[#81A1C1] hover:bg-[#1a1a1d] border p-2 rounded-lg"
              type="submit"
              value="Shorten"
            />
          </div>
        </form>
        <h1 className="text-xl m-2">Quick Shorten</h1>
        <form class="w-1/3" action="/custom" method="post">
          <div class="flex items-center border-b border-[#5E81AC] py-2">
            <input
              class="appearance-none bg-transparent border-none w-full text-[#81A1C1] mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              name="original_url"
              placeholder="https://long-domain.longass.tld/ape"
            />
            <input
              class="appearance-none bg-transparent border-none w-full text-[#81A1C1] mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              name="short_url"
              placeholder="suffix"
            />
            <input
              className="hover:text-[#81A1C1] hover:bg-[#1a1a1d] border p-2 rounded-lg"
              type="submit"
              value="Shorten"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
