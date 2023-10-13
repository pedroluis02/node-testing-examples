import { SquareFigure } from "./figure";
import { BankAccount } from "./bank";

function example1() {
  let figure = new SquareFigure(2, 4);
  const area = figure.area();

  console.log(figure);
  console.log(`SquareFigure Area: ${area}`);
}

function example2() {
  let account = new BankAccount("Pedro Luis", 100);
  console.log(account);

  account.deposit("20");

  console.log(`Account after deposit: ${account}`);
}

example1();
example2();
