import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SelecaoDeMateria.css"; // Importação do CSS específico

const SelecaoDeMateria: React.FC = () => {
  const navigate = useNavigate();

  const inicialClick = () => {
    navigate("/inicial"); // Redireciona para a tela de seleção de matérias
  };

  const perfilClick = () => {
    navigate("/perfil"); // Redireciona para a tela de Perfil
  };

  const loginClick = () => {
    navigate("/login");
  };

  return (
    <div className="container">
      {/* Navbar da Tela Inicial */}
      <header className="header">
        <div className="logo">
          <span className="logoText">Educa</span>
          <span className="logoHighlight">Web</span>
        </div>
        <nav className="nav">
          <a onClick={inicialClick} className="navLink">
            Home
          </a>
          <a href="#" className="navLink">
            Materiais
          </a>
        </nav>
        <div className="profile">
          <a onClick={loginClick} className="logout">
            Sair
          </a>
          <a onClick={perfilClick} className="profileButton">
            Seu Perfil
          </a>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="main">
        <h1 className="title">Selecione uma Matéria</h1>
        <div className="card-container">
          {/* Card 1 */}
          <div className="card">
            <div className="card-content">
              <img
                src="/path-to-logic-image.png"
                alt="Lógica de Programação"
                className="card-image"
              />
              <h3 className="card-title">Lógica de Programação</h3>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card">
            <div className="card-content">
              <img
                src="/path-to-computer-image.png"
                alt="Informática Básica"
                className="card-image"
              />
              <h3 className="card-title">Informática Básica</h3>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card">
            <div className="card-content">
              <img
                src="/path-to-minecraft-image.png"
                alt="Circuitos Lógicos com Minecraft"
                className="card-image"
              />
              <h3 className="card-title">Circuitos Lógicos com Minecraft</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SelecaoDeMateria;
