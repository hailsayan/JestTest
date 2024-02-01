const {gte, sus} = require('./../element');

describe ('gte', () => {
    it("return true if a is greater than b", ()=>{
        const result = gte (10, 5);
        expect(result).toBe(true);
    });
    it("return false if a is less than b", ()=>{
        const result = gte (5, 10);
        expect(result).toBe(false);
    });
    it("return true if a is equal than b", ()=>{
        const result = gte (5, 5);
        expect(result).toBe(true);
    });
})

describe ('Mess', () => {
    it("return an message", ()=>{
        const result = sus('Psyon');
        expect(result).toContain('Psyon');
    });
})