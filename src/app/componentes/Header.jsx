import estilos from './Header.module.css';
import Image from'next/image';
import Logo from './../../../public/1752859044095.jpg'; 

export default function Header () {
    return(
<div className={estilos.containerTopo}>
    <div>
         <Image src={Logo} alt={'logo tipo marca da loja'}/>
    </div>
  
   
</div>
    );
}