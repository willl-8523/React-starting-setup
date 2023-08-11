import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  // Nous crée un tableau de valeur de dataPoints
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);

  // totalMaximum est la plus grande valeur de dataPointValues 
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
