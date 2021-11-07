import React from "react";
import ReactDOM from "react-dom";
import CryptoMiniChart from "./components/crypto-minichart";
import "./styles.css";

export function App() {
  return (
    <div className="App">
      <h3>BTC</h3>
      <CryptoMiniChart symbol="bitcoin" days="5" />
      <h3>XRP</h3>
      <CryptoMiniChart symbol="ripple" days="20" />
      <h3>LTC</h3>
      <CryptoMiniChart symbol="litecoin" days="15" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
