//============ ДЗ =================\\
/*let arr = [5, 3, 8, 1];
let filterRangeInPlace = (arr, a, b) => {
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] < a || arr[i] > b) {
         arr.splice(i, 1);
         i--;
      }
   }
}
console.log(arr);
filterRangeInPlace(arr, 1, 4);
console.log(arr);
*/
/*
function unique(arr) {
   let result = [];

   for (let str of arr) {
      if (!result.includes(str)) {
         result.push(str);
      }
   }

   return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
   "харе", "харе", "кришна", "кришна", ":-O"
];

alert(unique(strings));
*/

//includes, indexOf, lastIndexOf

/*
let names = ["egor", "anton", "kirill", "dimasik"];
console.log(names.indexOf("kirill", 3));
console.log(names.lastIndexOf("anton", 1))
console.log(names.includes("dimasik", 2))
*/

/*
let student = [
   { name: "dima", mark: 10 },
   { name: "kirill", mark: 12 },
   { name: "egor", mark: 11 },
   { name: "slavik", mark: 9 },
]

console.log(student.filter(s => s.mark < 11));

let bstudent = [];
for (item of student) {
   if (item.mark < 11) {
      bstudent.push(item);
   }
}
console.log(bstudent);
*/

/*
let books = [
   { name: "igraPres", year: 2012 },
   { name: "qwe", year: 2010 },
   { name: "apsssssq", year: 2012 },
   { name: "axzc", year: 2009 },
   { name: "apeqweq", year: 2012 },
]

console.log(books.find(b => b.name == "qwe"));
console.log(books.filter(b => b.name[0] == "a" && b.year == 2012));
*/

/*
let nums = [4, 1, 2, 5, 7, 3, 2, 1, 6, 8];
nums = nums.map(item => item ** 2);
console.log(nums);
*/
/*
let names = ["egor", "anton", "kirill", "dimasik"];
names = names.map(item => item + ": " + item.length);
console.log(names) //egor:4, "anton:5"
*/


/*
function compare(a, b) {
   if (a > b) return 1;
   if (a == b) return 0;
   if (a < b) return -1;
}

let arr = [1, 5, 2, 4, 12, 160, 2, 15];
arr.sort(compare);
console.log(arr);
*/

/*
let arr = [1, 5, 2, 4, 12, 160, 2, 15];
arr.sort((a, b) => a - b)
console.log(arr);
*/

/*
let arr = [4, 1, 2, 3, 5];
arr.sort((a, b) => a - b);
console.log(arr);
arr.reverse();
console.log(arr);
let names = ["egor", "anton", "kirill", "dimasik"];
names.sort()
console.log(names);
*/

/*
let s = "12.11.2021/10.07.2021/11.8.2021"
let dates = s.split('/', 2)
console.log(dates);

s = dates.join('; ');
console.log(s)
*/

//let arr = [1, 2, 3, 4, 5];
//console.log(arr.reduce((sum, item) => sum + item))

/*
let arr = new Array()
console.log(Array.isArray("qwe"));
*/
//============== ДЗ============\\

//let letters = ["Б", "В", "Г", "Д", "Ж", "З", "Й", "К", "Л", "М", "Н", "П", "Р", "С", "Т", "Ф", "Х", "Ц", "Ч", "Ш", "Щ"]

/*
let names = "Егор, Аня, Ян, Кирил, Ярик, Дима";

let namesArray = (arr) => {

   let result = arr.split(" ");
   console.log(result);

   let result_Two = result.filter(item =>
      item[0] === "А" || item[0] === "Е" || item[0] === "Ё" ||
      item[0] === "И" || item[0] === "О" || item[0] === "У" ||
      item[0] === "Ю" || item[0] === "Я"
   );
   console.log(result_Two);

   let result_Tree = result_Two.filter((num) => {
      if (num.length >= 4) {
         return num;

      }
   })
   console.log(result_Tree);

   result_Tree.forEach(len => console.log(len + ": " + len.length));

   console.log(result_Tree.sort().reverse().join(", "));
}

namesArray(prompt());
*/

/*
class Comanda {
   constructor(name, members) {
      this.name = name;
      this.members = members;
   }
   add()
   delete()
   sort()
   print()
   lenth()
}

let chelsea = new Comanda("chelsea", ["grogba", "lamperd", "treyy"]);
console.log(chelsea);
*/

