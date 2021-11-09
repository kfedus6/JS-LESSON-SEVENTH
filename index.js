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

let letters = ["Б", "В", "Г", "Д", "Ж", "З", "Й", "К", "Л", "М", "Н", "П", "Р", "С", "Т", "Ф", "Х", "Ц", "Ч", "Ш", "Щ"]

let names = "Егор, Аня, Ян, Кирил, Ярик, Дима";
//let names = ["Егор", "Аня", "Ян", "Кирил", "Ярик", "Дима"];

let namesArray = (n) => {
   let arr = n.split(", ")

   console.log(arr);

   arr.forEach((item, index) => {
      for (l of letters) {
         if (item[0] === l) {
            arr.splice(index, index);
         }
      }
   })
   console.log(arr);


}
namesArray(names);


