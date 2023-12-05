import React from 'react';
import MyBarChart from '../MyBarChart/MyBarChart';
import './BarChart.css';

const BarChart = () => {
    return (
        <div className='bar-section'>

            <div className="card-container">
                <div className="card card-bar">
                    <img src="https://i.postimg.cc/KvVSQptZ/paris-stamp-removebg-preview.png" alt="Image 1" className="rotated-st rotate-left" />
                </div>
                <div className="card card-bar">
                    <img src="https://i.postimg.cc/T2DDtcYj/woman-relaxing-with-her-feet-edge-boat-travel-concept-with-seagulls-130111-7385.jpg" alt="Image 2" className="rotated-nd rotate-center shadow-2xl" />
                </div>
                <div className="card card-bar">
                    <img src="https://i.postimg.cc/7ZtYnLhR/vertical-outdoor-shot-cheerful-female-makes-professional-photos-sits-rocks-near-mountain-river.jpg" alt="Image 3" className="rotated-rd rotate-right shadow-2xl" />
                </div>
            </div>

            <div className='bar-div'>
                <h1 className='text-5xl font-bold'>Our Popular Tour</h1>
                <p className='text-xl ms-2 mt-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab itaque facere repellat corrupti harum vel.hgjhgjhgjhgjhghj</p>
                <div className='mt-5'>
                    <div className='flex justify-between text-base font-bold'>
                        <h1>Country side</h1>
                        <h1>76%</h1>
                    </div>
                    <MyBarChart percentage={76} />
                </div>

                <div className='mt-7'>
                    <div className='flex justify-between text-base font-bold'>
                        <h1 className=''>Vineyard</h1>
                        <h1>92%</h1>
                    </div>
                    <MyBarChart percentage={92} />
                </div>

                <div className='mt-7'>
                    <div className='flex justify-between text-base font-bold'>
                        <h1 className=''>Wine Tasting</h1>
                        <h1>86%</h1>
                    </div>
                    <MyBarChart percentage={86} />
                </div>
                
            </div>


        </div>
    );
};

export default BarChart;