/*
class Comanda extends Array {
   constructor(name, ...members) {
      super(...members);
      this.name = name;
   }
   push(name) {
      let x = parseInt(name)
      console.log(x)
      if (isNaN(x) == true) {
         super.push(name.toUpperCase());
      }
   }
}

let chelsea = new Comanda("chelsea", "grogba", "lamperd", "andrey", "treyy");
chelsea.sort();
chelsea.push("messi");
chelsea.push("1231");
console.log(chelsea);
*/


//let x = 10;
//'qweqwe',"qweqwe",`${x}qeqweq`;

/*
let x1 = '2'
let x2 = '2'
let x3 = '2'

console.log(x1 + x2 - x3)
*/

/*
let text = "\thello\nworld"
console.log(text)
*/
/*
console.log('hello world'.length)

for (let item of 'bad') {
   console.log(item);
}
*/
/*
let text = 'hello';
text = 'd' + text[1] + text[2] + text[3] + text[4];
console.log(text.toUpperCase());
console.log(text.includes('llh'));
console.log(text.startsWith('e', 2));
console.log(text.endsWith('e', 2));
*/
/*
let name = "kolya";
let nameTwo = name.slice(-1, 3);
console.log(nameTwo)
nameTwo = name.substring(-1, 3);
console.log(nameTwo)
nameTwo = name.substr(-1, 3);
console.log(nameTwo)
*/
/*
function word(x) {
   return x[0].toUpperCase() + x.slice(1)
}
console.log(word("hello"))
*/
//xxx qqq sss zzz
/*
function texts(x) {
   return x.includes('xxx') || x.includes('qqq') || x.includes('sss') || x.includes('zzz')
}

console.log(texts("jnjnkgjdnfkjgndkfjdxxdnaskjdnaks"))
*/
/*
text = '$120';
console.log(text.slice(1))
*/

//================= ДЗ ==================\\
/*
//1)
let date = '2025-12-31';
let d = date.split('-').reverse().join('.');
console.log(d);
//2)

function words() {
   let word = [];
   return function () {
      for (let i = 0; i < 5; i++) {
         word[i] = prompt();
      }
      console.log(word.join('/'));
   }
}
words()();
//3)

let abc = 'aaa bbb ccc';

let del = (str) => {
   let res = str.split(' ');
   res.forEach((item, index) => {
      if (item.includes('bbb') == true) {
         res.splice(index, index);
      }
   })
   console.log(res.join(' '));
}

del(abc);

let b = abc.slice(0, 3) + abc.slice(7);
console.log(b);

abc = abc[0] + abc[1] + abc[2] + abc[7] + abc[8] + abc[9] + abc[10];
console.log(abc);
//4)

let string = prompt();
let upper = (u) => {
   return u
      .split(' ')
      .map(item => item[0].toUpperCase() + item.slice(1))
      .join(' ')
}
console.log(upper(string));
//5)

let delete_characters = (str, length) => {
   str = str.substring(str, length);
   console.log(str);
}
delete_characters('Каждый охотник желает знать', 7);
//6)

let comparison = (str1, str2) => {
   let res = str1.toUpperCase() === str2.toUpperCase();
   return res;
}
console.log(comparison('string', 'StRiNg'));
*/

//Регулярные выражение

/*
let text = 'heLLo';

//let reg = new RegExp('hello', 'i'); //1)Шаблон,2)Флаг
let reg = /hello/i;

console.log(reg.test(text))
*/

/*
let text = 'Hello ! Dima. - hello Yakir';
let reg = /hello/ig;
console.log(text.match(reg));
console.log(text.replace('hello', "goodbuy"));
console.log(text.replace(reg, "goodbuy"));
*/

/*
let text = prompt();
let reg = /marina/ig;
console.log(text.match(reg).length);
*/

/*
let text = 'helLo world';
let reg = /hello/i;
console.log(reg.test(text))
*/

/*
let number = '+38 (066) 057-02-13';
let reg = /\d/g
console.log(number.match(reg).join(''));
*/
// \d - цифры \s - пробел \w

/*
let text = "I love HTML5";
//let reg = /html5/ig;
let reg = /\s\w\w\w\w\d/
console.log(text.match(reg));
*/

/*
let text = "Что может быть лучше чем CCS3 ? meybe JS"
let reg = /\s\w\w\w\d/i;
console.log(text.match(reg));
*/

//\D \S \W Не

/*
let text = "nb1231n kjdfj d123  knsfd jsnkj23 1ds nfsk";
let reg = /\S/g
console.log(text.match(reg).join(''));
*/

