import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const useScroll = () =>{
  const [state, setState] = useState({
    x : 0,
    y : 0
  });

  const handleScroll = () =>{
   setState({y : window.scrollY, x : window.scrollX})
   console.log(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, []);
  return state;
}


const App = () => {
  const {y} = useScroll()
  return (
    <div className="App" style={{height : "1000vh"}}>
      <h1 style={{ position: 'fixed', color: y > 100 ? 'red' : 'blue' }}>hi</h1>
    </div>
  );
};

export default App;
