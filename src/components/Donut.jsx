import React from 'react';
import Chart from 'react-apexcharts';

const DonutChart = ({ item }) => {
  if (!item) {
    return null;  
  }

  const balances = item.map(item => {
    return item?.balance
  })
 

 
  

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
        startAngle: -90,
        endAngle: 270,
        donut: {
          size: '80%',
          labels: {
            show: true,
            name: {
              show: true,
              color: '#00AEEF',
              fontSize: '16px',
            },
            value: {
              show: true,
              fontSize: '24px',
              color: '#ffff',  // Измените цвет для видимости
              offsetY: 10,
              formatter: () => balances[0]
            },
            total: {
              show: true,
              label: 'BALANCE',
              color: '#fff',
              fontSize: '16px',
              color: '#00AEEF',
              formatter: () => balances[0]
            },
          },
        },
      },
    },
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
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

  return <Chart options={options} series={series} type="donut" height={250} />;
};

export default DonutChart;
