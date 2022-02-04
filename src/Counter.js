import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const increment = (e) => {
    if (e.target.className !== "btn") {
      setCount(count + 1);
    }
  };

  const singleDigitNumber = Array.from(String(count), (count) => Number(count));

  return (
    <>
      <div className="counter-container" onClick={(e) => increment(e)}>
        <div className="panel-container">
          {singleDigitNumber.map((num, index) => {
            return (
              <div key={index} className="panel">
                {num}
              </div>
            );
          })}
        </div>
        <div className="btn-container">
          <button className="btn" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
