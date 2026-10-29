# 🏦 Classes for a Bank (Simulador Bancário em POO)

Projeto desenvolvido como exercício prático para fixação de conceitos fundamentais de **Programação Orientada a Objetos (POO)** em JavaScript moderno (ES6+).

---

## 🎯 Objetivo do Projeto

O objetivo principal deste projeto foi modelar a estrutura básica de um sistema bancário utilizando os pilares da Orientação a Objetos, explorando:

- **Modularização (ES Modules):** Separação de responsabilidades em arquivos distintos para cada classe.
- **Encapsulamento:** Uso de campos privados nativos (`#balance`, `#users`, `#interestRate`) para proteger o estado interno e evitar mutações indevidas.
- **Getters e Setters:** Acesso e validação controlada de propriedades.
- **Composição e Associação:** Relações do tipo *tem-um* (`User` tem uma `Account`, `Account` tem coleções de `Deposit`, `Transfer` e `Loan`, `Loan` tem parcelas `Installment`).
- **Membros Estáticos:** Uso de `static` para orquestração da aplicação (`App`) e configurações globais de classe (`Loan`).

---

## 🏗️ Estrutura de Classes

| Classe | Descrição |
| :--- | :--- |
| **`User`** | Representa o cliente do banco (nome, e-mail e sua respectiva conta). |
| **`Account`** | Gerencia o saldo do cliente e os históricos de transações (depósitos, empréstimos e transferências). |
| **`Deposit`** | Registra depósitos realizados (valor e data). |
| **`Transfer`** | Registra transferências entre contas (remetente, destinatário, valor e data). |
| **`Loan`** | Representa um empréstimo contratado, calculando parcelas com taxa de juros estática da classe. |
| **`Installment`** | Representa uma parcela individual do empréstimo (valor, número e situação). |
| **`App`** | Ponto de entrada estático que orquestra criação de usuários, buscas e transações financeiras. |

---

## 🚀 Como Executar

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado (versão 18 ou superior).
- [Git](https://git-scm.com/) instalado no computador.

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/esdrasioseph/classes-for-a-bank.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd classes-for-a-bank
   ```

3. **Execute o arquivo de testes/demonstração:**
   ```bash
   node index.js
   ```
   *(Ou se preferir, use o comando configurado no `package.json`: `npm start`)*

---

## 🛠️ Tecnologias
- **JavaScript (ES6+)**
- **Node.js**

---

Desenvolvido por **Esdras Ioseph Brandão** para fins de estudo e prática de Programação Orientada a Objetos.

