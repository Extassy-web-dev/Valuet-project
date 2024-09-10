import { useForm } from "react-hook-form";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { useHttpRequest } from "../hooks/https.hook";
function SignIn() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const { loading, error, requestGet, requestPost, clearError } = useHttpRequest('http://localhost:7777');
    const [isActive, setIsActive] = useState(false)


    const signIn = async (data) => {
        clearError();

        const response = await requestGet('/users');
        let user = response.find(item => item.password === data.password && item.email === data.mail)

        if (user) {
            alert(`Successful! Welcome!`)
            localStorage.setItem("token", user.token)
            navigate("/")
        } else {
            alert("Error! Password or email is incorrect")
        }


    }
    return (
        <>


            <Helmet>
                <title>
                    Valuet - Sign In
                </title>
            </Helmet>
            <img src={"../../wave-1.png"} alt="" className="wave-1 fixed bottom-0 right-0 w-full max-w-full z-[-1] " />
            <img src={'../../wave-2.png'} alt="" className="wave-2 fixed bottom-0 right-0 max-w-full w-[70%]  z-[-1] " />
            <img src={'../../Polygon 2.png'} alt="" className="absolute max-w-full top-[160px] left-[40px] z-10" />
            <img src="../../Rectangle 8.png" className="absolute left-[600px] top-[100px]" alt="" />
            <div className="modal-box flex items-center justify-between p-[5%] max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:gap-[20px]">
                <div className="modal relative w-[530px] h-[655px] rounded-[10px] max-w-full max-lg:w-[450px] max-lg:h-[500px] opacity-[0.9]">
                    <form className="flex flex-col gap-[50px] items-center justify-center" onSubmit={handleSubmit(signIn)}>
                        <span className="text-[#fff] text-center pt-[50px] text-[32px] font-[500]">Welcome!</span>
                        <div className={errors.mail ? "flex w-[380px] border-[red] border-[2px] h-[58px] bg-[#2E3558] max-lg:w-[290px] max-lg:h-[40px] p-[15px] gap-[10px] rounded-[10px] items-center" :"flex w-[380px] h-[58px] bg-[#2E3558] max-lg:w-[290px] max-lg:h-[40px] p-[15px] gap-[10px] rounded-[10px] items-center"} style={{ boxShadow: "0px 4px 20px 0px rgba(1, 143, 255, 0.15)" }}>
                            <img src={"../../hm.svg"} alt="" />
                            <input className={errors.mail ? "outline-none border-none w-full text-[red]" : "outline-none border-none w-full text-white"} style={{ background: "none" }} placeholder="E-mail" type="text" {...register('mail', {
                                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                                required: true
                            })} />
                        </div>
                        <div className={errors.password ? "flex w-[380px] border-[red] border-[2px] h-[58px] bg-[#2E3558] max-lg:w-[290px] max-lg:h-[40px] p-[15px] gap-[10px] rounded-[10px] items-center" :"flex w-[380px] h-[58px] bg-[#2E3558] max-lg:w-[290px] max-lg:h-[40px] p-[15px] gap-[10px] rounded-[10px] items-center"} style={{ boxShadow: "0px 4px 20px 0px rgba(1, 143, 255, 0.15)" }}>
                            <img src={"../../block.svg"} alt="" />
                            <input className={errors.password ? "outline-none border-none w-full text-[red]" : "outline-none border-none w-full text-white"} style={{ background: "none" }} type={isActive ? "text" : "password"} {...register("password", {
                                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                required: true
                            })} />
                            <img onClick={() => setIsActive(!isActive)} src={isActive ? "../../eye-open.png" : "../../eye-close.png"} className="cursor-pointer w-[70px]" alt="" />
                        </div>

                        <div className="btns flex items-center justify-center gap-[20px] py-[25px]">
                          <Link to={"/signup"}><button className="signUp">SIGN UP</button></Link>
                            <button className="signIn" type="submit">{loading ? 'Signing in...' : 'SIGN IN'}</button>
                        </div>
                    </form>
                    <Link className="absolute left-[50%] translate-x-[-50%] bottom-[20px] underline text-[#5FB2FF] text-[16px] font-[400]">Forgot your password?</Link>
                </div>
                <div className="text pr-[10%] object-cover flex flex-col items-center gap-[15px]">
                    <h1 className="h1-valuet">VALUET</h1>
                    <div className="w-[175px] max-w-full h-[1px] bg-[#1288E8]"></div>
                    <span className="span-valuet">Your currency dashboard</span>
                </div>
            </div>
        </>
    );
}

export default SignIn;