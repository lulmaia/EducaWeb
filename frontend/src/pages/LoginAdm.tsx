import React, { FormEvent } from "react";
import { useNavigate } from "react-router-dom"; // Importação do useNavigate
import "../styles/TelaGerencia.css"; // Importação do CSS modular

const LoginADM: React.FC = () => {
  const navigate = useNavigate(); // Inicializa o hook para navegação

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Navegação direta para a tela de gerência
    navigate("/gerenciar");
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="login-logo">
          <h1>
            <span className="login-highlight">Educa</span>Web
          </h1>
        </div>
        <h2 className="login-heading">Entre e Explore: Descubra um Mundo de Aprendizado</h2>
        <form id="loginForm" className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="login-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="login-input"
            placeholder="Digite seu email"
            required
          />
          <label htmlFor="password" className="login-label">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            className="login-input"
            placeholder="Digite sua senha"
            required
          />
          <div className="login-button-container">
            <button type="submit" className="login-btn">LoginADM</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginADM;
