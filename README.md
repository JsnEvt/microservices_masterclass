# Aplicação de Microserviços
## Este projeto foi desenvolvido durante uma aula gratuita, juntamente com a programadora Daniele Leão Evangelista. A aplicação utiliza uma arquitetura de microserviços para gerenciar clientes, pedidos e produtos.

## Descrição
### A aplicação é composta por três microserviços principais:

#### Cliente: Gerencia as informações dos clientes.
#### Pedidos: Gerencia os pedidos realizados pelos clientes.
#### Produto: Gerencia os produtos disponíveis para venda.

Tecnologias Utilizadas
Linguagem de Programação: [Node.js()]
Banco de Dados: [PostgreSQL()]
Frameworks e Bibliotecas: [Express(), Kafka()]

Estrutura do Projeto

Clone o repositório:
sh
Copiar código
git clone https://github.com/JsnEvt/microservices_masterclass.git
Navegue até o diretório do projeto:
sh
Copiar código
cd microservices-project
Suba os serviços com Docker Compose:
sh
Copiar código
docker-compose up --build
Endpoints
Cliente
GET /clientes: Retorna todos os clientes.
POST /clientes: Cria um novo cliente.
GET /clientes/:id: Retorna um cliente específico.
Pedidos
GET /pedidos: Retorna todos os pedidos.
POST /pedidos: Cria um novo pedido.
GET /pedidos/:id: Retorna um pedido específico.
Produto
GET /produtos: Retorna todos os produtos.
POST /produtos: Cria um novo produto.
GET /produtos/:id: Retorna um produto específico.

## Tecnologias
<p>
<img alt="node"  title="Node" src="img/node.svg" width="50px">
<img alt="ts"  title="TS" src="img/ts.svg" width="50px">
<img alt="prisma"  title="Prisma" src="img/prisma.png" width="50px">
<img alt="postgres"  title="Postgres" src="img/postgres.svg" width="50px">
</p>

Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Contato
## 🦸 Autor

[![Linkedin Badge](https://img.shields.io/badge/-Jason-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jason-everton/)](https://www.linkedin.com/in/jason-everton/)

[![Gmail Badge](https://img.shields.io/badge/-jasonemsw10@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jasonemsw10@gmail.com)](mailto:jasonemsw10@gmail.com)

Feito por Jason Everton 👋🏽 [Entre em contato!](https://www.linkedin.com/in/jason-everton)

