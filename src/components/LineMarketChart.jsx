import React from 'react';
import Chart from 'react-apexcharts';

const LineMarketChart = ({color}) => {
    const data = {
        series: [
          {
            name: 'Data',
            data: [20, 11, 32, 40, 25, 10, 31, 30, 55, 15, 60, 43, 15, 70],
          },
        ],
        options: {
          chart: {
            id: "line-chart",
            toolbar: {
              show: false,
            },
            background: 'transparent',
            sparkline: { enabled: true }
          },
          stroke: {
      
            width: 3,
            colors: [`${color}`], // Цвет линии
          },
          markers: {
            size: 0, // Убираем точки
          },
          grid: {
            show: false, // Убираем сетку
          },
          xaxis: {

            show: false, // Убираем ось X
          },
          yaxis: {
            show: false, // Убираем ось Y
          },
          tooltip: {
            enabled: false, // Убираем подсказки
          },
          grid: {
            show: false
          }
        },
      };
  return (

      <Chart options={data.options} series={data.series} type="line" height={70} />
  );
};

export default LineMarketChart;