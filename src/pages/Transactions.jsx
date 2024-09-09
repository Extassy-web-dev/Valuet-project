import { Helmet } from "react-helmet";
import TransactionAction from "../components/TransactionAction";
import { useState } from "react";
import { useEffect } from "react";
import { useHttpRequest } from "../hooks/https.hook";

function Transactions() {
    const [isActive, setIsActive] = useState(false)
    const { loading, error, requestGet, requestPost, clearError } = useHttpRequest('http://localhost:7777');
    const [dataCrypto, setDataCrypto] = useState([])

    let token = localStorage.getItem("token")


    function formatTime() {
        const date = new Date();

        let hours = date.getHours();
        let minutes = date.getMinutes();

        const ampm = hours >= 12 ? 'PM' : 'AM';

    
        hours = hours % 12;
        hours = hours ? hours : 12;

        minutes = minutes < 10 ? '0' + minutes : minutes;

        return `${ampm} ${hours < 10 ? '0' : ''}${hours}:${minutes}`;
    }

    function formatDate() {
        const date = new Date();
      
        const day = date.getDate();
        const year = date.getFullYear();
      
       
        const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
        const month = months[date.getMonth()];
      
        return `${day} ${month} ${year}`;
      }
      
      function generateToken() {
        const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        let token = "";

        for (let i = 0; i < 25; i++) {
            let rnd = Math.floor(Math.random() * characters.length);

            token += characters[rnd];
        }

        return token;
    }

 

    async function handleSubmit(e) {
        e.preventDefault()

        let fn = new FormData(e.target)

        const res = await requestGet("/users?token=" + token)

        const data = {
            token: res[0].token,
            date: formatDate(),
            time: formatTime(),
            cryptoToken: generateToken()
        }

        fn.forEach((val, key) => data[key] = val)


        requestPost('/transactions', 'post', data)
        alert("successful!")
    }

    async function getData() {
        const cryptoData = await requestGet("/transactions?token=" + token)

        setDataCrypto(cryptoData)
    }

    useEffect(() => {
        getData()

    }, [])

    



    return (
        <>
            <Helmet>
                <title>
                    Valuet - Transactions
                </title>
            </Helmet>
            <div className={isActive ? "overview fixed w-full max-w-full h-screen top-0 left-0 bottom-0 right-0 bg-[#35323273] z-[1111] flex items-center justify-center transition-all opacity-[1]" : "overview fixed w-full max-w-full h-screen top-0 left-0 bottom-0 right-0 bg-[#35323273] z-[1111] hidden items-center justify-center transition-all opacity-[0]"}>
                <div className="modal__content relative w-[500px] py-[50px] rounded-xl bg-[#111041]">
                    <img src="../../cross.png" className='absolute right-[10px] top-[10px] cursor-pointer' onClick={() => setIsActive(false)} alt="" />
                    <form className='flex flex-col gap-[30px] justify-center items-center pt-[4%]' onSubmit={handleSubmit}>
                        <label className="text-[25px] text-[#fff] font-[700]">Add transaction</label>
                        <div className="flex items-start gap-[10px] flex-col">
                            <label className="text-[15px] text-[#fff] font-[700]">Amount</label>
                            <input type="number" name="amount" className="w-[250px] h-[40px] rounded-lg p-[5px] bg-white border-[3px] border-blue-700" required />
                        </div>
                        <div className="flex items-start gap-[10px] flex-col">
                            <label className="text-[15px] text-[#fff] font-[700]">Coin</label>
                            <select name="coin" type="text" className="w-[250px] h-[40px] rounded-lg p-[5px] bg-white border-[3px] border-blue-700">
                                <option value="BTC">BitCoin</option>
                                <option value="GRC">Grid</option>
                            </select>
                        </div>
                        <div className="flex items-start gap-[10px] flex-col">
                            <label className="text-[15px] text-[#fff] font-[700]">Type</label>
                            <select name="type" type="text" className="w-[250px] h-[40px] rounded-lg p-[5px] bg-white border-[3px] border-blue-700">
                                <option value="send">Send</option>
                            </select>
                        </div>
                        <div className="flex items-start gap-[10px] flex-col">
                            <label className="text-[15px] text-[#fff] font-[700]">To</label>
                            <input className="w-[250px] h-[40px] rounded-lg p-[5px] bg-white border-[3px] border-blue-700" type="text" name="to" id="" required />
                        </div>
                        <button className='btn-add px-[15px] py-[5px] w-[150px] rounded-[25px] text-[#fff]'>Add transaction</button>
                    </form>
                </div>
            </div>
            <div className="transact_main_box absolute max-w-full top-[80px] h-full max-h-full text-white p-[40px] w-full">
                <div className="transact_box absolute left-[11%] w-[90%] max-w-full m-auto object-cover pl-[90px] pr-[50px] pt-[10px] flex flex-col max-lg:w-full max-lg:left-0">
                    <div className="btn flex justify-end">
                        {/* <button className="btn-add px-[15px] py-[5px] w-[150px] rounded-[25px]">Export History</button>  */}
                    </div>
                    <div className="flex items-center justify-between py-[20px]">
                        <h1 className=" text-[25px] font-[700]">Transactions</h1>
                        <button className="btn-add px-[15px] py-[5px] w-[150px] rounded-[25px] text-[#fff]" onClick={() => setIsActive(true)}>Add transactions</button>
                    </div>
                    <div className="total pt-[30px] flex justify-between items-center">
                        <span className="text-[#616A8B] text-[20px] font-[600]">Total {dataCrypto.length}</span>

                        <div className="flex gap-[20px]">
                            <button className="active-btn font-[600]">All</button>
                            <button className="text-[#616A8B] font-[600]">Send</button>
                            <button className="text-[#616A8B] font-[600]">Recent</button>
                        </div>
                    </div>
                    <div className="box-transact w-full max-w-full flex flex-col gap-[20px] pt-[30px] overflow-y-scroll h-[700px]">
                        {
                            dataCrypto.map(item => <TransactionAction key={item.id} item={item} />)
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Transactions;