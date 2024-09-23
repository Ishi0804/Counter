import { React, useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((count) => count + 1);
  };

  const decrease = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
    }
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="counter">
      <h1>React Counter</h1>
      <span className="counter__output">{counter}</span>
      <div className="btn__container"></div>
      <button className="control__btn" onClick={increase}>
        +
      </button>
      <button className="control__btn" onClick={decrease}>
        -
      </button>
      <button className="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
