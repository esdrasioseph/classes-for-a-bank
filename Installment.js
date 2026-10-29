export class Installment {
    // Para a situação das parcelas, true = pendente e false = paga
    constructor(value, number, situation = true) {
        this.value = value
        this.number = number
        this.situation = situation
    }
}