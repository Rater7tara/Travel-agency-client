import React from 'react';
import './ReadyTravel.css';
import { Parallax, Background } from 'react-parallax';

const ReadyTravel = () => {


    return (
        <>
        <div className="featured-item bg-fixed text-white m-auto">
            <div className="para-div bg-slate-900 bg-opacity-60 m-auto lg:ps-8">

                <div className="para-text">
                    <p className='text-yellow-400 font-semibold'>Are you ready to travel?</p>
                    <h1 className='text-3xl font-bold'>Wanderlust is a World Leading <br /> Online Tour Booking <br /> Platform</h1>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 text-yellow-400">Contact Us</button>
                </div>
                <div className='para-card w-50 m-auto'>
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
        <div className='company-div bg-slate-50  border-yellow-400'>
                    <div className='bg-blue-900 bg-opacity-80'>
                    <h1 className='font-bold text-yellow-300 text-2xl text-center py-7 mb-2'>Our Trusted Partners</h1>
                    <div className='company pb-8'>
                    <img className='company-img shadow-xl' src="https://i.ibb.co/0DyVq6N/logo-3-removebg-preview.png" alt="" />
                    <img className='company-img shadow-xl' src="https://i.ibb.co/S6L2C7Z/logo-1-removebg-preview.png" alt="" />
                    
                    <img className='company-img shadow-xl' src="https://i.ibb.co/fdFXncp/logo-2-removebg-preview.png" alt="" />

                    <img className='company-img shadow-xl' src="https://i.ibb.co/x2DLrwT/logo-5-removebg-preview.png" alt="" />
                    <img className='company-img shadow-xl' src="https://i.ibb.co/mhh79pY/logo-4-removebg-preview.png" alt="" />
                    </div>
                    </div>

                </div>
        </>
    );
};

export default ReadyTravel;
