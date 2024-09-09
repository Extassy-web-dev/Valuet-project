import { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useHttpRequest } from "../hooks/https.hook";

function SignUp() {
    const [isActive, setIsActive] = useState(false)
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const { loading, error, requestGet, requestPost, clearError } = useHttpRequest('http://localhost:7777');




    function generateToken() {
        const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        let token = "";

        for (let i = 0; i < 10; i++) {
            let rnd = Math.floor(Math.random() * characters.length);

            token += characters[rnd];
        }

        return token;
    }


    const signUp = async (data) => {

        let token = generateToken()

        let task = {
            email: data.mail,
            name: data.name,
            surname: data.surname,
            password: data.password,
            token: token
        }

        const resEmail = await requestGet("/users?email=" + data.mail)
        if (resEmail.length > 0) {
            alert("Error! Acc already exist.")
        } else {
            alert("Successful!")
            const response = await requestPost('/users', 'post', task)
            localStorage.setItem("token", token)
            navigate("/")
        }
    }


    return (
        <>

            <Helmet>
                <title>
                    Valuet - Sign Up
                </title>
            </Helmet>
            <img src={"../../wave-1.png"} alt="" className="wave-1 fixed bottom-0 right-0 w-full max-w-full z-[-1] " />
            <img src={'../../wave-2.png'} alt="" className="wave-2 fixed bottom-0 right-0 max-w-full w-[70%]  z-[-1] " />
            <img src={'../../Polygon 2.png'} alt="" className="absolute max-w-full top-[160px] left-[40px] z-10" />
            <img src="../../Rectangle 8.png" className="absolute left-[600px] top-[100px]" alt="" />
            <div className="modal-box flex items-center justify-between p-[5%] max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:gap-[20px]">
                <div className="modal relative w-[530px]  rounded-[10px] max-w-full max-lg:w-[450px] max-lg:h-[500px] opacity-[0.9]">
                    <form className="flex flex-col gap-[50px] items-center justify-center" onSubmit={handleSubmit(signUp)}>
                        <span className="text-[#fff] text-center pt-[50px] text-[32px] font-[500]">Registration !</span>
                        <div className="flex w-[380px] h-[58px] bg-[#2E3558] max-lg:w-[290px] max-lg:h-[40px] p-[15px] gap-[10px] rounded-[10px] items-center" style={{ boxShadow: "0px 4px 20px 0px rgba(1, 143, 255, 0.15)" }}>
                            <img src={"../../hm.svg"} alt="" />
                            <input className="outline-none border-none w-full text-white" style={{ background: "none" }} placeholder="Email" type="text" {...register('mail', {
                                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                                required: true
                            })} />
                        </div>
                        <div className="flex w-[380px] h-[58px] bg-[#2E3558] max-lg:w-[290px] max-lg:h-[40px] p-[15px] gap-[10px] rounded-[10px] items-center" style={{ boxShadow: "0px 4px 20px 0px rgba(1, 143, 255, 0.15)" }}>
                            <img src={"../../hm.svg"} alt="" />
                            <input className="outline-none border-none w-full text-white" style={{ background: "none" }} placeholder="Name" type="text" {...register('name', {
                                pattern: /^[a-z ,.'-]+$/i,
                                required: true
                            })} />
                        </div>
                        <div className="flex w-[380px] h-[58px] bg-[#2E3558] max-lg:w-[290px] max-lg:h-[40px] p-[15px] gap-[10px] rounded-[10px] items-center" style={{ boxShadow: "0px 4px 20px 0px rgba(1, 143, 255, 0.15)" }}>
                            <img src={"../../hm.svg"} alt="" />
                            <input className="outline-none border-none w-full text-white" style={{ background: "none" }} placeholder="Surname" type="text" {...register('surname', {
                                pattern: /^[a-z ,.'-]+$/i,
                                required: true
                            })} />
                        </div>
                        <div className="flex w-[380px] h-[58px] bg-[#2E3558] max-lg:w-[290px] max-lg:h-[40px] p-[15px] gap-[10px] rounded-[10px] items-center" style={{ boxShadow: "0px 4px 20px 0px rgba(1, 143, 255, 0.15)" }}>
                            <img src={"../../block.svg"} alt="" />
                            <input className="outline-none border-none w-full text-white" style={{ background: "none" }} type={isActive ? "text" : "password"} {...register("password", {
                                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                required: true
                            })} />
                            <img onClick={() => setIsActive(!isActive)} src={isActive ? "../../eye-open.png" : "../../eye-close.png"} className="cursor-pointer w-[70px]" alt="" />
                        </div>

                        <div className="btns flex items-center justify-center gap-[20px] py-[25px]">
                            <button className="signUp" type="submit">{loading ? 'Signing up...' : 'SIGN UP'}</button>
                            <Link to={"/signin"}><button className="signIn" type="submit">{loading ? 'Signing in...' : 'SIGN IN'}</button></Link>
                        </div>
                    </form>
                    <a href="#" className="absolute left-[50%] translate-x-[-50%]  underline text-[#5FB2FF] text-[16px] font-[400]">Forgot your password?</a>
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

export default SignUp;