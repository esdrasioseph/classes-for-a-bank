import { Loan } from "./Loan.js"
import { User } from "./User.js"

export class App {
    static #users = []
    static #registeredEmails = new Set()

    static createUser(completeName, email) { 
        if (this.#registeredEmails.has(email)) {
            console.warn(`Aviso: o email ${email} já está vinculado a uma conta.`)
        } else {
            const newUser = new User(completeName, email)
            this.#registeredEmails.add(email)
            this.#users.push(newUser)
        }
    }

    static findUser(email) {
        const emailFinder = this.#users.find((user) => user.email === email)
        return emailFinder ?? null
    }

    static makeDeposit(email, value, date) {
        const user = this.findUser(email)
        if (user) {
            user.account.toDeposit(value, date)
        } else {
            console.warn("Usuário não encontrado.")
        }
    }

    static makeTransfer(email, recipientMail, value, date) {
        const user = this.findUser(email)
        const recipientAccount = this.findUser(recipientMail)
        if (user && recipientAccount) {
            user.account.toTransfer(recipientAccount, value, date)
        } else {
            console.warn("Usuário remetente ou destinatário não encontrado.")
        }
    }

    static makeLoan(email, value, date, numberOfInstallments) {
        const user = this.findUser(email)
        if (user) {
            user.account.takeALoan(value, date, numberOfInstallments)
        } else {
            console.warn("Usuário não encontrado.")
        }
    }

    static changeLoanRate (email, rate) {
        const user = this.findUser(email)
        if (user) {
            Loan.interestRate = rate
        } else {
            console.warn("Usuário não encontrado.")
        }
    }
}