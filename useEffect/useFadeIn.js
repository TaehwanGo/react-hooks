import React, { useEffect, useRef, useState } from "react";

const useFadeIn = (duration = 1000, delay = 0) => {
  // duration에 default값은 1초
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}ms ease-in-out ${delay}ms`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

export default function App() {
  const fadeinH1 = useFadeIn(3000, 0);
  const fadeInP = useFadeIn(5000, 1000);
  return (
    <div className="App">
      {/* <h1 ref={el} style={{opacity:0}}>Hello</h1> */}
      <h1 {...fadeinH1}>Hello</h1>
      <p {...fadeInP}>lalalalala</p>
    </div>
  );
}
