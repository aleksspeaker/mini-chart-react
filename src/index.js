import React from "react";
import ReactDOM from "react-dom";

import dataSet from "./dataset";
import MiniChart from "./minichart";
import "./styles.css";

const bars = dataSet[0].bars.bars;
const closeValues = bars.map(num => num.close || num.closef);

// test sets:

// const closeValues = [
//   7510,
//   7500,
//   7510,
//   7540,
//   7530,
//   7560,
//   7570,
//   7580,
//   7510,
//   7550,
//   7510,
//   7540,
//   7530,
//   7600,
//   7570,
//   7520
// ];

// const closeValues = [
//   110,
//   100,
//   110,
//   140,
//   130,
//   160,
//   170,
//   180,
//   110,
//   150,
//   110,
//   140,
//   130,
//   100,
//   170,
//   120
// ];

function App() {
  return (
    <div className="App">
      <h3>React SVG Mini-Chart Component</h3>
      <p className="description">
        Thanks to it's minimalistic nature, it's ideal for embeding into tables,
        lists or even texts
      </p>
      <div className="mini-chart">
        <MiniChart data={closeValues} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
