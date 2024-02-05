// import React from "react";
import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";
function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  console.log(url);
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log("DHRUV");
      console.log(res);
      dispatch(getApiConfiguration(res));
    });
  };
  return (
    <div className="App">
      App <br />
      {url?.total_pages}
    </div>
  );
}

export default App;
