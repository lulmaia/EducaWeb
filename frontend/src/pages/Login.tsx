import React, { FormEvent, useState } from "react";
import axios from "axios";  // Importando Axios para fazer a requisição HTTP
import { Link, useNavigate } from "react-router-dom"; // Importação do Link para navegação
import "../styles/Login.css"; // CSS específico

const Login: React.FC = () => {
  const [email, setEmail] = useState(""); // Estado para armazenar o email
  const [password, setPassword] = useState(""); // Estado para armazenar a senha
  const [mensagemErro, setMensagemErro] = useState(""); // Para mensagens de erro
  const [loading, setLoading] = useState(false); // Para controle de carregamento

  const navigate = useNavigate(); // Hook para navegação

  // Função para tratar o envio do formulário
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validação simples: Verificar se os campos estão preenchidos
    if (!email || !password) {
      setMensagemErro("Por favor, preencha todos os campos.");
      return;
    }

    setLoading(true); // Inicia o carregamento

    try {
      // Realizando a requisição POST para login
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      // Se o login for bem-sucedido, você pode salvar o token ou fazer outra ação
      console.log(response.data); // Exibe a resposta no console

      // Sucesso no login, redireciona para outra página
      navigate("/inicial"); // Redireciona para a página do usuário autenticado

      // Limpa mensagens de erro em caso de sucesso
      setMensagemErro("");
    } catch (error: any) {
      // Se ocorrer um erro, exibe a mensagem de erro
      setMensagemErro(error.response?.data?.message || "Erro ao fazer login.");
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
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
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="login-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="login-input"
            placeholder="robert.langster@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Atualiza o valor do email
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
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Atualiza o valor da senha
              required
            />
          </div>
          {mensagemErro && <p className="erro">{mensagemErro}</p>} {/* Exibe mensagem de erro */}
          <div className="login-button-container">
            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? "Entrando..." : "Logar"} {/* Exibe "Entrando..." enquanto carrega */}
            </button>
            <Link to="/cadastro" className="signup-btn">Se Cadastrar</Link> {/* Link para Cadastro */}
          </div>
          <Link to="/recuperar-senha" className="forgot-password">
            Recuperar Senha
          </Link>
        </form>
        <Link to="/loginadm" className="admin-link">
          Sou Admin
        </Link>
      </div>
      <div className="login-image-container">
        <img src="public/image/day66travel.png" alt="Van illustration" className="login-image" />
      </div>
    </div>
  );
};

export default Login;
