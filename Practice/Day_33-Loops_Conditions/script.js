// Level 1 – Pure Beginner Practice

// 1. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”

function eligibleForVote() {
  let age = prompt("Enter the Age");

  if (age >= 18) {
    console.log("Eligible for Vote");
  } else {
    console.log("Not Eligible for Vote");
  }
}

//eligibleForVote();

// 2. Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.
function printMultiTable() {
  let num = prompt("Please Enter the Number");
  for (let i = 1; i <= 10; i++) {
    console.log(num * i);
  }
}

//printMultiTable();

// 3. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.

function numberGretaer() {
  let count = 0;
  for (let i = 0; i <= 15; i++) {
    if (i > 8) {
      count++;
    }
  }
  console.log(`Total numbers greater than 8 is ${count}`);
}

//numberGretaer();

// 4. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.
function checkPass() {
  let pass = prompt("Enter the Password");
  if ("Nishad123" === pass) {
    console.log("Login Successfull");
  } else {
    console.log("Password is not coorect");
  }
}

//checkPass();

// Level 2 – Slightly Tougher but Logical
// 5. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”
function checkCorrectPass() {
  let count = 3;
  while (count != 0) {
    let pass = prompt(`Enter Correct Password | You have ${count} attempt`);

    if (pass === "Nishad123") {
      console.log("Password is Correct");
      break;
    } else {
      count--;
      console.log(`Incorrect Password! , You have ${count} attempt left`);
    }
  }

  if (count === 0) {
    console.log("Attempt over");
    alert("Your Account is locked");
  }
}

//checkCorrectPass();

// 6. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".
function wordloop() {
  let count = 0;
  let word;

  while (word !== "stop") {
    word = prompt("Enter the any word and to end this loop enter stop");
    if (word === "yes") {
      count++;
    }
  }

  console.log(`yes word typed ${count} times`);
}

//wordloop();

//7. Print numbers divisible by 7 from 1 to 50
//Use modulo % and loop.
function divisibleBy7() {
  for (let i = 1; i <= 50; i++) {
    if (i % 7 === 0) {
      console.log(i);
    }
  }
}

//divisibleBy7();

// 8. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.
function sumOfOddNum() {
  let sum = 0;
  for (let i = 1; i <= 30; i++) {
    if (i % 2 !== 0) {
      sum = sum + i;
    }
  }

  console.log(`Sum of Odd Number :- ${sum}`);
}

//sumOfOddNum();

// 9. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.
function askEnvenNum() {
  let num;
  while (num % 2 !== 0) {
    num = prompt("Enter the number | To stop this loop enter even number");
  }
}

//askEnvenNum();

// 10. Print numbers between two user inputs
// Input start and end using prompt() → print all between.
function printBtwNum() {
  let start = +prompt("Enter the Start number");
  let end = +prompt("Enter the End number");

  if (start > end) {
    console.log(
      "You enter the wrong number start should be less than end number"
    );
  }

  for (let i = start; i <= end; i++) {
    console.log(i);
  }
}

//printBtwNum();

// 11. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.
function print3odd() {
  let count = 0;

  for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
      console.log(i);
      count++;
    }
    if (count === 3) {
      break;
    }
  }
}

//print3odd();

// 12. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.
function countNum() {
  let arr = new Array();
  let pst = 0;
  let ngt = 0;
  for (let i = 0; i < 5; i++) {
    arr[i] = +prompt(`Enter number count ${i + 1}`);
  }

  for (let i = 0; i < 5; i++) {
    if (arr[i] > 0) {
      pst++;
    } else {
      ngt++;
    }
  }

  console.log(`There are ${pst} positive number`);
  console.log(`There are ${ngt} negative number`);
}

//countNum();

// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”
function ATMSimul() {
  let balac = 1000;
  let withdrawal = 3;
  while (withdrawal !== 0) {
    let amt = +prompt(
      `Enter the withdrawal amount | You can withdrawal ${withdrawal} times`
    );

    if (amt > balac) {
      console.log("Insufficient balance");
      break;
    }
    balac = balac - amt;
    withdrawal--;
    console.log(`Collect your ₹${amt} cash`);
  }
}

ATMSimul();
