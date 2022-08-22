import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Seat from "../components/Seat";

const Booking = (props) => {

    const [pay, setPay]= useState(false);
    const[seatForPay, setSeatForPay]=useState([]);

    const navigate = useNavigate();

    const getSeatForPay = (selectedSeat)=>{
        //기존 선택된 좌석에 새것들을 붙인다.
     setSeatForPay(seatForPay.concat(selectedSeat))
        
    }

    //내용확인
    console.log(seatForPay)
    //타입확인
    console.log(Object.keys(seatForPay))
    console.log(typeof Object.keys(seatForPay))
    

    const myPage=()=>{
        navigate("/mypage");
    }

    //선택한 좌석 id 받아서 fetch/axios 

   const movie =[
            {
                id : 1,
                title:"이상한 변호사 우영우"
            },
   ]

   const seatA =[
        {
            id : 1,
            },
        {
            id : 2,
            },
        {
            id : 3,
            }, 
        {
            id : 4,
            },  
        {
            id : 5,
            }
                
        ]
            
        
    const seatB =   [6,7,8,9,10]

   
    return (
        <div style={{margin: "60px"}}>
            <h1>예매 페이지 입니다</h1>
            <h3>좌석</h3>
            <div>
                <div>
                    {seatA.map((seat,isSelect)=>(
                        <Seat getSeatForPay={getSeatForPay} isSelect={isSelect} seat={seat} key={seat.id}/>
                    ))}
                </div>
                <div>
                    {seatB.map((seat,i)=>(
                    <Seat  seat={seat} key={i}/>
                ))}
               </div>
            </div>


            <button onClick={myPage} style={{backgroundColor:"yellow"}}>결제하기</button>
        </div>
    );
};

export default Booking;