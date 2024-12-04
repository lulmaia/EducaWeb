import React from "react";
import { useNavigate } from 'react-router-dom'; 
import "../styles/TelaGerencia.css"; // Importação do CSS

const TelaGerencia: React.FC = () => {
  const navigate = useNavigate();

  const selectadmClick = () => {
    navigate("/materia-adm"); // Redireciona para a tela de Perfil
  };


  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <span className="logoText">Educa</span>
          <span className="logoHighlight">Web</span>
        </div>
        <nav className="nav">
          <a href="#" className="navLink">Home</a>
          <a href="#" className="navLink">Materiais</a>
          <a href="#" className="navLink">Sobre</a>
          <a href="#" className="navLink">Contato</a>
        </nav>
        <div className="profile">
          <a href="#" className="logout">Sair</a>
          <a href="#" className="profileButton">ADMIN</a>
        </div>
      </header>

      <main className="main">
        <h1 className="title">Gerência</h1>
        <div className="options-container">
          <div className="option-card">
            <h2 onClick={selectadmClick} className="option-title">GERENCIAR CURSOS</h2>
          </div>
          <div className="option-card">
            <h2 className="option-title">GERENCIAR CADASTROS</h2>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TelaGerencia;
