-- CRIANDO A TABELA MATERIA --------------------------------------------------------------------------------
CREATE TABLE Materia (
    ID_materia INT PRIMARY KEY AUTO_INCREMENT,
    nome_materia VARCHAR(100) NOT NULL,
    descricao TEXT
);
-- --------------------------------------------------------------------------------------------------------

-- CRIANDO A TABELA USUARIO COM CAMPO TIMESTAMP-------------------------------------------------------------
CREATE TABLE Usuario (
    ID_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome_usuario VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(100) NOT NULL,
    papel VARCHAR(50),
    criacao_usuario TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- --------------------------------------------------------------------------------------------------------

-- CRIANDO A TABELA MIDIA --------------------------------------------------------------------------------
CREATE TABLE Midia (
    ID_midia INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    materia INT,
    duracao TIME,
    FOREIGN KEY (materia) REFERENCES Materia(ID_materia)
);
-- -------------------------------------------------------------------------------------------------------

-- CRIANDO A TABELA HISTORICO ---------------------------------------------------------------------------
CREATE TABLE Historico (
    ID_historico INT PRIMARY KEY AUTO_INCREMENT,
    ID_usuario INT,
    ID_midia INT,
    data_inicio DATETIME,
    data_termino DATETIME,
    status VARCHAR(50),
    FOREIGN KEY (ID_usuario) REFERENCES Usuario(ID_usuario),
    FOREIGN KEY (ID_midia) REFERENCES Midia(ID_midia)
);
-- ------------------------------------------------------------------------------------------------------

-- CRIANDO A TABELA LOGIN COM CAMPO TIMESTAMP-------------------------------------------------------------
CREATE TABLE Login (
    ID_login INT PRIMARY KEY AUTO_INCREMENT,
    ID_usuario INT,
    data_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ID_usuario) REFERENCES Usuario(ID_usuario)
);
-- ------------------------------------------------------------------------------------------------------

-- CRIANDO A TABELA CERTIFICADO COM CAMPO TIMESTAMP-------------------------------------------------------
CREATE TABLE Certificado (
    ID_certificado INT PRIMARY KEY AUTO_INCREMENT,
    ID_usuario INT,
    ID_materia INT,
    data_emissao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ID_usuario) REFERENCES Usuario(ID_usuario),
    FOREIGN KEY (ID_materia) REFERENCES Materia(ID_materia)
);
-- ------------------------------------------------------------------------------------------------------

-- CRIANDO A TABELA CURSO --------------------------------------------------------------------------------
CREATE TABLE Curso (
    ID_curso INT PRIMARY KEY AUTO_INCREMENT,
    ID_materia INT,
    nome_curso VARCHAR(100) NOT NULL,
    descricao_curso TEXT,
    FOREIGN KEY (ID_materia) REFERENCES Materia(ID_materia)
);
-- ------------------------------------------------------------------------------------------------------

-- CRIANDO A TABELA AULA-----------------------------------------------------------------------------------
CREATE TABLE Aula (
    ID_aula INT PRIMARY KEY AUTO_INCREMENT,
    ID_materia INT,
    titulo_aula VARCHAR(100) NOT NULL,
    duracao_aula TIME,
    descricao_aula TEXT,
    FOREIGN KEY (ID_materia) REFERENCES Materia(ID_materia)
);
-- -------------------------------------------------------------------------------------------------------
