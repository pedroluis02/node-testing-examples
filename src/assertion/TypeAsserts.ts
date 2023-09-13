import { AssertionError } from "assert";

export class TypeAsserts {
    static isNumber(value: unknown): asserts value is number {
        let isNumber = true;
    
        if (typeof value === 'string') {
            try {
                let result = parseFloat(value);
                isNumber = !isNaN(result)
            } catch(error) {
                isNumber = false;
            }
        } else if (typeof value !== 'number') {
            isNumber = false;
        }
    
        if (!isNumber) {
            throw new AssertionError({message: `The value ${value} is not number.`});
        }
    } 
}