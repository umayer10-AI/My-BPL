import React from 'react';
import { MdDeleteForever } from "react-icons/md";

const Selected = ({pp,k,setCoin}) => {

    const a = () => {
        k(pp.player_name)
        setCoin(c => c + Number(pp.price))
    }

    return (
        
            <div className='border flex justify-between items-center p-4 rounded-xl'>
                <div className='flex items-center gap-4'>
                    <img className='w-15 h-15 object-cover rounded-xl' src={pp.player_image} alt="" />
                    <div>
                        <h2 className='font-bold'>{pp.player_name}</h2>
                        <h2>{pp.playing_role}</h2>
                    </div>
                </div>
                <h2 onClick={a} className='text-2xl text-red-500 bg-white p-2 rounded-full mr-5'><MdDeleteForever /></h2>
            </div>
    );
};

export default Selected;