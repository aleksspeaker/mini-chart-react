import React from "react";

class MiniChart extends React.Component {
  constructor(props) {
    super(props);
    this.startX = 0;
    this.startY = 0;
    /**
     * We will use this interval to increase X coord later
     */
    this.interval = props.width / props.data.length;
  }

  /**
   * Determine whether the trendline is growing or not
   */
  isGrowing() {
    return this.props.data[0] < this.props.data[this.props.data.length - 1];
  }

  /**
   * Color the chart line based on it's trend
   */
  redOrGreen() {
    const green = "#0e9";
    const red = "#f00";
    return this.isGrowing() ? green : red;
  }

  computeXY(startX, startY, interval) {
    /**
     * Initialize start X and Y coords
     */
    let nextX = startX;
    let nextY = startY;

    /**
     * Transform all passed-in values in to relative ones
     */
    const max = Math.max(...this.props.data);
    const relativeValues = this.props.data.map((value) => value / max);

    /**
     * The maximum relative difference between provided data
     * so that we could calculate the coefficient (later below)
     */
    const relMax = Math.max(...relativeValues);
    const relMin = Math.min(...relativeValues);
    const relDiff = relMax - relMin;

    /**
     * Calculate the coefficient for chart's optimal vertical scale
     */
    const coeff = this.props.height / relDiff;

    /**
     * Calculate the coordinates for the svg-polyline points attribute
     */
    const coords = relativeValues.map((data, index) => {
      nextX += index ? interval : 0;
      nextY = this.props.height - (data - relMin) * coeff;
      return ` ${nextX}, ${nextY} `;
    });

    return coords;
  }

  render() {
    return (
      <svg viewBox={`0 0 ${this.props.width} ${this.props.height}`}>
        <polyline
          points={`${this.computeXY(this.startX, this.startY, this.interval)}`}
          fill={this.props.fill || "none"}
          stroke={this.props.strokeColor || this.redOrGreen()}
          strokeWidth={this.props.strokeWidth || "2"}
        />
      </svg>
    );
  }
}

MiniChart.defaultProps = {
  height: 200,
  width: 400,
  strokeWidth: 2
};

export default MiniChart;
