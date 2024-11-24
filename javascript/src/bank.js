export class Account {
    constructor(balance) {
        this.balance = balance;
    }

    // Withdraw money from the account
    withdraw(amount) {
        // Prevent withdrawing more money than the account balance
        if (amount > this.balance) {
            throw new Error("Insufficient funds");

        // Prevent withdrawing non-numeric amounts
        } else if ( isNaN(amount) ) {
            throw new Error("Must be a number");

        // Prevent withdrawing negative amounts
        } else if (amount < 0) {
            throw new Error("Invalid amount");
        }

        this.balance -= amount
        return this.balance;
    }

    // Deposit money into the account
    deposit(amount) {
        // Prevent depositing negative amounts
        if (amount <= 0) {
            throw new Error("Invalid amount");

        // Prevent depositing non-numeric amounts
        } else if ( isNaN(amount) ) {
            throw new Error("Must be a number");
        }

        this.balance += amount
        return this.balance;
    }
}