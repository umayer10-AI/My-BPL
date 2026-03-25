import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";

const AvailableCards = ({p,g,coin,setCoin}) => {

    const [btn, setBtn] = useState(false);

    const a = () => {
        if(coin < Number(p.price)){
            return;
        }
        g(p)
        setBtn(true)
        setCoin(c => c - Number(p.price))
    }

    return (
        <div className='border border-gray-600 p-4 rounded-xl space-y-1 h-full'>
            <div>
                <img className='rounded-xl w-full object-cover h-50' src={p.player_image} alt="" />
            </div>
            <div className='flex items-center gap-4 mt-2'>
                <p className='text-xl'><FaUser /></p>
                <p className='text-lg font-semibold'>{p.player_name}</p>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <p className='text-xl'><FaFlag /></p>
                    <p>{p.player_country}</p>
                </div>
                <button className='btn btn-error'>{p.playing_role}</button>
            </div>
            <hr className='text-gray-500 mt-4'/>
            <h2 className='font-semibold'>Rating - <span>{p.rating}</span></h2>
            <div className='flex justify-between items-center'>
                <h2 className='font-semibold'>{p.batting_style}</h2>
                <h2 className='text-gray-400'>{p.batting_style}</h2>
            </div>
            <div className='flex justify-between items-center'>
                <h2 className='font-semibold'>Price: <span>{p.price}</span> BDT</h2>
                <button onClick={a} disabled={btn} className='btn btn-info text-white'>{btn ? "selected" : "Choose Player"}</button>
            </div>
        </div>
    );
};

export default AvailableCards;