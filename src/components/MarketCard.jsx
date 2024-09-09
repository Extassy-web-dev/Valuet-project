import LineMarketChart from '../components/LineMarketChart'

function MarketCard({item}) {
    return (
        <div className="cryptoMarketCard w-full rounded-md bg-[#120c3c] transition-all hover:scale-[1.02]" style={{ boxShadow: "0px 4px 25px 0px rgba(0, 0, 0, 0.25)" }}>
            <div className="p-[20px] flex items-center justify-between max-w-full ">
                <div className="flex items-center">
                    <img className='w-[100px]' src={item?.img} alt="" />
                    <div className="flex flex-col items-start">
                        <span>{item?.name}</span>
                        <span style={{color: item?.color}}>1.93%</span>
                    </div>
                </div>
                <div className="flex flex-col items-end gap-[15px]">
                    <div className="flex items-center gap-[10px]">
                        <span className="text-[16px] font-[700]">EUR</span>
                        <span className="text-[15px] text-[#616A8B] font-[600]">USD</span>
                        <span className="text-[15px] text-[#616A8B] font-[600]">BTC</span>
                    </div>
                    <div className="flex items-center gap-[10px]">
                        <span className="text-[20px] font-[700]">1,307.96</span>
                        <span className="text-[16px] font-[700]">EUR</span>
                    </div>
                    <div className="flex items-center gap-[10px]">
                        <span className="text-[15px] text-[#616A8B] font-[600]">Volume</span>
                        <span className="text-[16px] font-[700]">18,423</span>
                        <span className="text-[15px] text-[#616A8B] font-[600]">{item?.currency}</span>
                    </div>
                </div>
            </div>
            <LineMarketChart color={item?.color} />
        </div>
    );
}

export default MarketCard;