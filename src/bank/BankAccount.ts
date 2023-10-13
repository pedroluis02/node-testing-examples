import assert from 'assert';

import { TypeAsserts } from './../assertion';
import { Account } from './account.interface';

class BankAccount implements Account {
  private name: string;
  private amount: number;
  private static MIN_DEPOSIT_AMOUNT = 10;

  public constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }

  public getName = () => this.name;

  public getAmount = () => this.amount;

  public deposit(inputAmount: number | string): boolean {
    TypeAsserts.isNumber(inputAmount);

    let value: number;
    if (typeof inputAmount === 'string') {
      value = Number(inputAmount);
    } else {
      value = inputAmount;
    }

    assert(value > 0, `The input amount should be greather than 0`);

    if (this.isValidDepositAmount(value)) {
      throw new Error(
        `The input amount should be greather than ${BankAccount.MIN_DEPOSIT_AMOUNT}`,
      );
    }

    this.amount = this.amount + value;

    return true;
  }

  private isValidDepositAmount = (input: number): boolean =>
    input < BankAccount.MIN_DEPOSIT_AMOUNT;

  public toString(): string {
    return `BankAccount{name: ${this.name}, amount: ${this.amount}}`;
  }
}

export { BankAccount };
