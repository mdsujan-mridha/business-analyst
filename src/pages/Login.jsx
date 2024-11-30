
import React from 'react';
import loginImg from "../assets/login.jpg"
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";


const Login = () => {
    return (
        <>
            <div className='w-full min-h-screen px-12 bg-black flex gap-12 py-10'>
                <div className='w-1/2'>
                    <img src={loginImg} alt="Login-image" style={{ width: "100%", height: "100%" }} className=' rounded-xl' />
                </div>
                <div className='w-1/2 text-white pl-12'>
                    <div className="text-center">
                        <h1 className='text-5xl font-bold'> Login </h1>
                        <p className='text-xl font-semibold py-5'> Welcome back brand owner! </p>
                    </div>
                    <div>
                        <form>
                            <div>
                                <p className='text-lg font-semibold py-2'>  Enter your email </p>
                                <input type="email" placeholder='E@mail' className=' w-full h-14 rounded-2xl p-3 outline-none' />
                            </div>
                            <div>
                                <p className='text-lg font-semibold py-2'> Enter your password </p>
                                <input type="email" placeholder='password' className=' w-full h-14 rounded-2xl p-3 outline-none' />
                            </div>
                            <div className='flex justify-between items-center py-5'>
                                <div>
                                    <input type="checkbox" id="remember" name="remember" value="password" />
                                    <label htmlFor="remember"> Remember me</label>
                                </div>
                                <Link to="/forgot-password"> Forgot password? </Link>
                            </div>
                            <input type="submit" value="Login" className=' w-full h-14 rounded-2xl p-3 bg-red-600' />
                        </form>
                        <p className='text-center py-5'> --------------------------------OR------------------------------ </p>
                        <div className='flex justify-center items-center gap-10'>
                            <button className='w-36 h-14 rounded-2xl text-white shadow-2xl bg-slate-950 flex justify-center items-center text-3xl'>  <FaGoogle /> </button>
                            <button className='w-36 h-14 rounded-2xl text-white shadow-2xl bg-slate-950 flex justify-center items-center text-3xl'>  <FaFacebook /> </button>
                            <button className='w-36 h-14 rounded-2xl text-white shadow-2xl bg-slate-950 flex justify-center items-center text-3xl'>  <FaTwitter /> </button>
                        </div>
                        <div className='pt-5 flex justify-center items-center'>
                            <Link className='text-center'> I don't have an account.Signup </Link>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Login;