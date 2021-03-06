import { Container } from "@mui/material";
import React, { useState } from "react";
import './css/main_css.css';
import victor from "./img/victor.png";
import theysay from "./img/theysay.png"
import robot_flying from "./gifs/robot.gif"
import myspacev2 from "./img/myspace-2-15.png";
import myspacev4 from "./img/myspace-4-17.png";
import myspacev5 from "./img/myspace-5.png";
import myspacevx from "./img/myspace-X.png";
import instagram from "./img/instagram-icon.png";
import discord from "./img/discord-icon.png";
import amostra_myspace2019 from "./img/amostra-myspacev2.jpg";
import amostra_myspace2020 from "./img/amostra-myspacev4.jpg";
import amostra_myspace2021 from "./img/amostra-myspacev5.jpg";
import Portfolio from "./portfolio.jsx";
import help_robot from "./img/help_robot.png";


export default function Bodypage() {

    // HEADER
    const[show, setShow] = useState(true);

    function showMenu() {
        setShow((s) => !s);
    }


    // FAQ 
    const[showR1, setR1] = useState(true);
    const[showR2, setR2] = useState(true);
    const[showR3, setR3] = useState(true);
    const[showR4, setR4] = useState(true);

    function showQuestionUm() {
        setR1((r1) => !r1);
    }
    function showQuestionDois() {
        setR2((r2) => !r2);
    }
    function showQuestionTres() {
        setR3((r3) => !r3);
    }
    function showQuestionQua() {
        setR4((r4) => !r4);
    }


    // AMOSTRAS
    const[showAm1, setAm1] = useState(true);
    const[showAm2, setAm2] = useState(true);
    const[showAm3, setAm3] = useState(true);

    function showAmostraUm() {
        setAm1((am1) => !am1);
    }
    function showAmostraDois() {
        setAm2((am2) => !am2);
    }
    function showAmostraTres() {
        setAm3((am3) => !am3);
    }

    
    // PORTFOLIO

    const[showPort, setPort] = useState(true);
    function mostrarPortfolio() {
      setPort((p) => !p);
    }
   
    
    
    

    return(
            <div className="all_app_body">
                <div className="header-general-container">
                    
                    <div className="header-menu-logo">
                        <h2>MYSPACE</h2>
                    </div>
                    <div className="header-menu-container">
                        <button className="menu-header-button"><a href="">HOME</a></button>
                        <button className="menu-header-button"><a onClick={mostrarPortfolio}>PORTF??LIO</a></button>
                        <button className="menu-header-button"><a href="">CODERS</a></button>
                        <button className="menu-header-button"><a target="_blank" id="login-button-pc-version" href="https://webdeveasy.vercel.app/">WEBDEVEASY</a></button>
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
                                        <a onClick={mostrarPortfolio}>PORTF??LIO</a>
                                    </div>
                                </div>
                                <div className="header-menu-options-button">
                                    <div className="header-menu-options-centralize">
                                        <a href="">CODERS</a>
                                    </div>
                                </div>
                                <div className="header-menu-options-button">
                                    <div className="header-menu-options-centralize">
                                        <a target="_blank" id="login-button-phone-version" href="https://webdeveasy.vercel.app/">WEBDEVEASY</a>
                                    </div>
                                </div>
                                
                    </div>
                    
                    </div>
                
                
            </div>
            <Container maxWidth="xl">
                <section style={{display: showPort ? "block" : "none"}} className="body-general-container">
                    <div className="box-separ"></div>
                    {/* HOME */}
                    <div className="title">
                        <h2>BOAS VINDAS AO <br /> MYSPACE</h2>
                    </div>
                    <div className="item">
                        <p>Este ?? o My Space Together. Meu portf??lio pessoal. <br /> 
                        Aqui basicamente tem os meus projetos que s??o pra fins de estudo, <br /> 
                        passatempo e bl?? bl?? bl??. Ent??o caso voc?? tenha interesse em fazer <br />
                        sei l?? o que aqui seja feliz =)</p>
                    </div>
                    <div className="images-body-sec-one">
                        <div className="campo-body-field" id="campo-body-um">
                            <a href="#"><img src={victor} alt="" /></a>
                        </div>
                        <div className="campo-body-field" id="campo-body-dois">
                            <a href="https://www.youtube.com/channel/UCELEfywhY3RTzxtXJTtlaTg" target="_blank"><img src={theysay} alt="" /></a>
                        </div>
                        <div className="campo-body-field" id="campo-body-tres">
                            <img src={robot_flying} alt="" />
                        </div>
                    </div>

                    

                </section>
                {/* PORTFOLIO */}
                <div style={{display: showPort ? "none" : "block"}} className="portfolio-section-inside-bodypage">
                    <div className="box-separ"></div>
                    <Portfolio />
                    <div className="box-separ"></div>
                </div>
                {/* END PORTFOLIO */}
                <div className="box-separ"></div>
                <section style={{display: showPort ? "block" : "none"}} className="body-general-container">
                    <div className="title">
                        <h2 id="title-h2-section-two">THE ROAD SO FAR</h2>
                    </div>
                    <div className="item">
                        <p id="title-p-section-two">H?? muito tempo, numa gal??xia muito, <br />
                        muito distante... Nascia o MYSPACETOGETHER. <br />
                        Um site que n??o agrega nada a vida de ningu??m <br />
                        mas t?? a?? se quiser ver alguma coisa ou se eu quiser lembrar de alguma <br />
                        coisa algum dia. Logo a?? embaixo vossamec??, caro(a) leitor(a), vai encontrar todo o <br /> 
                        caminho percorrido at?? aqui, ou seja, as vers??es deste ???incr??vel??? site cujo <br />
                        o qual lhes fala.</p>
                    </div>
                    <div className="images-body-sec-two">
                            <div className="campo-body-field-sec-2" id="campo-zero-sec-2">
                                
                            </div>
                            <div onClick={showAmostraUm} className="campo-body-field-sec-2" id="campo-um-sec-2">
                                <img id="campo-um-sec-2-img" src={myspacev2} alt="" />
                            </div>
                            <div onClick={showAmostraDois} className="campo-body-field-sec-2" id="campo-dois-sec-2">
                                <img id="campo-dois-sec-2-img" src={myspacev4} alt="" />
                            </div>
                            <div onClick={showAmostraTres} className="campo-body-field-sec-2" id="campo-tres-sec-2">
                                <img id="campo-tres-sec-2-img" src={myspacev5} alt="" />
                            </div>
                            <div className="campo-body-field-sec-2" id="campo-quatro-sec-2">
                                <img id="campo-quatro-sec-2-img" src={myspacevx} alt="" />
                            </div>
                    </div>
                </section>
                <section className="body-general-container">
                    <div style={{display: showAm1 ? "none" : "flex"}} className="amostras-images-body-sec-two">
                            <div className="amostras-campo-body-field-sec-2" id="campo-um-sec-2">
                                
                                <img src={amostra_myspace2019} alt="" />
                                <p>Tudo come??ou aqui... 2019. Quando eu, ap??s estudar um pouco sobre as 
                                linguagens de desenvolvimento e programa????o Web (HTML, CSS e JavaScript), <br />
                                resolvi me aventurar e criar um portf??lio simples pra guardar alguns projetos <br />
                                que eu tinha em mente. Nada a mais que isso.</p>
                            </div>
                            
                    </div>
                    <div style={{display: showAm2 ? "none" : "flex"}} className="amostras-images-body-sec-two">
                            <div className="amostras-campo-body-field-sec-2" id="campo-um-sec-2">
                                <img src={amostra_myspace2020} alt="" />
                                <p>Dando continuidade ao que comecei, em 2020 resolvi implementar, ap??s um loooongo <br />
                                per??odo de estudo sobre CSS, estiliza????o naquele pequeno portf??lio que criei <br />
                                h?? um ano atr??s... Incluindo p??ginas diversas com um Layout bonito (pelo <br />
                                menos eu tentei) e comecei na tentativa de deixar responsivo.</p>
                            </div>
                            
                    </div>
                    <div style={{display: showAm3 ? "none" : "flex"}} className="amostras-images-body-sec-two">
                            <div className="amostras-campo-body-field-sec-2" id="campo-um-sec-2">
                                <img src={amostra_myspace2021} alt="" />
                                <p>Bom, como nem tudo s??o flores, em 2021 meu objetivo j?? era come??ar a <br />
                                implementar um back-end de Login e Register, e foi ai que eu acabei deixando de lado <br />
                                o tal do Layout Responsivo e foquei no que eu queria... At?? que finalmente eu <br />
                                consegui adicionar um <strong>fucking</strong> BANCO DE DADOS ao meu pequeno portf??lio.</p>
                            </div>
                            
                    </div>
                </section>
                <div className="box-separ"></div>
                <section className="body-general-container">
                    <div className="title">
                        <h2 id="title-h2-section-tree">FAQ</h2>
                    </div>
                    
                    <div className="images-body-sec-tres">
                            <div className="campo-body-field-sec-3" id="campo-um-sec-3">
                                <div onClick={showQuestionUm} className="faq-field" id="quest1">
                                    <p className="questions-p">T?? mas em que esse site vai agregar na minha vida?</p>
                                </div>
                                <div style={{display: showR1 ? "none" : "block"}} className="faq-field-answer" id="resp1">
                                    <p className="answers-p">Provavelmente em nada.</p>
                                </div>

                                <div onClick={showQuestionDois} className="faq-field" id="quest2">
                                    <p className="questions-p">Pra que tu fez esse site?</p>
                                </div>
                                <div style={{display: showR2 ? "none" : "block"}} className="faq-field-answer" id="resp2">
                                    <p className="answers-p">Como eu disse l?? no come??o, para ABSOLUTAMENTE nada al??m <br />
                                    de ter onde guardar as coisas que eu fa??o on-line e poder <br />
                                    acessar de qualquer canto caso eu precise ver algum c??digo <br />
                                    que eu tenha feito ou coisa do g??nero... Ent??o n??o enche o saco.</p>
                                </div>
                                
                                <div onClick={showQuestionTres} className="faq-field" id="quest1">
                                    <p className="questions-p">T?? usando o celular e agora?</p>
                                </div>
                                <div style={{display: showR3 ? "none" : "block"}} className="faq-field-answer" id="resp3">
                                    <p className="answers-p">Tem um rob?? que fica seguindo voc?? no site, clica nele <br />
                                    ae que tu vai ver o menu. E se tiver algum problema ?? <br />
                                    porque eu ainda n??o arrumei o layout respons??vo do site.</p>
                                </div>
                                
                                <div onClick={showQuestionQua} className="faq-field" id="quest2">
                                    
                                    <p className="questions-p">O que que d?? pra fazer no teu site?</p>
                                </div>
                                <div style={{display: showR4 ? "none" : "block"}} className="faq-field-answer" id="resp4">
                                    <p className="answers-p">T?? perguntando d+ j??</p>
                                </div>
                                <a className="img-discord-insta-celu" href="https://www.instagram.com/jvbeesan/" target="_blank"><img src={instagram} alt="" /></a>
                                <a className="img-discord-insta-celu"  href="https://discord.gg/5smuHr8N8n" target="_blank" ><img src={discord} alt="" /></a>
                            </div>
                            
                            <div className="campo-body-field-sec-3" id="campo-dois-sec-3">
                                <a href="https://www.instagram.com/jvbeesan/" target="_blank"><img src={instagram} alt="" /></a>
                                <a  href="https://discord.gg/5smuHr8N8n" target="_blank" ><img src={discord} alt="" /></a>

                                <section className="body-general-container" id="footer-phone">
                                    <div className="footer"></div>
                                </section>
                            </div>
                           
                    </div>
                    
                </section>
                
            </Container>
        </div>
    );
}