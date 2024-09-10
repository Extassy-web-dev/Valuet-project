import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useHttpRequest } from "../hooks/https.hook";

function Layout() {
    const [user, setUser] = useState([])
    const navigate = useNavigate()
    const { loading, error, requestGet, requestPost, clearError } = useHttpRequest('http://localhost:7777');
    let token = localStorage.getItem("token")

    const fetchData = async () => {
        clearError()
        
        const data = await requestGet('/users?token=' + token);
        setUser(data)
    };

    useEffect(() => {

        if (!token) {
            navigate('/signup')
            return
        }

        fetchData()

    }, [])




    const navLinkStyles = ({ isActive }) => {
        return {
            borderRadius: isActive ? "5px" : "",
            background: isActive ? "#32395E" : '',
            borderBottomColor: isActive ? "#3887FE" : "",
            borderBottomWidth: isActive ? "2px" : "",
            paddingTop: isActive ? "10px" : "",
            paddingBottom: isActive ? "10px" : "",
            color: isActive ? "#fff" : "#616A8B",
        }
    }

    return (
        <>
            <div className="NavBar max-w-full w-[220px] z-50 h-full fixed max-2xl:w-[200px] max-xl:w-[150px] max-lg:hidden">
                <div className="flex flex-col items-center p-[25px]">
                    <h1 className="valuet-nav border-b-2 border-b-[#1288E8]">valuet</h1>
                    <div className="flex relative flex-col items-start gap-[30px] py-[50px] ">
                        <NavLink to={'/'} style={navLinkStyles} className="flex items-center gap-[15px] px-[20px] cursor-pointer max-w-full w-full max-2xl:w-[100px] max-2xl:px-[5px] transition-all">
                            <img src={"../../overwie.png"} alt="" />
                            <span className="max-2xl:text-sm">Overview</span>
                        </NavLink>
                        <NavLink to={'/wallets'} style={navLinkStyles} className="flex items-center gap-[15px] px-[20px] cursor-pointer max-w-full w-full max-2xl:w-[100px] max-2xl:px-[5px] transition-all">
                            <img src={"../../wallets.png"} alt="" />
                            <span className="max-2xl:text-sm">Wallets</span>
                        </NavLink>
                        <NavLink to={'/transactions'} style={navLinkStyles} className="flex items-center gap-[15px] px-[20px] cursor-pointer max-w-full w-full max-2xl:w-[100px] max-2xl:px-[5px] transition-all">
                            <img src={"../../transactions.png"} alt="" />
                            <span className="max-2xl:text-[70%]">Transactions</span>
                        </NavLink>
                        <NavLink to={'/exchange'} style={navLinkStyles} className="flex items-center gap-[15px] px-[20px] cursor-pointer max-w-full w-full max-2xl:w-[100px] max-2xl:px-[5px] transition-all">
                            <img src={"../../exchange.png"} alt="" />
                            <span className="max-2xl:text-sm">Exchange</span>
                        </NavLink>
                        <NavLink to={'/market'} style={navLinkStyles} className="flex items-center gap-[15px] px-[20px] cursor-pointer max-w-full w-full max-2xl:w-[100px] max-2xl:px-[5px] transition-all">
                            <img src={"../../market.png"} alt="" />
                            <span className="max-2xl:text-sm">Market</span>
                        </NavLink>
                    </div>
                </div>
                <div className="bottom absolute bottom-5 left-0 w-full px-[20px] flex flex-col gap-[20px]">
                    <div className="line max-w-full w-full bg-[#018FFF] h-[2px]"></div>
                    <div className="flex items-center gap-[20px] px-[10px]">
                        <img src="../../Ellipse.png" className="cursor-pointer transition-all hover:scale-[1.1]" alt="" />
                        <h1 className="text-[#616A8B] text-[14px] font-[600] max-xl:truncate">{user[0]?.name}</h1>
                    </div>
                    <div className="flex items-center gap-[20px] px-[10px]">
                        <img src="../../log-out.png" className="cursor-pointer transition-all hover:scale-[1.1]" alt="" />
                        <Link onClick={() => localStorage.removeItem('token')} to={"/signin"} className="text-[#616A8B] text-[14px] font-[600] cursor-pointer">Log Out</Link>
                    </div>
                </div>
            </div>
            <Outlet />
            <header className="w-[92%] z-40 opacity-100 max-w-full max-h-full fixed top-0 left-[11%] flex justify-between items-center py-[30px] px-[90px] border-b-2 border-b-[#2D317A] bg-gradient-to-r from-[#140838] to-[#1a0d4a] max-lg:left-0 max-lg:w-full">
                <div className="py-[20px] flex items-center bg-[#161245] w-[300px] h-[32px] justify-between rounded-[25px] px-[20px]" style={{boxShadow: "0px 4px 20px 0px rgba(3, 16, 52, 0.50)"}}>
                    <input type="text" className="w-full max-w-full outline-none border-none text-[#fff]" style={{ background: "none" }} />
                    <img className="pl-[5px]" src="../../search.png" alt="" />
                </div>
                <div className="flex items-center gap-[20px]">
                    <img className="cursor-pointer transition-all hover:scale-[1.1]" src="../../email.png" alt="email" />
                    <img className="cursor-pointer transition-all hover:scale-[1.1]" src="../../bel.png" alt="email" />
                </div>
            </header>
        </>
    );
}

export default Layout;