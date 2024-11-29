import React from "react";
import "../styles/GerenciamentoCurso.css" 
import { useNavigate } from 'react-router-dom';

const GerenciamentoCurso: React.FC = () => {
  const navigate = useNavigate();

  const materiasClicks = () => {
    navigate("/materias"); 
  };

  return (
    <div className="conteinerCurso">
         <nav className="nav">
          <a href="#" className="navLink">Home</a>
          <a onClick={materiasClicks} className="navLink">Materiais</a>
        </nav>
    </div>
  );
}

export default GerenciamentoCurso;

