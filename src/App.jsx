import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmistatus, setBmistatus] = useState("");
  const [error, setError] = useState("");

  const calculateBmi = () => {
    const validHeight = /^\d+$/.test(height);
    const validWeight = /^\d+$/.test(weight);
    if (validHeight && validWeight) {
      const HeightInMeters = height / 100;
      const BmiValue = weight / (HeightInMeters * HeightInMeters);
      setBmi(BmiValue.toFixed(2));
      if (BmiValue < 18.5) {
        setBmistatus("UnderWeight");
      } else if (BmiValue >= 18.5 && BmiValue <= 24.9) {
        setBmistatus("NormalWeight");
      } else if (BmiValue >= 25 && BmiValue < 29.9) {
        setBmistatus(" OverWeight");
      } else {
        setBmistatus(" Obese");
      }
      setError("");
    } else {
      setBmi(null);
      setBmistatus("");
      setError("Enter height and weight correctly");
    }
  };
  const clear = () => {
    setBmi(null);
    setBmistatus("");
    setHeight("");
    setWeight("");
    setError("");
  };

  return (
    <div className="container">
      <div className="image"></div>
      <div className="textContainer">
        <h1>BMI Calculator</h1>
        {error && (
          <div className="error">
            <p>Enter height and weight correctly</p>
          </div>
        )}
        <div className="inputs">
          <label htmlFor="height">Height(cm):</label>
          <input
            type="text"
            placeholder="Enter Height"
            id="height"
            value={height}
            onChange={(e) => {
              setHeight(e.target.value);
            }}
          />
        </div>
        <div className="inputs">
          <label htmlFor="height">Weight(kg):</label>
          <input
            type="text"
            placeholder="Enter Weight"
            id="height"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
            }}
          />
        </div>
        <button onClick={calculateBmi}>Calculate</button>
        <button onClick={clear}>Clear</button>
        {bmi !== null && (
          <div className="result">
            <p>
              your BMI is : <span>{bmi}</span>
            </p>
            <p>
              Status : <span>{bmistatus}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
