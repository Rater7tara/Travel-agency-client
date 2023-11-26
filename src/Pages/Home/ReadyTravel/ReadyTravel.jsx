import React from 'react';
import './ReadyTravel.css';
import { Parallax, Background } from 'react-parallax';

const ReadyTravel = () => {


    return (
        <div className="featured-item bg-fixed text-white">
            <div className="para-div bg-slate-900 bg-opacity-60">

                <div className="para-text">
                    <p className='text-yellow-400 font-semibold'>Are you ready to travel?</p>
                    <h1 className='text-3xl font-bold'>Wanderlust is a World Leading <br /> Online Tour Booking <br /> Platform</h1>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 text-yellow-400">Contact Us</button>
                </div>
                <div className='para-card w-50'>
                    <div className="tour-card pt-2 bg-white shadow-xl rounded">
                        <div className="icon-container">
                            <a href=""><img src="https://i.ibb.co/rQV2zzp/forest.png" alt='' className="icon" /></a>
                        </div>
                        <div className="content">
                            <h3 className="tour-name text-black">Wildlife Tours</h3>
                        </div>
                    </div>
                    <div className="tour-card pt-2 bg-white shadow-xl rounded">
                        <div className="icon-container">
                            <a href=""><img src="https://i.ibb.co/cbJXwGD/para-glider.png" alt='' className="icon" /></a>
                        </div>
                        <div className="content">
                            <h3 className="tour-name text-black">Paragliding Tours</h3>
                        </div>
                    </div>
                    <div className="tour-card pt-2 bg-white shadow-xl rounded">
                        <div className="icon-container">
                            <a href=""><img src="https://i.ibb.co/wr4nrtN/hiking.png" alt='' className="icon" /></a>
                        </div>
                        <div className="content">
                            <h3 className="tour-name text-black">Adventure Tours</h3>
                        </div>
                    </div>
                    <div className="tour-card pt-2 bg-white shadow-xl rounded">
                        <div className="icon-container">
                            <a href=""><img src="https://i.ibb.co/mcCDqny/sun-umbrella.png" alt='' className="icon" /></a>
                        </div>
                        <div className="content">
                            <h3 className="tour-name text-black">Beach Tour</h3>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default ReadyTravel;
