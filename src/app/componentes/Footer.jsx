import estilos from "./Footer.module.css";
import Image from "next/image";
import imagem5 from "./../../../public/1752859044101.jpg";

export default function Footer() {
  return (
    <div className={estilos.containerRodape}>
      <Image src={imagem5} alt={"imagemLogo"} />
    </div>
  );
}
