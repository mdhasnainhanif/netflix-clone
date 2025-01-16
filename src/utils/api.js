import axios from "axios";

const BASEURL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = process.env.REACT_APP_TMDB_TOKEN;
console.log(TMDB_TOKEN, "TMDB_TOKEN");

const headers = {
  Authorization: `Bearer ${TMDB_TOKEN}`,
  Accept: "application/json",
  "Content-Type": "application/json",
};
export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASEURL + url, {headers,params,});
    return data;
  } catch (err) {
    console.error("Error fetching data from API", err);
    throw err;
  }
};
