#!/usr/bin/env node

import inquirer from "inquirer";
const currency:any={
    USD:1,
    EUR:0.91,
    GBP:0.76,
    INR:74.57,
    PKR:280,
    AFG:3.90
};
let user_answer = await inquirer.prompt([{
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR","AFG"]
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR","AFG"]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number",
    }]);
 let fromAmount=currency[user_answer.from]
 let toAmount=currency[user_answer.to]
 let amount=user_answer.amount
 let baseAmount=amount/fromAmount
 let convertedAmount=baseAmount*toAmount
 console.log(convertedAmount);