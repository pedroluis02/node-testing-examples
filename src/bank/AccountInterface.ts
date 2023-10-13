export interface Account {
  getName(): string;
  getAmount(): number;
  deposit(inputAmount: number | string): boolean;
}
