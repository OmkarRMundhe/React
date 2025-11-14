import { useState } from 'react'


function App() {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset = () => {
    
      setCount(0);
    
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Display Section */}
      <h1>Count: {count}</h1>

      {/* Button Section */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ marginLeft: "10px" }}>Decrement</button>
      <button onClick={reset} style={{ marginLeft: "10px" }}>Reset</button>

      {/* Message Section with conditional rendering */}
      {count == 10 && <p>Reached maximum limit!</p>}
      {count == 0 && <p>Reached minimum limit!</p>}
    </div>
  );
}

export default App;
