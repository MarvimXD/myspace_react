import React, { useState } from "react";
import './css/main_css.css';
import adivinhe from "./img/img_projetos/adivinhe-ico.png";
import agencia from "./img/img_projetos/agencia-ico.png";
import calculadora from "./img/img_projetos/calculadora-ico.png";
import coracao from "./img/img_projetos/coracao-ico.png";
import cronometro from "./img/img_projetos/cronometro-ico.png";
import desenhe from "./img/img_projetos/desenhe-ico.png";
import elefante from "./img/img_projetos/elefante-ico.png";
import logineregistro from "./img/img_projetos/logineregistro-ico.png";
import meki from "./img/img_projetos/meki-ico.png";
import musica from "./img/img_projetos/musica-ico.png";
import plaqua from "./img/img_projetos/plaqua-ico.png";
import sorvete from "./img/img_projetos/sorvete-ico.png";

export default function Portfolio() {

    const[showMenuPort, setMenuPort] = useState(true);
    function menuPort() {
        setMenuPort((mp) => !mp);
    }

    const[showMusica, setMusica] = useState(true);
    function mostrarMusica() {
        setMusica((music) => !music);
    }

    const[showProgramas, setProgramas] = useState(true);
    function mostrarProjetos() {
        setMusica((proj) => !proj);
    }

    const[showDev, setDev] = useState(true);
    function mostrarDev() {
        setMusica((dev) => !dev);
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
                                <li className="li-pc-version"><a onClick={mostrarProjetos}>Programação</a></li>

                                <li className="li-pc-version"><a onClick={mostrarMusica}>Músicas</a></li>
                                <li className="li-pc-version"><a onClick={mostrarDev}>Dev</a></li>

                                

                                
                            </ul>
                        </nav>
                        <nav className="potfolio-menu-phone">
                            <ul>
                                <li onClick={menuPort}><a onClick={mostrarProjetos}>Programação</a>
                                    <li style={{display: showMenuPort ? "none" : "block"}}><a onClick={mostrarMusica}>Músicas</a></li>
                                    <li style={{display: showMenuPort ? "none" : "block"}}><a onClick={mostrarDev}>Dev</a></li>
                                </li>

                                
                            </ul>
                        </nav>
                    </div>
                    <div id="content-portfolio-field" className="navigation-menu-portfolio-field">
                        <div style={{display: showMusica ? "block" : "none"}} className="programacao-port-menu">
                            <h2>Projetos</h2>
                            <div className="bloco-programacao-menu">
                                <img src={adivinhe} alt="" />
                                <p>Adivinhe</p>
                            </div>
                            <div className="bloco-programacao-menu">
                                <img src={agencia} alt="" />
                                <p>Agência</p>
                            </div>
                            <div className="bloco-programacao-menu">
                                <img src={calculadora} alt="" />
                                <p>Calculadora</p>
                            </div>
                            <div className="bloco-programacao-menu">
                                <img src={coracao} alt="" />
                                <p>Coração</p>
                            </div>
                            <div className="bloco-programacao-menu">
                                <img src={cronometro} alt="" />
                                <p>Cronômetro</p>
                            </div>
                            <div className="bloco-programacao-menu">
                                <img src={desenhe} alt="" />
                                <p>Desenhe</p>
                            </div>
                            <div className="bloco-programacao-menu">
                                <img src={elefante} alt="" />
                                <p>Elefante</p>
                            </div>
                            <div className="bloco-programacao-menu">
                                <img src={logineregistro} alt="" />
                                <p>Login e Registro</p>
                            </div>
                            <div className="bloco-programacao-menu">
                                <img src={meki} alt="" />
                                <p>Meki</p>
                            </div>
                            <div className="bloco-programacao-menu">
                                <img src={plaqua} alt="" />
                                <p>plaQUA</p>
                            </div>
                            <div className="bloco-programacao-menu">
                                <img src={sorvete} alt="" />
                                <p>Sorvete</p>
                            </div>
                        </div>
                        <div style={{display: showMusica ? "none" : "block"}} className="musica-port-menu">
                            <h2>Músicas</h2>
                        </div>
                        <div style={{display: showDev ? "none" : "block"}} className="programacao-port-menu">
                            <h2>Dev</h2>
                        </div>
                    </div>
                </div>
            </section>
            <div className="box-separ"></div>
        </div>
    );
}