//1
function calculateExecutionTime(func) {
    return function (...args) {
        const start = performance.now();

        const result = func.apply(this, args);

        const end = performance.now();
        const executionTime = end - start;

        console.log(`Function '${func.name}' took ${executionTime} milliseconds to execute.`);

        return result;
    };
}

function sumToN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

const sumToNWithLogging = calculateExecutionTime(sumToN);

const result = sumToNWithLogging(1000);
console.log(`Result: ${result}`);
//2
const person = {
    name: 'Alice',
    sayName: function () {
        console.log(this.name);
    }
};

const standaloneFunction = person.sayName;
standaloneFunction();
const boundFunction = person.sayName.bind(person);
boundFunction();
//3
const obj = { contextProp: 'Object Context' };
function showContext() {
    console.log(this.contextProp);
}
showContext();
obj.showContext = showContext;
obj.showContext(); 
const Obj2 = { contextProp: 'Object Context number 2' };
showContext.call(Obj2); 
const Obj3 = { contextProp: 'Object Context number 3' };
showContext.apply(Obj3);