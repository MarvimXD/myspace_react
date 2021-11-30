import React, { useState } from "react";
import './css/main_css.css';

export default function Portfolio() {

    const[showMenuPort, setMenuPort] = useState(true);
    function menuPort() {
        setMenuPort((mp) => !mp);
    }

    return(
        <div>
            <section className="body-general-container">
                <div className="section-portfolio-general">
                    <div className="tittle-portfolio">
                        <h2>Portfólio</h2>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div id="nav-portfolio-field" className="navigation-menu-portfolio-field">
                        <nav className="portfolio-menu">
                            <ul>
                                <li className="li-pc-version"><a>Programação</a></li>

                                <li className="li-pc-version"><a>Músicas</a></li>
                                <li className="li-pc-version"><a>Dev</a></li>

                                

                                
                            </ul>
                        </nav>
                        <nav className="potfolio-menu-phone">
                            <ul>
                                <li onClick={menuPort}><a>Programação</a>
                                    <li style={{display: showMenuPort ? "none" : "block"}}><a>Músicas</a></li>
                                    <li style={{display: showMenuPort ? "none" : "block"}}><a>Dev</a></li>
                                </li>

                                
                            </ul>
                        </nav>
                    </div>
                    <div id="content-portfolio-field" className="navigation-menu-portfolio-field">
                        
                    </div>
                </div>
            </section>
            <div className="box-separ"></div>
        </div>
    );
}