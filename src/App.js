import './App.css';
import { useState, useRef } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [displayValue, setDisplayValue] = useState([]);

  const costValue = useRef(0);
  const inputValue = useRef("");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Add Expense</h1>
        <p>Item: [{displayValue.toString()}]</p>
        <input onChange={(event) => {
							inputValue.current = event.target.value;
						}} ></input>
        <p>Cost: [{count}]</p>
        <input onChange={(event) => {
							costValue.current = event.target.value;
						}}></input>
        <button type="button" 
						onClick={() => {
              setDisplayValue(displayValue.concat(inputValue.current))
              setCount(parseInt(costValue.current) + count);
						}}>Add</button>
      </header>
    </div>
  );
}

export default App;