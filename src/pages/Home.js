import React from 'react';
import{useNavigate} from 'react-router';
import '../App.css';

const Home = () => {

    const navigate = useNavigate();
    return (
        <div >
            <div style={{width: '100%', height: '100%'}}>
            <div >
                <div>
                    <img style={{width: '200px', height: '300px' }}
                      src="data:image/jpeg;base64,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" 
                    alt="" />
                
                    </div>
                    <button style={{width: '100px', height: '50px'}} onClick={()=>navigate("/book")}> 예매하기</button>
                </div>
            </div>
        </div>
    );
};

export default Home;