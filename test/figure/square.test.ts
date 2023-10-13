import 'jest';
import { Figure, SquareFigure } from './../../src/figure';

describe('square figure', () => {
  let figure: Figure;

  beforeAll(() => {
    figure = new SquareFigure(2, 4);
  });

  test('calculate area', () => {
    expect(figure.area()).toBe(8);
  });
});
