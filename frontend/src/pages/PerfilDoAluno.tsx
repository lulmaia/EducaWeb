import React from "react";
import { useNavigate } from 'react-router-dom'; 
import "../styles/PerfilDoAluno.css"; // Importação do CSS

const PerfilDoAluno: React.FC = () => {
    const navigate = useNavigate();

    const inicialClick = () => {
        navigate("/inicial"); // Redireciona para a tela de seleção de matérias
    };

    const materiasClicks = () => {
        navigate("/materias"); // Redireciona para a tela de seleção de matérias
    };

    const perfilClick = () => {
        navigate("/perfil"); // Redireciona para a tela de Perfil
    };

    const loginClick = () => {
        navigate("/login");
    };

    const certifClick = () => {
        navigate("/Certificado");
    };

    return (
        <div className="container">
            <header className="header">
                <div className="logo">
                    <span className="logoText">Educa</span>
                    <span className="logoHighlight">Web</span>
                </div>
                <nav className="nav">
                    <a onClick={inicialClick} className="navLink">Home</a>
                    <a onClick={materiasClicks} className="navLink">Materiais</a>
                </nav>
                <div className="profile">
                    <a onClick={loginClick} className="logout">Sair</a>
                    <a onClick={perfilClick} className="profileButton">Seu Perfil</a>
                </div>
            </header>

            <main className="main">
                <div className="profile-container">
                    <div className="profile-sidebar">
                        <button className="certificates-button" onClick={certifClick}>
                            Gerar Certificado
                        </button>
                    </div>
                    <div className="profile-details">
                        <h1>Agradecimento pela Utilização da Plataforma EducaWeb</h1>
                        <p>
                            É com grande satisfação e gratidão que expressamos nosso agradecimento a todos que participaram e utilizaram a plataforma EducaWeb. 🌐💡 Ao longo do desenvolvimento deste projeto, tivemos o prazer de vivenciar a experiência de criar uma ferramenta interativa e educativa que visa facilitar o aprendizado e a troca de conhecimento.
                        </p>
                        <p>
                            Este projeto não teria sido possível sem o apoio e as valiosas contribuições durante o processo de construção. Através da disciplina de <strong>Démetrus</strong>, exploramos novas formas de integrar tecnologia e educação, sempre com o objetivo de melhorar a experiência do usuário e promover o aprendizado dinâmico e acessível para todos. 📚✨
                        </p>
                        <p>
                            A EducaWeb é resultado do esforço conjunto e da colaboração de muitos, e é gratificante ver como ela tem sido utilizada de maneira tão eficiente e intuitiva por nossos usuários. Acreditamos que a plataforma não só facilita o ensino e a aprendizagem, mas também oferece uma experiência rica e envolvente, com recursos inovadores que aproximam ainda mais professores e alunos.
                        </p>
                        <p>
                            Agradecemos imensamente a todos os envolvidos no desenvolvimento e, claro, aos que já estão aproveitando as funcionalidades da plataforma. Continuamos empenhados em aprimorar a EducaWeb, garantindo que ela se torne cada vez mais uma ferramenta de excelência no cenário educacional. 🙏🚀
                        </p>
                        <p>
                            Estamos animados com as possibilidades futuras e com o impacto que a EducaWeb pode gerar na jornada de aprendizado de cada um. Muito obrigado por fazer parte dessa história! Juntos, vamos continuar a transformar a educação! 🌍❤️
                        </p>
                        <p>
                            Com gratidão,<br />
                            <strong>Equipe EducaWeb</strong>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PerfilDoAluno;
