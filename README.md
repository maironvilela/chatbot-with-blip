<h1 align="center">
     Projeto ChatBot - Ferenciando contatos da plataforma Blip
 </h1>

  <p align="center">
    <a href="#sobre-o-projeto">Sobre o Projeto</a> |
    <a href="#principais-tecnologias">Principais Tecnologias</a> |
    <a href="#principais-recursos">Principais Recursos</a> |
    <a href="#estrutura_do_projeto">Estrutura do Projeto</a> |
    <a href="#executando_o_projeto">Executando o projeto</a>   
</p>

[![Pagina de para authenticação da chave API ](https://sa-east-1.graphassets.com/clzr3qy8z0jvv07lsbu9dh3xe/output=format:jpg/cm2jl6f1u09d307kiozm3tjj4)

# 📒Sobre o Projeto

Desenvolvimento de uma aplicação web para exibição dos contatos e conversas de um chatbot da
plataforma Blip. A aplicação deverá ter três rotas principais e utilizar a API do Blip para obter as
informações do bot.

## Rota de login (/login)

- O usuário deve inserir uma chave de API válida do bot no Blip.
- A aplicação deve autenticar o usuário e salvar de forma persistente para uso nas
  outras rotas.
- Validação da chave: a aplicação deve validar se a chave inserida é válida ao
  tentar carregar a rota raiz.

## Rota raiz (/):

- Após o login bem-sucedido, o usuário deve ser redirecionado para a rota raiz.
- A rota raiz deve exibir uma lista paginada dos contatos do bot.
- Cada página deve exibir uma quantidade configurável de contatos (por exemplo,
  10 por página).
- A aplicação deve usar a API do Blip para buscar e exibir os contatos.
- Ao clicar em um contato, o usuário deve ser redirecionado para a página de
  exibição da conversa.

## Rota de conversa do contato (/contato/:id)

- Ao clicar em um contato na rota raiz, o usuário deve ser redirecionado para esta
  rota, onde será exibida a conversa completa com o contato selecionado.
- A conversa deve ser exibida sem paginação, carregando todas as mensagens
  enviadas e recebidas.
- Utilizar a API do Blip para obter as mensagens trocadas com o contato
  selecionado.

#💻Principais Tecnologias

[![](https://img.shields.io/badge/@Code-React-052051)]()
[![](https://img.shields.io/badge/@Code-typescript-052051)]()

[![](https://img.shields.io/badge/@Styles-Tailwind-3b82f6)]()

[![](https://img.shields.io/badge/@Componentes-magicui-16a34a)]()
[![](https://img.shields.io/badge/@Componentes-radixUI-16a34a)]()

[![](https://img.shields.io/badge/@Plataforma_Chatbot-Blip-f0abfc)]()

[![](https://img.shields.io/badge/@Validação_de_daros-Zod-708090)]()

# ⚒️Principais Recursos

[![](https://img.shields.io/badge/Consumo_API_plataforma_blip-052051)]()
[![](https://img.shields.io/badge/Estilização_utilizando_a_biblioteca_tailwind_-052051)]()
[![](https://img.shields.io/badge/Validação_de_dados_utilizando_a_biblioteca_ZOD-052051)]()
[![](https://img.shields.io/badge/Utilização_de_hooks_personalizados-052051)]()
[![](https://img.shields.io/badge/Compartilhando_informações_com_ContextAPI-052051)]()
[![](https://img.shields.io/badge/Aplicação_do_padrã0_de_projeto_adapter-052051)]()
[![](https://img.shields.io/badge/Aplicação_do_padrã0_de_projeto_gateways-052051)]()
[![](https://img.shields.io/badge/Aplicação_do_padrã0_de_projeto_factory-052051)]()
[![](https://img.shields.io/badge/Injeção_de_dependencia-052051)]()
[![](<https://img.shields.io/badge/Aplicação_(ou_tentativa)_do_arquitetura_Clean_Architecture-052051>)]()
[![](https://img.shields.io/badge/Utilização_da_biblioteca_axios_para_consumo_de_API-052051)]()

# 📂Estrutura do Projeto

```
  |-src
     |-components: componentes do projeto compartilhados
         |-ui: Utilizado pela biblioteca magic-ui para adicionar os componentes no projeto
     |-context: Contextos utilizados pelas paginas para recuperar informações globais do sistema
     |-data
         |-protocols: Protocolos utilizados pelas camadas de domínio e de infraestrutura
             |-adapters: Adaptadores utilizados para comunicação com bibliotecas externas
             |-gateways: Gateways utilizados para definir a comunicação com a API externas
         |-service: Implementação dos usecases definidos na camada de domínio
     |-domain
         |-models: Contem os modelos de domínio do sistema
         |usecases: Contem os casos de uso do sistema
     |-hooks: Hooks utilizados pelas paginas para executar funções que são compartilhadas
     |-infra: Camada responsável pela comunicação com a API externa, acesso ao banco de dados e outras funcionalidades para persistência de dados
     |-lib: Utilizado pela biblioteca magic-ui
     |-main: É a camada "suja" do projeto, devido conter dependências de bibliotecas externas. Contem os adapters e a criação dos objetos para utilização da Injeção de Dependências.
     |-pages: Contem as paginas do projeto
          |-<pagina>
              |-componentes: Componentes utilizados pela pagina
     |-utils: Funções utilitárias utilizadas

```

# 🚀Executando o projeto

**Passo 01:** Faça o clone do repositório

```
git clone https://github.com/maironvilela/chatbot-with-blip.git
```

**Passo 02:** Acesse o diretório do projeto, e altere o nome do arquivo `.env_example` para `.env`

**Passo 03:** Informe a URL da API na chave `VITE_BLIP_API_URL`

```
 VITE_BLIP_API_URL =
```

**Passo 04:** Execute o comando `npm run dev´ para executar o projeto

```
npm run dev
```

#🎞️Screenshots do Projeto

## Pagina de Login

[![Pagina de para authenticação da chave API ](https://sa-east-1.graphassets.com/clzr3qy8z0jvv07lsbu9dh3xe/output=format:jpg/cm2jl6f1u09d307kiozm3tjj4)

## Pagina de Contatos

[![Pagina de listagem dos contatos ](https://sa-east-1.graphassets.com/clzr3qy8z0jvv07lsbu9dh3xe/output=format:jpg/cm2jmuoqi09mn07kixz6vhm43)

## Pagina de Conversas

[![Pagina de listagem dos contatos ](https://sa-east-1.graphassets.com/clzr3qy8z0jvv07lsbu9dh3xe/output=format:jpg/cm2jmwmmy09kj07kl8ibcm642)

# Projeto On-line

