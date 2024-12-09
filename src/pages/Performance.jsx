

import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from "chart.js";
import { Bar, Pie } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const Performance = () => {

    const barData = {
        labels: ["Region 1", "Region 2", "Region 3", "Region 4"],
        datasets: [
            {
                label: "Top-Selling Products",
                data: [12, 19, 7, 5],
                backgroundColor: ["#000", "#333", "#666", "#999"],
            },
        ],
    };

    const barOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Hide legend
            },
            title: {
                display: true,
                text: "Top-Selling Products by Region",
            },
        },
        scales: {
            x: {
                ticks: {
                    color: "#000",
                },
            },
            y: {
                ticks: {
                    color: "#000",
                },
            },
        },
    };

    // Data for the Pie Chart
    const pieData = {
        labels: ["Preference A", "Preference B", "Preference C", "Preference D"],
        datasets: [
            {
                data: [25, 35, 20, 20],
                backgroundColor: ["#000", "#333", "#666", "#999"],
            },
        ],
    };

    const pieOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
            },
            title: {
                display: true,
                text: "Customer Preferences",
            },
        },
    };

    return (
        <Fragment>
            <>
                <Navbar />
            </>
            <div className='px-12 mx-auto h-screen'>
                <form className='flex justify-evenly items-center gap-5'>
                    <div className='py-5 w-96'>
                        <p className='text-md font-semibold py-2'> Category </p>
                        <select className="w-96 rounded-lg text-sm text-black py-3 px-2 outline-none bg-slate-200 p-2">
                            <option selected="" className='text-black'>Outerwear</option>
                            <option>Electronics</option>
                            <option>Beauty Products</option>
                            <option> Organic Product </option>
                        </select>
                    </div>
                    <div className='py-5 w-96 pb-5'>
                        <p className='text-md font-semibold py-2'> Region </p>
                        <select className="w-96 rounded-lg text-sm text-black py-3 px-2 outline-none bg-slate-200 p-2">
                            <option selected="" className='text-black'>City A </option>
                            <option>City B</option>
                            <option> City C</option>
                            <option> City D </option>
                        </select>
                    </div>
                    <div className='py-5 w-96'>
                        <p className='text-md font-semibold py-2'> Seasonal  </p>
                        <select className="w-96 rounded-lg text-sm text-black py-3 px-2 outline-none bg-slate-200 p-2">
                            <option selected="" className='text-black'>Winter</option>
                            <option>Summer</option>
                            <option>Spring</option>
                        </select>
                    </div>
                </form>

                <div className='w-full flex justify-evenly items-center gap-5 pb-5'>
                    <div className='w-1/2 p-5 shadow-xl h-96'>
                        <h1 className=' font-bold text-lg'> Top-Selling Products by Region </h1>
                        <Bar data={barData} options={barOptions} style={{ paddingBottom: "20px" }} />

                    </div>
                    <div className='w-1/2 p-5 shadow-xl py-2 h-96'>
                        <h1 className=' font-bold text-lg'> Customer Preferences </h1>
                        <Pie data={pieData} options={pieOptions} style={{ paddingBottom: "20px" }} />
                    </div>
                </div>
                <div className='flex justify-end items-end'>
                    <Link to="/budget" className='bg-black text-white font-medium h-12 p-5 text-center flex justify-center items-center'>
                        Next: Go to Budget Planner
                    </Link>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default Performance;