import Image from "next/image";
import styles from "./page.module.css";
import Header from './componentes/Header.jsx'
import Main from './componentes/Main.jsx';
export default function Home() {
  return (
    <div className={styles.page}>
     <Header/>
     <Main/>
    </div>
  );
}
