

import React from 'react';
import FaqIcon from "../assets/thinking.svg";
const QuestionAnswer = () => {
    return (
        <div className=' w-full lg:w-1/3 mx-auto'>
            <div className='flex justify-center items-center pt-10'>
            <img src={FaqIcon} alt="FAQ" className='w-52'/>
            </div>
            <h1 className='text-center text-5xl font-bold py-5'> Frequently asked Questions </h1>
            <div className="collapse collapse-arrow">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium"> How does this work? </div>
                <div className="collapse-content">
                    <p>This design closely matches your image while maintaining responsiveness and scalability for future enhancements.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow ">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium"> What are the benefits? </div>
                <div className="collapse-content">
                    <p>The benefits to taking part in regular physical activity are numeruous. It can boost your mental wellbeing, make you fitter, stronger and reduce stress.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow ">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Is it difficult to use?</div>
                <div className="collapse-content">
                    <p>The long term benefits include a reduction in risk of problems such as heart disease, stroke, Type 2 diabetes and cancer. Why not get started today?</p>
                </div>
            </div>
            <div className="collapse collapse-arrow ">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Can I have custom pricing?</div>
                <div className="collapse-content">
                    <p>The long term benefits include a reduction in risk of problems such as heart disease, stroke, Type 2 diabetes and cancer. Why not get started today?</p>
                </div>
            </div>
            <div className="collapse collapse-arrow ">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium"> Is there trial version available? </div>
                <div className="collapse-content">
                    <p>The long term benefits include a reduction in risk of problems such as heart disease, stroke, Type 2 diabetes and cancer. Why not get started today?</p>
                </div>
            </div>
        </div>
    );
};

export default QuestionAnswer;