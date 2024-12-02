import React from "react";
import "../styles/SeleçãoAdm.css"; // Importação do CSS

const seleçãoAdm: React.FC = () => {
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
        <h1 className="title">Painel de Administração</h1>
        <div className="card-container">
          <div className="card">
            <h2 className="card-title">GERENCIAR CURSOS</h2>
          </div>
          <div className="card">
            <h2 className="card-title">GERENCIAR USUÁRIOS</h2>
          </div>
          <div className="card">
            <h2 className="card-title">RELATÓRIOS</h2>
          </div>
        </div>
      </main>
    </div>
  );
};

export default seleçãoAdm;
