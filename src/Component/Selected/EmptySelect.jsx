import React from 'react';
import { FaReact } from "react-icons/fa";

const EmptySelect = () => {
    return (
        <div className='flex justify-center items-center rounded-xl bg-pink-900'>
            <div className='text-center space-y-2 py-10'>
                <h2 className='text-5xl flex justify-center'><FaReact /></h2>
                <h2 className='text-2xl font-bold'>No Player Available</h2>
                <h2 className='text-lg font-semibold'>Please select players</h2>
            </div>
        </div>
    );
};

export default EmptySelect;