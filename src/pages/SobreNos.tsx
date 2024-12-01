import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SobreNos.css';

/*
 * EducationalSection Component
 * Responsável por exibir uma seção com informações educacionais divididas em três blocos, 
 * cada um contendo texto e imagem alinhados dinamicamente.
 */
const EducationalSection: React.FC = () => {
  const navigate = useNavigate();

  const handleSaibaMaisClick = () => {
    navigate('/inicial');
  };

  return (
    <section className="educational-section">
      {/* Título principal da seção */}
      <h1 className="section-title">
        Preparando Nossas Crianças para Brilhar no Futuro!
      </h1>

      <div className="content-wrapper">
        {/* Primeiro bloco de conteúdo */}
        <div className="content-item">
          <div className="text-content">
            <h2>Desenvolvendo Aprendizes Confiantes e Bem-Sucedidos</h2>
            <p>
              Nossa plataforma de aprendizado oferece um ambiente seguro e envolvente, onde os alunos exploram e aprendem com entusiasmo. Criamos recursos e atividades que os ajudam a atingir seu pleno potencial.
            </p>
            <button className="cta-button" onClick={handleSaibaMaisClick}>
              Saiba Mais
            </button>
          </div>
          <div className="image-wrapper">
            <img src="/src/image/Sobre nos/img2.png" alt="Aprendiz estudando" />
          </div>
        </div>

        {/* Segundo bloco de conteúdo, invertido */}
        <div className="content-item reverse">
          <div className="text-content">
            <h2>Aproveite o Aprendizado com uma Experiência de Sala de Aula Única</h2>
            <p>
              Nossa plataforma oferece uma experiência personalizada e dinâmica, ajudando os estudantes a desenvolverem habilidades essenciais para o futuro.
            </p>
            <button className="cta-button" onClick={handleSaibaMaisClick}>
              Saiba Mais
            </button>
          </div>
          <div className="image-wrapper">
            <img src="src/image/Sobre nos/img3.png" alt="Aluna lendo" />
          </div>
        </div>

        {/* Terceiro bloco de conteúdo */}
        <div className="content-item">
          <div className="text-content">
            <h2>Professores Apaixonados que Fazem a Diferença</h2>
            <p>
              Nossos professores são dedicados a inspirar e motivar cada aluno, garantindo que eles se sintam valorizados e apoiados em sua jornada de aprendizado.
            </p>
            <button className="cta-button" onClick={handleSaibaMaisClick}>
              Saiba Mais
            </button>
          </div>
          <div className="image-wrapper">
            <img src="src/image/Sobre nos/img2.png" alt="Professor auxiliando estudante" />
          </div>
        </div>
      </div>

      {/* Mensagem de contato no rodapé */}
      <footer className="contact-footer">
        FALE CONOSCO: <a href="mailto:educaweb@gmail.com">educaweb@gmail.com</a>
      </footer>
    </section>
  );
};

export default EducationalSection;