/*
let number = '+38 (066) 057-02-13';
let reg = /\D/g;
console.log(number.replace(reg, ""));
*/

//let text = "hello world my Hello";
//console.log(text.replace("Hello", "goodLuck"))

//let text = 'HTML ';
//let reg = /HTML./;
//console.log(reg.test(text));


//   ^    $

/*
let text = "now my best time";
let reg = /best time$/
let reg_two = /^now\s/;
console.log(reg_two.test(text));
*/

//12:31,11:54,
//let text = "13-24";
//let reg = /^\d\d.\d\d$/;
//console.log(reg.test(text));
/*
let text = ''
let reg = /^$/
console.log(reg.test(text));
*/
//================ ДЗ ===============\\
/*
let text = prompt();
let regFun = (str) => {
   let arr = [];
   let reg = /^\d+$/;
   let reg_Two = /^\D+$/;
   let reg_Tree = /^.+\w+.+$/;
   let regNumbet = /\d+/gm;
   let regString = /[a-z]+/gim;
   if (reg.test(str) == true) {
      console.log(`Numbers: ${str.match(reg).join('')}`);
   } else if (reg_Two.test(str) == true) {
      console.log(`String: ${str.match(reg_Two).join('')}`)
   } else if (reg_Tree.test(str) == true) {
      arr.push(str.match(regNumbet));
      arr.push(str.match(regString));
      console.log(arr);
   }
}
regFun(text);
*/
/*
let text = `1 - сходить в кино
2 - посмотреть кино
3 - выйти из кино
`;
let reg = /^\d/gm;
*/

/*
let text = `
Понедельник: 1 день недели
Вторник 2
Среда 3
`
let reg = /\d$/gm;
*/

/*
let text = `
Понедельник: 1
Вторник 2
Среда 3
`
let reg = /\d\n/g;
*/

//console.log(text.match(reg));

//\b

/*
let text = "The best ! JavaScript!";
let reg = /\bJavaScript\b/
console.log(text.match(reg));
*/

/*
let text = "Ох черт, завтра в 12:00, мне будет 26. но не 123или62. 123:321((("
let reg = /\b\d\d.\d\d\b/;
console.log(text.match(reg))
*/

/*
let text = "ЗП s1000$ dsad"
let reg = /\.\d\d\d\d\$/g;
console.log(text.match(reg))
*/

/*
let text = "Глава 5.1";
let reg = /\d\.\d/;
console.log(text.match(reg));
*/
/*
let text = "коп хоп тоП бОп роб";
let reg = /[хтбрк]оп/ig;
console.log(text.match(reg));
*/
//\d = [0-9]
//\w = [a-zA-Z0-9]
//\s = [\n\t\v\f\r]

/*
let text = " 18, 20, 14, 45, 37, 49,";
let reg = /[0-2][0-9]/g;
console.log(text.match(reg));
*/

//=====================ДЗ===============\\

/*
let p = "Пример: 7-3+5";
let reg = /\d/g;
let regOne = /[+-]/g;
let numbers = p.match(reg);
let znaks = p.match(regOne);

console.log(znaks)


res = 0
for (let i = 0; i < numbers.length; i++) {
   if (i == 0) {
      if (znaks[i] == '+') {
         res += parseInt(numbers[i]) + parseInt(numbers[i + 2])
      }
      else {
         res -= parseInt(numbers[i]) - parseInt(numbers[i + 2])
      }
   }
   else if (i + 1 == numbers.length) {
      if (znaks[i - 1] == "+") {
         console.log(numbers[i])
         console.log(res)
         res += parseInt(numbers[i])
      }
      if (znaks[i - 1] == "-") {
         res -= parseInt(numbers[i])
      }
   }
}
console.log(res)
*/

/*
let text = "Завтрак в 09:00. Ужин в 21-30";
let reg = /\b\d\d[:-]\d\d\b/g;
console.log(text.match(reg));
*/
/*
let p = "Пример: 15/2*2+100";
text = p.split(" ");
console.log(text)
res = eval(text[1])
console.log(res)
*/

/*
let text = 'Hello this "day" my "best" day.';

//let reg = /".+?"/g
let reg = /"[^"]+"/g
console.log(text.match(reg))
*/

/*
let text = '<a href="#">TEST</a>'
let reg = /<.+>/g
console.log(text.match(reg));
*/

