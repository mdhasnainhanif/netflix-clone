import { useDispatch } from "react-redux";
import "./App.css";
import Routes from "./routes";
import { fetchDataFromApi } from "./utils/api";
import { getApiConfiguation } from "./store/homeSlice";
import { useEffect } from "react";

function App() {
  // console.log(process.env.REACT_APP_TMDB_TOKEN);

  const dispatch = useDispatch()

  useEffect(()=>{
    apiTesting()
  },[])

  const apiTesting = ()=>{
      fetchDataFromApi("/configuration")
      .then((res)=>{
        const url = {
          backdrop: res?.images?.secure_base_url + "original",
          profile: res?.images?.secure_base_url + "original",
          poster: res?.images?.secure_base_url + "original"
        };
        dispatch(getApiConfiguation(url))
      })
  }
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
