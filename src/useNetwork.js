import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const useNetwork = (handleNetwork) => {
  const [stauts, setStauts] = useState(navigator.onLine);
  const handleChange = () => {
    setStauts(navigator.onLine);
    handleNetwork();
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return stauts;
};

const App = () => {
  const handleNetwork = () => console.log("network Changed");
  const onLine = useNetwork(handleNetwork);
  return (
    <div className="App">
      <h1>{onLine ? "online" : "offline"}</h1>
    </div>
  );
};

export default App;
