import { Chrono } from "react-chrono";
import { useState, useEffect, useRef } from "react";
import "./linhatempo.css";
import Imagem2 from '../../assets/imagem2.jpg'; // Corrija os nomes das imagens conforme necessário
import Imagem3 from '../../assets/imagem3.jpg';
import Imagem4 from '../../assets/imagem4.jpg';
import Imagem5 from '../../assets/imagem5.jpg';
import Imagem6 from '../../assets/imagem6.jpg';
import Imagem7 from '../../assets/imagem7.jpg';
import Imagem8 from '../../assets/imagem8.jpg';
import Imagem9 from '../../assets/imagem9.jpg';
import Imagem10 from '../../assets/imagem10.jpg';
import Imagem11 from '../../assets/imagem11.jpg';
import Imagem12 from '../../assets/imagem12.jpg';
import Imagem13 from '../../assets/imagem13.jpg';
import Imagem14 from '../../assets/imagem14.jpg';
import Imagem15 from '../../assets/imagem15.jpg';
import Imagem16 from '../../assets/imagem16.jpg';
import Imagem17 from '../../assets/imagem17.jpg';
import Imagem18 from '../../assets/imagem18.jpg';
import Imagem19 from '../../assets/imagem19.jpg';
import Imagem20 from '../../assets/imagem20.jpg';
import Imagem21 from '../../assets/imagem21.jpg';
import Imagem22 from '../../assets/imagem22.jpg';
import Imagem23 from '../../assets/imagem23.jpg';
import Imagem24 from '../../assets/imagem24.jpg';
import Imagem25 from '../../assets/imagem25.jpg';
import Imagem26 from '../../assets/imagem26.jpg';
import Imagem27 from '../../assets/imagem27.jpg';
import Imagem28 from '../../assets/imagem28.jpg';
import Imagem29 from '../../assets/imagem29.jpg';
import Imagem30 from '../../assets/imagem30.jpg';
import Imagem31 from '../../assets/imagem31.jpg';
import Imagem32 from '../../assets/imagem32.jpg';
import Imagem33 from '../../assets/imagem33.jpg';
import Imagem34 from '../../assets/imagem34.jpg';
import Imagem35 from '../../assets/imagem35.jpg';
import Imagem36 from '../../assets/imagem36.jpg';
import Imagem37 from '../../assets/imagem37.jpg';
import Imagem38 from '../../assets/imagem38.jpg';
import Imagem39 from '../../assets/imagem39.jpg';
import Imagem40 from '../../assets/imagem40.jpg';
import Imagem41 from '../../assets/imagem41.jpg';
import Imagem42 from '../../assets/imagem42.jpg';
import Imagem43 from '../../assets/imagem43.jpg';
import Imagem44 from '../../assets/imagem44.jpg';
import Imagem45 from '../../assets/imagem45.jpg';
import Imagem46 from '../../assets/imagem46.jpg';
import Imagem47 from '../../assets/imagem47.jpg';
import Imagem48 from '../../assets/imagem48.jpg';
import Imagem49 from '../../assets/imagem49.jpg';
import Imagem50 from '../../assets/imagem50.jpg';
import Imagem51 from '../../assets/imagem51.jpg';
import Imagem52 from '../../assets/imagem52.jpg';
import Imagem53 from '../../assets/imagem53.jpg';

