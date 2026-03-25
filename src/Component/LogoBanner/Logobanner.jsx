import React from 'react';

const Logobanner = () => {
    return (
        <div className='border p-4 rounded-2xl relative top-38'>
            <div className='flex justify-center bg-pink-700 py-15 rounded-2xl'>
                <div className='text-center space-y-5'>
                    <h2 className='text-3xl font-bold'>Subscribe to our Newsletter</h2>
                    <h3 className='text-xl font-semibold'>Get the latest updates and news right in your inbox!</h3>
                    <div className='flex gap-3'>
                        <input type="email" placeholder="Enter your email" className="input bg-white placeholder:text-gray-400 w-full" />
                        <button className='btn btn-warning font-bold'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Logobanner;