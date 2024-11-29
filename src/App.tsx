import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import RecuperarSenha from "./pages/RecuperarSenha";
import LoginADM from "./pages/LoginAdm";
import TelaGerencia from "./pages/TelaGerencia"; // Importe o componente TelaGerencia
import TelaInicial from "./pages/TelaInicial"; 
import SelecaoDeMateria from "./pages/SeleçãoDeMateria";
import PerfilDoAluno from "./pages/PerfilDoAluno";
import SeleçãoAdm from "./pages/SeleçãoAdm";
import { Cerificado } from "./pages/Certificado";
import GerenciamentoDeCurso from "./pages/GerenciamentoCurso";


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
        <Route path="/inicial" element={<TelaInicial />} /> {/* Rota da TelaInicial */}
        <Route path="/materias" element={<SelecaoDeMateria />} />
        <Route path="/perfil" element={<PerfilDoAluno />} />
        <Route path="/materia-adm" element={<SeleçãoAdm />} />
        <Route path="/certificado" element={<Cerificado />} />
        <Route path="/gerenciar-curso" element={<GerenciamentoDeCurso />} />
      </Routes>
    </Router>
  );
};

export default App;
