
import React from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const CategorySelection = () => {
    const navigate = useNavigate();

    const handleSumit = (e) => {
        navigate("/performance")
    }

    return (
        <>
            <>
                <Navbar />
            </>
            <div className='h-screen flex justify-center items-center'>
                <div className='w-1/2 mx-auto shadow-2xl h-auto p-5'>
                    <h1 className='text-5xl font-bold text-center'>  Select Your Business Category </h1>
                    <div className='px-12'>
                        <form className='flex justify-center items-center flex-col w-full' onSubmit={handleSumit}>
                            <div className='py-5 w-full'>
                                <p className='text-md font-semibold py-2'> Main category </p>
                                <select className="w-full rounded-lg text-sm text-black py-3 px-2 outline-none bg-slate-200 p-2">
                                    <option selected="" className='text-black'>Clothes</option>
                                    <option>Electronics</option>
                                    <option>Beauty Products</option>
                                    <option> Organic Product </option>
                                </select>
                            </div>
                            <div className='pb-5 w-full'>
                                <p className='text-md font-semibold py-2'> Select Gender </p>
                                <select className="w-full rounded-lg text-sm text-black py-3 px-2 outline-none bg-slate-200 p-2">
                                    <option selected="" className='text-black'>Men</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <div className='pb-5 w-full'>
                                <p className='text-md font-semibold py-2'> Seasonal Demand </p>
                                <select className="w-full rounded-lg text-sm text-black py-3 px-2 outline-none bg-slate-200 p-2">
                                    <option selected="" className='text-black'>Winter</option>
                                    <option>Summer</option>
                                    <option>Spring</option>
                                </select>
                            </div>
                            <input type="submit" value="Go to Trending Product" className='w-96 bg-black h-12 text-white' />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategorySelection;