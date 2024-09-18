# Adicionando Coautores em um *commit* do Git

Para poder adicionar um coautor a um *commit*, você deve saber o email e nome de usuário do **Git** dele; se ele utiliza email privado do **GitHub,** use o email *no-reply*. Apos isso coletar as informações, siga esses passos:

1. Escreva a mensagem do *commit* e depois em vez de inserir aspas para encerrar, adicione duas linhas vazias. Ex:

        git commit -m "Mensagem.
        >
        >

2. Na proxima linha adicione `Co-authored-by: name <name@example.com>` e substitua com as informações do coautor. Se tiver mais coautores, de a cada um a linha própria sem deixar linhas vazias entre um e outro. Apos digitar a quantidade que quiser de coautores, feche as aspas duplas. Ex: 

        git commit -m "Mensagem.
        >
        >
        Co-authored-by: coautor1 <coautor1@example.com>
        Co-authored-by: coautor2 <coautor@example.com>"
