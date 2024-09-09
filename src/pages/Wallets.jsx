import DonutChartSecond from '../components/Pie';
import BitcoinCard from '../components/CardCrypto'
import LineChart from '../components/LineChart'
import Transaction from '../components/Transaction'
import { useHttpRequest } from "../hooks/https.hook";
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
function Wallets() {
    const [isActive, setIsActive] = useState(false)
    const { loading, error, requestGet, requestPost, clearError } = useHttpRequest('http://localhost:7777');
    const [dataCrypto, setDataCrypto] = useState([])
    const [dataTransactions, setDataTransactions] = useState([])
    let token = localStorage.getItem("token")

    async function handleSubmit(e) {
        e.preventDefault()

        let fn = new FormData(e.target)

        const res = await requestGet("/users?token=" + token)

        const data = {
            token: res[0].token
        }

        fn.forEach((val, key) => data[key] = val)


        requestPost('/wallets', 'post', data)
        alert("successful!")
    }

    async function getData() {
        const cryptoData = await requestGet("/wallets?token=" + token)
        const transactionsData = await requestGet("/transactions?token=" + token)

        setDataTransactions(transactionsData)
        setDataCrypto(cryptoData)
    }

    useEffect(() => {
        getData()

    }, [])
;
    

    const dataTr = dataTransactions.map(item => {
        return item
    })





    return (
        <>
            <Helmet>
                <title>
                    Valuet - Wallets
                </title>
            </Helmet>
            <div className={isActive ? "overview fixed w-full max-w-full h-screen top-0 left-0 bottom-0 right-0 bg-[#35323273] z-[1111] flex items-center justify-center transition-all opacity-[1]" : "overview fixed w-full max-w-full h-screen top-0 left-0 bottom-0 right-0 bg-[#35323273] z-[1111] hidden items-center justify-center transition-all opacity-[0]"}>
                <div className="modal__content relative w-[500px] py-[50px] rounded-xl bg-[#111041]">
                    <img src="../../cross.png" className='absolute right-[10px] top-[10px] cursor-pointer' onClick={() => setIsActive(false)} alt="" />
                    <form className='flex flex-col gap-[30px] justify-center items-center pt-[4%]' onSubmit={handleSubmit}>
                        <h1 className='text-[#fff] text-[25px] font-[700]'>Add wallet</h1>
                        <div className='flex items-start gap-[10px] flex-col'>
                            <label className='text-[15px] text-[#fff] font-[700]'>Coin</label>
                            <select type="text" className='w-[250px] h-[40px] rounded-lg p-[5px] bg-white border-[3px] border-blue-700' name='crypto' required>
                                <option value="BTC">BitCoin</option>
                                <option value="ETH">Ethereum</option>
                                <option value="DASH">Dash</option>
                            </select>
                        </div>
                        
                        

                        <div className='flex items-start gap-[10px] flex-col'>       
                            <label className='text-[15px] text-[#fff] font-[700]'>Currency</label>
                            <select name="currency" id="" className='w-[250px] h-[40px] rounded-lg p-[5px] bg-white border-[3px] border-blue-700' required>
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="GBC">GBC</option>
                            </select>
                        </div>

                        <div className='flex items-start gap-[10px] flex-col'>
                            <label className='text-[15px] text-[#fff] font-[700]'>End date</label>
                            <input type="date" className='w-[250px] h-[40px] rounded-lg p-[5px] bg-white border-[3px] border-blue-700' name='date' required />
                        </div>
                        <div className='flex items-start gap-[10px] flex-col'>
                            <label className='text-[15px] text-[#fff] font-[700]'>Balance</label>
                            <input type="number" className='w-[250px] h-[40px] rounded-lg p-[5px] bg-white border-[3px] border-blue-700' name="balance" id="" required />
                        </div>
                        <button className='btn-add px-[15px] py-[5px] w-[150px] rounded-[25px] text-[#fff]'>Add wallet</button>
                    </form>
                </div>
            </div>
            <div className="wallets_main_box absolute max-w-full top-[80px] h-full max-h-full text-white p-[40px] w-full">
                <div className="wallets_box absolute left-[11%] w-[90%] max-w-full m-auto object-cover pl-[90px] pr-[50px] pt-[10px] flex flex-col max-lg:w-full max-lg:left-0">
                    <div className='flex justify-between items-center'>
                        <h1 className='text-[25px] font-[600]'>Wallets</h1>
                        <button className='btn-add px-[15px] py-[5px] w-[150px] rounded-[25px]' onClick={() => setIsActive(true)}>Add wallet</button>
                    </div>
                    <div className="w-full max-w-full grid grid-cols-4 gap-[20px] py-[20px]  max-2xl:grid max-2xl:grid-cols-3 max-2xl:gap-[20px]">
                        <div className='max-w-full p-[20px] rounded-xl' style={{ background: "linear-gradient(180deg, rgba(27, 18, 78, 0.20) 0%, #0F0B38 93.37%)", boxShadow: "0px 4px 25px 0px rgba(0, 0, 0, 0.25)" }}>
                            <DonutChartSecond item={dataCrypto[0]} />
                        </div>



                        {
                            dataCrypto.map(item => <BitcoinCard item={item} key={item.id} />
                            )
                        }
                    </div>
                    <div className="main_box flex gap-[20px] max-w-full pt-[30px]">
                        <div className='rounded-xl max-w-full w-[50%] h-[500px]' style={{ background: "linear-gradient(177deg, rgba(27, 18, 78, 0.20) -32.8%, #0F0B38 88.83%)" }}>
                            <LineChart item={dataTr}/>
                        </div>
                        <div className='relative rounded-xl max-w-full w-[50%] h-[500px] p-[20px] flex flex-col gap-[20px]' style={{ background: "linear-gradient(177deg, rgba(27, 18, 78, 0.20) -32.8%, #0F0B38 88.83%)" }}>
                            <h1 className='font-[700] text-[20px]'>RECENT TRANSACTIONS</h1>
                            <div className="line max-w-full w-full h-[2px] bg-[#211f5c]">
                                <div className='box-transact flex flex-col gap-[20px] overflow-y-scroll pt-[20px] h-[400px]'>
                                    <img src="../../cross-down.svg" className='absolute left-[50%] bottom-[10px] cursor-pointer' alt="" />
                                    {
                                        dataTransactions.map(item => <Transaction item={item} key={item.id} />)
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

export default Wallets;