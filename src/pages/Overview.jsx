import React, { useEffect, useState } from 'react';
import SplineAreaChart from '../components/SplineArea';
import SplineAreaChartSec from '../components/SplineAreaChartSec'
import DonutChart from '../components/Donut';
import { Helmet } from 'react-helmet';
import { useHttpRequest } from '../hooks/https.hook';

function Overview() {
   const { loading, error, requestGet, requestPost, clearError } = useHttpRequest('http://localhost:7777');
   const [cryptoData, setCryptoData] = useState([])
   const [dataTransactions, setDataTransactions] = useState([])

   const crypto = [
      {
         id: 1,
         title: "BitCoin",
         cur: "BTC",
         img: "../../bitcoin.png",

      },
      {
         id: 2,
         title: "GridCoin",
         cur: "GRC",
         img: "../../grid.png",

      },
      {
         id: 3,
         title: "Ethereum",
         cur: "ETH",
         img: "../../etherium.png",

      },
      {
         id: 4,
         title: "Aeternity",
         cur: "AE",
         img: "../../aeternity.png",
      },
   ]

   const data = [
      {
         id: 1,
         time: "19 hours ago ",
         title: "SEC Fails to Show Court Blockvest Tokens Are Securities"
      },
      {
         id: 2,
         time: "23 hours ago",
         title: "Report: Bitcoin Mining Doesn’t Fuel Climate Change, It Benefits the Global Economy"
      },
      {
         id: 3,
         time: "11.22, 15:27 ",
         title: "A Look at the Multi-Currency Encrypted Messaging App ‘Chat.Chat’"
      },
      {
         id: 4,
         time: "11.21, 11:43 ",
         title: "Four Ways to Commemorate Bitcoin’s 10th Anniversary"
      },
      {
         id: 5,
         time: "19 hours ago ",
         title: "SEC Fails to Show Court Blockvest Tokens Are Securities"
      },
   ]
   const date = new Date();
   const dayIndex = date.getDay();

   const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

   const dayName = daysOfWeek[dayIndex];

   const dayOfMonth = date.getDate();

   const monthIndex = date.getMonth();

   const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
   const monthName = months[monthIndex];

   const getData = async () => {
      let token = localStorage.getItem("token")
      let res = await requestGet("/wallets?token=" + token)
      const transactionsData = await requestGet("/transactions?token=" + token)

      setDataTransactions(transactionsData)
      setCryptoData(res)

   }

   useEffect(() => {
     
      getData()
    
   }, [])
   
   const dataTr = dataTransactions.map(item => {
      return item
  })



   return (
      <>
      <Helmet>
         <title>
            Valuet - Overview
         </title>
      </Helmet>
         <div className="overview_box absolute max-w-full top-[80px] h-full max-h-full text-white p-[40px] w-full">
            <div className="absolute left-[11%] max-w-full w-[90%] m-auto object-cover pl-[90px] pr-[50px] pt-[10px] max-lg:w-full max-lg:left-0">
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[30px]">
                     <h1 className=" text-[21px] font-[600]">
                        Overview
                     </h1>
                     <h1 className="text-[#54669C] text-[16px] font-[600]">
                        {dayOfMonth} {monthName}, {dayName}
                     </h1>
                  </div>
                  <div className="max-w-full">
                     <button className="btn-add w-[135px] h-[35px] rounded-[25px] text-[#fff]">Add Widget</button>
                  </div>
               </div>
               <div className="py-[50px] flex justify-between max-xl:flex max-xl:flex-col max-xl:items-center gap-[20px]">
                  <div className='flex items-center gap-[50px] max-w-full'>
                     <div className="card h-full max-xl:h-full rounded-md p-[20px] max-w-full">
                        <h1 className="text-[17px] font-[700] text-left">Balance</h1>
                        <div className='max-2xl:w-[150px]'>

                        <DonutChart item={cryptoData}/>
                        </div>
                     </div>
                     <div className="card  h-full p-[20px] rounded-md max-w-full">
                        <div className='flex items-center justify-between'>
                           <h1 className='text-left text-[16px] font-[700]'>Spending</h1>
                           <select name="" id="" style={{ background: "none" }}>
                              <option className='text-black' value="">January</option>
                              <option className='text-black' value="">February</option>
                              <option className='text-black' value="">March</option>
                              <option className='text-black' value="">April</option>
                              <option className='text-black' value="">May</option>
                              <option className='text-black' value="">June</option>
                              <option className='text-black' value="">July</option>
                              <option className='text-black' value="">Augest</option>
                              <option className='text-black' value="">September</option>
                              <option className='text-black' value="">October</option>
                              <option className='text-black' value="">November</option>
                              <option className='text-black' value="">December</option>
                           </select>
                        </div>
                        <div className='pt-[35px] flex flex-col gap-[10px]'>
                           <h1 className='text-[20px] font-[700]'></h1>
                           <span className='text-[13px] font-[300] text-gray-500'>total spending</span>
                           <div>
                              <SplineAreaChart item={dataTr}/>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className='crypto-box grid grid-cols-2 items-start gap-[20px] max-xl:gap-[20px]'>

                     {
                        crypto.map(crpt => {
                           return (
                              <div key={crpt.id} className='crypto-elem max-w-full w-[400px] h-full flex flex-col items-start p-[20px] transition-all rounded-[10px] hover:scale-[1.02]'>
                                 <h1 className='text-[15px] font-[700] p-[5px]'>{crpt.title}</h1>
                                 <div className='relative flex justify-between items-center w-full pt-[10px] max-w-full max-2xl:flex-col'>
                                    <div className='max-w-full flex gap-[10px] items-center justify-between w-full max-2xl:flex-col'>
                                       <img src={crpt.img} alt={crpt.title} />
                                       <div className='flex flex-col flex-wrap max-w-full items-start'>
                                          <h1 className='text-[20px] font-[700]'>600 {crpt.cur}</h1>
                                          <span className='text-[15px] text-[#616A8B] font-[700]'>$30,000,000</span>
                                       </div>
                                       <img src="../../211.png" alt="" />
                                    </div>
                                 </div>
                              </div>
                           )
                        })
                     }

                  </div>
               </div>
               <div className="bottom-box flex justify-between gap-[20px] items-center max-w-full">
                  <div className='card-bottom rounded-xl w-[65%] h-[270px]'>
                     <div className='flex w-full max-w-full justify-between items-center px-[50px] pt-[10px]'>
                        <div className='flex gap-[20px]'>
                           <h1 className='text-[15px] font-[700]'>Market</h1>
                           <select className='font-[300]' name="" id="" style={{ background: "none" }}>
                              <option value="BTC">BitCoin</option>
                           </select>
                        </div>
                        <select className='font-[300]' name="" id="" style={{ background: "none" }}>
                           <option value="nov">November</option>
                        </select>
                     </div>
                     <div className='px-[20px]'>
                        <SplineAreaChartSec />
                     </div>
                  </div>
                  <div className='relative card-bottom rounded-xl w-[35%] h-[270px]' style={{ filter: "drop-shadow(0px 4px 25px rgba(0, 0, 0, 0.25))" }}>
                     <img src="../../cross-down.svg" className='absolute bottom-[5px] left-[50%] w-[10px] cursor-pointer' alt="" />
                     <div className='p-[20px] flex flex-col items-start gap-[20px] w-full max-w-full'>
                        <h1>Recent News</h1>
                        <div className="line h-[1px] bg-[#2D317A] w-full max-w-full"></div>
                        <div className='scroll-box flex flex-col items-start overflow-y-scroll h-[150px] gap-[20px]  '>
                           {
                              data.map(item => {
                                 return (
                                    <div key={item.id} className='grid grid-cols-2 w-full max-w-full items-start'>
                                       <div className='w-full flex justify-between'>
                                          <span className='font-[300]'>{item.time}</span>

                                       </div>
                                       <div className='w-full flex justify-between'>

                                          <span className='font-[600]'>{item.title}</span>
                                       </div>
                                    </div>
                                 )
                              })
                           }
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Overview;
