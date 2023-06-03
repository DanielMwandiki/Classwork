import React from "react";
import myImage from "./images/image-qr-code.png"
import './App.css';

    function QRcode(){
        
            return (
                <div className = "container">
                <img src={myImage} alt="" /> 
                <h1>Improve your front-end skills by building projects</h1>
                <p>
                    Scan the QR code to visit Frontend Mentor and take your coding skills to
                    the next level
                </p>
                </div>
            );
    
    };

export default QRcode;