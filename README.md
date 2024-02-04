# Projeto React Mínimo

Este é o repositório do Projeto React Mínimo, uma iniciativa que surge para demonstrar um modelo simplificado de uma aplicação React. Neste projeto, evitamos o uso de bibliotecas inicializadoras de projetos como o `create-react-app`, `Vite, entre outras, não por elas serem inerentemente ruins, mas sim pelo nosso objetivo de criar um projeto React mais simples e controlável.

## Motivação

A motivação para criar esse projeto decorre da constatação de que muitos iniciantes em React enfrentam uma barreira de aprendizado devido ao uso de bibliotecas inicializadoras. Essas ferramentas, apesar de serem extremamente úteis e agilizarem o processo de configuração inicial, muitas vezes acabam escondendo a lógica básica por trás de um projeto React.

Inicialmente, essas bibliotecas podem parecer um atalho conveniente, pois configuram automaticamente um ambiente de desenvolvimento completo com uma série de características, tais como hot-reloading, transpilação ES6, rotas pré-configuradas, entre outras. No entanto, esse conforto inicial pode levar a uma compreensão limitada dos mecanismos subjacentes que impulsionam uma aplicação React.

Além disso, essas bibliotecas introduzem uma infinidade de dependências e abstrações que, embora úteis em muitos casos, também podem tornar o código final mais pesado e complexo. Elas adicionam uma camada de complexidade adicional que, muitas vezes, não é necessária, especialmente para projetos menores e mais simples.

A dependência de bibliotecas inicializadoras pode eventualmente levar a um sentimento de perda de controle sobre o projeto. Isso é particularmente verdadeiro quando se tenta configurar aspectos mais personalizados da aplicação ou se deparar com erros ou problemas de configuração.

## O que este projeto propõe

O Projeto React Mínimo propõe um retorno à essência do React. Nosso objetivo é fornecer um ponto de partida simples e descomplicado para quem quer entender o funcionamento interno de uma aplicação React sem a complexidade adicional introduzida por bibliotecas inicializadoras.

Acredito que essa abordagem pode proporcionar uma base sólida para os desenvolvedores iniciantes que desejam ter controle total sobre seu projeto. Com o Projeto React Mínimo, o desenvolvedor tem a liberdade de expandir e personalizar a aplicação conforme necessário, mantendo a estrutura do projeto enxuta e fácil de entender.

## Branches

Por questões de organização decidi separar em branches diferentes a implementação tanto do typescript quanto do eslint nesse projeto, pois como a intenção é manter o projeto o mais limpo possível essas duas adições podem ser totalmente opcionais deixando assim a branch `master` do projeto mostrando realmente a versão mais limpa possível. Logo se está a procura de configurar seu projeto para usar typescript ou eslint dê uma olhada nas branches desse repositório.

## Particularidades

Aqui deixo anotado uma particularidade dessa branch, como o uso do eslint está muito intrinsseco à IDE que vc vai usar, deixo algumas recomendações para o uso com o VSCode:

- Instale a extensão no VSCode: `dbaeumer.vscode-eslint`
- Configure seu Workspace para usar o eslint da forma certa:
```json
{
    "eslint.validate": [ "javascript", "javascriptreact", "html", "typescriptreact" ],
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "always"
    },
    "terminal.integrated.env.windows": {},
    "cSpell.language": "en,pt-BR",
}
```

## Como executar localmente

Siga as instruções abaixo para executar este projeto em sua máquina:

1. Clone o repositório para sua máquina local usando `git clone https://github.com/HenrryEsposito/react-minimo.git`.

2. Navegue até o diretório clonado usando `cd react-minimo`.

3. Instale todas as dependências do projeto usando `npm i`.

4. Para executar o servidor de desenvolvimento, use o comando `npm start`.

5. Acesse `http://localhost:8080/` para visualizar a página do projeto localmente.

6. Para criar uma versão de produção, use o comando `npm run build`.

## Dependências

Este projeto busca minimizar a poluição por dependências inúteis, evitando o uso de bibliotecas inicializadoras que adicionam muitas dependências desnecessárias. Aqui, cada dependência tem uma razão específica para estar presente:

### Dependências de Produção

- `react`: A biblioteca React é a base de qualquer aplicação React. Ela é usada para criar componentes de interface do usuário.
- `react-dom`: Esta biblioteca lida com a renderização dos componentes React no DOM do navegador.

### Dependências de Desenvolvimento

- `@babel/core` e `@babel/preset-react`: O Babel é um compilador JavaScript que é usado principalmente para converter o código ECMAScript 2015+ em uma versão compatível com versões anteriores do JavaScript que podem ser executadas por motores JavaScript mais antigos.
- `babel-loader`: Este pacote permite transpilar arquivos JavaScript usando Babel e webpack.
- `html-webpack-plugin`: Este é um plugin para o webpack que simplifica a criação de arquivos HTML para servir aos seus pacotes webpack.
- `webpack`, `webpack-cli` e `webpack-dev-server`: O webpack é um empacotador de módulos estáticos para aplicações JavaScript modernas. O `webpack-cli` permite usar o webpack na linha de comando e `webpack-dev-server` é usado para servir rapidamente o aplicativo durante o desenvolvimento.

Este projeto foi criado com a ideia de que menos é mais. Ao evitar bibliotecas inicializadoras de projetos, mantemos o controle total sobre nosso ambiente de desenvolvimento e produção. Isso nos dá a liberdade de configurar nosso projeto como desejarmos, e evita a inclusão de dependências desnecessárias que podem tornar o projeto mais pesado e mais difícil de gerenciar. É claro que cada uma das dependências acima possuem suas próprias dependências para conseguirem abstrair algumas coisas, mas de qualquer forma nosso projeto só está iniciando com 9 dependências diretas sendo que 7 delas não estarão presentes no nosso pacote final quando o projeto for buildado, pois tratam-se de bibliotecas usadas apenas para auxiliar no desenvolvimento (dev dependencies).

## Licença

Este projeto está sob a licença GNU. Veja o arquivo `LICENSE` para mais detalhes.
