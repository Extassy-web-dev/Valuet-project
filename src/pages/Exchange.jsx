import { useState } from "react";
import { Helmet } from "react-helmet";

function Exchange() {
    const [bitcoin, setBitcoin] = useState('');
    const [dash, setDash] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
          const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,dash&vs_currencies=usd');
          const data = await response.json();
    
          const bitcoinPriceUSD = data.bitcoin.usd;
          const dashPriceUSD = data.dash.usd;
    
          const dashAmount = (parseFloat(bitcoin) * bitcoinPriceUSD) / dashPriceUSD;
    
          setDash(dashAmount.toFixed(4)); 
        } catch (error) {
          setError('Ошибка получения данных. Попробуйте еще раз.');
          console.error('Error fetching data:', error);
        }
      };
    return (
        <>
        <Helmet>
            <title>
                Valuet - Exchange
            </title>
        </Helmet>
            <div className="exchange_main_box absolute max-w-full top-[80px] h-full max-h-full text-white p-[40px] w-full">
                <div className="exchange_box absolute left-[11%] w-[90%] max-w-full m-auto object-cover pl-[90px] pr-[50px] pt-[10px] flex flex-col max-lg:w-full max-lg:left-0">
                    <h1 className="text-[20px] font-[700]">Exchange</h1>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-[25px] w-full max-w-full pt-[30px] max-2xl:grid-cols-1">
                        <div className="flex flex-col gap-[20px]">
                            <span className="text-[#616A8B] text-[18px] text-[600]">From</span>
                            <div className=" h-[260px] bg-[#140d3d] rounded-[10px] p-[20px]" style={{ boxShadow: "0px 4px 25px 0px rgba(0, 0, 0, 0.25)" }}>
                                <div className="flex items-center justify-between">
                                    <select className="text-[30px] w-[120px]" name="" id="" style={{ background: 'none' }}>
                                        <option value="">Bitcoin</option>
                                    </select>
                                    <img className="w-[130px]" src="../../bitcoin.png" alt="" />
                                </div>

                                <div className="w-full max-w-full flex mt-[30px] py-[10px] px-[20px] bg-[#32395E] rounded-[5px] items-center border-b-[2px] border-b-[#1288e8]">
                                    <input  value={bitcoin}
            onChange={(e) => setBitcoin(e.target.value)} placeholder="0.0001" className="w-full h-full text-[25px] text-[#fff]" type="number" style={{ background: "none" }} required/>
                                    <label className="text-[24px]">BTC</label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[20px]">
                            <span className="text-[#616A8B] text-[18px] text-[600]">To</span>
                            <div className=" h-[260px] bg-[#140d3d] rounded-[10px] p-[20px]" style={{ boxShadow: "0px 4px 25px 0px rgba(0, 0, 0, 0.25)" }}>
                                <div className="flex items-center justify-between">
                                    <select className="text-[30px] w-[150px]" name="" id="" style={{ background: 'none' }}>
                                        <option value="">DashCoin</option>
                                    </select>
                                    <img className="w-[130px]" src="../../dash.png" alt="" />
                                </div>

                                <div className="w-full max-w-full flex mt-[30px] py-[10px] px-[20px] bg-[#32395E] rounded-[5px] items-center border-b-[2px] border-b-[#1288e8]">
                                    <input  value={dash}
            readOnly className="w-full h-full text-[25px] text-[#fff]" type="text" style={{ background: "none" }} required/>
                                    <label className="text-[24px]">DASH</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-full h-[150px] bg-[#120c3c] mt-[30px] rounded-[10px]">
                        <div className="p-[50px] flex justify-center gap-[100px] items-center">
                            <div className="left flex items-center gap-[20px]">
                                <span className="text-[25px] font-[700]">{bitcoin} BTC</span>
                                <img className="w-[60px] h-[60px]" src="../../bitcoin-token.png" alt="" />
                            </div>
                            <div className="center flex items-center">
                                <img src="../../Arrow.png" alt="" />
                            </div>
                            <div className="right flex items-center gap-[20px]">
                                <img className="w-[60px] h-[60px]" src="../../grid-token.png" alt="" />
                                <span className="text-[25px] font-[700]">{dash} DASH</span>
                            </div>
                        </div>
                        <div className="flex justify-center pt-[30px]">
                            <button type="submit" className="w-[125px] h-[42px] bg-[#108ae8] rounded-[10px]">Exchange</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </>
    );
}

export default Exchange;