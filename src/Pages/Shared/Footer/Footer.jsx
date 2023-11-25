import React from 'react';
import logo from '../../../assets/logo.png';
import { FaFacebook, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/Fa";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer p-8 bg-black text-neutral-content mt-10">
            <div className='first-div'>
                <img className='footer-logo' src={logo} alt="" />
                <h1 className='text-3xl font-bold'>Wanderlust</h1>

                <p>Need any help?</p>
                <p className='text-lg font-semibold'>Call Us <span className='text-yellow-400'>(+88) 013224-3333</span></p>
                <p>Gazipur, Dhaka, Bangladesh</p>
                <p>nowshinakteremu005@gmail.com</p>

                <div className="grid grid-flow-col gap-4 mt-5">
                    <a href="https://www.facebook.com/profile.php?id=100016740286431" style={{ '--i': 7 }}>
                        <FaFacebook className='text-2xl'></FaFacebook>
                    </a>
                    <a href="https://www.instagram.com/_nowshin.khan_/" style={{ '--i': 8 }}>
                        <FaInstagram className='text-2xl'></FaInstagram>
                    </a>
                    <a href="https://github.com/Rater7tara" style={{ '--i': 9 }}>
                        <FaGithub className='text-2xl'></FaGithub>
                    </a>
                    <a href="https://www.linkedin.com/in/nowshin-akter-220984209/" style={{ '--i': 10 }}>
                        <FaLinkedinIn className='text-2xl'></FaLinkedinIn>
                    </a>
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
                    <header className="footer-title">Sign Up Newsletter</header>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-white">Enter your Email Address</span>
                        </label>
                        <div className="join">
                            <input type="text" placeholder="Your Email" className="input input-bordered join-item" />
                            <button className="btn btn-warning join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>


                <p className='my-6'>@ 2023 All Right Reserved by Wanderlust</p>
            </div>
        </footer>
    );
};

export default Footer;