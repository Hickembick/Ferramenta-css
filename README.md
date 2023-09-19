# Ferramenta de Ordenação de Propriedades CSS

Bem-vindo(a) ao projeto **Ferramenta de Ordenação de Propriedades CSS**! Este é um projeto desenvolvido em Node.js que oferece uma ferramenta simples e eficiente para auxiliar no trabalho com propriedades CSS.

Este projeto foi criado como requisito do curso de Formação Web Dev Fullstack - Resilia.

O contexto para a utilização da ferramenta é: Uma empresa de desenvolvimento de software precisa ordenar uma lista de propriedades de CSS (ex: background-color, font-size, text-align) de A-Z.

Com essa ferramenta, é possível inserir uma lista de propriedades e obtê-las ordenadas alfabeticamente, visualizando o resultado no terminal.

## Tecnologias

Desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [readline](https://nodejs.org/api/readline.html) (módulo Node.js para interação com o terminal)

## Executando Localmente

**Instalação:**

Antes de executar o projeto, certifique-se de ter o Node.js instalado em seu sistema. Você pode baixá-lo em [NodeJS - Download](https://nodejs.org/pt-br/download).

Clone o projeto para o seu diretório local:


Entre no diretório do projeto:
```bash
git clone https://github.com/Hickembick/Ferramenta-css.git

cd Ferramenta-css

Em seguida, instale as dependências usando o seguinte comando:
npm install

Executando o Projeto:

Agora você pode iniciar o projeto usando:
npm start

Agora você pode inserir as propriedades CSS e obter a lista ordenada. 
Para encerrar a inserção, basta digitar "SAIR" quando solicitado.

**Exemplo de Uso**

Entrada - Inserir uma lista de propriedades CSS:

Digite uma propriedade CSS (ou "SAIR" para encerrar):
padding
[enter]

Digite uma propriedade CSS (ou "SAIR" para encerrar):
background-color
[enter]

Digite uma propriedade CSS (ou "SAIR" para encerrar):
font-family
[enter]

SAIR
[enter]

Saída - Propriedades ordenadas:

background-color
font-family
padding


Feito por JessicaHickembick

📖 Referências

Documentação do Node.js


