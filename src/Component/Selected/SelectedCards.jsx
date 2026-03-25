import React from 'react';
import Selected from './Selected';

const SelectedCards = ({pp,k,setCoin}) => {

    return (
        <div className='flex flex-col gap-3'>
            {
                pp.map(v => <Selected key={v.player_name} pp={v} k={k} setCoin={setCoin}></Selected>)
            }
        </div>
    );
};

export default SelectedCards;