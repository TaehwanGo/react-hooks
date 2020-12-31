import React, { useEffect, useRef, useState } from "react";

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault(); // 이건 없어도 되네
    event.returnValue = ""; // 이게 핵심이네 윈도우 닫을때 저장여부 물어보는 것
  };
  const enablePrevent = () => {
    // 어떤 요청을 API로 보냈고 그 응답이 왔으면 닫아도 ok, 아직 안왔으면 닫지 않도록 함
    window.addEventListener("beforeunload", listener);
    // beforeunload는 window가 닫히기 전에 function이 실행되는 것을 허락함
  };
  const disablePrevent = () => {
    window.removeEventListener("beforeunload", listener);
  };
  return { enablePrevent, disablePrevent };
};

export default function App() {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>protect</button>
      <button onClick={disablePrevent}>unprotect</button>
    </div>
  );
}
