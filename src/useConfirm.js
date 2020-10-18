import React, { useRef, useEffect, useState, useCallback } from "react";
import "./App.css";

const useConfirm = (message = "", callback, rejection) => {
  const ConfirmAction = () => {
    if (window.confirm(message)) {
      callback();
    } else {
      rejection();
    }
    console.log("hello");
  };
  return ConfirmAction;
};

const App = () => {
  const clickOk = () => console.log("clickOk");
  const clickNo = () => console.log("clickNo");
  const deleteWord = useConfirm("Are you sure delete?", clickOk, clickNo);
  return (
    <div className="App">
      <button onClick={deleteWord}>delete something</button>
    </div>
  );
};

export default App;
