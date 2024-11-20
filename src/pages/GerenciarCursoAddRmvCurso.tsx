import React from 'react';
import '../styles/GerenciarCursoAddRmvCurso.css'; 



interface AppProps {}

const GerenciarCursoAddRmvCurso: React.FC<AppProps> = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">EducaWeb</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#materias">Materiais</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
          <button className="admin-button">ADMIN <span>⬇</span></button>
          <a href="#sair" className="logout">Sair</a>
        </nav>
      </header>

      <main className="main-content">
        <h1>Gerenciar Curso</h1>
        <div className="buttons-container">
          <button className="option-button">Adicionar vídeo aula</button>
          <button className="option-button">Remover vídeo Aula</button>
        </div>
      </main>
    </div>
  );
};

export default GerenciarCursoAddRmvCurso;