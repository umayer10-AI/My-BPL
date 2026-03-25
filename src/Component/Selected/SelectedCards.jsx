import React from 'react';
import Selected from './Selected';

const SelectedCards = ({pp,k,setCoin,h}) => {

    return (
        <div>
            <div className='flex justify-end mb-2'>
                <button onClick={h} className='btn btn-info text-white'>Clear All</button>
            </div>
            <div className='flex flex-col gap-3'>
                {
                    pp.map(v => <Selected key={v.player_name} pp={v} k={k} setCoin={setCoin}></Selected>)
                }
            </div>
        </div>
    );
};

export default SelectedCards;