import React from 'react';
import "./Flexible.css"

const Flexible = () => {
    return (
      <div className='bg-slate-50'>

        <div  className='flexible-div flex justify-center px-14 '>
            <div  className='flexi-text'>
                <p className='text-md text-blue-900 font-bold'>Why We Are Best</p>
                <h1 className='text-4xl font-bold'>Keep Things <br /> Flexible</h1>
                <button className='btn btn-active my-6'>Contact Us</button>
                <div className='num-div'>
                  <div className='flex justify-between'>
                    <span>
                      <h1 className='text-2xl font-semibold font-sans my-2'><span className='rounded-full bg-yellow-300 text-2xl font-semibold font-sans'>12</span>0+</h1>
                      <p className='text-gray-400 font-medium'>Total Destination</p>
                    </span>
                    <span>
                      <h1 className='text-2xl font-semibold font-sans my-2'><span className='rounded-full bg-yellow-300 text-2xl font-semibold font-sans'>15</span>k+</h1>
                      <p className='text-gray-400 font-medium'>Total Travelers</p>
                    </span>
                  </div>
                  <div className='flex justify-between my-8'>
                    <span className=''>
                      <h1 className='text-2xl font-semibold font-sans my-2'><span className='rounded-full bg-yellow-300 text-2xl font-semibold font-sans'>50</span>0+</h1>
                      <p className='text-gray-400 font-medium'>Travel Packages</p>
                    </span>
                    <span>
                      <h1 className='text-2xl font-semibold font-sans my-2'><span className='rounded-full bg-yellow-300 text-2xl font-semibold font-sans'>12</span>k+</h1>
                      <p className='text-gray-400 font-medium'>Positive Reviews</p>
                    </span>
                  </div>
                </div>
            </div>

            <div>
            <div className="gallery container">
    <div className="gallery-div flex flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/BLr7S4S/panoramic-view-active-female-tourist-raincoat-poses-picturesque-shore-min.jpg" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/VCskdyF/umbrella-chair-around-swimming-pool-min.jpg" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"        
          src="https://i.ibb.co/CvnYfm2/two-female-tourists-hold-map-find-places-min.jpg" />
      </div>
    </div>
</div>
            </div>
        </div>
        </div>
    );
};

export default Flexible;