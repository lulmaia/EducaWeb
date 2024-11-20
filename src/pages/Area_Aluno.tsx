import "./Area_Aluno.css"; // Importar os estilos (veja a seção de CSS abaixo)
import "./global.css"; 

const StudentProfile = () => {
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
          <button className="profile-btn">Seu Perfil</button>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="main-content">
        <h1>Perfil do Aluno:</h1>

        <div className="profile-section">
          {/* Imagem e descrição */}
          <div className="profile-photo">
            <img
              src="https://via.placeholder.com/150" // Substitua pela imagem real
              alt="Foto do aluno"
            />
            <p>Sobre mim:</p>
          </div>

          {/* Informações do perfil */}
          <div className="profile-info">
            <label>
              Nome:
              <input type="text" placeholder="Digite o nome" />
            </label>
            <label>
              Idade:
              <input type="text" placeholder="Digite a idade" />
            </label>
            <label>
              Data de Nascimento:
              <input type="date" />
            </label>
            <label>
              Telefone do Responsável:
              <input type="tel" placeholder="Digite o telefone" />
            </label>
            <label>
              Email do Responsável:
              <input type="email" placeholder="Digite o email" />
            </label>
            <label>
              Estado Natal:
              <input type="text" placeholder="Digite o estado" />
            </label>
            <label>
              CEP:
              <input type="text" placeholder="Digite o CEP" />
            </label>
          </div>
        </div>

        {/* Botão de Certificados */}
        <button className="certificates-btn">Seus Certificados</button>
      </main>
    </div>
  );
};

export default StudentProfile;