const momentos = [
  { title: "19 Janeiro 2023", cardTitle: "Primeiro dia que a gente se viu!", media: { type: "IMAGE", source: { url: Imagem2 } } },
  { title: "04 de Fevereiro 2023", cardTitle: "Nossa primeira viagem! ", media: { type: "IMAGE", source: { url: Imagem3 } } },
  { title: "05 de Fevereiro 2023", cardTitle: " O grande pedido de namoro", media: { type: "IMAGE", source: { url: Imagem4 } } },
  { title: "21 de Fevereiro 2023", cardTitle: "Já se sentindo casados", media: { type: "IMAGE", source: { url: Imagem5 } } },
  { title: "03 de Março 2023", cardTitle: "O culto ecumênico especial ", media: { type: "IMAGE", source: { url: Imagem6 } } },
  { title: "04 de Março 2023", cardTitle: "A formatura da minha doutora fisioterapeuta", media: { type: "IMAGE", source: { url: Imagem7 } } },
  { title: "26 de Março 2023", cardTitle: "Nossa primeira viagem para Curitiba", media: { type: "IMAGE", source: { url: Imagem8 } } },
  { title: "26 de Março 2023", cardTitle: "Diversos passeios maravilhosos com a minha mulher", media: { type: "IMAGE", source: { url: Imagem9 } } },
  { title: "09 de Abril 2023", cardTitle: "Nossa primeira foto com nossos meninos", media: { type: "IMAGE", source: { url: Imagem10 } } },
  { title: "15 de Abril 2023", cardTitle: "Adoro essa nossa foto, porque me lembra muito o dia que a gente dançou e se divertiu muito !", media: { type: "IMAGE", source: { url: Imagem11 } } },
  { title: "22 de Abril 2023", cardTitle: "Primeira viagem internacional!", media: { type: "IMAGE", source: { url: Imagem12 } } },
  { title: "29 de Abril 2023", cardTitle: "Sempre cuidando da minha princesa", media: { type: "IMAGE", source: { url: Imagem13 } } },
  { title: "12 de Junho 2023", cardTitle: "Nosso dia dos namorados!", media: { type: "IMAGE", source: { url: Imagem14 } } },
  { title: "18 de Junho 2023", cardTitle: "Adoroooo o seu cheirinho gostoso!", media: { type: "IMAGE", source: { url: Imagem15 } } },
  { title: "26 de Junho 2023", cardTitle: "Muitas idas no ecovile para passear com minha mulher", media: { type: "IMAGE", source: { url: Imagem16 } } },
  { title: "26 de Agosto 2023", cardTitle: "Família sempre reunida!", media: { type: "IMAGE", source: { url: Imagem17 } } },
  { title: "14 de Setembro 2023", cardTitle: "Primeiro rodeio do namorado", media: { type: "IMAGE", source: { url: Imagem18 } } },
  { title: "23 de Setembro 2023", cardTitle: "Levei minha princesa no haras wekend!", media: { type: "IMAGE", source: { url: Imagem19 } } },
  { title: "12 de Outubro 2023", cardTitle: "Adoro a nossa interação em bosejar!", media: { type: "IMAGE", source: { url: Imagem20 } } },
  { title: "15 de Outubro 2023", cardTitle: "Adoro olhar nos seus olhinhos!", media: { type: "IMAGE", source: { url: Imagem21 } } },
  { title: "22 de Outubro 2023", cardTitle: "Foi muito divertido esse dia de fazer o bolo!", media: { type: "IMAGE", source: { url: Imagem22 } } },
  { title: "19 de Novembro 2023", cardTitle: "Nosso primeiro natal!", media: { type: "IMAGE", source: { url: Imagem23 } } },
  { title: "23 de Novembro 2023", cardTitle: "O dia que concluimos em montar nossos móveis juntos", media: { type: "IMAGE", source: { url: Imagem24 } } },
  { title: "08 de Dezembro 2023", cardTitle: "Nossa querida Sam entrou pra família!", media: { type: "IMAGE", source: { url: Imagem25 } } },
  { title: "17 de Dezembro 2023", cardTitle: "Primeiro procedimento estético", media: { type: "IMAGE", source: { url: Imagem26 } } },
  { title: "07 de Janeiro 2023", cardTitle: "Nossos piquenique", media: { type: "IMAGE", source: { url: Imagem27 } } },
  { title: "02 de Fevereiro 2023", cardTitle: "Minha parceira de bebida!", media: { type: "IMAGE", source: { url: Imagem28 } } },
  { title: "05 de Fevereiro 2023", cardTitle: "1 ano de namoro", media: { type: "IMAGE", source: { url: Imagem29 } } },
  { title: "05 de Fevereiro 2023", cardTitle: "Foi um bom tempo para aproveitamos juntos!", media: { type: "IMAGE", source: { url: Imagem30 } } },
  { title: "09 de Fevereiro 2023", cardTitle: "Adoro conhecer novos lugares com você meu amor", media: { type: "IMAGE", source: { url: Imagem31 } } },
  { title: "10 de Fevereiro 2023", cardTitle: "A saga dos casamentos das familías", media: { type: "IMAGE", source: { url: Imagem32 } } },
  { title: "12 de Fevereiro 2023", cardTitle: "A grande competição de karte", media: { type: "IMAGE", source: { url: Imagem33 } } },
  { title: "09 de Março 2023", cardTitle: "Rolezinho da residência!", media: { type: "IMAGE", source: { url: Imagem34 } } },
  { title: "18 de Março 2023", cardTitle: "Nossa querida Chloe na família", media: { type: "IMAGE", source: { url: Imagem35 } } },
  { title: "15 de Maio 2023", cardTitle: "Curtimos bastante a expoagro", media: { type: "IMAGE", source: { url: Imagem36 } } },
  { title: "27 de Maio 2023", cardTitle: "Primeiro chocolate quente!", media: { type: "IMAGE", source: { url: Imagem37 } } },
  { title: "08 de Junho 2023", cardTitle: "Primeira festa junina", media: { type: "IMAGE", source: { url: Imagem38 } } },
  { title: "13 de Junho 2023", cardTitle: "Comemorando o aniversário da minha mulher!", media: { type: "IMAGE", source: { url: Imagem39 } } },
  { title: "24 de Julho 2023", cardTitle: "Adoro comemorar as suas conquistas meu amor!", media: { type: "IMAGE", source: { url: Imagem40 } } },
  { title: "11 de Agosto 2023", cardTitle: "A vida é maravilhosa ao seu lado", media: { type: "IMAGE", source: { url: Imagem41 } } },
  { title: "13 de Agosto 2023", cardTitle: "Ficamos distantes mas meu coração estava sempre com você em SP ", media: { type: "IMAGE", source: { url: Imagem42 } } },
  { title: "22 de Setembro 2023", cardTitle: "Adoro os seus sorrisos", media: { type: "IMAGE", source: { url: Imagem43 } } },
  { title: "11 de Outubro 2023", cardTitle: "Pagodinho em família", media: { type: "IMAGE", source: { url: Imagem44 } } },
  { title: "26 de Outubro 2023", cardTitle: "Só a minha namorada para me convencer na skin care", media: { type: "IMAGE", source: { url: Imagem45 } } },
  { title: "09 de Novembro 2023", cardTitle: "Noite havaiana!", media: { type: "IMAGE", source: { url: Imagem46 } } },
  { title: "16 de Novembro 2023", cardTitle: "Nosso natal na casa nova!", media: { type: "IMAGE", source: { url: Imagem47 } } },
  { title: "14 de Dezembro 2023", cardTitle: "+1 de tantos casamentos", media: { type: "IMAGE", source: { url: Imagem48 } } },
  { title: "16 de Dezembro 2023", cardTitle: "Não vejo a hora de chegar nosso", media: { type: "IMAGE", source: { url: Imagem49 } } },
  { title: "16 de Dezembro 2023", cardTitle: "Levei a minha namorada para subir uma big montanha", media: { type: "IMAGE", source: { url: Imagem50 } } },
  { title: "16 de Dezembro 2023", cardTitle: "Adorei o passeio de cavalo", media: { type: "IMAGE", source: { url: Imagem51 } } },
  { title: "16 de Dezembro 2023", cardTitle: "Muito bom estar ao seu lado meu amor nesses momentos!", media: { type: "IMAGE", source: { url: Imagem52 } } },
  { title: "31 de Dezembro 2023", cardTitle: "Momentos inesquecíveis com a mulher da minha vida", media: { type: "IMAGE", source: { url: Imagem53 } } },
];

