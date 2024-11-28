import React from "react";
import { useNavigate } from 'react-router-dom'; 
import "../styles/PerfilDoAluno.css"; // Importação do CSS

const PerfilDoAluno: React.FC = () => {
    const navigate = useNavigate();

    const inicialClick = () => {
        navigate("/inicial"); // Redireciona para a tela de seleção de matérias
      };

      const materiasClicks = () => {
        navigate("/materias"); // Redireciona para a tela de seleção de matérias
      };
    
      const perfilClick = () => {
        navigate("/perfil"); // Redireciona para a tela de Perfil
      };
    
      const loginClick = () => {
        navigate("/login");
      }

      const certifClick = () => {
        navigate("/EmitirCertificado");
      }

  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <span className="logoText">Educa</span>
          <span className="logoHighlight">Web</span>
        </div>
        <nav className="nav">
          <a onClick={inicialClick} className="navLink">Home</a>
          <a onClick={materiasClicks} className="navLink">Materiais</a>

        </nav>
        <div className="profile">
          <a onClick={loginClick} className="logout">Sair</a>
          <a onClick={perfilClick} className="profileButton">Seu Perfil</a>
        </div>
      </header>
      <main className="main">
        <h1 className="title">Perfil do Aluno:</h1>
        <div className="profile-container">
          <div className="profile-sidebar">
            <div className="profile-picture"></div>
            <p className="profile-info">Sobre mim:</p>
            <button className="certificates-button"onClick={certifClick}>Seus Certificados</button>
          </div>
          <div className="profile-details">
            <div className="detail-item">
              <span className="detail-label">Nome:</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Idade:</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Data de Nascimento:</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Telefone do Responsável:</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Email do Responsável:</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Estado Natal:</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">CEP:</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PerfilDoAluno;
