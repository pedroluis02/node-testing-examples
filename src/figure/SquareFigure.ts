import assert  from "assert";
import { Figure } from "./FigureInterface";

export class SquareFigure implements Figure {
    private length: number;
    private breadth: number; 

    public constructor(length: number, breadth: number) {
        this.length = length;
        this.breadth = breadth;
    }

    public area() : number {
        assert(this.length > 0);
        assert(this.breadth > 0);

        return this.length * this.breadth;
    }

    public toString() : string {
        return `SquareFigure{length: ${this.length}, breadth: ${this.breadth}}`;
    }
}