import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RecuperarSenha.css"; // CSS modular

const RecuperarSenha: React.FC = () => {
  const navigate = useNavigate(); // Inicializa o hook para navegação

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Aqui você pode adicionar a lógica de envio de recuperação de senha
    const email = (event.target as HTMLFormElement).email.value;
    console.log("Email para recuperação:", email);

    // Após o envio bem-sucedido, redireciona para a tela de login
    navigate("/login");
  };

  return (
    <div className="recuperar-container">
      <div className="recuperar-form-container">
        <div className="recuperar-logo">
          <h1>
            <span className="recuperar-highlight">Educa</span>Web
          </h1>
        </div>
        <h2 className="recuperar-heading">Recuperação de SENHA</h2>
        <form className="recuperar-form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="recuperar-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="recuperar-input"
            placeholder="Digite seu email"
            required
          />
          <button type="submit" className="recuperar-btn">Recuperar</button>
        </form>
      </div>
      <div className="recuperar-image-container">
        <img src="./Image/day66travel.png" alt="Van illustration" className="recuperar-image" />
      </div>
    </div>
  );
};

export default RecuperarSenha;
