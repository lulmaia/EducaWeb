import './Certificado.css';
import { useNavigate } from "react-router-dom";
import ImagemCerficado from '/.Image/./Certificado.png' 
import BotaoCertificado from '/.Image/./Botão baixar Certificado.png'

const Certificado = () => {
  return (
    <div className="certificado-container">
      <div className="certificado-card">
        {/* Imagem de fundo ou decorativa */}
        <div className="certificado-header">
          <img 
            src= "Certificado.png"
            alt="Decoração do certificado" 
            className="imagem-fundo" 
          />
        </div>


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
