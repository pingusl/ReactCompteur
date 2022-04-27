import { useState } from "react";

const Main = () => {
  const [counter, setCounter] = useState(0);

  return (
    <main className="main">
      <div className="operating">
        <div className="minus">
          <button
            className="sign-minus"
            onClick={() => {
              setCounter(counter - 1);
            }}
            style={counter === 0 ? { color: "white" } : { color: "black" }}
          >
            -
          </button>
        </div>

        <div className="result">{counter}</div>
        <div className="plus">
          {" "}
          <button
            className="sign-plus"
            onClick={() => {
              setCounter(counter + 1);
            }}
            style={counter > 9 ? { color: "white" } : { color: "black" }}
          >
            +
          </button>
        </div>
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
