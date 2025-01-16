import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";

const HeroBanner = () => {
  const navigate = useNavigate();

  const [background, setBackground] = useState("")
  const [query, setQuery] = useState("");
  const {data , loading} = useFetch("/movie/upcoming")
  const {url} = useSelector((state) => state.home)


  const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;

//   setBackground(bg)
  console.log(bg, "image")
  console.log(url, "urllll")


  const handleSearchQuery = (event) => {
    if (event.key === "Enter" && query.length > 0) {
        navigate(`/search/${query}`)
    }
  };

  return (
    <>
      <h2>Second Home</h2>
      <input
        type="text"
        className="border-2 p-2 outline-none"
        placeholder="search..."
        onKeyUp={handleSearchQuery}
        onChange={(e) => setQuery(e.target.value)}
      />
    </>
  );
};

export default HeroBanner;
