import React, { useEffect, useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  const sayHello = () => console.log("hello");
  // useEffect(() => {
  //   // component가 mount 되자마자 실행, 업데이트가 될때도 실행
  //   sayHello();
  // });
  useEffect(sayHello, [number]); // number만 dependency에 있으므로 aNumber가 변할때는 sayHello를 실행하지 않고 오직 number가 변할때만 sayHello를 실행함
  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
}