/*
let text = 'youtube.com ru.youtube.com'
let reg = /(\w+\.)+\w+/g
console.log(text.match(reg))
*/
//=============== ДЗ ============\\
/*
let text = 'Всем привет ! Сегодня я решал пример "3*2/3" а после этого получил ответ 2. Мне не понравилось и я решил изменить пример! "5 * 5 - 5" в ходе такого вычисленияя получил 20, а после сделал "3 - 2"  и не смог решить!!!'
let reg = /\"\d+.+?\"/g;
let result = text.match(reg);
console.log(result);
*/

/*
let text = 'Всем привет ! Сегодня я решал пример (3*2/3) а после этого получил ответ 2. Мне не понравилось и я решил изменить пример! (5 * 5 - 5) в ходе такого вычисленияя получил 20, а после сделал (3 - 2) и не смог решить!!!'
let reg = /\((.+?)\)/g;
let result = text.match(reg);

console.log(result)

let resultSum = (arr) => {
   let sum = [];
   arr.forEach((item,) => {
      sum.push(eval(item));
   })
   sum.sort((a, b) => a - b);
   sum.forEach(item => console.log(`Результат выполнения: ${item}`));
   console.log(`Найдено было ${arr.length} примера.`)
}
resultSum(result);
*/

/*
let s = "Мне 30123 лет ! 131 Внимание ! Не 12";
let reg = /\d{3,}/g
console.log(s.match(reg));
*/


//let s = "+38(066)53-21-1";

//38,066,53,21,1

/*
let reg = /\d{1,}/g;
console.log(s.match(reg));
*/

//color colour

/*
let s = "Мне писать color или colour ?"

let reg = /colou?r/g

console.log(s.match(reg));
*/

/*
let s = '1 2 31.12 312 12.31231 111.11';

let reg = /\d+\.\d+/g;
console.log(s.match(reg));

*/

/*
let s = '<h1>weqeq</h1>eqwewq<h2>sadasda</h2><h3>dasdas</h3>';

let reg = /<h[1-6]*>/gi;
console.log(s.match(reg));
*/

// () //arr.    (h[0-9])+ 

/*
let s = 'gogogo run !';

let reg = /(go)+/

console.log(s.match(reg))
*/

//let s = 'test@gmail.com .com @ @com . . . test-two@mail.ua';

//let reg = /[-.\w]+@([\w-]+\.)+\w+/g;
//console.log(s.match(reg));

/*
let s = '<span class="test">text</span>';

let r = /<(([a-z]+)\s*([^>]*))>/

let res = s.match(r);

console.log(res[0]);
console.log(res[2]);
console.log(res[3]);

*/

/*
let date = '2021-11-25';
//let reg = /(\d+)+/g;
let reg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
console.log(date)
res = date.match(reg).groups;
console.log(res);
date = date.replace(reg, '$<day>-$<month>-$<year>')
console.log(date);
*/
/*
let s = 'Daniil Titov';
let reg = /(?<name>\w+)\s(?<surename>\w+)/gi;
let result = s.match(reg).groups;
result = s.replace(reg, '$<surename> $<name>');
console.log(result);
*/
//=================== дз ============\\
/*
let text = '(Name: Dima Marks = [4,2,1,2]),(Name: Egor Marks = [4,2,5,5]),(Name: Kirill Marks = [2,4,1,2])';
let reg = /\s[a-z]+\s/gi;
let reg_Num = /\d\,\d\,\d\,\d/g;
let result = text.match(reg);
let result_Num = text.match(reg_Num);
console.log(result);
console.log(result_Num);

let arr = [];
arr.push([result[0]]);
arr[0].push(result_Num[1]);
arr.push([result[1]]);
arr[1].push(result_Num[1]);
arr.push([result[2]]);
arr[2].push(result_Num[2]);
console.log(arr);

let num = [];
num.push(result_Num[0]);
console.log(num);
*/

//let date = new Date("27 March 2012");
//let date = new Date(2012, 11, 25, 18, 30, 20, 10)
//console.log(date.getFullYear())

