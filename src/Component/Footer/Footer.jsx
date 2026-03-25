import React from 'react';
import img from "../../assets/logo-footer.png"

const Footer = () => {
    return (
        <div className='bg-base-300 pt-50'>
            <div className='max-w-[90%] mx-auto'>
                <div className='flex justify-center items-center mb-5'>
                    <img src={img} alt="footer logo" />
                </div>
                <div className='flex flex-wrap justify-between py-10 pb-15'>
                    <div className='space-y-3'>
                        <h2 className='text-xl font-bold'>About Us</h2>
                        <ul className='text-gray-400'>
                            <li>We are a passionate team </li>
                            <li>dedicated to providing the best </li>
                            <li>services to our customers.</li>
                        </ul>
                    </div>
                    <div className='space-y-3'>
                        <h2 className='text-xl font-bold'>Quick Links</h2>
                        <ul className='text-gray-400 list-disc ml-5'>
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <form className='space-y-3'>
                        <h2 className='text-xl font-bold'>Subscribe</h2>
                        <fieldset className="w-80">
                        <label className='text-gray-400'>Subscribe to our newsletter for the latest updates.</label>
                        <div className="join mt-4">
                            <input
                            type="text"
                            placeholder="Enter your email"
                            className="input input-bordered join-item rounded-l-lg bg-white placeholder:text-gray-400" />
                            <button className="btn btn-warning font-bold join-item rounded-r-lg">Subscribe</button>
                        </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;