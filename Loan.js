import { Installment } from "./Installment.js"

export class Loan {
    static #interestRate = (12/100)
    
    constructor(value, date, numberOfInstallments) {
        this.value = value
        this.date = date

        const totalValue = value + (value * Loan.interestRate)

        this.installments = []

        for (let i = 0; i < numberOfInstallments; i++) {
            const installment = new Installment(totalValue/numberOfInstallments, i + 1, true)

            this.installments.push(installment)
        }
    }

    static get interestRate() {
        return this.#interestRate
    }

   static set interestRate(rate) {
        if (typeof rate !== 'number' || rate <= 0) {
            console.log('Por favor, digite um valor válido!')
        } else {
            this.#interestRate = rate / 100
        }
    }
}