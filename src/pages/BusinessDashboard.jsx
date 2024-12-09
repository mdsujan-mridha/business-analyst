

import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Link } from 'react-router-dom';

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BusinessDashboard = () => {
    // Data for the bar chart
    const barData = {
        labels: ["North", "South", "East", "West", "Central"],
        datasets: [
            {
                label: "Top-Selling Products",
                data: [30, 50, 40, 60, 20],
                backgroundColor: "rgba(0, 0, 0, 0.8)", // Black bars
                borderColor: "rgba(0, 0, 0, 1)",
                borderWidth: 1,
            },
        ],
    };

    // Options to make the chart horizontal
    const barOptions = {
        indexAxis: "y", // Changes the orientation to horizontal
        responsive: true,
        plugins: {
            legend: {
                position: "top", // Position of the legend
            },
            title: {
                display: false,
                text: "Top-Selling Products by Region",
            },
        },
        scales: {
            x: {
                ticks: {
                    color: "#000", // Black labels for the x-axis
                },
            },
            y: {
                ticks: {
                    color: "#000", // Black labels for the y-axis
                },
            },
        },
    };

    return (
        <Fragment>
            <Navbar />
            <div className='h-screen bg-slate-100 px-12'>
                <div className="flex justify-center gap-10 py-5">
                    <div className="bg-white rounded-md w-1/2 p-5 px-10">
                        <h1 className='text-2xl font-semibold'> Data Upload </h1>
                        <form>
                            <p className='text-md font-semibold py-2'> Upload CSV File:  </p>
                            <div className="">
                                <input id="example1" type="file" className="mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-teal-500 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-teal-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60 border-2 rounded-md" />
                            </div>
                            <p className='text-2xl font-semibold py-3'> Manual Input </p>
                            <div className='py-2'>
                                <input
                                    type="text"
                                    placeholder='Sales Numbers'
                                    className=' w-full h-12 rounded-2xl p-3 outline-none text-white bg-black opacity-35' />
                            </div>
                            <div className='py-2'>
                                <input
                                    type="text"
                                    placeholder='Region'
                                    className=' w-full h-12 rounded-2xl p-3 outline-none text-white bg-black opacity-35' />
                            </div>
                            <div className='py-2'>
                                <input
                                    type="text"
                                    placeholder='Date'
                                    className=' w-full h-12 rounded-2xl p-3 outline-none text-white bg-black opacity-35' />
                            </div>
                        </form>
                    </div>
                    <div className="w-1/2 bg-white rounded-md h-auto py-5 px-5">
                        <h1 className='text-2xl font-bold'> Analytics Dashboard </h1>
                        <Bar data={barData} options={barOptions} />
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10'>
                            <div className='w-72 h-44 rounded-md shadow-md p-5'>
                                <h1 className='text-xl font-bold'> Growth Rate </h1>
                                <p> The current growth rate is 12% compared to last month </p>
                            </div>
                            <div className='w-72 h-44 rounded-md shadow-md p-5'>
                                <h1 className='text-xl font-bold'> Profitability Insights </h1>
                                <p> The current growth rate is 12% compared to last month </p>
                            </div>
                            <div className='w-72 h-44 rounded-md shadow-md p-5'>
                                <h1 className='text-xl font-bold'> Improvement Suggestions </h1>
                                <p> The current growth rate is 12% compared to last month </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end items-end'>
                    <Link to="/home" className='bg-black text-white font-medium h-12 p-5 text-center flex justify-center items-center'>
                        Next: Advance Features
                    </Link>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default BusinessDashboard;