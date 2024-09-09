import React from "react";
import Chart from "react-apexcharts";

const SplineAreaChart = ({item}) => {
  const dataTr = item.map(item => {
    return item.amount
  })

  const series = [
    {
      name: "Data",
      data: dataTr,
    },
  ];

  const options = {
    chart: {
      type: "area",
      height: 350,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      background: "transparent",
    },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: ["#00CFFF"],
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        gradientToColors: ["#1F42A6"],
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0.2,
        stops: [0, 100],
      },
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: ["2", "4", "6", "8", "10", "12", "14", "16"],
      labels: {
        style: {
          colors: "#54669C",
          fontSize: "14px",
        },
      },
      axisBorder: {
        show: true,
        color: "#54669C",
      },
      axisTicks: {
        show: true,
        color: "#54669C",
      },
    },
    yaxis: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: true,
    },
    markers: {
      size: 6,
      colors: ["#00CFFF"],
      strokeColors: "#1F42A6",
      strokeWidth: 3,
      hover: {
        size: 8,
      },
    },
    theme: {
      mode: "dark",
    },
  };

  return (
    <div className="chart object-cover">
      <Chart options={options} series={series} type="area" height={200} />
    </div>
  );
};

export default SplineAreaChart;
