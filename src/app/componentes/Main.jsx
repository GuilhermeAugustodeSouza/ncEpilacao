import estilos from "./Main.module.css";
import Image from "next/image";
import imagem1 from "./../../../public/1752859044108.jpg";
import imagem2 from "./../../../public/download (1).jpg";
import imagem3 from "./../../../public/Full body waxing_.jpg";
import imagem4 from "./../../../public/ceraQuente.jpg";
export default function Main() {
  return (

    <div className={estilos.containerMain}>

      <div className={estilos.containerCard}>

        <div className={estilos.card}>
          <Image src={imagem1} alt={"Agente Epiladora"} />
          <h2>Chega de pelos!</h2>
          <p>
            {" "}
            Livre-se dos pelos indesejados com o método mais moderno e
            tecnológico do mercado.
          </p>
          <button>Chamar no Whatsapp</button>
        </div>

        <div className={estilos.card}>
          <Image src={imagem2} alt={"Agente Epiladora"} />
          <h2>Chega de pelos!</h2>
          <p>
            {" "}
            Livre-se dos pelos indesejados com o método mais moderno e
            tecnológico do mercado.
          </p>
          <button>Chamar no Whatsapp</button>
        </div>

        <div className={estilos.card}>
          <Image src={imagem3} alt={"Agente Epiladora"} />
          <h2>Chega de pelos!</h2>
          <p>
            {" "}
            Livre-se dos pelos indesejados com o método mais moderno e
            tecnológico do mercado.
          </p>
          <button>Chamar no Whatsapp</button>
        </div>

        <div className={estilos.card}>
          <Image src={imagem4} alt={"Agente Epiladora"} />
          <h2>Chega de pelos!</h2>
          <p>
            {" "}
            Livre-se dos pelos indesejados com o método mais moderno e
            tecnológico do mercado.
          </p>
          <button>Chamar no Whatsapp</button>
        </div>

      </div>

    </div>
  );
}
