import React from "react";
import { useNavigate } from 'react-router-dom';
// import '../commonStyle.css';




function Thanks() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Cart')
    }

    return (
        <>
            <div className="thankssec">

                <p>Thanks for Ordering and you will receive the Ordered items shortly!!!</p>
                <button onClick={(e) => handleClick()}>click to Home page</button>

            </div>


        </>
    );
}

export default Thanks;