export default function LinhaDoTempo() {
  const [showVideo, setShowVideo] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const iframeRef = useRef(null);

  // Função para carregar a biblioteca do Vimeo Player
  const loadVimeoPlayer = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://player.vimeo.com/api/player.js";
      script.onload = () => resolve(window.Vimeo);
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    if (showVideo) {
      loadVimeoPlayer().then((Vimeo) => {
        const player = new Vimeo.Player(iframeRef.current);

        player.on('ended', () => {
          setVideoEnded(true);
        });

        return () => {
          player.off('ended');
        };
      });
    }
  }, [showVideo]);

  return (
    <div className="linha-do-tempo">
      {!showVideo ? (
        <>
          <h2>Nossa História 💖</h2>
          <Chrono
            items={momentos}
            mode="VERTICAL_ALTERNATING"
            cardWidth={150}
            cardHeight={300}
            theme={{
              primary: "#ff758c",
              secondary: "#fad0c4",
              cardBgColor: "#fff",
              titleColor: "#ff758c",
              titleColorActive: "#ff 5a7a",
            }}
            mediaSettings={{ align: "center", fit: "cover" }}
          />
          <button
            onClick={() => setShowVideo(true)}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#ff758c",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Avançar ➡️
          </button>
        </>
      ) : (
        <div className="video-container">
          <h2>Eu te amo muito meu amor 💖</h2>
          <div style={{ padding: '75% 0 0 0', position: 'relative' }}>
            <iframe
              ref={iframeRef}
              src="https://player.vimeo.com/video/1053797439?h=eaaaa2b39d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              title="videonosso"
            ></iframe>
          </div>
        </div>
      )}
      {videoEnded && (
        <div className="thank-you-animation">
          <h2>Obrigado por tudo meu amor, você é a minha estrela! 💖</h2>
          <div className="thank-you-animation-content">
            <span>🌟</span>
            <span>🎉</span>
            <span>💐</span>
            <span>🎁</span>
          </div>
        </div>
      )}
    </div>
  );
}