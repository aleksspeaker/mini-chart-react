import React, { useEffect, useState } from "react";
import { SpinnerRoundOutlined } from "spinners-react";
import MiniChart from "./minichart";
import "./crypto-minichart.css";

function CryptoMiniChart({ symbol = "litecoin", days = 5 }) {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/${symbol}/market_chart?vs_currency=usd&days=${days}`
    )
      .then((r) => r.json())
      .then((r) => {
        setTimeout(() => {
          const _prices = r.prices.map((_p) => _p[1]);
          setPrices(_prices);
        }, 10);
      });
  }, [days, symbol]);

  if (prices.length > 0) {
    return (
      <div className="mini-chart">
        <MiniChart data={prices} />
      </div>
    );
  }
  return (
    <div className="App" style={{ marginTop: "10%" }}>
      <SpinnerRoundOutlined />
    </div>
  );
}

export default CryptoMiniChart;
