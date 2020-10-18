import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import useAxios from "./useAxios";

const App = () => {
  const { data, loading, error, refetch } = useAxios({
    url:
      "https://cors-anywhere.herokuapp.com/https://yts.am/api/v2/list_movies.json",
  });
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1>{data && data.status}</h1>
      <h1>{loading ? "true" : "false"}</h1>
      <button onClick={refetch}>refetch</button>
    </div>
  );
};

export default App;
