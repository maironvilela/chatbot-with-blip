<h1 align="center">
     # 🤖 ChatBot - Gerenciamento de Contatos na Plataforma Blip
</h1>
<h2 align="center">
     Uma aplicação web para exibição e gerenciamento de contatos e conversas de um chatbot utilizando a API da plataforma Blip.
</h2

  <p align="center">
    <a href="#sobre-o-projeto">Sobre o Projeto</a> |
    <a href="#principais-tecnologias">Principais Tecnologias</a> |
    <a href="#principais-recursos">Principais Recursos</a> |
    <a href="#estrutura_do_projeto">Estrutura do Projeto</a> |
    <a href="#executando_o_projeto">Executando o projeto</a>   
</p>

[![Pagina de para autenticação da chave API ](https://sa-east-1.graphassets.com/clzr3qy8z0jvv07lsbu9dh3xe/output=format:jpg/cm2jl6f1u09d307kiozm3tjj4)

# 📒Sobre o Projeto

Esta aplicação web permite gerenciar contatos e visualizar conversas de um chatbot criado na plataforma Blip. O sistema é dividido em três rotas principais e utiliza a API do Blip para buscar informações.

## 🚀 Rota de login (/login)

- O usuário deve inserir uma chave de API válida do bot no Blip.
- A aplicação deve autenticar o usuário e salvar de forma persistente para uso nas
  outras rotas.
- Validação da chave: a aplicação deve validar se a chave inserida é válida ao
  tentar carregar a rota raiz.

## 📇 Rota raiz (/) - Lista de Contatos:

- Após o login bem-sucedido, o usuário deve ser redirecionado para a rota raiz.
- A rota raiz deve exibir uma lista paginada dos contatos do bot.
- Cada página deve exibir uma quantidade configurável de contatos (por exemplo,
  10 por página).
- A aplicação deve usar a API do Blip para buscar e exibir os contatos.
- Ao clicar em um contato, o usuário deve ser redirecionado para a página de
  exibição da conversa.

## 💬 Rota de conversa do contato (/contato/:id)

- Ao clicar em um contato na rota raiz, o usuário deve ser redirecionado para esta
  rota, onde será exibida a conversa completa com o contato selecionado.
- A conversa deve ser exibida sem paginação, carregando todas as mensagens
  enviadas e recebidas.
- Utilizar a API do Blip para obter as mensagens trocadas com o contato
  selecionado.

#💻Principais Tecnologias

## 🚀 Principais Tecnologias   

[![](https://img.shields.io/badge/@Code-React-052051)]()
[![](https://img.shields.io/badge/@Code-typescript-052051)]()

[![](https://img.shields.io/badge/@Styles-Tailwind-3b82f6)]()

[![](https://img.shields.io/badge/@Componentes-magicui-16a34a)]()
[![](https://img.shields.io/badge/@Componentes-radixUI-16a34a)]()

[![](https://img.shields.io/badge/@Plataforma_Chatbot-Blip-f0abfc)]()

[![](https://img.shields.io/badge/@Validação_de_dados-Zod-708090)]()


## ⚒️ Principais Recursos  
- 🔗 **Consumo da API da Plataforma Blip**  
- 🎨 **Estilização com TailwindCSS**  
- ✅ **Validação de dados com Zod**  
- 🔄 **Hooks Personalizados para Reutilização de Lógica**  
- 📦 **Gerenciamento de Estado com Context API**  
- 🏗️ **Padrões de Projeto: Adapter, Gateways, Factory**  
- 📥 **Injeção de Dependências**  
- 🗂️ **Arquitetura Limpa (Clean Architecture)**  
- 🌐 **Requisições HTTP com Axios**  

# 📂Estrutura do Projeto
```

├── src
│ ├── components     # Componentes reutilizáveis
│ │ └── ui           # Integração com a biblioteca magic-ui
│ ├── context        # Context API para gerenciamento de estado global
│ ├── data
│ │ ├── protocols   # Protocolos de comunicação
│ │ ├── adapters    # Adaptadores para integração com APIs externas
│ │ └── gateways    # Definições de comunicação com serviços externos
│ ├── domain
│ │ ├── models      # Modelos de domínio do sistema
│ │ └── usecases    # Casos de uso da aplicação
│ ├── hooks         # Hooks personalizados
│ ├── infra         # Integração com APIs externas e persistência de dados
│ ├── lib           # Bibliotecas auxiliares
│ ├── main          # Configurações principais do projeto (injeção de dependências)
│ ├── pages         # Páginas da aplicação
│ └── utils         # Funções utilitárias
```
 

# 🚀Executando o projeto

**1️⃣** Faça o clone do repositório

```
git clone https://github.com/maironvilela/chatbot-with-blip.git
```
 

**2️⃣** Acesse o diretório do projeto, e altere o nome do arquivo `.env_example` para `.env`

**3️⃣** Informe a URL da API na chave `VITE_BLIP_API_URL`

```
 VITE_BLIP_API_URL =
```

**4️⃣** Execute o comando `npm run dev´ para executar o projeto

```
npm run dev
```

# 🎞️Screenshots do Projeto

## 🗝️ Página de Login  

[![Pagina de para authenticação da chave API ](https://sa-east-1.graphassets.com/clzr3qy8z0jvv07lsbu9dh3xe/output=format:jpg/cm2jl6f1u09d307kiozm3tjj4)

## 📇 Página de Contatos  

[![Pagina de listagem dos contatos ](https://sa-east-1.graphassets.com/clzr3qy8z0jvv07lsbu9dh3xe/output=format:jpg/cm2jmuoqi09mn07kixz6vhm43)

## 💬 Página de Conversas 

[![Pagina de listagem dos contatos ](https://sa-east-1.graphassets.com/clzr3qy8z0jvv07lsbu9dh3xe/output=format:jpg/cm2jmwmmy09kj07kl8ibcm642)



