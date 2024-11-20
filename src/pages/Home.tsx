import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"; // Importando o CSS específico para este componente

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">
          Bem Vindos ao <span className="home-highlight">EducaWeb</span>
        </h1>
        <p className="home-description">
          A plataforma de ensino infantil mais intuitiva integra tecnologia e diversão, criando um ambiente de aprendizado fácil e atraente para as crianças. 
          Com uma interface simples e colorida, as crianças exploram conteúdos educativos através de jogos e vídeos interativos, tornando o aprendizado uma 
          experiência envolvente. Ao mesmo tempo, pais e educadores acompanham o progresso de forma prática, garantindo um desenvolvimento seguro e estimulante.
        </p>
        <div className="home-buttons">
          <Link to="/login" className="home-button home-button-orange">
            Começar
          </Link>
          <a href="#" className="home-button home-button-light">
            Saiba Mais
          </a>
        </div>
      </div>
      <div className="home-illustration">
        <img src="Image/Illustration.png" alt="Ilustração Educativa" className="home-image" />
      </div>
    </div>
  );
};

export default Home;
