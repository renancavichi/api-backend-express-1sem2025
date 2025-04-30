# Revisão

### Criação do Projeto

    - npm init // inicia o projeto e cria o package.json
    - npm i express // instala o pacote do framework express 
    - pasta src // separa os arquivos do projeto dos arquivos de configuração que ficam na raiz
    - criação do server.js (arquivo de entrada/main do projeto)
    - Mudar tipo de importação de require para import (module)
        "type": "module" no arquivo package.json

### Rodar o projeto

    - npm run dev (run roda um script do package.json)
    - npm start (o unico script que posso omitir o run é o start)
    - Para que serve o --watch no script dev "node --watch src/server.js" do package.json?
        - reinicia o servidor sempre que houver uma mudança salva nos arquivos da API.  

### Router

    - Para que servem os Routers?
    - Criação de rotas com os métodos GET, POST, PUT, DELETE e PATCH

### MVC
    - O que é o MVC e qual sua importância?
        - Model
        - View
        - Controller
    - O que é Padrão de Projeto? Qual sua importância?

### Prisma

    - O que é um ORM (Faz o mapeamento do banco de dados para um objeto da linguagem de programação para executar as operações na base de dados).
    - Quais as vantagens de usar o Prisma?
        - Facilidade de executar as operações no BD (Produtividade)
        - Facilidade de alterar o sistema de banco de dados Ex: MySQL para Postgres

    - Como usar o prisma?
    - npm i prisma -D (Instala o pacote do Prisma como dependencia Dev)
    - npm prisma init // inicializa o prisma no projeto
        - cria a pasta prisma e o schema.prisma (modelo), além .env com a string de conexão com banco para ser atualizada com os dados de conexão.

    - npx prisma db pull (Gera o schema do prisma a partir de um banco de dados com tabelas já criado)

    - npx prisma db push (Cria as tabelas no BD a partir de um schema do prisma já criado)

    - Instalar o Primas client
        npm i @prisma/client
    
    - Rodar o comando para criar as funções do prisma client de acordo com o modelo.
        npx prisma generate (depois de instalar o @prisma/client)

    - Principais funções do Prisma Client
        - create, findMany, findUnique, update, delete

### Próximos Tópicos

    - ✅ Validação de dados com Zod (Regras de Negócio no Model) 
    - ✅ Padrão de Projeto Middleware
    - ✅ Criação do Midddleware de Log
    - ✅ Criação do Handler de Erros (Trata exceções de erros)
    - ✅ 404 Not Found (Rota não encontrada)
    - JWT (JSON Web Token)
    - Login e Logout
    - Autenticação e Autorização (Rotas protegidas)

### Requisitos Projeto Final (backend)
    - CRUD com MVC (Model e Controller)
    - Routers
    - Middlewares (Log e Erros)
    - Validação de Dados com Zod
    - Uso do Prisma