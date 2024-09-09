import React from 'react';
import Chart from 'react-apexcharts';

const BitcoinCard = ({item}) => {
    const chartOptions = {
        chart: {
            id: 'line-chart',
            toolbar: { show: false },
            sparkline: { enabled: true }
        },
        stroke: {
            width: 3,
            colors: [item?.crypto === "BTC" ? "#644696" : item?.crypto === "ETH" ? "#5454BD" : "#00E8AC"]
        },
        xaxis: {
            labels: { show: false }
        },
        tooltip: {
            enabled: false
        },
        grid: {
            show: false
        }
    };

    const chartSeries = [
        {
            name: 'Price',
            data: [1000, 8000, 5000, 5000, 10000, 6000, 1000, 7000, 2000, 3000, 1500, 10000]
        }
    ];

    return (
        <div className='max-w-full p-[20px] rounded-xl transition-all hover:scale-[1.02]' style={{ background: item?.crypto === "BTC" ? "linear-gradient(237deg, rgba(96, 67, 146, 0.50) -8.06%, rgba(15, 11, 56, 0.50) 96.63%)" : item?.crypto === "ETH" ? "linear-gradient(237deg, #6162D6 -8.06%, #0F0B38 96.63%)" : "linear-gradient(237deg, #72EB38 -8.06%, #0F0B38 96.63%)", boxShadow: "0px 4px 25px 0px rgba(0, 0, 0, 0.25)" }}>
            <div className='flex justify-between w-full '>
                <h1 className='text-[20px] font-[700]'>{item?.crypto}</h1>
                <div className='flex pt-[20px]'>
                    <div className='flex flex-col items-end'>
                        <span className='text-[16px] font-[600]'>{item?.balance} {item?.currency}</span>
                        <span className='text-[14px] font-[600] text-[#616A8B]'>+2,59</span>
                    </div>
                    <img src={item?.crypto === "BTC" ? "../../bitcoin.png" : item?.crypto === "ETH" ? "../../etherium.png" : "../../dash.png"} className='w-[80px]' alt="" />
                </div>
            </div>
            <div>
                <Chart item={item} options={chartOptions} series={chartSeries} type="line" height={50} />
            </div>
        </div>
    )
};


export default BitcoinCard;