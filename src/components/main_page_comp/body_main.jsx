import { Container } from "@mui/material";
import React from "react";
import './css/main_css.css';
import victor from "./img/victor.png";
import theysay from "./img/theysay.png"
import robot_flying from "./gifs/robot.gif"

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
                <section className="body-general-container">
                    
                </section>
            </Container>
        </div>
    );
}