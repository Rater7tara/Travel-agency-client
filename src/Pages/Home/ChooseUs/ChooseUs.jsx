import React from 'react';


const ChooseUs = () => {
    return (
        <>

            <section className="mb-8 mt-10">

                <div className="px-6 py-12 text-center md:px-12 lg:text-left">
                    <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl xl:px-32">
                        <div className="grid items-center lg:grid-cols-2">
                            <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                                <div
                                    className="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
                                    <p className='text-blue-900 ms-2'>-- Why Choose Us --</p>
                                    <h1 className="mt-2 mb-8 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
                                        Plan Your Trip <br /><span className="text-yellow-400">With Tom</span>
                                    </h1>
                                    <h4 className='text-sm text-gray-500 '>“A MAN OF ORDINARY TALENT WILL ALWAYS BE ORDINARY, WHETHER HE TRAVELS OR NOT; BUT A MAN OF SUPERIOR TALENT WILL GO TO PIECES IF HE REMAINS FOREVER IN THE SAME PLACE…”   — WOLFGANG AMADEUS MOZART</h4>

                                    <button className='btn btn-warning mt-10'>Contact Us</button>

                                </div>
                            </div>
                            <div className="md:mb-12 lg:mb-0">
                                <img src={'https://i.ibb.co/bb8BTQz/4076341-min.jpg'}
                                    className="w-full h-96 rounded-lg shadow-lg dark:shadow-black/20" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    );
};

export default ChooseUs;