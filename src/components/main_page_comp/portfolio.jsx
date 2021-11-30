import React, { useState } from "react";
import './css/main_css.css';

export default function Portfolio() {

    

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
                                <li><a>Projetos</a></li>
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