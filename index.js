import { App } from "./App.js";

console.clear();
console.log("==================================================");
console.log("  SIMULADOR BANCARIO - TESTE DE FLUXO EM POO      ");
console.log("==================================================\n");


console.log("[1] Criando usuarios no sistema...");
App.createUser('Frodo Bolseiro', 'frodo.bolseiro@condado.com');
App.createUser('Gandalf o Cinzento', 'gandalf@terra-media.com');

const contaFrodo = App.findUser('frodo.bolseiro@condado.com');
const contaGandalf = App.findUser('gandalf@terra-media.com');


console.log("\n[2] Realizando depositos iniciais...");
App.makeDeposit('frodo.bolseiro@condado.com', 800, '28/10/2026');
App.makeDeposit('gandalf@terra-media.com', 1000, '28/10/2026');


console.log("\n[3] Transferindo R$ 50.00 de Gandalf para Frodo...");
App.makeTransfer('gandalf@terra-media.com', 'frodo.bolseiro@condado.com', 50, '28/10/2026');


console.log("\n[4] Solicitando emprestimo para Frodo (R$ 260.00 em 4x)...");
App.makeLoan('frodo.bolseiro@condado.com', 260, '28/10/2026', 4);

console.log("\n==================================================");
console.log("             RESUMO DAS CONTAS BANCARIAS          ");
console.log("==================================================");


console.log("\nSaldos Atuais:");
console.table([
    { Cliente: contaFrodo.completeName, Email: contaFrodo.email, Saldo: `R$ ${contaFrodo.account.myBalance.toFixed(2)}` },
    { Cliente: contaGandalf.completeName, Email: contaGandalf.email, Saldo: `R$ ${contaGandalf.account.myBalance.toFixed(2)}` }
]);


console.log("\nParcelamento do Emprestimo de Frodo (com juros de 12%):");
const parcelasFormatadas = contaFrodo.account.loans[0].installments.map(inst => ({
    "Nº Parcela": `#${inst.number}`,
    "Valor": `R$ ${inst.value.toFixed(2)}`,
    "Situacao": inst.situation ? "Pendente" : "Paga"
}));

console.table(parcelasFormatadas);

console.log("\n==================================================");
console.log("         TESTE CONCLUIDO COM SUCESSO!            ");
console.log("==================================================\n");