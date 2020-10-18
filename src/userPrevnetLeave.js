import React, { useRef, useEffect, useState, useCallback } from "react";
import "./App.css";

const userPrevnetLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const protect = () => window.addEventListener("beforeunload", listener);
  const unprotect = () => window.removeEventListener("beforeunload", listener);
  return { protect, unprotect };
};

const App = () => {
  const { protect, unprotect } = userPrevnetLeave();
  return (
    <div className="App">
      <button onClick={protect}>protect</button>
      <button onClick={unprotect}>unprotect</button>
    </div>
  );
};

export default App;
