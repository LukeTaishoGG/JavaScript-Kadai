// 練習
let names = ["jin", "mike", "kei", "ai", "tom", "may"];
names.sort();
console.log(names);

tasizan = [1*123-1+1];
console.log(tasizan);

warizan = [-9/-3];
console.log(warizan);

const pi = 3.14;
console.log(pi);

// let number = 10;
// console.log(number);
// number=20;
// console.log(number);

const age = 25;
console.log (age);
// age = 30;

const age2 = 25; // 数字
const price = 99.99; // 小数

// // if偶数奇数
// let number = 4;
// if (number % 2 === 0) {
//   console.log("偶数です");
// } else {
//   console.log("奇数です");
// }


// 評価
let score = 75;
if (score >= 90) {
  console.log("A評価");
} else if (score >= 70) {
  console.log("B評価");
} else {
  console.log("C評価");
}


// 温度
const template = 30;
if (template < 0) {
  console.log("氷点下");
} else if (template <= 25) {
  console.log("快適");
} else {
  console.log("暑いです");
}

const kantou = "Tokyo";
switch (kantou) {
  case "Hokkaido":
    console.log("北海道地方")
    break;
  case "Kyoto":
    console.log("近畿地方")
    break;
  case "Toyama":
    console.log("中部地方")
    break;
  default:
    console.log("日本です")
}

const suuji = -1;
if (suuji === 0) {
  console.log("ZERO");
} else if (suuji < 0) {
  console.log("負");
} else {
  console.log("正");
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let count = 5;
while (count >= 0) {
  console.log(count);
  count--;
}

let input;
do {
  input = prompt("何か文字を入力してください");
} while (!input);
// ユーザーが何か入力するまでループする

const numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers); // 結果: [1, 2, 3, 4, 5]

let number = 4;
if (number % 2 === 0) {
  console.log("偶数です");
} else {
  console.log("奇数です");
}

