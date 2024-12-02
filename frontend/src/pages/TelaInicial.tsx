import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importação do hook useNavigate
import "../styles/TelaInicial.css"; // Importação do CSS puro

const TelaInicial: React.FC = () => {
  const navigate = useNavigate(); // Instância do hook para navegação

  const inicialClik = () => {
    navigate("/inicial");
  };
  
  const materiasClicks = () => {
    navigate("/materias"); // Redireciona para a tela de seleção de matérias
  };

  const perfilClick = () => {
    navigate("/perfil"); // Redireciona para a tela de Perfil
  };

  const loginClick = () => {
    navigate("/login");
  };

  const sobreNosClick = () => {
    navigate("/sobre-nos"); // Redireciona para a tela Sobre Nós
  };
  const contatoClik = () => {
    navigate("/contato"); // Redireciona para a tela de Contato
  }

  return (
    <div className="container">
      <header className="header" >
        <div className="logo">
          <img src="public/image/Header Images/Union.png" alt="" />
          <span className="logoText">Educa</span>
          <span className="logoHighlight">Web</span>
        </div>
        <nav className="nav">
          <a  onClick={inicialClik} className="navLink">Home</a>
          <a onClick={materiasClicks} className="navLink">Matérias</a>
          <a onClick={sobreNosClick} className="navLink">Sobre</a>
          <a onClick={contatoClik} className="navLink">Contato</a>
        </nav>
        <div className="profile">
          <a onClick={loginClick} className="logout">Sair</a>
          <a id='perfil-but' onClick={perfilClick} className="profileButton">Seu Perfil</a>
        </div>
      </header>

      <main className="main">
        <div className="main-dividir">
          <div className="content">
            <p className="welcomeText">Bem vindos!</p>
            <h1 className="title">Primeiros Passos no Saber</h1>
            <p className="description">
              Nosso objetivo é tornar a educação em tecnologia acessível e divertida para todas as crianças.
            </p>
            <div className="buttons">
              <button  className="primaryButton" onClick={materiasClicks}>Matérias</button>
              <button className="secondaryButton" onClick={sobreNosClick}>Sobre Nós</button>
            </div>
          </div>
          <div className="imageContainer">
            <img
              src="public/image/Header Images/none.png" 
              alt="Estudante sorrindo com livros"
              className="image"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default TelaInicial;
