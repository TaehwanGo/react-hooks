import React, { useEffect, useRef, useState } from "react";

const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick); // useEffect는 mount, unmount 모두 동작하므로 unmount일땐 동작하지 않도록 해야함 - return에서 해결
    }
    return () => {
      // useEffect로 return하는 함수는 unmount될때 실행 됨
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []); // dependency를 []로 해줘야 mount될때(처음시작때 한번)만 실행됨
  return element;
};

export default function App() {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
}