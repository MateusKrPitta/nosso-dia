import { useEffect, useState } from "react";
import "./home.css";
import Imagem1 from '../../assets/imagem1.jpg';

export default function Home({ onStart }) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 500);
  }, []);

  return (
    <div className={`tela-inicial ${fadeIn ? "fade-in" : ""}`}>
      <img style={{ width: '50%', borderRadius: "100px" }} src={Imagem1} alt="Imagem de celebração" />
      <h1 style={{ fontWeight: '700' }}>Feliz 2 anos de namoro meu amor! 💖</h1>
      <p style={{ fontWeight: '700' }}>Dois anos de momentos incríveis, amor e muito carinho !!!</p>
      <button className="pulsar" style={{ fontWeight: '700' }} onClick={onStart}>
        Explorar nossa história
      </button>
    </div>
  );
}