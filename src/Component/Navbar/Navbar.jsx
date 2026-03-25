import React from 'react';
import img from "../../assets/logo.png"
import { TbCoinTakaFilled } from "react-icons/tb";


const Navbar = ({coin}) => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center px-15 pt-2 border-b lg:sticky top-0 z-50 backdrop-blur-md bg-black/40'>
            <div>
                <img className='w-15' src={img} alt="Logo" />
            </div>
            <ul className='flex flex-wrap mb-5 lg:mb-0 justify-center items-center gap-7 lg:gap-8 font-semibold'>
                <li>Home</li>
                <li>Fixture</li>
                <li>Teams</li>
                <li>Schedules</li>
            </ul>
            <h2 className='flex items-center gap-2 font-bold border py-1.5 px-2 rounded-lg'><span>{coin}</span> Coin <TbCoinTakaFilled /></h2>
        </div>
    );
};

export default Navbar;