
import "../styles/Certificado.css"
import certification from "../image/certification.svg"
export const Cerificado = () => {
   
    return ( 
        <div className="fundo">
            <main><img src={certification} alt="certificação do aluno" /><button>Baixar Certificado</button></main>
            
        </div>
    );
}