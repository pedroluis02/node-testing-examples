import "jest";
import { BankAccount } from "../src/bank";

describe('bank account', () => {
    test('add deposit amount', () => {
        const account = new BankAccount('Test1', 100);
        expect(account.deposit(20)).toBeTruthy()
        expect(account.getAmount()).toBe(120);
    });
});