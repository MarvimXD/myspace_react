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
import arrow_down from "./img/arrow-down-pink.png";
import arrow_up from "./img/arrow-up-pink.png";

export default function Bodypage() {

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

    return(
        <div className="all_app_body">
            <Container maxWidth="xl">
                <section className="body-general-container">
                    <div className="box-separ"></div>
                    <div className="title">
                        <h2>BOAS VINDAS AO <br /> MYSPACE</h2>
                    </div>
                    <div className="item">
                        <p>Este é o My Space Together. Meu portfólio pessoal. <br /> 
                        Aqui basicamente tem os meus projetos que são pra fins de estudo, <br /> 
                        passatempo e blá blá blá. Então caso você tenha interesse em fazer <br />
                        sei lá o que aqui seja feliz =)</p>
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
                <div className="box-separ"></div>
                <section className="body-general-container">
                    <div className="title">
                        <h2 id="title-h2-section-two">THE ROAD SO FAR</h2>
                    </div>
                    <div className="item">
                        <p id="title-p-section-two">Há muito tempo, numa galáxia muito, <br />
                        muito distante... Nascia o MYSPACETOGETHER. <br />
                        Um site que não agrega nada a vida de ninguém <br />
                        mas tá aí se quiser ver alguma coisa ou se eu quiser lembrar de alguma <br />
                        coisa algum dia. Logo aí embaixo vossamecê, caro(a) leitor(a), vai encontrar todo o <br /> 
                        caminho percorrido até aqui, ou seja, as versões deste “incrível” site cujo <br />
                        o qual lhes fala.</p>
                    </div>
                    <div className="images-body-sec-two">
                            <div className="campo-body-field-sec-2" id="campo-zero-sec-2">
                                
                            </div>
                            <div className="campo-body-field-sec-2" id="campo-um-sec-2">
                                <img id="campo-um-sec-2-img" src={myspacev2} alt="" />
                            </div>
                            <div className="campo-body-field-sec-2" id="campo-dois-sec-2">
                                <img id="campo-dois-sec-2-img" src={myspacev4} alt="" />
                            </div>
                            <div className="campo-body-field-sec-2" id="campo-tres-sec-2">
                                <img id="campo-tres-sec-2-img" src={myspacev5} alt="" />
                            </div>
                            <div className="campo-body-field-sec-2" id="campo-quatro-sec-2">
                                <img id="campo-quatro-sec-2-img" src={myspacevx} alt="" />
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
                                    <p className="questions-p">Tá mas em que esse site vai agregar na minha vida?</p>
                                </div>
                                <div style={{display: showR1 ? "none" : "block"}} className="faq-field-answer" id="resp1">
                                    <p className="answers-p">A resposta é simples: Provavelmente em nada.</p>
                                </div>

                                <div onClick={showQuestionDois} className="faq-field" id="quest2">
                                    <p className="questions-p">Pra que tu fez esse site?</p>
                                </div>
                                <div style={{display: showR2 ? "none" : "block"}} className="faq-field-answer" id="resp2">
                                    <p className="answers-p">Como eu disse lá no começo, para ABSOLUTAMENTE nada além <br />
                                    de ter onde guardar as coisas que eu faço on-line e poder <br />
                                    acessar de qualquer canto caso eu precise ver algum código <br />
                                    que eu tenha feito ou coisa do gênero... Então não enche o saco.</p>
                                </div>
                                
                                <div onClick={showQuestionTres} className="faq-field" id="quest1">
                                    <p className="questions-p">Tô usando o celular e agora?</p>
                                </div>
                                <div style={{display: showR3 ? "none" : "block"}} className="faq-field-answer" id="resp3">
                                    <p className="answers-p">Tem um robô que fica seguindo você no site, clica nele <br />
                                    ae que tu vai ver o menu. E se tiver algum problema é <br />
                                    porque eu ainda não arrumei o layout responsívo do site.</p>
                                </div>

                                <div onClick={showQuestionQua} className="faq-field" id="quest2">
                                    <p className="questions-p">O que que dá pra fazer no teu site?</p>
                                </div>
                                <div style={{display: showR4 ? "none" : "block"}} className="faq-field-answer" id="resp4">
                                    <p className="answers-p">Tá perguntando d+ já</p>
                                </div>
                                
                            </div>
                            <div className="campo-body-field-sec-3" id="campo-dois-sec-3">
                                <a href="https://www.instagram.com/jvbeesan/" target="_blank"><img src={instagram} alt="" /></a>
                                <a  href="https://discord.gg/5smuHr8N8n" target="_blank" ><img src={discord} alt="" /></a>
                            </div>
                           
                    </div>
                    
                </section>
                <section className="body-general-container">
                    <div className="footer"></div>
                </section>
            </Container>
        </div>
    );
}