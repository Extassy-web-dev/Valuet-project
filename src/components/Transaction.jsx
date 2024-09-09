function Transaction({item}) {
    return (
        <div className='flex justify-between items-center transition-all hover:bg-[#353b55] px-[1.5%] rounded-xl cursor-pointer py-[0.2%]'>
            <div className='flex items-center gap-[20px]'>
                <span className='text-[#616A8B] text-[17px] font-[600]'>{item?.time}</span>
                <img src={item?.type === "send" ? "../../public/arr-down.png" : "../../public/arr-up.png"} alt="" />
                <div className='flex flex-col items-start'>
                    <span className='font-[500] text-[16px]'>{item?.type === "send" ? `Sent ${item?.coin}` : `Received ${item?.coin}`}</span>
                    <span className='font-[300]'>{item?.type === "send" ? `To ${item?.to}` : `From Elon Mask`}</span>
                </div>
            </div>
            <span className='text-[18px] font-[700]'>{item?.type === "send" ? `- ${item?.amount}` : `+ 4,9000`}</span>
        </div>
    );
}

export default Transaction;