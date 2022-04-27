import { useState } from "react";

const Main = () => {
  const [counter, setCounter] = useState(0);

  return (
    <main className="main">
      <div className="operating">
        <button
          className="sign-minus"
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </button>
        <div className="result">{counter}</div>
        <button
          className="sign-plus"
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
      </div>
      <div className="reset">
        <button
          className="reset-bt"
          onClick={() => {
            setCounter(0);
          }}
        >
          Reset
        </button>
      </div>
    </main>
  );
};
export default Main;
