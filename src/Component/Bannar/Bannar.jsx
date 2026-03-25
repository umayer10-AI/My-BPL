import React from 'react';
import img from "../../assets/banner-main.png"
import pic from "../../assets/bg-shadow.png"

const Bannar = () => {
    return (
        <div style={{backgroundImage: `url(${pic})`}} className={`flex justify-center items-center bg-cover bg-center rounded-2xl mt-5`}>
            <div className='text-center py-10 space-y-3'>
                <div>
                    <img className='mx-auto w-[25%]' src={img} alt="" />
                </div>
                <h2 className='text-3xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <p className='font-semibold text-gray-400'>Beyond Boundaries Beyond Limits</p>
                <div className='flex justify-center items-center'>
                    <button className='btn btn-warning font-bold'>Claim Free Credit</button>
                </div>
            </div>
        </div>
    );
};

export default Bannar;