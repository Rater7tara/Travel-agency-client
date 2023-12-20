import React from 'react';
import './DestinationBanner.css';

const DestinationBanner = () => {
    return (
        <div>
            <div className='des-banner-main bg-fixed'>
                <div className='about-banner bg-slate-900 bg-opacity-60'>
                    <h1 className='text-4xl text-center text-white font-bold '>Destination</h1>
                    <p className='text-base font-bold text-white my-4'>Home / <span className='text-rose-400'>Destination</span></p>

                </div>
            </div>
        </div>
    );
};

export default DestinationBanner;