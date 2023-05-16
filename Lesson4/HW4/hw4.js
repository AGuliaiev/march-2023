// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function areaRectangle (a, b) {
    return a * b;
}
let ar1 = areaRectangle(45, 36)
console.log(ar1);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function areaCircle(r) {
    return Math.PI * (r * r);
}
 let ar2 = areaCircle(5)
console.log(ar2);
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function areaCylinder(h, r) {
    return 2 * Math.PI * r * (r + h);
}
let ar3 = areaCylinder(5, 4)
console.log(ar3);

// - створити функцію яка приймає масив та виводить кожен його елемент
function freeArray(array) {
    for (const item of array) {
        console.log(item);
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
freeArray(users);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function writer(Text) {
    document.write(`

    <div>
         <p>${Text}</p>
    </div>

    `);
}

writer('Hello world');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function writeLi(textLi) {
    document.write(`<div>
            <ul>
                <li>${textLi}</li>
                <li>${textLi}</li>
                <li>${textLi}</li>
            </ul>
    </div>`)

}
writeLi('Milk');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function writeLiNum(textLi, count) {
                document.write('<ul>');
    for (let i = 0; i < count; i++) {

   document.write(`<li>${textLi}</li>`)
    }

    document.write('</ul>')
}


writeLiNum('Milk like water', 2);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const array2 = [34, 'hghjg', true, 345, 'gjhgfjh'];
function arrayBool(textArr) {
    document.write('<ul>');

    for (const item of textArr) {


        document.write(`<li>${item}</li>`)
    }

    document.write('</ul>')
}
function free(){
    console.log(arguments)
}
arrayBool(array2);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function arrayObj(array) {
    for (const item of array) {

        document.write(`<div>id: ${item.id} name: ${item.name} age: ${item.age}</div>`)
    }
}
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
arrayObj(users1);

// - створити функцію яка повертає найменьше число з масиву
function min() {

    let min = arguments[0];
    for (let argument of arguments) {

        if (argument < min) {

            return min = argument;
        }
    }
}
console.log(min(45, 455, 3, 7766, 56, 4));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let sumEl = 0;
    for (const arrElement of arr) {
        sumEl += arrElement;
    }

    return sumEl;
}
let sumNum = sum([15, 13, 14, 45]);
console.log(sumNum);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2) {
   let in1 = arr[index1];
   let in2 = arr[index2];
   arr[index2] = in1;
   arr[index1] = in2;
return arr;
}
let cheng = swap([13,23,45,67], 3,0)
console.log(cheng)
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH,currencyValues,exchangeCurrency) {
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
          return sumUAH / item.value;

        }
    }

}

const result = exchange(
    100000,
    [{currency:'USD', value:40},{currency:'EUR', value:42}],
    'USD');
console.log(result);