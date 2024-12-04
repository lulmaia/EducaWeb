# EducaWeb

EducaWeb é uma plataforma de cursos online desenvolvida como trabalho para disciplina Projeto Extensionista 2, onde utilizamos React e Node.js.

## Tecnologias Utilizadas

### Construção do Site
- React
- Typescript
- Styled-components

### Backend
- Node.js
- Typescript
- Express
- MongoDB

### IDE e Versionamento
- Visual Studio Code
- Git e GitHub
- Insomnia

## Funcionalidades

- Cadastro de usuários
- Autenticação e login
- Seleção de cursos


## Rodando a Aplicação

### Pré-requisitos
- Node.js instalado
- MongoDB configurado na nuvem (MongoDB Atlas)

### Passos para execução

1. *Clone o repositório*:
   
bash
   git clone https://github.com/lulmaia/EducaWeb.git
   cd EducaWeb
   
2. *Instale as dependências*:
   
bash
   npm install
   
3. *Configure o MongoDB*:
   - No arquivo .env, adicione a URI de conexão com o MongoDB:
     

     MONGODB_URI=mongodb+srv://<usuário>:<senha>@cluster0.mongodb.net/<nome-do-banco>?retryWrites=true&w=majority
     
4. *Inicie o servidor de desenvolvimento*:
   
bash
   npm start
   
## Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais informações.

---

Desenvolvido pela equipe EducaWeb.
