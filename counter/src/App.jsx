import { useState } from "react";
function App() {
  const [state, setState] = useState(0);
  const handleAdd = () => {
    state < 20 ? setState(state + 1) : setState(state);
  };
  const handleDec = () => {
    state > 0 ? setState(state - 1) : setState(state);
  };
  return (
    <>
      <h1>COUNTER PROJECT</h1>
      <h2>COUNTER VALUE:{state}</h2>
      <button onClick={handleAdd}>Add Value +</button>
      <button onClick={handleDec}>Decrease Value -</button>
    </>
  );
}

export default App;
