import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HeroBanner = () => {
  const navigate = useNavigate();

  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const { data, loading } = useFetch("/movie/upcoming");
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    if (data?.results && url?.backdrop) {
      const randomIndex = Math.floor(Math.random() * data.results.length);
      const bg = url.backdrop + data.results[randomIndex]?.backdrop_path;
      setBackground(bg);
    }
  }, [data, url]);

  const handleSearchQuery = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <>
      <section style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh", // Adjust as needed
        width: "100%", // Adjust as needed
      }}>
        {/* <div>{!loading && <LazyLoadImage src={background} />}</div> */}
        <h2>Second Home</h2>
        <input
          type="text"
          className="border-2 p-2 outline-none"
          placeholder="search..."
          onKeyUp={handleSearchQuery}
          onChange={(e) => setQuery(e.target.value)}
        />
      </section>
    </>
  );
};

export default HeroBanner;
