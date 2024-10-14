--Lista de Compras--
Este é um projeto simples de "Lista de Compras", criado para aprimorar as habilidades de manipulação de DOM e interatividade com JavaScript. 
O projeto inclui validações e animações para proporcionar uma experiência de usuário mais agradável.

Funcionalidades

Adição de itens à lista de compras.

Verificação para evitar itens duplicados.

Exclusão de itens da lista.

Animações suaves ao adicionar e remover itens.

Tecnologias Utilizadas

HTML5: Estrutura básica da página.

CSS3: Estilos visuais, incluindo animações e responsividade.

JavaScript: Manipulação de DOM, validações e interatividade.

Como Executar o Projeto


Você verá um campo de input para adicionar itens à sua lista de compras. Após digitar o nome do item, clique no botão "Adicionar" para incluí-lo. Para excluir um item, clique no botão "Excluir" ao lado dele.

Estrutura do Projeto
src/
    app.js
    main.js
    script.js
    storage.js
    styles.css
    ui.js 
index.html
README.md               

Funcionalidades Detalhadas
Adição de Itens: O usuário pode digitar o nome de um item no campo de input e clicar no botão "Adicionar" para incluí-lo na lista.

Verificação de Itens Duplicados: Antes de adicionar um item, o sistema verifica se ele já está na lista. Se sim, um alerta é exibido e o campo de input ganha um contorno vermelho.

Exclusão de Itens: Cada item possui um botão "Excluir" que permite removê-lo da lista, com uma animação de encolhimento.

Animações: As animações são sutis, melhorando a experiência do usuário. Ao adicionar um item, ele aparece com um efeito de "crescimento", enquanto a exclusão acontece com um efeito de "encolhimento".