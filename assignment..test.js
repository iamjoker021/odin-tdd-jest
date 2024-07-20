const { capitalize, reverseString, calculator } = require('./assignment');

it('Capitalize with valid input', () => {
    expect(capitalize('abcs')).toEqual('Abcs');
    expect(capitalize('nbgf')).toEqual('Nbgf');
    expect(capitalize('ABCD')).toEqual('ABCD');
    expect(capitalize('aBcD')).toEqual('ABcD');
})

it('Capitalize with Invalid input', () => {
    expect(capitalize()).toBeNull();
    expect(capitalize(null)).toBeNull();
    expect(capitalize(undefined)).toBeNull();
    expect(capitalize(123)).toBeNull();
    expect(capitalize(123.333)).toBeNull();
    expect(capitalize({a: 1})).toBeNull();
    expect(capitalize([1, 2, 3])).toBeNull();
})

it('Reverse String with valid inputs', () => {
    expect(reverseString('abcd')).toEqual('dcba');
    expect(reverseString('')).toEqual('');
    expect(reverseString('a')).toEqual('a');
    expect(reverseString('ABCD')).toEqual('DCBA');
    expect(reverseString('ABcD')).toEqual('DcBA');
})

it('Reverse String with Invalid inputs', () => {
    expect(reverseString()).toBeNull();
    expect(reverseString(null)).toBeNull();
    expect(reverseString(undefined)).toBeNull();
    expect(reverseString(123)).toBeNull();
    expect(reverseString(123.333)).toBeNull();
    expect(reverseString({a: 1})).toBeNull();
    expect(reverseString([1, 2, 3])).toBeNull();
})

it('Calculator with valid input', () => {
    expect(calculator.add(1, -2)).toEqual(-1);
    expect(calculator.subtract(1, 2)).toEqual(-1);
    expect(calculator.multiply(1, 2)).toEqual(2);
    expect(calculator.divide(1, 2)).toBeCloseTo(0.5);

    expect(calculator.add(2.2, 1.1)).toBeCloseTo(3.3);
    expect(calculator.subtract(2.2, 1.1)).toBeCloseTo(1.1);
    expect(calculator.multiply(2.2, 1.1)).toBeCloseTo(2.42);
    expect(calculator.divide(-2.2, 1.1)).toBeCloseTo(-2);

    expect(calculator.add(2, 1.1)).toBeCloseTo(3.1);
    expect(calculator.subtract(2, 1.1)).toBeCloseTo(0.9);
    expect(calculator.multiply(-2, 1.1)).toBeCloseTo(-2.2);
    expect(calculator.divide(2, 1.1)).toBeCloseTo(1.818);

    expect(calculator.add(2.2, 1)).toBeCloseTo(3.2);
    expect(calculator.subtract(-2.2, 1)).toBeCloseTo(-3.2);
    expect(calculator.multiply(2.2, 1)).toBeCloseTo(2.2);
    expect(calculator.divide(2.2, 1)).toBeCloseTo(2.2);

    expect(calculator.divide(1, 0)).toEqual('DIV0 error');
})

it('Calculator with Invalid inputs', () => {
    expect(calculator.add()).toBeNull();
    expect(calculator.add(1)).toBeNull();
    expect(calculator.add(undefined, null)).toBeNull();
    expect(calculator.add(1, 2, 3)).toBeNull();
    expect(calculator.add(null)).toBeNull();
    expect(calculator.add(undefined)).toBeNull();
    expect(calculator.add('123.333')).toBeNull();
    expect(calculator.add({a: 1})).toBeNull();
    expect(calculator.add([1, 2, 3])).toBeNull();

    expect(calculator.subtract()).toBeNull();
    expect(calculator.subtract(1)).toBeNull();
    expect(calculator.subtract(undefined, null)).toBeNull();
    expect(calculator.subtract(1, 2, 3)).toBeNull();
    expect(calculator.subtract(null)).toBeNull();
    expect(calculator.subtract(undefined)).toBeNull();
    expect(calculator.subtract('123.333')).toBeNull();
    expect(calculator.subtract({a: 1})).toBeNull();
    expect(calculator.subtract([1, 2, 3])).toBeNull();

    expect(calculator.multiply()).toBeNull();
    expect(calculator.multiply(1)).toBeNull();
    expect(calculator.multiply(undefined, null)).toBeNull();
    expect(calculator.multiply(1, 2, 3)).toBeNull();
    expect(calculator.multiply(null)).toBeNull();
    expect(calculator.multiply(undefined)).toBeNull();
    expect(calculator.multiply('123.333')).toBeNull();
    expect(calculator.multiply({a: 1})).toBeNull();
    expect(calculator.multiply([1, 2, 3])).toBeNull();

    expect(calculator.divide()).toBeNull();
    expect(calculator.divide(1)).toBeNull();
    expect(calculator.divide(undefined, null)).toBeNull();
    expect(calculator.divide(1, 2, 3)).toBeNull();
    expect(calculator.divide(null)).toBeNull();
    expect(calculator.divide(undefined)).toBeNull();
    expect(calculator.divide('123.333')).toBeNull();
    expect(calculator.divide({a: 1})).toBeNull();
    expect(calculator.divide([1, 2, 3])).toBeNull();
})
