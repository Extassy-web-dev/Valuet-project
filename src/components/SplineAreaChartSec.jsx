import React from "react";
import Chart from "react-apexcharts";

const SplineAreaChartSec = () => {
  const series = [
    {
      name: "Data",
      data: [2000, 4000, 3000, 7000, 5000, 9000, 8000, 10000],
    },
  ];

  const options = {
    chart: {
      type: "area",
      height: 200,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      background: "transparent"
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
        opacityFrom: 0.4,
        opacityTo: 0.05,
        stops: [0, 100],
      },
    },
    grid: {
      show: true,
      borderColor: '#11184E',
      strokeDashArray: 0,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    xaxis: {
      categories: ["NOV 15", "NOV 16", "NOV 17", "NOV 18", "NOV 19", "NOV 20", "NOV 21", "NOV 22"],
      labels: {
        style: {
          colors: "#54669C",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false, 
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#54669C",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
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
    <div className="">
      <Chart options={options} series={series} type="area" height={200}/>
    </div>
  );
};

export default SplineAreaChartSec;
