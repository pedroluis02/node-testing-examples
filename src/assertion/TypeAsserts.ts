export class TypeAsserts {
    static isNumber(value: unknown): asserts value is number {
        let isNumber = true;
    
        if (typeof value === 'string') {
            try {
                let _ = parseFloat(value);
                isNumber = true;
            } catch(error) {
                isNumber = false;
            }
        } else if (typeof value !== 'number') {
            isNumber = false;
        }
    
        if (!isNumber) {
            throw new Error(`The value is not number.`);
        }
    } 
}