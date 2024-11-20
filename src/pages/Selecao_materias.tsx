import "./Selecao_materias.css"; // Arquivo de estilos
import "./global.css"; // Arquivo de estilos


const CoursesPage = () => {
  return (
    <div className="container">
      {/* Cabeçalho */}
      <header className="header">
        <div className="logo">
          <img
            src="Image/Header Images/EducaWeb.png"
            alt="EducaWeb"
            className="logo-img"
          />
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Matérias</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
        <div className="profile-actions">
          <a href="#" className="logout">Sair</a>
          <button className="admin-btn">Admin</button>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="main-content">
        <div className="courses">
          <div className="course-card">
            <img
              src="Image/Course Images/logic.png" // Substitua pelo caminho correto
              alt="Lógica e Programação"
            />
            <h3>Lógica de Programação</h3>
          </div>
          <div className="course-card">
            <img
              src="Image/Course Images/basic-informatics.png" // Substitua pelo caminho correto
              alt="Informática Básica"
            />
            <h3>Informática Básica</h3>
          </div>
          <div className="course-card">
            <img
              src="Image/Course Images/minecraft.png" // Substitua pelo caminho correto
              alt="Circuitos Lógicos com Minecraft"
            />
            <h3>Circuitos Lógicos com Minecraft</h3>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CoursesPage;