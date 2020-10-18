import React, { useEffect } from "react";
import "./App.css";

const useBeforeLeave = (callback) => {
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

const App = () => {
  const begPlease = () => console.log("please dont leave");
  useBeforeLeave(begPlease);
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
};

export default App;
