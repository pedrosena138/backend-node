# Back-end Node.js
> Back-end usando Node.js, Express e MongoDB

## Iniciar o servidor
### Nodemon
Para instalar o nodemon é só executar no PowerShell: ```npm install nodemon -D```
> o -D irá instalar o nodemon nas devDependencies

Agora é só é executar: ```npm start```

### Node
Executar o comando: ```node src/index.js```

### Descrição
Sistema de cadastro de celulares. Possui os atributos:
- ```model```: Modelo do telefone;
- ```price```: Preço do telefone;
- ```brand```: Marca do telefone;
- ```startDate```: Data de início das vendas do telefone;
- ```endDate```: Data do fim das vendas do telefone;
- ```colors```: Cores disponíveis do telefone;
- ```code```: Código do telefone.

### Validações

|   Atributos   | Validações                                                          |
|---------------|---------------------------------------------------------------------|
| **model**     | Deve ter entre 2 e 255 caracteres, sem contar os espaços            |    
| **price**     | Deve ser positivo                                                   |
| **brand**     | Deve ter entre 2 e 255 caracteres, sem contar os espaços            |
| **startDate** | Deve ser maior que 25/12/2018                                       |
| **endDate**   | Deve ser maior que o startDate                                      |
| **colors**    | Lista fixa de cores que só aceita 'BLACK', 'WHITE', 'GOLD' e 'PINK' |
| **code**      | Código alfanúmerico de 8 dígitos                                    |
