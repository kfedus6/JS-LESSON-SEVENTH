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
   let reg = /^\d+$/;
   let reg_Two = /^\D+$/;
   let reg_Tree = /^.+\w+.+$/;
   if (reg.test(str) == true) {
      console.log(`Numbers: ${str.match(reg).join('')}`);
   } else if (reg_Two.test(str) == true) {
      console.log(`String: ${str.match(reg_Two).join('')}`)
   } else if (reg_Tree.test(str) == true) {
      console.log(str.match(reg_Tree));
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
let p = "Пример: 1+4-3+15";
let reg = /[+-]/g;
console.log(p.match(reg))


let text = "Завтрак в 09:00. Ужин в 21W30";
let reg = /\b\d\d.\d\d\b/g;
console.log(text.match(reg))
