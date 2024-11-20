import React, { FormEvent } from "react";
import { Link } from "react-router-dom";
import "../styles/Cadastro.css"; // Importação do CSS modular

const Cadastro: React.FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = (event.target as HTMLFormElement).email.value;
    const password = (event.target as HTMLFormElement).password.value;

    // Aqui você pode incluir a lógica de cadastro (API ou validação)
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-form-container">
        <div className="cadastro-logo">
          <h1>
            <span className="cadastro-highlight">Educa</span>Web
          </h1>
        </div>
        <h2 className="cadastro-heading">Crie sua Conta</h2>
        <form className="cadastro-form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="cadastro-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="cadastro-input"
            placeholder="Digite seu email"
            required
          />
          <label htmlFor="password" className="cadastro-label">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            className="cadastro-input"
            placeholder="Digite sua senha"
            required
          />
          <Link to="/login" className="login-btn">
            Cadastrar
          </Link>
        </form>
      </div>
      <div className="cadastro-image-container">
        <img src="./Image/day66travel.png" alt="Van illustration" className="cadastro-image" />
      </div>
    </div>
  );
};

export default Cadastro;
