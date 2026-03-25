import React, { useEffect, useState } from 'react';
import axios from "axios"
import AvailableCards from './AvailableCards';

const Available = ({g,coin,setCoin}) => {

    const [api, setApi] = useState([]);
    const [loading, setL] = useState(true);

    useEffect(() => {
        const a = async () => {
            try{
                setL(true)
                const b = await axios.get("Player.json");
                setApi(b.data)
            }
            finally{
                setL(false)
            }
        }
        a();
    },[])

    if(loading) return <span className="loading loading-spinner loading-xl"></span>

    return (
        <div className='mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                api.map((v,i) => <AvailableCards key={i} p={v} g={g} coin={coin} setCoin={setCoin}></AvailableCards>)
            }
            
        </div>
    );
};

export default Available;