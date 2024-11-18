# Instalando os Pacotes/Dependências Necessárias **NPM**

Para configurar corretamente o ambiente do seu projeto, siga as instruções abaixo para instalar as dependências necessárias utilizando o **NPM**. Este guia também fornecerá dicas importantes sobre a estrutura de pastas, versões recomendadas do Node.js e onde executar os comandos.

## Pré-requisitos

Antes de iniciar a instalação, certifique-se de que seu sistema atende aos seguintes requisitos:

- **Node.js**: Recomenda-se utilizar a versão **LTS (Long Term Support)** mais recente. Você pode verificar a versão instalada com:

  ```
  node -v
  ```

  Se precisar instalar ou atualizar o Node.js, visite [nodejs.org](https://nodejs.org/) ou utilize um gerenciador de versões como o [nvm](https://github.com/nvm-sh/nvm).

- **NPM**: Geralmente, o NPM é instalado junto com o Node.js. Verifique a versão instalada com:

  ```
  npm -v
  ```

## Passo a Passo para Instalação

### 1. Acesse a Pasta do Projeto e Verifique o Arquivo `package.json`

Abra o terminal e navegue até a raiz do seu projeto. Este é o diretório que contém o arquivo `package.json` que é um arquivo gerencia as dependências e scripts do seu projeto.

### 2. Instale as Dependências NPM

Você irar abrir o terminal na pasta raiz e executar o comando `npm install` para baixar os seguintes pacotes:

   - TypeScript(*apenas desenvolvimento*).
   - Prettier (*apenas desenvolvimento*).
   - React.
   - React DOM.

### 3. Verifique a Instalação

Após a instalação, verifique se todas as dependências foram instaladas corretamente:

- **Listar Dependências Instaladas:**

  ```
  npm list --depth=0
  ```

## Dicas, Atenção e Solução de Problemas

- **Diretório Correto:** Sempre execute os comandos de instalação na raiz do projeto, onde está localizado o `package.json`.

- **Dependências Não Instaladas Corretamente:** Tente remover a pasta `node_modules` e o arquivo `package-lock.json`, e execute novamente `npm install`.

    ```
    rm -rf node_modules package-lock.json
    npm install
    ```

- **Conflitos de Versão do Node.js:**

    Caso de erro dizendo que seu *Node.js* nao é compatível com as dependências e precisar ser atualizado, visite [nodejs.org](https://nodejs.org/) ou utilize um gerenciador de versões como o [nvm](https://github.com/nvm-sh/nvm).

- **Problemas com Permissões no NPM:**

    Evite usar `sudo` para comandos do NPM.

## Conclusão

Seguindo estas instruções, você terá todas as dependências necessárias instaladas e configuradas corretamente para o seu projeto.
