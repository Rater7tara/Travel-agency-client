import React from 'react';
import MyCarousel from './MyCarousel';
import "./Testimonial.css";



const Testimonial = () => {
    return (
        <div className='mb-8'>
            <h4 className='text-lg font-bold text-center text-blue-900'>_____Testimonial_____</h4>
            <h1 className='text-3xl font-bold  text-center my-3'>What our customer <br />
                says about us.
            </h1>

            <div className='testimonial-avater px-10 py-5'>
                <div className='avatar-div'>
                    <div className="avatar mb-4">
                        <div className="w-16 rounded-full ms-24">
                            <img src="https://i.ibb.co/m8mMGgP/images-3.jpg" />
                        </div>
                    </div>
                    <div className="avatar mb-2 ms-4">
                        <div className="w-16 rounded-full">
                            <img src="https://i.ibb.co/wWFtMKV/360-F-299973520-rg-AKO2-Bdh-Nh-DAr-SSm7ik-CT03q-BCYcum-J.jpg" />
                        </div>
                    </div>
                    <div className="avatar mb-2 ms-20">
                        <div className="w-36 rounded-full">
                            <img src="https://i.ibb.co/xDZmkVq/images-4.jpg" />
                        </div>
                    </div>
                    <div className="avatar ms-14">
                        <div className="w-16 rounded-full">
                            <img src="https://i.ibb.co/K7bwJC3/images-2.jpg" />
                        </div>
                    </div>
                </div>

                <div className='testimonial-slider mt-10 px-2 mx-4'>
                    <img className='star-img' src="https://i.ibb.co/YNR7mVw/quote-1.png" alt="" />


                    <MyCarousel></MyCarousel>



                </div>

                <div className='avatar-div'>
                    <div className="avatar mb-2 ms-32">
                        <div className="w-16 rounded-full">
                            <img src="https://i.ibb.co/k0YWzXz/360-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg" />
                        </div>
                    </div>
                    <div className="avatar ms-5">
                        <div className="w-16 rounded-full">
                            <img src="https://i.ibb.co/k2BDhHf/download.jpg" />
                        </div>
                    </div>
                    <div className="avatar mb-4 ms-16">
                        <div className="w-36 rounded-full">
                            <img src="https://i.ibb.co/Vpy8VbZ/images.jpg" />
                        </div>
                    </div>
                    <div className="avatar ms-40">
                        <div className="w-16 rounded-full ">
                            <img src="https://i.ibb.co/nQ9jLZP/360-F-326985142-1aa-Kc-Ej-MQW6-ULp6o-I9-MYuv8l-N9f8s-Fmj.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;