/*
let date = new Date();
//console.log(date)
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDay();
let date_Two = date.getDate();

let day_Two = [
   "понедылок", "вивторок", "середа", "четвер", "пятниця", "субота", "неділя",
];

let month_Two = [
   "січень", "лютий", "березень", "квітень", "жовтень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень",
];
console.log(`Сегодня: ${date_Two} число, месяц: ${month_Two[month]}, год: ${year}, день недели: ${day_Two[day]}`)
//Сегодня: 27 число, месяц: август, год: 2021, день недели: Суббота
*/
/*
let res = Math.PI
console.log(res)

res = Math.max(5, 2, 1, 3, 5, 3, 2, 15, 2)
console.log(res)

res = Math.pow(4, 2);
console.log(res)


res = Math.sqrt(121)
console.log(res)


let z = 14;
let x = new Number('3123');


Number.parseFloat()

parseInt
parseFloat

isNaN
"""
*/

/*

EvalError: представляет ошибку, которая генерируется при выполнении глобальной функции eval()

RangeError: ошибка генерируется, если параметр или переменная, представляют число, которое находится вне некотоого допустимого диапазона

ReferenceError: ошибка генерируется при обращении к несуществующей ссылке

SyntaxError: представляет ошибку синтаксиса

TypeError: ошибка генерируется, если значение переменной или параметра представляют некорректный тип или пр попытке изменить значение, которое нельзя изменять

URIError: ошибка генерируется при передаче функциям encodeURI() и decodeURI() некорректных значений

AggregateError: предоставляет ошибку, которая объединяет несколько возникших ошибок
*/

/*
try {
   let arr = [4, 2]
   let s = `Idx диапозон: 0 до ${arr.length}}`
   let x = Number(prompt(s))
   if (x < 0 || x > arr.length) throw new RangeError("Вы указали неверное значение")
   console.log(arr[x])
}
catch (error) {
   console.log("Получили ошибку")
   console.log(error)
}
finally {
   console.log("Проверка на ошибки закончина")
}
*/
/*
try {
   n1 = 6
   n2 = 0
   let res = n1 / n2
   if (res == Infinity) throw ("пытались дилить на 0");

}
catch (error) {
   console.log(error)
}
*/
//=============дз===========\\
/*
const date = new Date();
const hour = date.getHours();
const minute = date.getMinutes();
const time = date.toTimeString();

const day = date.getDay();
const days = ['Воскресеные', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

const month = date.getMonth();
const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

const year = date.getFullYear();

const time_Fun = () => {
   if (time > '06:00:00' && time < '12:00:00') {
      console.log('Утро');
   } else if (time > '12:00:00' && time < '18:00:00') {
      console.log('День')
   } else if (time > '18:00:00' && time < '24:00:00') {
      console.log('Вечер')
   } else if (time > '24:00:00' && time < '06:00:00') {
      console.log('Ночь');
   }
}

console.log('1 - Посмотреть время');
console.log('2 - Посмотреть день');
console.log('3 - Посмотреть месяц');
console.log('4 - Посмотреть год');
console.log('5 - Узнать время суток');
console.log('6 - Выйти');

let exit = false;

while (!exit) {
   let menu = +prompt('Меню');
   switch (menu) {
      case 1:
         console.log(hour + ':' + minute);
         break;
      case 2:
         console.log(days[day]);
         break;
      case 3:
         console.log(months[month]);
         break;
      case 4:
         console.log(year);
         break;
      case 5:
         time_Fun();
         break;
      case 6:
         exit = true;
         console.log('Вы вышли')
         break;
   }
}
*/
/*
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date();
let today = myDate.getDate();

let date_foo = () => {
   for (item of events) {
      if (item.Date >= today && item.Date <= today + 3)
         console.log(item);
   }
}

console.log('1 - Добавить событие');
console.log('2 - Посмотреть события на сегодня');
console.log('3 - Посмотреть события на ближайшие 3 дня');
console.log('4 - Удалить события');
console.log('5 - Выйти');

let events = [''];

let exit = false;
while (!exit) {
   let menu = +prompt('Меню');
   switch (menu) {
      case 1:
         let year = myDate.getFullYear();
         let month = myDate.getMonth();
         let date = +prompt('Дата', 0);
         let event = prompt('Событие');
         events[events.length] = { Year: year, Month: months[month], Date: date, Event: event };
         break;
      case 2:
         for (item of events) {
            console.log(item);
         }
         break;
      case 3:
         date_foo();
         break;
      case 4:
         let date_del = +prompt('выберите дату для удаление событие');
         events.forEach((item, index) => {
            if (item.Date === date_del) {
               events.splice(index, index - 1);
            }
         })
         break;
      case 5:
         exit = true;
         console.log('Вы вышли');
         break;
   }
}
*/
