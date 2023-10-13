import "jest";
import { Account, BankAccount } from "../src/bank";
import { AssertionError } from "assert";

describe("bank account", () => {
  let account: Account;

  // Each test is AAA: Arrange, Act and Assert

  beforeEach(() => {
    account = new BankAccount("Test1", 100);
  });

  test("Value is not number", () => {
    expect(() => account.deposit("a30")).toThrowError(AssertionError);
  });

  test("Value is > 0", () => {
    expect(() => account.deposit("-30")).toThrowError(AssertionError);
    expect(() => account.deposit(-30)).toThrowError(AssertionError);
  });

  test("add deposit amount by number", () => {
    expect(account.deposit(20)).toBeTruthy();
    expect(account.getAmount()).toBe(120);
  });

  test("add deposit amount by number", () => {
    expect(account.deposit(20)).toBeTruthy();
    expect(account.getAmount()).toBe(120);
  });

  test("add deposit amount by string", () => {
    expect(account.deposit("20")).toBeTruthy();
    expect(account.getAmount()).toBe(120);
  });
});
