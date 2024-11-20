import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import RecuperarSenha from "./pages/RecuperarSenha";
import LoginADM from "./pages/LoginAdm";
import TelaGerencia from "./pages/TelaGerencia"; // Importe o componente TelaGerencia

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/loginadm" element={<LoginADM />} />
        <Route path="/gerenciar" element={<TelaGerencia />} /> {/* Nova rota */}
      </Routes>
    </Router>
  );
};

export default App;
