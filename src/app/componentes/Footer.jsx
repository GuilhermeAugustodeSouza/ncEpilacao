import estilos from "./Footer.module.css";
import Image from "next/image";
import imagem5 from "./../../../public/1752859044101.jpg";

export default function Footer() {
  return (
    <div className={estilos.containerRodape}>
     <div className={estilos.BoxText}> 
      <h3>QUEM SOMOS</h3>
      <p>
        “Trabalhamos com epilação feminina oferecendo um atendimento acolhedor,
        higiênico e profissional. Nosso foco é proporcionar conforto, autoestima
        e bem-estar a cada cliente, sempre respeitando a individualidade de cada
        mulher.”
      </p>
      </div>
     
    </div>
  );
}
