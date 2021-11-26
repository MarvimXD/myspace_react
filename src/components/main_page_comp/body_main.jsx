import { Container } from "@mui/material";
import React from "react";
import './css/main_css.css';
import victor from "./img/victor.png";
import theysay from "./img/theysay.png"
import robot_flying from "./gifs/robot.gif"
import myspacev2 from "./img/myspace-2-15.png";
import myspacev4 from "./img/myspace-4-17.png";
import myspacev5 from "./img/myspace-5.png";
import myspacevx from "./img/myspace-X.png";

export default function Bodypage() {
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
                            <img src={victor} alt="" />
                        </div>
                        <div className="campo-body-field" id="campo-body-dois">
                            <img src={theysay} alt="" />
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
                                <img src={myspacev2} alt="" />
                            </div>
                            <div className="campo-body-field-sec-2" id="campo-dois-sec-2">
                                <img src={myspacev4} alt="" />
                            </div>
                            <div className="campo-body-field-sec-2" id="campo-tres-sec-2">
                                <img src={myspacev5} alt="" />
                            </div>
                            <div className="campo-body-field-sec-2" id="campo-quatro-sec-2">
                                <img src={myspacevx} alt="" />
                            </div>
                    </div>
                </section>
            </Container>
        </div>
    );
}