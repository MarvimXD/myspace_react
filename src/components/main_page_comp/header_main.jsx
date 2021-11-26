import React, { useState } from "react";
import './css/main_css.css';
import help_robot from "./img/help_robot.png";

export default function Headermain() {

    const[show, setShow] = useState(true);

    function showMenu() {
        setShow((s) => !s);
    }

    return(
        <div>
            <div className="header-general-container">
                
                <div className="header-menu-logo">
                    <h2>MYSPACE</h2>
                </div>
                <div className="header-menu-container">
                    <button className="menu-header-button"><a href="">HOME</a></button>
                    <button className="menu-header-button"><a href="">PORTFÓLIO</a></button>
                    <button className="menu-header-button"><a href="">CODE</a></button>
                    <button className="menu-header-button"><a id="login-button-pc-version" href="https://webdeveasy.vercel.app/">WEBDEVEASY</a></button>
                </div>
            </div>
            
            <div className="header-menu-smartphone-display-container">
                <div id="square-menu-id" className="header-menu-square">
                    <img style={{ display: show ? "none" : "block" }} id="img-menu-smartphone-aux" src="https://findicons.com/files/icons/129/soft_scraps/256/button_talk_balloon_01.png" alt="" />
                    <button id="btn-menu" onClick={showMenu}>
                        <img id="img-menu-smartphone" src={help_robot} alt="" />
                    </button>
                    <div className="header-menu-menu-options-container" style={{ marginLeft: show ? "-100em" : "0em" }}>
                    
                            <div className="header-menu-options-button">
                                <div className="header-menu-options-centralize">
                                    <a href="">HOME</a>
                                </div>
                            </div>
                            <div className="header-menu-options-button">
                                <div className="header-menu-options-centralize">
                                    <a href="">PORTFÓLIO</a>
                                </div>
                            </div>
                            <div className="header-menu-options-button">
                                <div className="header-menu-options-centralize">
                                    <a href="">CODE</a>
                                </div>
                            </div>
                            <div className="header-menu-options-button">
                                <div className="header-menu-options-centralize">
                                    <a id="login-button-phone-version" href="https://webdeveasy.vercel.app/">WEBDEVEASY</a>
                                </div>
                            </div>
                            
                   </div>
                   
                </div>
                
                
            </div>
            
            
        </div>
    );
}