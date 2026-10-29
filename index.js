import { App } from "./App.js";

App.createUser('Esdras Ioseph Brandão', 'esdras@email.com')
App.createUser('José Bispo', 'jbd@email.com')

const contaEsdras = App.findUser('esdras@email.com')

App.makeDeposit('esdras@email.com', 800, '27/10/2025')
App.makeDeposit('jbd@email.com', 1000, '28/10/2025')

App.makeTransfer('jbd@email.com', 'esdras@email.com', 50, '11/10/2026')

console.log(contaEsdras.account.myBalance)

App.makeLoan('esdras@email.com', 260, '21/10/2026', 4)

console.log(contaEsdras.account.loans[0].installments)