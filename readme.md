# **Boleto-validator API**

> ## Feature
<br />

- [X] validar boleto do tipo bancário
  - [X] calculo de valor
  - [X] calculo da data
  - [X] transformar em de número do código de barra
  - [X] testes unitários

- [X]  validar boleto do tipo convênio
  - [ ] calculo de valor
  - [X] calculo da data
  - [X] transformar em de número do código de barra
  - [ ] testes unitários

---
> ## Retorno da api
<br />

A api retorna um json, contendo caso de sucesso ou erro.

 - exemplo de sucesso: (status code: 200)
 ```js
  {
    "data": {
      "barCode": "21299758700000020000001121100012100447561740",
      "amount": "20.00",
      "expirationDate": "2018-07-16"
    }
  }
 ```
 - exemplo de erro: (status code 400)
```js
  {
    "error": {
      "message": "Linha digitável inválida"
    }
  }
 ```
---


> ## Como executar o projeto
<br />

para instalar as dependências, no teu console de preferência:
 ```bash
  yarn install
  ```

para rodar a api:
 ```bash
 yarn start
 ```

para rodar em modo desenvolvimento: 

 ```bash
 yarn dev
 ```

ou para rodar com o docker-compose:

```bash
yarn docker:dev
```

---


> ## Como executar o projeto com docker:
<br />

  Com o docker instalado e configurado no computador:
  ```bash
  yarn docker:start
  ```

---

> ## Scripts
<br />

- **yarn start**: inicializar o servidor com os arquivos compilados para JavaScript

- **yarn dev**: inicia o servidor em modo de desenvolvimento

- **yarn docker:start**: inicia o servidor com o código compilado para JavaScript usando docker

- **yarn docker:dev**: inicia o servidor em modo de desenvolvimento usando docker-compose

- **yarn test:unit**: roda os testes unitários ( apenas dos arquivos modificados )

- **yarn test:ci**: roda todos os testes do sistema e gera o coverage atual
---

Por padrão as portas estão 8800, mas pode ser trocada, basta clonar o arquivo .env.example e modificar o nome para .env e inserir a nova porta na variável PORT=

Por padrão o docker-compose e docker também rodam na mesma porta, nesse caso é necessário trocar a porta manualmente dentro dos arquivos dos mesmos.

---

> ## to-do

- retorno de erro mais detalhado sobre o erro específico
- desacoplar algumas verificações para melhor teste unitário
- otimizar condições (if)
- teste unitário para as operações de boleto do tipo convênio
- calculo do valor do boleto do tipo convênio
- verificações se o boleto possui ou não data de vencimento e valor