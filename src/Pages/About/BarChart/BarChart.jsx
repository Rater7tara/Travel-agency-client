import React from 'react';
import MyBarChart from '../MyBarChart/MyBarChart';
import './BarChart.css';

const BarChart = () => {
    return (
        <div className='bar-section'>

            <div className="card-container">
                <div className="card">
                    <img src="https://i.postimg.cc/4yrf3mKj/paris-stamp.jpg" alt="Image 1" className="rotated-st rotate-left" />
                </div>
                <div className="card">
                    <img src="https://img.freepik.com/free-photo/happy-couple-having-wine-with-view-eiffel-tower_181624-33226.jpg?size=626&ext=jpg&ga=GA1.1.1965103633.1697962610&semt=sph" alt="Image 2" className="rotated-nd rotate-center" />
                </div>
                <div className="card">
                    <img src="https://img.freepik.com/free-photo/happy-couple-having-wine-with-view-eiffel-tower_181624-33226.jpg?size=626&ext=jpg&ga=GA1.1.1965103633.1697962610&semt=sph" alt="Image 3" className="rotated-rd rotate-right" />
                </div>
            </div>

            <div className='bar-div'>
                <div className='mt-5'>
                    <div className='flex justify-between text-xl font-medium'>
                        <h1>Country side</h1>
                        <h1>76%</h1>
                    </div>
                    <MyBarChart percentage={76} />
                </div>

                <div className='mt-7'>
                    <div className='flex justify-between text-xl font-medium '>
                        <h1 className=''>Vineyard</h1>
                        <h1>92%</h1>
                    </div>
                    <MyBarChart percentage={92} />
                </div>

                <div className='mt-7'>
                    <div className='flex justify-between text-xl font-medium '>
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