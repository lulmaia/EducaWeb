import React from 'react';

function SelectionScreen() {
  const containerStyle = {
    padding: '20px',
    backgroundColor: '#fde4d0',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  };

  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const navLinksStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#000',
    fontWeight: 'bold',
  };

  const activeLinkStyle = {
    ...linkStyle,
    color: 'orange',
  };

  const sairLinkStyle = {
    ...linkStyle,
    color: 'red',
  };

  const perfilButtonStyle = {
    padding: '8px 12px',
    backgroundColor: '#a4c79a',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const perfilButtonHoverStyle = {
    backgroundColor: '#8eac82',
  };

  const contentStyle = {
    textAlign: 'center',
  };

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  };

  const cardStyle = {
    backgroundColor: 'orange',
    width: '250px',
    height: '400px',
    borderRadius: '20px',
  };

  return (
    <div style={containerStyle}>
      <nav style={navbarStyle}>
        <ul style={navLinksStyle}>
          <li><a href="#" style={linkStyle}>Home</a></li>
          <li><a href="#" style={activeLinkStyle}>Matérias</a></li>
          <li><a href="#" style={linkStyle}>Sobre</a></li>
          <li><a href="#" style={linkStyle}>Contato</a></li>
          <li><a href="#" style={sairLinkStyle}>Sair</a></li>
          <li>
            <button
              style={perfilButtonStyle}
              onMouseOver={(e) => e.target.style.backgroundColor = perfilButtonHoverStyle.backgroundColor}
              onMouseOut={(e) => e.target.style.backgroundColor = perfilButtonStyle.backgroundColor}
            >
              Seu Perfil
            </button>
          </li>
        </ul>
      </nav>
      <div style={contentStyle}>
        <h1>Seleção de Matéria</h1>
        <div style={cardContainerStyle}>
          <div style={cardStyle}></div>
          <div style={cardStyle}></div>
          <div style={cardStyle}></div>
        </div>
      </div>
    </div>
  );
}

export default SelectionScreen;