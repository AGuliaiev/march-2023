// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let areaRectangle = (a, b) => (a * b);
console.log(areaRectangle(3, 21));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let areaCircle = (r) => Math.PI * (r * r);
console.log(areaCircle(5))
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let areaCylinder = (h, r) => 2 * Math.PI * r * (r + h);
console.log(areaCylinder(5, 4));
// - створити функцію яка приймає масив та виводить кожен його елемент
let array = (arr)=> {
    for (const arrElement of arr) {
        console.log(arrElement)
    }
}

    let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
    array(users);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let writer = (Text) => document.write(`

    <div>
         <p>${Text}</p>
    </div>

    `);

writer('Hello world');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let writeLi = (textLi) => document.write(`<div>
            <ul>
                <li>${textLi}</li>
                <li>${textLi}</li>
                <li>${textLi}</li>
            </ul>
    </div>`)
writeLi('створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let writeLiNum = (text, count) => {document.write('<ul>')
for (let i = 0; i < count; i++) {

    document.write(`<li>${text}</li>`)
}

document.write('</ul>')}

writeLiNum('створити функцію яка створює ul з трьома елементами li', 4);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const array2 = [34, 'hghjg', true, 345, 'gjhgfjh'];
let arrayList = (textArray) => {
    document.write('<ul>')
    for (const textArrayElement of textArray) {

        document.write(`<li>${textArrayElement}</li>`)
    }
    document.write('</ul>');
}
arrayList(array2);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users1 = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
    {id: 6, name: 'anya', age: 31},
    {id: 7, name: 'oleg', age: 28},
    {id: 8, name: 'andrey', age: 29},
    {id: 9, name: 'masha', age: 30}
];

let arrayObj = (array) => {
    for (const item of array) {
        document.write(`<div>id: ${item.id} age: ${item.age} name: ${item.name}</div>`)
    }
}
arrayObj(users1);

// - створити функцію яка повертає найменьше число з масиву

const arrayOfNum = [67, 78, 678, 3, -5, 1, -14];
let minNumArr = (minArr) => {
    let min = minArr[0];
    for (const minArrElement of minArr) {
        if (minArrElement < min){
          min = minArrElement
        }
    }
    return min;
}


console.log(minNumArr(arrayOfNum));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = (sumArr) => {
    let sumRes = 0;
    for (const sumArrElement of sumArr) {
        sumRes += sumArrElement;
    }
    return sumRes;
}
console.log(sum(arrayOfNum));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr, index1, index2) => {
    let in1 = arr[index1];
    let in2 = arr[index2];
    arr[index1] = in2;
    arr[index2] = in1;
    return arr;
}
console.log(swap([11,22,33,44],0,1))
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (const currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency){
          return sumUAH / currencyValue.value;
        }
    }

}
const result = exchange(
    10000,
    [{currency:'USD',value:40},{currency:'EUR',value:42}],
    'USD');
console.log(result);
