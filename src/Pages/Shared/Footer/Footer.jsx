import React from 'react';
import logo from '../../../assets/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer className="footer p-8 bg-black text-neutral-content mt-10">
                <div className='first-div'>
                    <img className='footer-logo' src={logo} alt="" />
                    <h1 className='text-3xl font-bold'>Wanderlust</h1>

                    <p>Need any help?</p>
                    <p className='text-lg font-semibold'>Call Us <span className='text-yellow-400'>(+88) 013224-3333</span></p>
                    <p>Gazipur, Dhaka, Bangladesh</p>
                    <p>nowshinakteremu005@gmail.com</p>

                    <div className="grid grid-flow-col gap-4 mt-5">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </div>



                    <div className='second-div'>
                        <div className='des-first'>
                            <header className="footer-title text-lg">Company</header>
                            <a className="link link-hover mt-7">About Us</a>
                            <a className="link link-hover mt-7">Contact Us</a>
                            <a className="link link-hover mt-7">Travel Guides</a>
                            <a className="link link-hover mt-7">Data Policy</a>
                        </div>
                        <div className='des-second'>
                            <header className="footer-title text-lg">Top Destination</header>
                            <a className="link link-hover mt-7">Las Vegas</a>
                            <a className="link link-hover mt-7">New York City</a>
                            <a className="link link-hover mt-7">San Francisco</a>
                            <a className="link link-hover mt-7">Hawaii</a>
                        </div>
                        <div className='des-third mt-9'>
                            <a className="link link-hover mt-7">Tokyo</a>
                            <a className="link link-hover mt-7">Sydney</a>
                            <a className="link link-hover mt-7">Melbourne</a>
                            <a className="link link-hover mt-7">Dubai</a>
                        </div>
                    </div>

                <div className='last-div'>
                    <form >
                        <header className="footer-title">Newsletter</header>
                        <fieldset className="form-control w-80">
                            <label className="label">
                                <span className="label-text text-white">Enter your email address</span>
                            </label>
                            <div className="join">
                                <input type="text" placeholder="Your Email" className="input input-bordered join-item" />
                                <button className="btn btn-primary join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </footer>
        </>
    );
};

export default Footer;