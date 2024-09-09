import React from "react";
import Chart from "react-apexcharts";

const LineChart = ({item}) => {


  const dataTr = item.map(item => {
    return item.amount
  })




  const series = [
    {
      name: "price",
      data: dataTr
    },
  ];

  const chartOptions = {
    chart: {
        id: 'line-chart',
        toolbar: { show: false },
        dropShadow: {
            enabled: true,
            blur: 5,
            left: 0,
            top: 2,
            opacity: 0.5
        }
    },
    stroke: {
        curve: 'smooth',
        width: 3,
        colors: ['#0571b9']
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: ['June', 'July', 'August', 'September', 'October'],
       
        labels: {
            style: {
                colors: '#54669C',
                fontSize: '14px'
            }
        }
    },
    yaxis: {
        labels: {
            style: {
                colors: '#54669C',
                fontSize: '12px'
            }
        },
       
    },
    tooltip: {
        shared: true,
        intersect: false,
        style: {
            fontSize: '14px',
            color: '#54669C',
            background: '#111648'
        },
        y: {
            formatter: (value) => `$ ${value}`
        }
    },
    grid: {
        borderColor: '#11184E',
        xaxis: {
            lines: {
                show: false,
                color: '#11184E'
            }
        },
        yaxis: {
            lines: {
                show: true,
                color: '#11184E'
            }
        }
    },
    fill: {
        colors: ['#00C6D7'],
        opacity: 0.1,
        type: 'gradient',
        gradient: {
            shade: 'light',
            type: 'vertical',
            opacityFrom: 0.5,
            opacityTo: 0.1,
            stops: [0, 100]
        }
    }
};


  return (
    <div className="chart object-cover">
      <Chart options={chartOptions} series={series} type="area" height={500} />
    </div>
  );
};

export default LineChart;
