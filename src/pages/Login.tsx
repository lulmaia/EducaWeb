import React, { FormEvent } from "react";
import { Link } from "react-router-dom"; // Importação do Link para navegação
import "../styles/Login.css"; // CSS específico

const Login: React.FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    // Lógica para login aqui (API call, validação, etc.)
    console.log("Email:", email);
    console.log("Password:", password);
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
        <p className="login-text">
          Seja bem-vindo a EducaWeb, faça login para acessar o conteúdo.
        </p>
        <form id="loginForm" className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="login-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="login-input"
            placeholder="robert.langster@gmail.com"
            required
          />
          <label htmlFor="password" className="login-label">Password</label>
          <div className="password-container">
            <input
              type="password"
              id="password"
              name="password"
              className="login-input"
              placeholder="********"
              required
            />
          </div>
          <div className="login-button-container">
          <Link to="/inicial" className="login-btn">Logar</Link> {/* Link para Cadastro */}
            <Link to="/cadastro" className="signup-btn">Se Cadastrar</Link> {/* Link para Cadastro */}
          </div>
          <Link to="/recuperar-senha" className="forgot-password">
            Recuperar Senha
          </Link>
        </form>
      </div>
      <div className="login-image-container">
        <img src="public/image/day66travel.png" alt="Van illustration" className="login-image" />
      </div>
    </div>
  );
};

export default Login;
