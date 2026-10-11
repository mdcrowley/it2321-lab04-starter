// Lab 4: Objects, Validation, and Error Handling
// Goal: model a small domain with objects (or a class), make it hold up to
// bad input by validating what comes in and handling errors, and write a
// few simple tests that prove your methods work.

"use strict";

// TODO 1: Model a small domain. A class is a good fit here.
//         Example idea: a BankAccount with a balance, deposit(), and withdraw().
// class BankAccount {
//   constructor(owner, balance = 0) {
//     this.owner = owner;
//     this.balance = balance;
//   }
//   deposit(amount) {
//     // TODO 2: validate. Reject amounts that are not positive numbers.
//     if (typeof amount !== "number" || amount <= 0) {
//       throw new Error("Deposit must be a positive number.");
//     }
//     this.balance += amount;
//     return this.balance;
//   }
//   withdraw(amount) {
//     // TODO 2: validate here too, and do not allow overdrawing.
//   }
// }

// TODO 3: Use try/catch to handle a bad call gracefully instead of crashing.
// try {
//   const acct = new BankAccount("Ada", 100);
//   acct.deposit(-5);
// } catch (err) {
//   show("Handled error: " + err.message);
// }

// TODO 4: Write a few simple tests. The assert() helper below prints PASS
//         or FAIL so you can see whether each method behaves as expected.
// const acct = new BankAccount("Ada", 100);
// assert(acct.deposit(50) === 150, "deposit adds to balance");
// assert(/* a test for withdraw */ false, "withdraw subtracts from balance");


// ----- helpers (you do not need to change these) -----
function show(value) {
  const box = document.getElementById("output");
  box.textContent += (box.textContent.trim() ? "\n" : "") + String(value);
}
function assert(condition, label) {
  const line = (condition ? "PASS: " : "FAIL: ") + label;
  console.log(line);
  show(line);
}
