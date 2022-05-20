import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const List = () => {
  const [urls, setUrls] = useState(null);
  useEffect(() => {
    const getUrls = async () => {
      let list = await fetch("/list");
      let arr = await list.json();
      let j = await Array.from(arr.map((i) => i["original_url"]));
      let k = await Array.from(arr.map((i) => i["short_url"]));
      setUrls(
        <div className="flex flex-row ">
          <div className="flex flex-col m-2">
            {j.map((x) => (
              <a className="text-white my-2" key={x} href={x}>
                Original Url: {x}
              </a>
            ))}
          </div>
          <div className="flex flex-col m-2">
            {k.map((x) => (
              <a className="text-white my-2" key={x} href={`/url/${x}`}>
                Short Url: {x}
              </a>
            ))}
          </div>
        </div>
      );
    };
    getUrls();
  }, []);

  return (
    <div className="overflow-visible">
      <Navbar />
      {urls}
    </div>
  );
};

export default List;
