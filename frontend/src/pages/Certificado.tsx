import "../styles/Certificado.css";
import certification from "../image/Certificado/certi.png";

export const Certificado = () => {
  const handleDownload = () => {
    // Cria um link temporário
    const link = document.createElement('a');
    link.href = certification; // Define a URL da imagem
    link.download = "certificado.png"; // Define o nome do arquivo que será baixado
    link.click(); // Aciona o clique para fazer o download
  };

  return (
    <div className="fundo">
      <main>
        <img src={certification} alt="certificação do aluno" />
        <button onClick={handleDownload}>Baixar Certificado</button>
      </main>
    </div>
  );
};
