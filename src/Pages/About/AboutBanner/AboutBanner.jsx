import React from 'react';
import './AboutBanner.css';

const AboutBanner = () => {
    return (
        <>
            <div className='about-banner-main bg-fixed'>
                <div className='about-banner bg-slate-900 bg-opacity-60'>
                    <h1 className='text-4xl text-center text-white font-bold '>About</h1>
                    <p className='text-base font-bold text-white my-4'>Home / <span className='text-rose-400'>About</span></p>

                </div>
            </div>

            <section className='about-us-section'>
                <div className='about-us-div'>
                    <div className="img-div rounded-full">
                        <img className='about-img rounded-full' src="https://e1.pxfuel.com/desktop-wallpaper/385/571/desktop-wallpaper-most-beautiful-places-in-the-world-for-holiday-most-beautiful-places-on-earth.jpg" alt="" />
                    </div>
                    <div className='About-text w-50'>
                        <p className='text-rose-400 font-bold mb-3 mt-2 text-lg'>About Us ...</p>
                        <h1 className='font-bold text-3xl mb-3'>
                            Why Select Us for <br /> Your Vaction?
                        </h1>
                        <p className='text-gray-500'>
                            Discover the perfect getaway with Wanderlust. Why choose us? We're all about crafting your dream vacation, tailored to your style. Our expert team ensures personalized service, insider tips, and exclusive deals. Count on 24/7 support and a commitment to your safety. Plus, enjoy transparent pricing with no surprises. Choose Wanderlust for a travel experience that's uniquely yours.
                        </p>
                        <p className='text-gray-500
                         mt-4'>
                            Indulge in exclusive benefits through our established partnerships with leading hotels, airlines, and tour operators. Our commitment to sustainable travel means you can explore the world responsibly, minimizing your environmental impact while supporting local communities.
                            <br />


                        </p>
                        <p className='text-gray-500
                         mt-4'>
                            Experience transparent pricing with Wanderlust, where there are no hidden fees or surprises. We believe in clear communication, empowering you to budget confidently and focus on making the most of your vacation.
                        </p>
                    </div>


                </div>

            </section>

            <div className='About-num flex justify-evenly '>
                <span className='shadow-sm p-2'>
                    <h1 className='text-3xl font-semibold font-sans my-2'><span className='rounded-full bg-yellow-300 text-3xl font-semibold font-sans'>12</span>0+ <span className='text-gray-400 font-medium text-base'>Total Destination</span></h1>
                </span>
                <span className='shadow-sm p-2'>
                    <h1 className='text-3xl font-semibold font-sans my-2'><span className='rounded-full bg-yellow-300 text-3xl font-semibold font-sans'>15</span>k+ <span className='text-gray-400 font-medium text-base'>Total Travelers</span></h1>
                </span>
                <span className='shadow-sm p-2'>
                    <h1 className='text-3xl font-semibold font-sans my-2'><span className='rounded-full bg-yellow-300 text-3xl font-semibold font-sans'>50</span>0+ <span className='text-gray-400 font-medium text-base'>Travel Packages</span></h1>
                </span>
                <span className='shadow-sm p-2'>
                    <h1 className='text-3xl font-semibold font-sans my-2'><span className='rounded-full bg-yellow-300 text-3xl font-semibold font-sans'>12</span>k+ <span className='text-gray-400 font-medium text-base'>Positive Reviews</span></h1>
                </span>
            </div>

            <div className="video-container">

                <iframe src="https://www.youtube.com/embed/EDap9qxb96k" title="My Solo Trip to Antarctica" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

           


        </>
    );
};

export default AboutBanner;