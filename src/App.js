import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [error, setError] = useState('');
  const [error1, setError1] = useState('');
  const [result, setResult] = useState('');
  const [result1, setResult1] = useState('');

  const validateInputs = () => {
    setError('');
    setError1('');
    setResult('');
    setResult1('');

    if (!num1 || !num2 || isNaN(Number(num1)) || isNaN(Number(num2))) {
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

  const handleOperation = (operator) => {
    if (!validateInputs()) {
      return;
    }
    let calculationResult;
    if (operator === '+') {
      calculationResult = Number(num1) + Number(num2);
    } 
    else if (operator === '-') {
      calculationResult = Number(num1) - Number(num2);
    } 
    else if (operator === '*') {
      calculationResult = Number(num1) * Number(num2);
    } 
    else if (operator === '/') {
      calculationResult = Number(num1) / Number(num2);
    }

    setResult(`Success!`);
    setResult1(`Result - ${calculationResult}`);
    setError1(
      ""
    );
    setError(
      ""
    );
  };

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

export default App;