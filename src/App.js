import { useState } from "react";
import logo from "./logo.svg";

import { useQuery } from "react-query";
import "./App.css";

function Button() {
  const { data, error } = useQuery("my-key", () => {
    // n/w request function
    return new Promise(resolve => {
      setTimeout(() => resolve(Math.random), 3000);
    });
  });
  console.log({ data, error });
  return <button>I am a button {data}</button>;
}

function App() {
  const [visible, setVisible] = useState(true);

  function toggleButton() {
    setVisible(visible => !visible);
  }

  return (
    <div className="App">
      <header className="App-header">
        {visible && <Button />}
        <button onClick={toggleButton}>Toggle</button>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
