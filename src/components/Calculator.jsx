import { useState } from "react";

function Calculator() {
  const [displayValue, setDisplayValue] = useState("0");

  const handleButtonClick = (value) => {
    setDisplayValue(displayValue === "0" ? value : displayValue + value);
  };

  return (
    <div className="container">
      <div className="title">
        <h1>Calculator</h1>
        <h3>{displayValue}</h3>
      </div>
      <div className="calcBody">
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("/")}>÷</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button id="buttonC" onClick={() => setDisplayValue("0")}>
          C
        </button>
        <button onClick={() => handleButtonClick("-")}>-</button>
        <button onClick={() => setDisplayValue(eval(displayValue).toString())}>
          =
        </button>
      </div>
    </div>
  );
}
export default Calculator;
