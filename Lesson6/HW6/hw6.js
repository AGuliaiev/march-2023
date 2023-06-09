// - Знайти та вивести довижину настипних стрінгових значень
    const long = 'hello world';
    const long2 = 'lorem ipsum';
    const long3 = "javascript is cool";
    console.log(long.length)
    console.log(long2.length);
    console.log(long3.length);
// - Перевести до великого регістру наступні стрінгові значення
    const up1 = 'hello world';
    console.log(up1.toUpperCase());
    const up2 =  'lorem ipsum';
    console.log(up2.toUpperCase());
    const up3 = 'javascript is cool';
    console.log(up3.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
    const lower1 = 'HELLO WORLD';
    const lower2 = 'LOREM IPSUM';
    const lower3 = 'JAVASCRIPT IS COOL';
    console.log(lower1.toLowerCase())
    console.log(lower2.toLowerCase())
    console.log(lower3.toLowerCase())
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
    let str = ' dirty string   '
    console.log(str.substring(1, 13));
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
    let str1 = 'Ревуть воли як ясла повні';
    function stringToarray(string) {
        console.log(string.split(' '));
    }

    stringToarray(str1);


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
    let arrNum = [10,8,-7,55,987,-1011,0,1050,0];
    console.log(arrNum.map(value => value.toString()))
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
    let nums = [11,21,3];
    let sortNums = (nums, direction) => {
        if (direction === 'ascending') {
            nums.sort((a, b) => a-b)
        } else if (direction === 'descending') {
            nums.sort((a, b) => b-a)
        }
    return nums;
    }
    console.log(sortNums(nums, 'ascending'))
    // console.log(nums.sort((a, b) => a - b))

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
    console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration))

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
     console.log(coursesAndDurationArray.filter((value) => value.monthDuration >= 5))
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
    console.log(coursesAndDurationArray.map((value, index) => {
        return {id: index+1, title: value.title, monthDuration: value.monthDuration}
    }))
// =========================
//     описати колоду карт (від 6 до туза без джокерів)

let cards = [
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'diamond', value: '6', color: 'red' },
    { cardSuit: 'heart', value: '6', color: 'red' },
    { cardSuit: 'clubs', value: '6', color: 'black' },
    { cardSuit: 'spade', value: '7', color: 'black' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'heart', value: '7', color: 'red' },
    { cardSuit: 'clubs', value: '7', color: 'black' },
    { cardSuit: 'spade', value: '8', color: 'black' },
    { cardSuit: 'diamond', value: '8', color: 'red' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'clubs', value: '8', color: 'black' },
    { cardSuit: 'spade', value: '9', color: 'black' },
    { cardSuit: 'diamond', value: '9', color: 'red' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'diamond', value: '10', color: 'red' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'clubs', value: '10', color: 'black' },
    { cardSuit: 'spade', value: 'jack', color: 'black' },
    { cardSuit: 'diamond', value: 'jack', color: 'red' },
    { cardSuit: 'heart', value: 'jack', color: 'red' },
    { cardSuit: 'clubs', value: 'jack', color: 'black' },
    { cardSuit: 'spade', value: 'queen', color: 'black' },
    { cardSuit: 'diamond', value: 'queen', color: 'red' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'clubs', value: 'queen', color: 'black' },
    { cardSuit: 'spade', value: 'king', color: 'black' },
    { cardSuit: 'diamond', value: 'king', color: 'red' },
    { cardSuit: 'heart', value: 'king', color: 'red' },
    { cardSuit: 'clubs', value: 'king', color: 'black' },
    { cardSuit: 'spade', value: 'ace', color: 'black' },
    { cardSuit: 'diamond', value: 'ace', color: 'red' },
    { cardSuit: 'heart', value: 'ace', color: 'red' },
    { cardSuit: 'clubs', value: 'ace', color: 'black' }
];
// - знайти піковий туз
console.log(cards.filter(value => value.cardSuit==="spade" && value.value==="ace"))

// - всі шістки
console.log(cards.filter(value => value.value.includes("6")))
// - всі червоні карти
console.log(cards.filter(value => value.color.includes("red")))
// - всі буби
console.log(cards.filter(value => value.cardSuit.includes("diamond")))
// - всі трефи від 9 та більше
console.log(cards.filter(value => value.cardSuit.includes("clubs") && !value.value.includes("6") && !value.value.includes("7") && !value.value.includes("8")))
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
console.log(cards.reduce((previousValue, currentValue) => {
    if (currentValue.cardSuit.includes("spade")) {
        previousValue.spades.push(currentValue)
    } else if (currentValue.cardSuit.includes("diamond")) {
        previousValue.diamonds.push(currentValue)
    } else if (currentValue.cardSuit.includes("clubs")) {
        previousValue.clubs.push(currentValue)
    } else {
        previousValue.hearts.push(currentValue)
    }
    return previousValue;
}, {
            spades:[],
            diamonds:[],
            clubs:[],
            hearts:[]
 }))



// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
console.log(coursesArray.filter((value) => value.modules.includes("sass")));
// --написати пошук всіх об'єктів, в який в modules є docker
console.log(coursesArray.filter((value) => value.modules.includes("docker")));