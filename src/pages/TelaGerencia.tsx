import React from 'react';
import '../styles/TelaGerencia.css'; // Importação do CSS modular

const TelaGerencia: React.FC = () => {
  return (
    <div className="telaGerencia-container">
      <header className="telaGerencia-header">
        <div className="telaGerencia-logo">EducaWeb</div>
        <nav className="telaGerencia-nav">
          <a href="#home" className="telaGerencia-link">Home</a>
          <a href="#materias" className="telaGerencia-link">Materiais</a>
          <a href="#sobre" className="telaGerencia-link">Sobre</a>
          <a href="#contato" className="telaGerencia-link">Contato</a>
          <button className="telaGerencia-admin-button">
            ADMIN <span>⬇</span>
          </button>
          <a href="#sair" className="telaGerencia-logout">Sair</a>
        </nav>
      </header>

      <main className="telaGerencia-main-content">
        <h1 className="telaGerencia-title">Gerenciar Curso</h1>
        <div className="telaGerencia-buttons-container">
          <button className="telaGerencia-option-button">GERENCIAR CURSOS</button>
          <button className="telaGerencia-option-button">GERENCIAR CADASTROS</button>
        </div>
      </main>
    </div>
  );
};

export default TelaGerencia;
