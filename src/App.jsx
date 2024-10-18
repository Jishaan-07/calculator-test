import React, { useState } from "react";

function App() {
  const [input, setInput] = useState(""); // State to store the input expression

  // Handle number and operator clicks
  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Handle clear button (C)
  const handleClear = () => {
    setInput("");
  };

  // Handle the calculation when "=" is clicked
  const handleCalculate = () => {
    try {
      // Evaluate the mathematical expression and update the input with the result
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error"); // Display error for invalid expressions
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-warning">
      <div className="bg-white p-6 rounded-2xl shadow-2xl w-90 h-90 bg-light">
        {/* Display */}
        <div className="mb-6 p-4 bg-gray-100 text-right text-4xl text-gray-800 rounded-lg shadow-inner">
          {input || "0"}
        </div>

        {/* Calculator Buttons */}
        <div className="grid grid-cols-4 gap-3">
          {/* Numbers */}
          {["7", "8", "9", "/"].map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className="p-3 bg-yellow-300 text-white rounded text-lg font-bold  "
            >
              {btn}
            </button>
          ))}

          {["4", "5", "6", "*"].map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className="p-3 bg-yellow-300 text-white rounded text-lg font-bold  "
            >
              {btn}
            </button>
          ))}

          {["1", "2", "3", "-"].map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
                className="p-3 bg-yellow-300 text-white rounded text-lg font-bold  "
            >
              {btn}
            </button>
          ))}

          {/* Zero and other controls */}
          <button
            onClick={handleClear}
            className="p-5 bg-danger text-white rounded  text-lg font-bold  col-span-2  "
          >
            AC
          </button>
          <button
            onClick={() => handleClick("0")}
            className="p-5 bg-yellow-300 text-white rounded  text-lg font-bold "
          >
            0
          </button>
          <button
            onClick={() => handleClick("+")}
            className="p-5 bg-yellow-300 text-white rounded  text-lg font-bold "
          >
            +
          </button>

          {/* Equals Button */}
          <button
            onClick={handleCalculate}
            className="p-5 bg-success text-white rounded  text-lg font-bold "
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
