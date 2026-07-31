import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) {
      alert("Please enter weight and height");
      return;
    }

    const h = height / 100;
    const result = (weight / (h * h)).toFixed(2);

    setBmi(result);

    if (result < 18.5)
      setStatus("Underweight");
    else if (result < 25)
      setStatus("Normal Weight");
    else if (result < 30)
      setStatus("Overweight");
    else
      setStatus("Obese");
  };

  const reset = () => {
    setWeight("");
    setHeight("");
    setBmi("");
    setStatus("");
  };

  return (
    <div className="container">
      <div className="card">

        <h1>BMI Calculator</h1>

        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <button onClick={calculateBMI}>
          Calculate BMI
        </button>

        <button className="reset" onClick={reset}>
          Reset
        </button>

        {bmi && (
          <>
            <h2>BMI : {bmi}</h2>
            <h3>{status}</h3>
          </>
        )}

      </div>
    </div>
  );
}

export default App;
