const capitalize = (string) => {
    if (typeof string === 'string') {
        return string[0].toUpperCase() + string.slice(1);
    }
    return null;
}

const reverseString = (string) => {
    if (typeof string === 'string') {
        return string.split('').reverse().join('');
    }
    return null;
}

const calculator = (() => {
    const checkInput = (num1, num2, args) => {
        if (typeof num1 === 'number' && 
            typeof num2 === 'number' && 
            (args === undefined || args.length === 0)
        ) {
            return true;
        }
        else {
            return false;
        };
    }

    const add = (num1, num2, ...args) => {
        if (checkInput(num1, num2, args)) {
            return num1 + num2;
        }
        return null;
    };
    const subtract = (num1, num2, ...args) => {
        if (checkInput(num1, num2, args)) {
            return num1 - num2;
        }
        return null;
    };
    const multiply = (num1, num2, ...args) => {
        if (checkInput(num1, num2, args)) {
            return num1 * num2;
        }
        return null;
    };
    const divide = (num1, num2, ...args) => {
        if (num2 === 0) {
            return 'DIV0 error';
        }
        if (checkInput(num1, num2, args)) {
            return num1 / num2;
        }
        return null;
    }

    return { add, subtract, multiply, divide }
})();

module.exports = {
    capitalize,
    reverseString,
    calculator
}