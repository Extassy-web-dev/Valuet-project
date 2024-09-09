import React from "react";
import MarketCard from '../components/MarketCard'
import { Helmet } from "react-helmet";

function Market() {
    
    const cryptoData = [
        {
            id: 1,
            img: '../../dash.png',
            name: "DASH",
            currency: "DASH",
            color: "#00E8AC"
        },
        {
            id: 2,
            img: '../../aeternity.png',
            name: "Aeternity",
            currency: "AE",
            color: "#F35050"
        },
        {
            id: 3,
            img: '../../etherium.png',
            name: "Ethereum",
            currency: "ETH",
            color: "#00E8AC"
        },
        {
            id: 4,
            img: '../../peer.png',
            name: "PeerCoin",
            currency: "PPC",
            color: "#00E8AC"
        },
        {
            id: 5,
            img: '../../bitcoin.png',
            name: "BitCoin",
            currency: "BTC",
            color: "#F35050"
        },
        {
            id: 6,
            img: '../../grid.png',
            name: "GridCoin",
            currency: "GRC",
            color: "#00E8AC"
        },
        {
            id: 7,
            img: '../../navcoin.png',
            name: "NavCoin",
            currency: "NAV",
            color: "#00E8AC"
        },
        {
            id: 8,
            img: '../../lite.png',
            name: "LiteCoin",
            currency: "LTC",
            color: "#F35050"
        },
        {
            id: 9,
            img: '../../nano.png',
            name: "Nano",
            currency: "NANO",
            color: "#00E8AC"
        },
    ]

    return ( 
        <>
        <Helmet>
            <title>
                Valuet - Market
            </title>
        </Helmet>
            <div className="market_main_box absolute max-w-full top-[80px] h-full max-h-full text-white p-[40px] w-full">
                <div className="market_box absolute left-[11%] w-[90%] max-w-full m-auto object-cover pl-[90px] pr-[50px] pt-[10px] flex flex-col max-lg:w-full max-lg:left-0">
                    <h1 className="text-[20px] font-[700]">Market</h1>

                    <div className="grid grid-cols-3 gap-[30px] pt-[30px] max-w-full max-2xl:grid-cols-2 max-xl:grid-cols-1">
                        {
                            cryptoData.map(item => <MarketCard item={item} key={item.id}/>)
                        }
                    </div>
                </div>
            </div>
        </>
     );
}

export default Market;

