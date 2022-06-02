# Galerie

É um projeto fullstack, que oferece uma galeria de fotos privada. O usuário tem a possibilidade de fazer upload e download de fotos, ainda é possível compartilhar fotos com seus amigos através da criação de links.

## Demo


https://user-images.githubusercontent.com/87545541/171568202-7b71fa17-eff9-489a-a358-39e7b0316704.mov


## Backend

O Backend do projeto foi desenvolvido com o framework Nestjs e Prisma. Utilizou-se o POSTGRES como banco de dados. A aplicação conta com um CRUD completo e sistema de login utilizando JWT e Argon para a criptografia de senha.

O fluxo utilizado no armazenamento das fotos, consiste em a partir do upload da foto é enviado uma referencia da foto para o banco de dados e a foto completa para um bucket S3 na AMAZON AWS.

A aplicação conta ainda com a integração através do axios com a api [shrtco](https://shrtco.de/docs/) que possibilita o encurtamento de links.

## Frontend

O Frontend da aplicação foi feito utilizando React junto com Typescript e Styled-Components para estilização.

Para o desenvolvimento foi utilizado o Context Api no gerenciamento global do estado. Custom hooks visando ajudar no reaproveitamento de código e separação da logica. React Router para lidar com as diferentes rotas da aplicação e
Axios no tratamento de todas as requisições ao backend.

Na criação dos formulários foi usado o Formik e para a validação dos inputs o Yup.

Entre os principais desafios no processo de desenvolvimento estão a implementação da biblioteca frame-motion que possibilita a animações no componente de exibição das fotos, e a implementação da biblioteca Dropzone que permite o 'drag and drop' de fotos na zona especifica para upload.

## Aplicação em produção

O Backend da aplicação está rodando em um docker container no railway, e o Frontend já integrado com o Backend está rodando na vercel e pode ser acessado abaixo.

[Galerie](https://photo-gallery-jet.vercel.app/)

## Tecnologias Utilizadas

#### Web

- React
- TypeScript
- React Hooks
- Custom Hooks
- Styled-Components
- Framer Motion
- React Dropzone
- Formik
- Yup
- File-saver
- Docker
- Axios
- Eslint

#### Server

- NodeJs
- NestJs
- TypeScript
- Passport-jwt
- Class-Validator
- Prisma
- PostegreSQL
- Docker
- Mime
- Argon2
- Multer-s3
- Axios
- Eslint

## Authors

- [Flavio junior](https://github.com/fpdsjr)
