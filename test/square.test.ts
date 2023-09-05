import "jest";
import { SquareFigure } from "../src/figure";

describe('square figure', () => {
  test('calculate area', () => {
    const figure = new SquareFigure(2, 4);
    expect(figure.area()).toBe(8);
  });
});