
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import QuestionAnswer from '../components/QuestionAnswer';
import PricingComparison from '../components/CompareSection';
import Footer from '../components/Footer';



const Home = () => {
    return (
        <>
            <Navbar />
            <div className='px-12'>
                <Hero />
                <PricingComparison />
                <QuestionAnswer />
                <Footer />
            </div>
        </>
    );
};

export default Home;