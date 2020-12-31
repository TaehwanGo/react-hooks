import React, { useEffect, useRef, useState } from "react";

const useNetwork = (onChange) => {
  console.log("useNetwork(onChange)");
  const [status, setStatus] = useState(navigator.onLine); // navigator.onLine은 boolean을 반환
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine); // setState -> component:App()을 다시 실행시킴
  };
  useEffect(() => {
    // useNetwork안에 있지만 useNetwork와는 별개로 page의 생명주기에 따라 동작함
    console.log("mount");
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      // unmount때 실행
      console.log("unmount");
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);

  return status;
};

export default function App() {
  console.log("app");
  const handleNetworkChange = (online) => {
    console.log(online ? "We just went online" : "we are offline");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <h1>{onLine ? "Online" : "Offline"}</h1>
    </div>
  );
}
