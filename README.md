<h1 align="center">
    <img alt="spacetraveling" title="spacetraveling" src="/assets/spacetraveling-logo.svg" width="400px" />
</h1>

<!-- TABLE OF CONTENTS -->

<h5 align="center"> 
<a href="#sobre">Sobre</a>
   •   <a href="#tecnologias">Tecnologias</a> 
   •   <a href="#roadmap">Roadmap</a> 
   •   <a href="#instalação">Instalação</a> 
   •   <a href="#visão-do-projeto">Visão do projeto</a>
   •   <a href="#agradecimento">Agradecimento</a> 
   •   <a href="#licença">Licença</a>     
   •   <a href="#autor">Autor</a> 
</h5>

## Sobre

<h4>SpaceTraveling é um blog desenvolvido com Next.js e Prismic CMS</h4>

O [template](https://github.com/rocketseat-education/ignite-template-reactjs-criando-um-projeto-do-zero) utilizado para construir a aplicação SpaceTraveling contém uma aplicação criada com Next.js e um conjunto de testes que devemos cumprir. O desafio proposto era criar uma aplicação do zero, criando uma interface seguindo um layout do Figma, utilizando Prismic como gerador de conteúdo onde estarão os posts do blog e que deverá permitir o acesso da aplicação aos dados usando a API do Prismic, e aplicando conceitos de Static Site Generation para trabalhar com geração de páginas estáticas.

## Tecnologias

- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [Prismic](https://prismic.io/)
- [Figma](https://www.figma.com/)
- [Sass](https://sass-lang.com/)
- [date-fns](https://date-fns.org/docs/Getting-Started)
- [Fetch_API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch)
- [react-icons](https://react-icons.github.io/react-icons/)

## Roadmap

- [x] Importar a fonte 'Inter' do Google Fonts em 'src\pages\_document.tsx'
- [x] Criar a interface do blog a partir de um layout do Figma 
- [x] Criar componente Header
- [x] Buscar posts do Prismic utilizando paginação
- [x] Geração de páginas estáticas com os métodos getStaticProps e getStaticPaths
- [x] Calcular o tempo estimado de leitura do post
- [x] Formatação de datas com date-fns
- [x] Uso de ícones com react-icons
- [x] Requisições HTTP com fetch

## Instalação

- ### **Pré-requisitos**
  - É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador.
  - É **necessário** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.
  - É **necessário** ter o Prismic configurado. Faça o seguinte:
    - Crie uma conta no Prismic.
    - Crie um repositório.
    - Selecione o botão Custom Type na barra lateral, clique em Repeatable Type e digite o nome 'posts'.
    - O type 'posts' deve ter um formato. Siga o arquivo json - [posts.json](/assets/posts.json), ou a imagem a seguir:
      <div>
        <img alt="posts" title="posts" src="/posts.jpg" width="75%"/>
      </div>
    - Agora com o 'posts' estruturado clique no botão Documents e crie alguns exemplos para testar a aplicação.

- ### **Próximo passo**
1. Faça um clone deste repositório:
   ```sh
   $ git clone https://github.com/die-goncalves/ignite-reactjs-modulo03-desafio01-spacetraveling
   ```

2. Instale as depêndencias:
   ```sh
   # Entre no diretório do repositório clonado
   $ cd ignite-reactjs-modulo03-desafio01-spacetraveling
   # Instale as dependências do projeto.
   $ yarn #ou $ npm install
   ```

3. Crie na raiz do projeto o arquivo **.env.local**.<br/>
   Siga a numeração na imagem para pegar o endpoint que se encontra no número 3 e coloque na variável PRISMIC_API_ENDPOINT.
   ```sh
   # PRISMIC
   PRISMIC_API_ENDPOINT=
   ```
   <img alt="endpoint" title="endpoint" src="/assets/endpoint.jpg"/>

4. Execute a aplicação
   ```sh
   $ yarn dev #ou $ npm run dev
   # A aplicação inciará na porta:3000 - acesse <http://localhost:3000>
   ```

## Visão do projeto

<img src="/assets/spacetraveling.gif" alt="spacetraveling" width="100%" height="80%">

## Agradecimento

<table width="100%" align="center">
    <tr>
        <th>
            <a href="https://rocketseat.com.br/">
                <img width="150" height="150" src="https://avatars.githubusercontent.com/u/28929274?s=200&v=4">
                <br /><sub><b>Rocketseat</b></sub>
            </a>
        </th>
        <th>
            <img width="150" height="150" src="/assets/ignite-logo.svg">
            <br /><sub><b>Ignite</b></sub>
        </th>
        <th>
            <a href="https://github.com/diego3g">
                <img width="150" height="150" src="https://avatars.githubusercontent.com/u/2254731?s=400&u=4fcc8ca9672eeb41ea800271831b7c687bc17054&v=4">
                <br /><sub><b>diego3g (Diego Fernandes)</b></sub>
            </a>
        </th>
    </tr>
</table>

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor

Feito por Diego Gonçalves, contato:

[![Badge](https://img.shields.io/static/v1?label=Linkedin&message=Diego%20Gonçalves&color=208BEE&style=flat-square&logo=linkedin&link=https://www.linkedin.com/in/diego-goncalves1990)](https://www.linkedin.com/in/diego-goncalves1990)
[![Badge](https://img.shields.io/static/v1?label=Gmail&message=die.goncalves1990@gmail.com&color=EA5134&style=flat-square&logo=gmail&link=mailto:die.goncalves1990@gmail.com)](mailto:die.goncalves1990@gmail.com)