import React from 'react'
import avatar from '../img/avatar.png';
import {NavLink} from 'react-router-dom';
import './modules.css';

function Navbar() {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt=""/>
                 </div>

                    {/*new log start */}
                        <div className="container">
                                <div className="box">
                                    <div className="side side--front">                                    
                                        <button>  
                                            <NavLink to="/" exact activeClassName="active">
                                                <p>Home</p>
                                            </NavLink>
                                        </button>
                                        <button> 
                                            <p>
                                                <NavLink to="/about" exact activeClassName="active">
                                                     About
                                                </NavLink>
                                            </p> 
                                        </button>
                                        <button> 
                                            <NavLink to="/portfolios" exact activeClassName="active">
                                                    Portfolios
                                            </NavLink>
                                        </button>
                                        <button> 
                                            <NavLink to="/contact" exact activeClassName="active">                           Contact
                                            </NavLink>
                                        </button>
                                        <div className="shape"></div>
                                    </div>
                                    <div className="side side--left"></div>
                                    <div className="side side--top"></div>
                                </div>
                            </div>              

                {/*end */}

                <ul className="nav-items">                    
                    <li className="nav-item">
                        <NavLink to="/blogs" exact activeClassName="active">
                            Blogs
                        </NavLink>
                    </li>                 
                </ul>

                <footer className="footer">
                    <p>
                        @2021 Divyath ali
                    </p>
            </footer>
            </nav>
            
        </div>
    )
}

export default Navbar;
