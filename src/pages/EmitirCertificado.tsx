import './Certificado.css';
import { useNavigate } from "react-router-dom";

const Certificado = () => {
  return (
    <div className="certificado-container">
      <div className="certificado-card">
        {/* Imagem de fundo ou decorativa */}
        <div className="certificado-header">
          <img 
            src="/path/to/your/background-image.jpg" 
            alt="Decoração do certificado" 
            className="imagem-fundo" 
          />
        </div>

        <h1 className="titulo">CERTIFICADO</h1>
        <p className="descricao">
          Concluiu a Educação Infantil na escola Borcelle, <br />
          e recebe esse certificado em reconhecimento do seu desempenho.
        </p>

        {/* Assinaturas */}
        <div className="assinaturas">
          <div>
            <hr className="linha" />
            <p>Professor(a)</p>
          </div>
          <div>
            <hr className="linha" />
            <p>Diretor(a)</p>
          </div>
        </div>

        {/* Data */}
        <p className="data">Cidade Brasileira, 20 de janeiro de 2019</p>
      </div>

      {/* Botão */}
      <button 
        className="botao-baixar" 
        onClick={() => alert("Baixar o certificado")}
      >
        Baixar Certificado
      </button>
    </div>
  );
};

export default Certificado;
