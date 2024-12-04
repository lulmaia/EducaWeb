
import React from 'react';
import '../styles/TelaVideo.css';

export default function Selecaodevideos() {

    /* <a onClick={inicialClick} className="navLink">Home</a>
        <a href="#" className="navLink">Matérias</a>
        <a onClick={sobreNosClick} className="navLink">Sobre</a>
        <a onClick={contatoClik} className="navLink">Contato</a> 

        <a onClick={loginClick} className="logout">
        <a onClick={perfilClick} className="profileButton">
    */

    return (

        <div className="container">
            {/* Navbar da Tela Inicial */}
            <header className="header" style={{ background: ' #ffe9d6' }}>
                <div className="logo">
                    <img src="public/image/Header Images/Union.png" alt="" />
                    <span className="logoText">Educa</span>
                    <span className="logoHighlight">Web</span>
                </div>
                <nav className="nav">

                    <a className="navLink">Home</a>

                    <a className="navLink">Matérias</a>

                    <a className="navLink">Sobre</a>

                    <a className="navLink">Contato</a>
                </nav>
                <div className="profile">
                    <a className="logout">
                        Sair
                    </a>
                    <a className="profileButton">
                        Seu Perfil
                    </a>
                </div>
            </header>

            {/* Conteúdo Principal */}
            <main className="main">
                <h1 className="title">Selecione um Vídeo</h1>
                <div className="card-container">
                    {/* Card 1  <h3 className="card-title">Lógica de Programação</h3> */}
                    <div className="card-tit">
                        <div className="card">
                            <div className="card-content">
                                <img
                                    src="/img/iconevideo2.png"
                                    alt="icone-video"
                                    className="card-image"
                                />
                            </div>
                        </div>
                        <h2 className='tit-video'>Video 1</h2>
                    </div>
                    {/* Card 2  <h3 className="card-title">Informática Básica</h3> */}
                    <div className="card-tit">
                        <div className="card">
                            <div className="card-content">
                                <img
                                    src="/img/iconevideo2.png"
                                    alt="icone-video"
                                    className="card-image"
                                />
                            </div>
                        </div>
                        <h2 className='tit-video'>Video 2</h2>
                    </div>
                    {/* Card 3  <h3 className="card-title">Circuitos Lógicos com Minecraft</h3> */}
                    <div className="card-tit">
                        <div className="card">
                            <div className="card-content">
                                <img
                                    src="/img/iconevideo2.png"
                                    alt="icone-video"
                                    className="card-image"
                                />
                            </div>
                        </div>
                        <h2 className='tit-video'>Video 3</h2>
                    </div>
                </div>
            </main>
        </div>
    );

};
