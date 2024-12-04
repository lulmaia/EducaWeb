import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Importando o Axios
import "../styles/RecuperarSenha.css"; // CSS modular

const RecuperarSenha: React.FC = () => {
  const [email, setEmail] = useState(""); // Gerencia o estado do email
  const [error, setError] = useState(""); // Para exibir erros
  const [loading, setLoading] = useState(false); // Para controlar o estado de carregamento
  const navigate = useNavigate(); // Inicializa o hook para navegação

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email) {
      setError("Por favor, insira um e-mail válido.");
      return;
    }

    setLoading(true); // Inicia o carregamento

    try {
      // Faz a requisição para o backend
      const response = await axios.post("http://localhost:3000/request-password-reset", { email });
      console.log(response.data);

      // Se a requisição for bem-sucedida, navegue para a página de login
      navigate("/login");

      // Se precisar de uma mensagem de sucesso:
      alert("Se o e-mail estiver cadastrado, você receberá atravéz do email uma nova senha");

    } catch (error: any) {
      setError(error.response?.data?.message || "Erro ao enviar o e-mail. Tente novamente.");
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  return (
    <div className="recuperar-container">
      <div className="recuperar-form-container">
        <div className="recuperar-logo">
          <h1><span className="recuperar-highlight">Educa</span>Web</h1>
        </div>
        <h2 className="recuperar-heading">
          Digite o seu e-mail de cadastro. <br />
          Enviaremos a nova senha para o e-mail informado. Verifique sua caixa de entrada (ou a pasta de spam).
        </h2>

        {/* Exibindo erros */}
        {error && <div className="recuperar-error">{error}</div>}

        <form className="recuperar-form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="recuperar-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="recuperar-input"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do email
            required
          />
          <button type="submit" className="recuperar-btn" disabled={loading}>
            {loading ? "Enviando..." : "Recuperar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecuperarSenha;
