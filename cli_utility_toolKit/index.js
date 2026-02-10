
const prompt = require("prompt-sync")()

const toDo = parseInt(prompt("Enter 1 to 5 for :- \n 1: Check Even or Odd,\n 2: Ceck Prime\n 3: Calculation\n 4: None.\n"))

switch (toDo){
    case 1:
        isEvenOdd()
        break;
    case 2:
        isPrime()
        break;
    case 3:
        calCulator()
        break;
    case 4:
        console.log("):")
        break;
    default:
        console.log("Please Enter a Valid Number (1 to 5)!")
        break;
}

function isEvenOdd(){
    const num = parseFloat(prompt("Enter a Number to check if it's Even or Odd: "))

    const result = num % 2 === 0 ? `Yes ${num} is Even` : `${num} is Odd` ;
    console.log(result)

    const rept = prompt("Do you Want to Continue? (y / n) : ").toLowerCase()
    rept === "y" ? isEvenOdd() : console.log("):")
}

function isPrime(){
    const num = parseFloat(prompt("Enter a Number to check if it's Prime: "))

    let result = true

    if(num < 2)
        console.log(`${num} is Not Prime`)
    else{
        for(let i = 2; i <= Math.round(Math.sqrt(num)); i++){
            if(num % i === 0)
                result = false
        }
        if(result === true)
            console.log(`${num} is Prime`)
        else
            console.log(`${num} is not a Prime`)
    }

    const rept = prompt("Do you Want to Continue? (y / n) : ").toLowerCase()
    rept === "y" ? isPrime() : console.log("):")
}

function calCulator(){
    const num1 = parseFloat(prompt("Enter First Number: "))
    const num2 = parseFloat(prompt("Enter Second Number: "))
    const oprtr = prompt("Enter an Operator (+,-,*,/,%): ")

    let result;

    switch(oprtr){
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "%":
            result = num1 % num2;
            break;
        default:
            console.log("Enter a Valid Operator")
            break;  
    }

    console.log(`${num1} ${oprtr} ${num2} = ${result}`)

    const rept = prompt("Do you Want to Continue? (y / n) : ").toLowerCase()
    rept === "y" ? calCulator() : console.log("):")
}