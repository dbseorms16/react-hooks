import React, { useEffect, useRef } from "react";
import "./App.css";

const useFadeIn = (duration = 0, delay = 0) => {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      element.current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      element.current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fadeInH1 = useFadeIn(1, 1);
  const fadeInP = useFadeIn(2, 2);
  return (
    <div className="App">
      <h1 {...fadeInH1}>hello woomi</h1>
      <p {...fadeInP}>hello2</p>
    </div>
  );
};

export default App;
