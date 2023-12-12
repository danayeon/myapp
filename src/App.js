import './App.css';
import { useState } from 'react';

function App() {
  const [currentCount, setCurrentCount] = useState(0);

  const handleAdd = () => setCurrentCount(Math.min(currentCount + 1, 100));
  const handleSub = () => setCurrentCount(Math.max(currentCount - 1, 0));
  const handleMul = () => setCurrentCount(Math.min(currentCount * 2, 100));

  return (
    <div className='App'>
      <div>
        <button id="add" onClick={handleAdd}>
          +1
        </button>
        <button id="sub" onClick={handleSub}>
          -1
        </button>
        <button id="mul" onClick={handleMul}>
          *2
        </button>
      </div>
      <div id="display">
        {currentCount}
      </div>
    </div>
  );
}

export default App;
