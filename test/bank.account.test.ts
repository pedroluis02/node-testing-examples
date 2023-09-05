import "jest";
import { Account, BankAccount } from "../src/bank";

describe('bank account', () => {
    let account: Account;

    beforeEach(() => {
        account = new BankAccount('Test1', 100);
    });

    test('add deposit amount by number', () => {
        expect(account.deposit(20)).toBeTruthy()
        expect(account.getAmount()).toBe(120);
    });

    test('add deposit amount by string', () => {
        expect(account.deposit("20")).toBeTruthy()
        expect(account.getAmount()).toBe(120);
    });
});