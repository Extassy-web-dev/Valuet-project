function TransactionAction({ item }) {
      

      
    return (
        <div className="flex justify-between items-center bg-[#211a50] rounded-[8px] py-[15px] px-[30px]">
            <div className="flex gap-[70px] items-center">
                <div className="flex items-center gap-[35px]">
                    <span>{item?.time}</span>
                    <span>{item?.date}</span>
                    <img src={item?.coin === "BTC" ? "../../bitcoin-token.png" : "../../grid-token.png"} alt="" />
                </div>
                <div className="flex items-center gap-[20px]">
                    <img src="../../green.png" alt="" />
                    <span>{item?.cryptoToken}</span>
                </div>
            </div>

            <div className="flex gap-[20px] items-center">
                <span className="font-[600]">{item?.amount} {item?.coin}</span>
                <button className="bg-[#07b492] py-[5px] w-[100px] rounded-[8px] font-[600]">Completed</button>
            </div>
        </div>
    );
}

export default TransactionAction;