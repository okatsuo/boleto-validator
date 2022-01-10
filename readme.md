# **Boleto-validator API**

> ## Feature
<br />

- [X] Validar boleto do tipo bancário
  - [X] Validações do boleto  
  - [X] Calculo de valor
  - [X] Formatar data
  - [X] Transformar em número do código de barra
  - [X] Testes unitários

<br />

- [X]  Validar boleto do tipo convênio
  - [X] Validações do boleto
  - [ ] Calculo de valor
  - [X] Formatar data
  - [X] Transformar em número do código de barra
  - [ ] Testes unitários

<br />

- [X] Erro customizado para as validações

---
> ## Como executar o projeto
<br />

Para instalar as dependências, no teu console de preferência:
 ```bash
  yarn install
  ```

Para rodar a api:
 ```bash
 yarn start
 ```

Para rodar em modo desenvolvimento: 

 ```bash
 yarn dev
 ```

Ou para rodar com o docker-compose:

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

> ## Scripts
<br />

- **yarn start**: inicializar o servidor com os arquivos compilados para JavaScript

- **yarn dev**: inicia o servidor em modo de desenvolvimento

- **yarn docker:start**: inicia o servidor com o código compilado para JavaScript usando docker

- **yarn docker:dev**: inicia o servidor em modo de desenvolvimento usando docker-compose

- **yarn test:unit**: roda os testes unitários ( apenas dos arquivos modificados )

- **yarn test:ci**: roda todos os testes do sistema e gera o coverage atual
---
> ## Teste manual

<br />

Códigos do tipo linha digitável usados para teste:
 - tipo bancário:
    - 03399340858500000011842498201013388610000065930
    - 21290001192110001210904475617405975870000002000
  - tipo convênio:
    - 817700000000010936599702411310797039001433708318
---
**Atenção**:
Por padrão as portas estão 8800, mas pode ser trocada, basta clonar o arquivo .env.example e modificar o nome para .env e inserir a nova porta na variável PORT=

Por padrão o docker-compose e docker também rodam na mesma porta, nesse caso é necessário trocar a porta manualmente dentro dos arquivos dos mesmos.

---

> ## Backlog 

- Retorno de erro mais detalhado sobre o erro específico
- Desacoplar algumas verificações para melhor teste unitário
- Teste unitário para as operações de boleto do tipo convênio
- Calculo do valor do boleto do tipo convênio
- Verificações se o boleto possui ou não data de vencimento e valor
