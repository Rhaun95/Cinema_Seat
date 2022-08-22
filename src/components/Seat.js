import React, { useState } from 'react';

const Seat = (props) => {
    const seat = props.seat;
    const [isSelected, setSelected] = useState(false);
    const [seatId, setSeatId] = useState([]);


    const checked=(e)=>{
        setSelected(isSelected?false:true)
        // setSeatId(seat.id)
    }

    const onSubmit=(e)=>{
       e.preventDefault();

        if(isSelected) {
            props.getSeatForPay(seat) 
        }else{
            alert("저장 실패")
        }   
    }
  

    return (
        <>
           <form onSubmit={onSubmit}>
                <button type="submit" onClick={checked} style={{width:"40px", height:"40px", margin:"10px", backgroundColor:isSelected?'lightblue':'white'}}>
                    {seat.id}
                </button>
            </form>
            
        </>
    );
};

export default Seat;