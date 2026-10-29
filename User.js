import { Account } from "./Account.js"

export class User {
    constructor(completeName, email) {
        this.completeName = completeName
        this.email = email
        this.account = new Account(this)
    }
}