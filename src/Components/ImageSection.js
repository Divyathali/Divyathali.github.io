import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
    const download_cv=()=>{
        window.location.href="https://drive.google.com/file/d/1gYJr3bgjum_YWlC4RaOWtX7WS0zqiN-I/view";
    }
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Divyath ali</span></h4>
                <p className="about-text">
                    To work in a challenging environment where I can contribute
    myself that enables me to cope with emerging as well as latest technologies
    by continuous improvement in my knowledge.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <br/>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: Divyath ali</p>
                        <p>: 26</p>
                        <p>: Indian</p>
                        <p>: English,Tamil,Hindi(speak only)</p>
                        <p>: 6/67, West Street, Kokkarayan Pettai, Kumarapalayam (Tk), Namakkal (Dt) -638007.</p>
                        <p>: India</p>
                    </div>
                </div>                
                <button className="btn" onClick={download_cv}>Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;
