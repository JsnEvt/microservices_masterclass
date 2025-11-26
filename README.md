# Microservices – Masterclass Daniele Evangelista

Este repositório contém o projeto demonstrado pela **professora Daniele Evangelista** durante a prévia de sua Masterclass sobre **Arquitetura de Microserviços**.  
O objetivo do projeto é apresentar, de forma prática, como funciona uma arquitetura distribuída utilizando **microserviços independentes**, comunicação assíncrona, mensageria, padrões modernos e boas práticas do ecossistema Node.js.

---


## 🚀 Tecnologias e Conceitos

O projeto utiliza uma stack moderna, voltada para aplicações altamente escaláveis:

### **Back-end**
- **Node.js**  
- **NestJS** — microserviços, modularização e injeção de dependências  
- **TypeScript** — tipagem estática  
- **Prisma ORM** — modelagem e acesso ao banco  
- **PostgreSQL** — banco relacional

### **Arquitetura & Infraestrutura**
- **Docker & Docker Compose** — containerização dos serviços  
- **Kafka ou RabbitMQ** — mensageria para comunicação assíncrona  
- **API Gateway** — ponto de entrada único (opcional)  
- **Service Discovery** (dependendo da versão)  
- **Eventos e Workers**  
- **DTOS e validação** com `class-validator`

### **Padrões e Boas Práticas**
- Comunicação **event-driven** (orientada a eventos)  
- Padronização com DTOs  
- Separação total entre serviços  
- Persistência independente  
- Escalabilidade horizontal  
- Tratamento de erros e logs  
- Configuração por variáveis de ambiente  

---


Cada serviço possui:

- **Módulos, Controllers, Services**
- **Entidades, Repositórios e DTOs**
- **Eventos de entrada e saída**
- **Integração com mensageria**

---

Clone o repositório:

```
git clone https://github.com/JsnEvt/microservices_masterclass.git
```
Navegue até o diretório do projeto:

```
cd microservices
```
Suba os serviços com Docker Compose:

```
docker-compose up --build
```
# Endpoints
## Cliente
 - GET /clientes: Retorna todos os clientes.
 - POST /clientes: Cria um novo cliente.
 - GET /clientes/:id: Retorna um cliente específico.
## Pedidos
 - GET /pedidos: Retorna todos os pedidos.
 - POST /pedidos: Cria um novo pedido.
 - GET /pedidos/:id: Retorna um pedido específico.
## Produto
 - GET /produtos: Retorna todos os produtos.
 - POST /produtos: Cria um novo produto.
 - GET /produtos/:id: Retorna um produto específico.

# Tecnologias
- Linguagem de Programação: 
   - Node.js (https://nodejs.org/pt)
- Banco de Dados:
   - PostgreSQL (https://www.postgresql.org)
- Frameworks e Bibliotecas:
   - Express (https://expressjs.com/pt-br)
   - Kafka (https://kafka.apache.org)
   - Prisma (https://www.prisma.io)
<br>
<p>
<img alt="node"  title="Node" src="img/node.svg" width="50px">
<img alt="ts"  title="TS" src="img/ts.svg" width="50px">
<img alt="prisma"  title="Prisma" src="img/prisma.png" width="50px">
<img alt="postgres"  title="Postgres" src="img/postgres.svg" width="50px">
<img alt="kafka" title="Kafka" src="img/Kafka.svg" width="50px">
</p>


## 🧠 Principais Funcionalidades

### ✔ Comunicação via Mensageria
- Serviços se comunicam através de **eventos** (ex.: `order.created`, `payment.completed`).

### ✔ Independência total entre serviços
- Cada microserviço possui sua própria base de dados e regras de negócio.

### ✔ Orquestração e/ou Coreografia
- Fluxo baseado em eventos distribuídos.
- Alguns serviços apenas **reagem** a eventos publicados.

### ✔ Persistência isolada
- Cada serviço possui seu próprio schema (Prisma + PostgreSQL).

### ✔ Ambiente totalmente containerizado
- Todos os serviços e infraestrutura sobem com um único comando.

---
🎯 Objetivo educacional

Este projeto demonstra conceitos essenciais do mundo real:

Arquitetura de microserviços

Comunicação assíncrona

Event-driven architecture

Serviços independentes

Containerização e ambiente de desenvolvimento

Escalabilidade horizontal

Modularização avançada com NestJS

A proposta é entender como sistemas modernos são projetados, e fornecer bases sólidas para aplicações profissionais.

Contato
## 🦸 Autor

[![Linkedin Badge](https://img.shields.io/badge/-Jason-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jason-everton/)](https://www.linkedin.com/in/jason-everton/)

[![Gmail Badge](https://img.shields.io/badge/-jasonemsw10@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jasonemsw10@gmail.com)](mailto:jasonemsw10@gmail.com)

Feito por Jason Everton 👋🏽 [Entre em contato!](https://www.linkedin.com/in/jason-everton)




