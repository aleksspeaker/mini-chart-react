import React from "react";
import ReactDOM from "react-dom";
import CryptoMiniChart from "./components/crypto-minichart";
import "./styles.css";

export function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <td>
            <h3>BTC</h3>
          </td>
          <td></td>
          <td>
            <CryptoMiniChart symbol="bitcoin" days="5" />
          </td>
        </tr>
        <tr>
          <td>
            <h3>XRP</h3>
          </td>
          <td></td>
          <td>
            <CryptoMiniChart symbol="ripple" days="5" />
          </td>
        </tr>
        <tr>
          <td>
            <h3>LTC</h3>
          </td>
          <td></td>
          <td>
            <CryptoMiniChart symbol="litecoin" days="5" />
          </td>
        </tr>
      </table>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
