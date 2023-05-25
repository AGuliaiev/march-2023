// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surnam = surname;
    this.email = email;
    this.phone = phone;

}

let users = [

new User(1, "John", "Doe", "john@example.com", "1234567890"),
new User(2, "Jane", "Smith", "jane@example.com", "9876543210"),
new User(3, "Alice", "Johnson", "alice.johnson@example.com", "9876543210"),
new User(4, "Emily", "Davis", "emilydavis@example.com", "5556753456"),
new User(5, "Emma", "Brown", "emma.brown@example.com", "5678901234"),
new User(6, "Michael", "Davis", "michael.davis@example.com", "4321098765"),
new User(7, "Olivia", "Miller", "olivia.miller@example.com", "3456789012"),
new User(8, "William", "Jones", "william.jones@example.com", "8901234567"),
new User(9, "Sophia", "Wilson", "sophia.wilson@example.com", "6789012345"),
new User(10, "James", "Taylor", "james.taylor@example.com", "9012345678")
];
console.log(users);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let users2 = users.filter(value => value.id % 2 === 0)

console.log(users2)


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((a, b) => a.id - b.id))
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
    class Client {
        constructor(id, name, surname, email, phone, title, price, quantityOfGoods) {
            this.id = id;
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.phone = phone;
            this.order = [title, price, quantityOfGoods];
        }
    }
// створити пустий масив, наповнити його 10 об'єктами Client
let client = [];
client.push(new Client(1, "John", "Doe", "john@example.com", "1234567890", 'Milk', 134, 23))
client.push(new Client(2, "Jane", "Smith", "jane@example.com", "9876543210", 'pasta', 34, 45))
client.push(new Client(3, "Alice", "Johnson", "alice.johnson@example.com", "9876543210", 'potatoes', 43, 56))
client.push(new Client(4, "Emily", "Davis", "emilydavis@example.com", "5556753456", 'sausage', 9, 67))
client.push(new Client(5, "Emma", "Brown", "emma.brown@example.com", "5678901234", 'butter', 35, 87))
client.push(new Client(6, "Michael", "Davis", "michael.davis@example.com", "4321098765", 'bread', 67, 94))
client.push(new Client(7, "Olivia", "Miller", "olivia.miller@example.com", "3456789012", 'juice', 85, 106))
client.push(new Client(8, "William", "Jones", "william.jones@example.com", "8901234567", 'bananas', 97, 83))
client.push(new Client(9, "Sophia", "Wilson", "sophia.wilson@example.com", "6789012345", 'apples', 15, 46))
client.push(new Client(10, "James", "Taylor", "james.taylor@example.com", "9012345678", 'ice cream', 104, 79))

console.log(client)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(client.sort((a, b) => a.order[2] - b.order[2]))
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//  -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//  -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, year, maxSpeed, engineVolume){
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год`);
     }
     this.info = function () {
         console.log("Інформація про автомобіль:");
         console.log(`Модель: ${this.model}`);
         console.log(`Виробник: ${this.manufacturer}`);
         console.log(`Рік випуску: ${this.year}`);
         console.log(`Максимальна швидкість: ${this.maxSpeed} км/год`);
         console.log(`Об'єм двигуна: ${this.engineVolume} л`);
     }
    this.increaseMaxSpeed = function (newSpeed){
        this.maxSpeed += newSpeed
        console.log(`Максимальна швидкість збільшена на ${newSpeed} км/год. Нове значення: ${this.maxSpeed} км/год`);
    }
    this.changeYear = function (newValue){
        this.year = newValue
        console.log(`Рік випуску змінено на ${newValue}`)
    }
    this.addDriver = function (driver){
        this.driver = driver
        console.log('Iнформація про водія:', driver);
    }
}

let car = new Car("Civic", "Honda", 2022, 180, 1.8);
car.drive();
car.info();
car.increaseMaxSpeed(20);
car.changeYear(2023);
car.addDriver({ name: "John Doe", age: 30, license: "ABC123" });


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    class CarS {
        constructor(model, manufacturer, year, maxSpeed, engineVolume) {
            this.model = model;
            this.manufacturer = manufacturer;
            this.year = year;
            this.maxSpeed = maxSpeed;
            this.engineVolume = engineVolume;
            this.drive = function () {
                console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год`);
            }
            this.info = function () {
                console.log("Інформація про автомобіль:");
                console.log(`Модель: ${this.model}`);
                console.log(`Виробник: ${this.manufacturer}`);
                console.log(`Рік випуску: ${this.year}`);
                console.log(`Максимальна швидкість: ${this.maxSpeed} км/год`);
                console.log(`Об'єм двигуна: ${this.engineVolume} л`);
            }
            this.increaseMaxSpeed = function (newSpeed){
                this.maxSpeed += newSpeed
                console.log(`Максимальна швидкість збільшена на ${newSpeed} км/год. Нове значення: ${this.maxSpeed} км/год`);
            }
            this.changeYear = function (newValue){
                this.year = newValue
                console.log(`Рік випуску змінено на ${newValue}`)
            }
            this.addDriver = function (driver){
                this.driver = driver
                console.log('Iнформація про водія:', driver);
            }
        }

}

let carS1 = new CarS("Camry", "Toyota", 2021, 220, 2.0);
carS1.drive();
carS1.info();
carS1.increaseMaxSpeed(30);
carS1.changeYear(2022);
carS1.addDriver({ name: "Jane Smith", age: 35, license: "AB2453D" });

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

    class Cinderella{
        constructor(name, age, footSize) {
            this.name = name;
            this.age = age;
            this.footSize = footSize;
        }
    }

  let cinderellas = [
        new Cinderella('Anna', 23, 7),
        new Cinderella('Inna', 18, 5),
        new Cinderella('Naja', 25, 8),
        new Cinderella('Clava', 28, 7),
        new Cinderella('Luda', 29, 7.5),
        new Cinderella('Olya', 32, 9),
        new Cinderella('Yulya', 65, 11),
        new Cinderella('Sveta', 21, 10),
        new Cinderella('Masha', 36, 8.5),
    ]

class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}

const prince = new Prince('Jhon', 35, 5);

    let foundCinderella = null;
for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.foundShoe) {
       foundCinderella = cinderella;
    }
}
//     for (let i = 0; i < cinderellas.length; i++) {
//         if (cinderellas[i].footSize === prince.foundShoe){
//             foundCinderella = cinderellas[i];
//         }
//
// }

if (foundCinderella) {
    console.log("Принц знайшов свою попелюшку:", foundCinderella.name);
} else {
    console.log("Принц не знайшов попелюшку :(");
}

let foundCinderella2 = cinderellas.find(cinderella => cinderella.footSize === prince.foundShoe);

if (foundCinderella2) {
    console.log("Принц знайшов свою попелюшку:", foundCinderella2.name);
} else {
    console.log("Принц не знайшов попелюшку :(");
}

