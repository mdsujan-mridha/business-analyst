

import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

// Register the required components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Budgeting = () => {

    // Data for the Line Chart
    const lineData = {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
        ],
        datasets: [
            {
                label: "Projected Revenue",
                data: [10, 15, 12, 20, 18, 25, 30, 28, 35, 40],
                borderColor: "#000", // Black line
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                borderWidth: 2,
                tension: 0.4, // Smooth curves
            },
            {
                label: "Actual Revenue",
                data: [8, 12, 14, 18, 15, 22, 28, 25, 30, 35],
                borderColor: "#666", // Dark gray line
                backgroundColor: "rgba(102, 102, 102, 0.1)",
                borderWidth: 2,
                tension: 0.4,
            },
        ],
    };

    const lineOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "top", // Position of legend
            },
            title: {
                display: true,
                text: "Revenue Estimator",
            },
        },
        scales: {
            x: {
                ticks: {
                    color: "#000", // Black labels
                },
            },
            y: {
                ticks: {
                    color: "#000",
                },
            },
        },
    };

    return (
        <Fragment>
            <Navbar />
            <div className='px-12 bg-slate-100 h-screen pb-10'>
                <h1 className='text-center text-5xl font-bold py-10'> Budgeting and Revenue Analysis </h1>
                {/* parent div  */}
                <div className='flex justify-center  gap-5 bg-white shadow-md py-5 rounded-md'>
                    <div className='w-1/2 p-5 px-12'>
                        <h1 className='text-3xl font-bold py-5'> Budget Planner </h1>
                        <form>
                            <div>
                                <p className='text-md font-semibold py-2'> Initial Investment Amount </p>
                                <input type="text" placeholder='Amount' className='w-full h-12 rounded-2xl p-3 outline-none text-white bg-slate-500' />
                            </div>
                            <div>
                                <p className='text-md font-semibold py-2'> Expected Costs </p>
                                <input type="text" placeholder='Amount' className='w-full h-12 rounded-2xl p-3 outline-none text-white bg-slate-500' />
                            </div>
                        </form>
                    </div>
                    <div className='w-1/2 p-5'>
                        <h1 className='text-3xl font-bold py-5'>Revenue Estimator </h1>
                        <Line data={lineData} options={lineOptions} />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12 pt-12'>
                    <div className=' bg-white w-96 h-32 rounded-md px-5 pt-5'>
                        <h1 className='text-2xl font-medium'> ROI </h1>
                        <p className='pt-2'> Return on Investment: 150% </p>
                    </div>
                    <div className=' bg-white w-96 h-32 rounded-md px-5 pt-5'>
                        <h1 className='text-2xl font-medium'> Break-Even Point </h1>
                        <p className='pt-2'> Time to Break Even: 2 months </p>
                    </div>
                    <div className=' bg-white w-96 h-32 rounded-md px-5 pt-5'>
                        <h1 className='text-2xl font-medium'> Projected Revenue </h1>
                        <p className='pt-2'> Total Revenue: $15,000 </p>
                    </div>
                </div>
                <div className='flex justify-end items-end'>
                    <Link to="/business-dashboard" className='bg-black text-white font-medium h-12 p-5 text-center flex justify-center items-center'>
                        Next: Business Launch
                    </Link>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default Budgeting;