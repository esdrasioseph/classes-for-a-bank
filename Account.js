import { Deposit } from "./Deposit.js"
import { Loan } from "./Loan.js"
import { Transfer } from "./Transfer.js"

export class Account {
    #balance = 0


    constructor(user) {
        this.user = user
        this.deposits = []
        this.loans = []
        this.transfers = []

    }

    get myBalance() {
        return this.#balance
    }

    toDeposit (value, date) {
        const deposit = new Deposit(value, date)
        this.#balance += value
        this.deposits.push(deposit)
    }

    takeALoan(value, date, numberOfInstallments) {
        const loan = new Loan(value, date, numberOfInstallments)
        this.#balance += value
        this.loans.push(loan)
    }

    toTransfer(recipient, value, date) {
        const transfer = new Transfer(this.user, recipient, value, date)
        
        if (value > this.#balance) {
            console.warn("Saldo insuficiente.")
        } else {
            if (this.user === recipient) {
                console.warn("Não é possível transferir para si mesmo.")
            } else {
                this.#balance -= value
                recipient.account.#balance += value
                this.transfers.push(transfer)
                recipient.account.transfers.push(transfer)
            }
        }
    }
}