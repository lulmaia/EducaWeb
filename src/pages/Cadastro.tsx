import React, { useState, FormEvent } from "react";
import axios from "axios";  // Para fazer requisições HTTP
import { useNavigate } from "react-router-dom";
import "../styles/Cadastro.css";  // Importação do CSS modular

const Cadastro: React.FC = () => {
  // Definindo os estados para o formulário
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");
  const [mensagemSucesso, setMensagemSucesso] = useState("");
  const [loading, setLoading] = useState(false);  // Para controle de carregamento

  const navigate = useNavigate();  // Para navegar após o sucesso do cadastro

  // Função para tratar o envio do formulário
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validação simples: verificação de campos não preenchidos
    if (!email || !senha) {
      setMensagemErro("Todos os campos são obrigatórios.");
      return;
    }

    setLoading(true); // Inicia o carregamento

    try {
      // Enviando dados de cadastro para a API
      const resposta = await axios.post("http://localhost:3000/register", {
        email,
        senha,
      });

      // Exibindo mensagem de sucesso
      setMensagemSucesso("Cadastro realizado com sucesso!");
      setMensagemErro(""); // Limpa qualquer mensagem de erro

      // Redirecionando para a tela de login após o cadastro bem-sucedido
      setTimeout(() => {
        navigate("/login");  // Redireciona para a página de login
      }, 2000);
    } catch (erro: any) {
      // Tratamento de erros
      if (erro.response && erro.response.status === 400) {
        // Mensagem de erro específica (por exemplo, email já em uso)
        setMensagemErro(erro.response.data.message || "Erro ao realizar cadastro.");
      } else {
        // Mensagem de erro genérica
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
            {loading ? "Cadastrando..." : "Cadastrar"}
          </button>
        </form>
      </div>
      <div className="cadastro-image-container">
        <img src="./Image/day66travel.png" alt="Van illustration" className="cadastro-image" />
      </div>
    </div>
  );
};

export default Cadastro;
