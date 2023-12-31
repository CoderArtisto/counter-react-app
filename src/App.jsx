import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const increaseValue = () => {
    counter += 1;
    setCounter(counter);
    console.log("Increased", counter);
  };

  const decreaseValue = () => {
    counter -= 1;
    setCounter(counter);
    console.log("Decreased", counter);
  };

  const resetValue = () => {
    setCounter(0);
  };

  if (counter < 0) {
    setCounter(0);
  } else {
    ("");
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Count: {counter}</h2>
      <button onClick={increaseValue}>Increase Value</button>
      <button onClick={decreaseValue}>Decrease Value</button>
      <button onClick={resetValue}>Reset Counter</button>
    </>
  );
}

export default App;
