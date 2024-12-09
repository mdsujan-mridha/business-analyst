


import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <>
            <div className="h-auto w-1/3 mx-auto py-10 px-5 my-5 rounded-md bg-slate-950 text-white">
                <h1 className='text-center text-4xl font-semibold'>Sign up</h1>
                <form className='flex justify-center  items-center flex-col'>
                    <div>
                        <p className='text-md font-semibold py-2'>  Full name </p>
                        <input type="text" placeholder='Full Name' className=' w-96 h-12 rounded-2xl p-3 outline-none text-black' />
                    </div>
                    <div>
                        <p className='text-md font-semibold py-2'>  Enter your email </p>
                        <input type="email" placeholder='E@mail' className=' w-96 h-12 rounded-2xl p-3 outline-none text-black' />
                    </div>
                    <div>
                        <p className='text-md font-semibold py-2'> Enter your password </p>
                        <input type="password" placeholder='password' className=' w-96 h-12 rounded-2xl p-3 outline-none text-black' />
                    </div>
                    <div>
                        <p className='text-md font-semibold py-2'> Confirm password </p>
                        <input type="password" placeholder='Confirm password' className=' w-96 h-12 rounded-2xl p-3 outline-none text-black' />
                    </div>
                    <div className='py-5'>
                        <p className='text-md font-semibold py-2'> User country </p>
                        <select className="w-96 border-transparent rounded-lg text-sm text-black py-3 px-2 outline-none">
                            <option selected="" className='text-black'>Country</option>
                            <option>Bangladesh</option>
                            <option>Pakisthan</option>
                            <option>Australia</option>
                        </select>
                    </div>
                    <div className='py-5'>
                        <input type="submit" value="Sign up" className='w-96 h-12 rounded-2xl p-3 bg-red-600 cursor-pointer' />
                    </div>
                </form>
                <div className='pt-5 flex justify-center items-center'>
                    <Link className='text-center' to="/login"> Already have an account?Login </Link>
                </div>
            </div>
        </>
    );
};

export default Signup;