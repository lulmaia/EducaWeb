import React, { useState, FormEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Cadastro.css"; // Importação do CSS

// Função para validação de email
const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const Cadastro: React.FC = () => {
  // Definindo os estados para o formulário
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");
  const [mensagemSucesso, setMensagemSucesso] = useState("");
  const [loading, setLoading] = useState(false); // Para controle de carregamento

  const navigate = useNavigate(); // Para navegar após o sucesso do cadastro

  // Função para tratar o envio do formulário
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validação simples
    if (!email || !senha) {
      setMensagemErro("Todos os campos são obrigatórios.");
      return;
    }

    if (!validateEmail(email)) {
      setMensagemErro("Por favor, insira um email válido.");
      return;
    }

    setLoading(true); // Inicia o carregamento

    try {
      // Enviando dados para a API
      const apiUrl = process.env.NODE_ENV === "production" 
        ? "https://api.educasite.com/register" 
        : "http://localhost:3000/register";

      const resposta = await axios.post("http://localhost:3000/register", {
        email,
        password: senha, // Renomeando para "password"
      });

      // Exibindo mensagem de sucesso
      setMensagemSucesso("Cadastro realizado com sucesso!");
      setMensagemErro(""); // Limpa qualquer mensagem de erro

      // Redirecionando para a página de login
      setTimeout(() => {
        navigate("/login"); // Redireciona para o login após 2 segundos
      }, 2000);
    } catch (erro: any) {
      // Tratamento de erro
      if (erro.response && erro.response.status === 400) {
        setMensagemErro(erro.response.data.message || "Erro ao realizar cadastro.");
      } else {
        setMensagemErro("Erro ao realizar cadastro. Tente novamente.");
      }
      setMensagemSucesso(""); // Limpa qualquer mensagem de sucesso
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="cadastro-input"
            placeholder="Digite seu email"
            required
          />
          <label htmlFor="password" className="cadastro-label">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="cadastro-input"
            placeholder="Digite sua senha"
            required
          />
          {mensagemErro && <p className="erro">{mensagemErro}</p>}
          {mensagemSucesso && <p className="sucesso">{mensagemSucesso}</p>}
          <button type="submit" className="cadastro-btn" disabled={loading}>
            {loading ? <span className="spinner"></span> : "Cadastrar"}
          </button>
        </form>
      </div>
      <div className="cadastro-image-container">
        <img src="/image/day66travel.png" alt="Van illustration" className="cadastro-image" />
      </div>
    </div>
  );
};

export default Cadastro;
