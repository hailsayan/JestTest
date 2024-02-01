const gte = require('./../element');
test("return true if a is greater than b", ()=>{
    const result = gte (10, 5);
    expect(result).toBe(true);
});
test("return false if a is less than b", ()=>{
    const result = gte (5, 10);
    expect(result).toBe(false);
});
test("return true if a is equal than b", ()=>{
    const result = gte (5, 5);
    expect(result).toBe(true);
});