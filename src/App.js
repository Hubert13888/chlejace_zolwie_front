import { useState } from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  const [counter, setCouter] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => setCouter(counter + 1)}>Kliknij</button>
        <p>{counter}</p>
        {counter%5===0 ?<p>
          Edit <code>src/App.js</code> and save to reload.
        </p> : <></>}
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
