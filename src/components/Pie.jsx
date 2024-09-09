import React from 'react';
import Chart from 'react-apexcharts';

const DonutChartSecond = ({item}) => {
  const options = {
    chart: {
      type: 'donut',
    },
    labels: ['Ethereum', 'Bitcoin', 'Dash'],
    colors: ['#fff', '#2F8FF3', '#F5C156'],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {

        donut: {

          labels: {
            size: "80%",
            show: true,
            name: {
              show: true,
              color: '#00AEEF',
              fontSize: '12px',
            },
            value: {
              show: true,
              fontSize: '15px',
              color: '#fff',
              offsetY: 10,
              formatter: () => {item?.balance},
            },
            total: {
              show: true,
              label: 'TOTAL',
              fontSize: '16px',
              color: '#00AEEF',
              formatter: () => '',
            },
          },
        },
      },
    },
    legend: {
      show: true,
      labels: {
        colors: '#fff',
      },
      markers: {
        width: 8,
        height: 8,
        radius: 50,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 5,
      },
    },
    tooltip: {
      enabled: true,
      theme: 'dark',
    },
  };

  const series = [18, 64, 18];

  return (
    <div className=''>
      <Chart options={options} series={series} type="donut" width={300} />

    </div>
  );
};

export default DonutChartSecond;
