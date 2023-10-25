function multiplier(a, b) 
{
    return a * b;
}

let multiplier2 = function (a, b) 
{
    return a * b;
}

let multiplier3 = (a, b) => { return a * b; }

let multiplier4 = (a, b) => a * b;

let result = multiplier3(2, 3);

console.log(result);