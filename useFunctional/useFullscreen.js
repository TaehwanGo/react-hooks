import React, { useEffect, useRef, useState } from "react";

const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFullscreen = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      }
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFullscreen = () => {
    document.exitFullscreen(); //fullscreen은 element에 달고 쓰지만 빠져나올댄 그냥 document로 빠져나옴
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, triggerFullscreen, exitFullscreen };
};

export default function App() {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "we are small");
  };
  const { element, triggerFullscreen, exitFullscreen } = useFullscreen(onFullS);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk0hmM8BHQJrcc2yb8YDsmNTFqLJCYsWmzlw&usqp=CAU" />
        <button onClick={exitFullscreen}>exitFullscreen</button>
      </div>
      <button onClick={triggerFullscreen}>Make fullscreen</button>
    </div>
  );
}
