import React from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/TelaVideo.css';

export default function SelecaodevideosMine() {
  const navigate = useNavigate(); // Inicializando o hook useNavigate

  // Funções de navegação
  const inicialClick = () => {
    navigate("/inicial"); // Redireciona para a tela de seleção de matérias
  };
  
  const perfilClick = () => {
    navigate("/perfil"); // Redireciona para a tela de Perfil
  };
  
  const loginClick = () => {
    navigate("/login"); // Redireciona para a tela de Login
  };
  
  const sobreNosClick = () => {
    navigate("/sobre-nos"); // Redireciona para a tela Sobre Nós
  };
  
  const contatoClik = () => {
    navigate("/contato"); // Redireciona para a tela de Contato
  };

  return (
    <div className="container">
      {/* Navbar da Tela Inicial */}
      <header className="header">
        <div className="logo">
          <img src="/image/Header Images/Union.png" alt="Logo EducaWeb" />
          <span className="logoText">Educa</span>
          <span className="logoHighlight">Web</span>
        </div>
        <nav className="nav">
          <a onClick={inicialClick} className="navLink">Home</a>
          <a href="#" className="navLink">Matérias</a>
          <a onClick={sobreNosClick} className="navLink">Sobre</a>
        </nav>
        <div className="profile">
          <a onClick={loginClick} className="logout">Sair</a>
          <a onClick={perfilClick} className="profileButton">Seu Perfil</a>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="main">
        <h1 className="title">Selecione um Vídeo</h1>
        <div className="card-container">
          {/* Card 1 */}
          <div className="card-tit">
            <div className="card">
              <div className="card-content">
                <a href="https://www.youtube.com/watch?v=wrvYxKzjH3U&feature=youtu.be" target="_blank" rel="noopener noreferrer">
                <h1>VIDEO 01</h1>
                </a>
              </div>
            </div>
            <h2 className='tit-video'>
              <a href="https://www.youtube.com/watch?v=wrvYxKzjH3U&feature=youtu.be" target="_blank" rel="noopener noreferrer">
                Vídeo 1
              </a>
            </h2>
          </div>

          {/* Card 2 */}
          <div className="card-tit">
            <div className="card">
              <div className="card-content">
                <a href="https://www.youtube.com/watch?v=lyN8E5FKDkY" target="_blank" rel="noopener noreferrer">
                <h1>VIDEO 02</h1>
                </a>
              </div>
            </div>
            <h2 className='tit-video'>
              <a href="https://www.youtube.com/watch?v=lyN8E5FKDkY" target="_blank" rel="noopener noreferrer">
                Vídeo 2
              </a>
            </h2>
          </div>

          {/* Card 3 */}
          <div className="card-tit">
            <div className="card">
              <div className="card-content">
                <a href="https://www.youtube.com/watch?v=U60uyXZCwew&feature=youtu.be" target="_blank" rel="noopener noreferrer">
                <h1>VIDEO 03</h1>
                </a>
              </div>
            </div>
            <h2 className='tit-video'>
              <a href="https://www.youtube.com/watch?v=U60uyXZCwew&feature=youtu.be" target="_blank" rel="noopener noreferrer">
                Vídeo 3
              </a>
            </h2>
          </div>
        </div>
      </main>
    </div>
  );
}
