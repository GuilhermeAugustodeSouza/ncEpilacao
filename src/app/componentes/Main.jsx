'use client'
import React from 'react';
import estilos from "./Main.module.css";
import Image from "next/image";
import imagem1 from "./../../../public/1752859044108.jpg";
import imagem2 from "./../../../public/download (1).jpg";
import imagem3 from "./../../../public/Full body waxing_.jpg";
import imagem4 from "./../../../public/ceraQuente.jpg";
import imagem5 from "./../../../public/22122cf76f986cd49ff6b9375ef72208.jpg";
import imagem6 from "./../../../public/images.jpg";
import Link from 'next/link';
export default function Main() {

  function botaoWhatsapp(){
    const numero='5531992085131';
    const mensagem= 'Olá, gostaria de mais informações!';
    const url= `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  }
  return (

    <div className={estilos.containerMain}>
     <div className={estilos.boxText}>

     </div>

      <div className={estilos.containerCard}>

        <div className={estilos.card}>
          <Image src={imagem1} alt={"Agente Epiladora"} />
          <h2>Chega de pelos!</h2>
          <p>
            {" "}
            Livre-se dos pelos indesejados com o método mais moderno e
            tecnológico do mercado. Não perca tempo!
          </p>
          <button onClick={botaoWhatsapp}>Whatsapp</button>
        </div>

        <div className={estilos.card}>
          <Image src={imagem2} alt={"Agente Epiladora"} />
          <h2>Epilação segura e eficaz!</h2>
          <p>
            {" "}
           Sua pele merece esse cuidado!
           Pele lisinha o ano todo.
           Adeus pelos, olá liberdade.
          </p>
          <button onClick={botaoWhatsapp}>Whatsapp</button>
        </div>

        <div className={estilos.card}>
          <Image src={imagem3} alt={"Agente Epiladora"} />
          <h2>Seu momento de autocuidado</h2>
          <p>
            {" "}
            Livre-se dos pelos indesejados com o método mais moderno e
            tecnológico do mercado.
          </p>
          <button onClick={botaoWhatsapp}>Whatsapp</button>
        </div>

        <div className={estilos.card}>
          <Image src={imagem4} alt={"Agente Epiladora"} />
          <h2>Menos dor, mais conforto!</h2>
          <p>
            {" "}
            Livre-se dos pelos indesejados com o método mais moderno e
            tecnológico do mercado.
          </p>
          <button onClick={botaoWhatsapp}>Whatsapp</button>
        </div>

        <div className={estilos.card}>
          <Image src={imagem5} alt={"Agente Epiladora"} />
          <h2>Pele lisa, toque de seda!</h2>
          <p>
            {" "}
           Resultados duradouros e menos agressão à sua pele.
           Experimente uma epilação delicada e eficaz, pensada para você.
          </p>
          <button onClick={botaoWhatsapp}>Whatsapp</button>
        </div>

        <div className={estilos.card}>
          <Image src={imagem6} alt={"Agente Epiladora"} />
          <h2>Livre de pelos, livre para brilhar!</h2>
          <p>
            {" "}
           Agende sua sessão e sinta a diferença desde o primeiro toque.
          Epilação profissional com carinho, respeito e higiene.
          </p>
          <button onClick={botaoWhatsapp}>Whatsapp</button>
        </div>


      </div>

    </div>
  );
}
