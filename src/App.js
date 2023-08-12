import React, { useState } from 'react';    // importing React and useState Hook from react
import './App.css';   // importing css styling

function App() {

  // useState hook variable creation
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [error, setError] = useState('');
  const [error1, setError1] = useState('');
  const [result, setResult] = useState('');
  const [result1, setResult1] = useState('');

  // validation function to check if inputs are available or not
  const validateInputs = () => {
    setError('');
    setError1('');
    setResult('');
    setResult1('');

    if (!num1 || !num2 || isNaN(Number(num1)) || isNaN(Number(num2))) {
      // setting error
      setError1(
        'Error'
      );
      setError(
        num1
          ? 'Num2 Cannot Be Empty'
          : 'Num1 Cannot Be Empty'
      );
      setResult(
        ""
      );
      setResult1(
        ""
      );
      return false;
    }
    
    return true;
  };

  // handling calculation operation if validation is true
  const handleOperation = (operator) => {
    if (!validateInputs()) {
      return;
    }
    let calculationResult;
    // addition
    if (operator === '+') {
      calculationResult = Number(num1) + Number(num2);  // typecasting to Number and performing arithmetic operation
    } 

    // subtraction
    else if (operator === '-') {
      calculationResult = Number(num1) - Number(num2);  // typecasting to Number and performing arithmetic operation
    } 

    // multiplication
    else if (operator === '*') {
      calculationResult = Number(num1) * Number(num2);  // typecasting to Number and performing arithmetic operation
    } 

    // divison
    else if (operator === '/') {
      calculationResult = Number(num1) / Number(num2);  // typecasting to Number and performing arithmetic operation
    }

    // setting result
    setResult(`Success!`);
    setResult1(`Result - ${calculationResult}`);
    setError1(
      ""
    );
    setError(
      ""
    );
  };

  // returning JSX
  return (
    <div className="container">
      <div className="box">
        <div className="centre">
          <div className="input">
            <div className="heading">
              <h1>React Calculator</h1>
            </div>
            <div className="form">
              <input
                type="text"
                placeholder="Num 1"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
              />
              <input
                type="text"
                placeholder="Num 2"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
              />
            </div>
          </div>

          <div className="buttons">
            <button className="btn" onClick={() => handleOperation('+')}>
              +
            </button>
            <button className="btn" onClick={() => handleOperation('-')}>
              -
            </button>
            <button className="btn" onClick={() => handleOperation('*')}>
              *
            </button>
            <button className="btn" onClick={() => handleOperation('/')}>
              /
            </button>
          </div>

          <div className="message">
            {error1 && <p className="error">{error1}</p>}
            {error && <p className="error1">{error}</p>}
            
            {result && <p className="success">{result}</p>}
            {result1 && <p className="success1">{result1}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

/* Exporting the App function */
export default App;