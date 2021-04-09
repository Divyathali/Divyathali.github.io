import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    
    const fb=()=>{
        window.location.href = "https://www.facebook.com/divyath.shaj/";
    }
    const github=()=>{
        window.location.href = "https://github.com/Divyathali";
    }
    const insta=()=>{
        window.location.href = "https://www.instagram.com/divyathshajahan/";
    }
    
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Divyath Ali.</span>
                </h1>
                <p className="h-sub-text">
                    "Manners Maketh Man"
                </p>
                <div className="icons">
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" onClick={fb} />
                    </Link>
                    <Link to="./https://github.com/" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh"  onClick={github}/ >
                    </Link>
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faInstagram} className="icon yt" onClick={insta}/>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
