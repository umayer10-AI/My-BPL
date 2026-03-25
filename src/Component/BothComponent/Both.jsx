import React, { useState } from 'react';
import Available from '../Available/Available';
import Selected from '../Selected/Selected';
import SelectedCards from '../Selected/SelectedCards';
import EmptySelect from '../Selected/EmptySelect';

const Both = ({coin,setCoin}) => {

    const [show, setShow] = useState("available")
    const [info, seti] = useState([])

    const g = (e) => {
        seti(c => c.includes(e) ? c : [...c,e])
    }
    
    const k = (e) => {
        seti(c => c.filter(v => v.player_name !== e))
    }

    const h = () => {
        seti(c => {
            const n = c.reduce((a,b) => a+b.price,0)
            setCoin(c => c+n)
        })
        seti([])
    }

    return (
        <div className='mb-10'>
            <div className='flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center my-10'>
                <h2 className='text-2xl font-bold'>{show === "available" ? "Available Players" : `Selected Player (${info.length}/6)`}</h2>
                <div className='flex gap-3 font-semibold'>
                    <button onClick={() => setShow("available")} className={show === "available" ? "btn btn-warning" : "btn btn-primary"}>Available</button>
                    <button onClick={() => setShow("selected")} className={show === "selected" ? "btn btn-warning" : "btn btn-primary"}>Selected (<span>{info.length}</span>)</button>
                </div>
            </div>

            {
                show === "available" && <Available g={g} coin={coin} setCoin={setCoin}></Available>
            }

            {
                show === "selected" && (
                    info.length === 0 ?
                    <EmptySelect></EmptySelect>
                    : <SelectedCards pp={info} k={k} setCoin={setCoin} h={h}></SelectedCards>
                )
            } 

        </div>
    );
};

export default Both;