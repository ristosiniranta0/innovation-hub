/**
 * Filename: sophisticatedCode.js
 * Description: This code demonstrates a sophisticated, elaborate, and complex implementation in JavaScript.
 * It provides a simulation of a banking system with multiple user accounts, transactions, and balance calculations.
 * The code contains various classes, methods, and functions to ensure proper functionalities.
 */

// Main class representing a Bank
class Bank {
  constructor(name) {
    this.name = name;
    this.accounts = [];
    this.transactions = [];
  }

  createAccount(account) {
    this.accounts.push(account);
  }

  makeTransaction(transaction) {
    this.transactions.push(transaction);
  }

  calculateBalance(accountId) {
    let balance = 0;
    for (let transaction of this.transactions) {
      if (transaction.from === accountId) {
        balance -= transaction.amount;
      } else if (transaction.to === accountId) {
        balance += transaction.amount;
      }
    }
    return balance;
  }
}

// Class representing a Bank Account
class Account {
  constructor(id, owner) {
    this.id = id;
    this.owner = owner;
  }

  toString() {
    return `Account number: ${this.id}, Owner: ${this.owner}`;
  }
}

// Class representing a Transaction
class Transaction {
  constructor(from, to, amount, description) {
    this.from = from;
    this.to = to;
    this.amount = amount;
    this.description = description;
    this.timestamp = new Date();
  }
}

// Create a Bank instance
const myBank = new Bank("My Bank");

// Create some user accounts
const account1 = new Account("001", "John Doe");
const account2 = new Account("002", "Jane Doe");
const account3 = new Account("003", "Alice Smith");

// Add the accounts to the Bank
myBank.createAccount(account1);
myBank.createAccount(account2);
myBank.createAccount(account3);

// Perform transactions
myBank.makeTransaction(
  new Transaction(account1.id, account2.id, 1000, "Transfer")
);
myBank.makeTransaction(
  new Transaction(account2.id, account3.id, 500, "Online Purchase")
);
myBank.makeTransaction(
  new Transaction(account3.id, account1.id, 300, "Withdrawal")
);

// Calculate and display account balances
console.log(`Balance for ${account1.toString()}: ${myBank.calculateBalance(account1.id)}`);
console.log(`Balance for ${account2.toString()}: ${myBank.calculateBalance(account2.id)}`);
console.log(`Balance for ${account3.toString()}: ${myBank.calculateBalance(account3.id)}`);
```