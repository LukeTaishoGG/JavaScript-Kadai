// ・・・・・・・・・・・・・・・・・・・・算術演算子を使用して計算してみよう
// (1)算術演算子を使用して計算してみよう
const subject = {"国語": 100, "数学": 80, "英語": 75, "理科": 70, "社会": 80};
const subTotal = subject["国語"] + subject["数学"] + subject["英語"] + subject["理科"] + subject["社会"];
console.log("合計点数:",subTotal);
// (2)引き算を使用して計算してください
const minus = (100000 - 80000);
console.log("引き算結果:",minus);
// (3)掛け算を使用して計算してください
const kakezan = (32*64);
console.log(kakezan);
// (4)割り算を使用して計算してください
const warizan = (10/2);
console.log(warizan);
// (5)インクリメント演算子を使用してください
var num = 3;
num++;
console.log("インクリメント結果:", num);
// (6)デクリメント演算子を使用してください
var num = 0;
num--;
console.log("デクリメント結果:", num);
// ・・・・・・・・・・・・・・・・・・・・・・条件分岐を練習してみよう
// (1)if文を使用して所持金を比較してください
const mrA = 8000;
const mrB = 12000;

if (mrA > mrB) {
  console.log("A君の方が多いです");
} else if (mrA < mrB) {
  console.log("B君の方が多いです");
} else {
  console.log("A君とB君の所持金は同じです");
}
// (2)if文を使用して誰が最も所持金を持っているかを表示してください
const A = 8000;
const B = 12000;
const C = 3000;

if (A > B && A > C) {
  console.log("A君が一番所持金を持っています");
} else if (B > A && B > C) {
  console.log("B君が一番所持金を持っています");
} else if (C > A && C > B) {
  console.log("C君が一番所持金を持っています");
} else {
  console.log("同じ金額の人がいます");
}
// (3) 点数に応じてメッセージをアラート表示してください
document.getElementById("button3").addEventListener("click", () => {
  const score = Math.floor(Math.random() * 100) + 1;
  console.log("点数:", score);

  if (score === 100) {
    alert("満点！！");
  } else if (score >= 80) {
    alert("合格です");
  } else if (score <= 30) {
    alert("赤点です");
  } else {
    alert("不合格です");
  }
});
// (4) switch文を使用して入力値に応じた結果を表示してください
document.getElementById("prefInput").addEventListener("change", (event) => {
  const value = event.target.value;

  switch (value) {
    case "saitama":
      console.log("埼玉");
      break;
    case "tokyo":
      console.log("東京");
      break;
    case "kanagawa":
      console.log("神奈川");
      break;
    default:
      console.log("未確認");
      break;
  }
});
// ・・・・・・・・・・・・・・・・・・・・Mathクラスを使ってみよう
// (1)ランダムな値を生成してください
function getRandomValue() {
  const random = Math.floor(Math.random() * 10) + 1;
  console.log("ランダムな値:", random);
}
getRandomValue();
// (2)最も高い数値を見つけてください
const maxValue = Math.max(1, 4, 6);
console.log("最大値:", maxValue);
// (3)最も低い数値を見つけてください
const minValue = Math.min(1, 4, 6);
console.log("最小値:", minValue);
// ・・・・・・・・・・・・・・・・・・・・for文を使用してループ処理を練習しましょう
// (1)「実行」を10回表示してください
for (let i = 0; i < 10; i++) {
  console.log("実行");
}
// (2) 配列の中身を表示してください
const items2 = ["apple", "banana", "cat"];
for (let i = 0; i < items2.length; i++) {
  console.log(items2[i]);
}
// (3) 配列の合計を計算してください
const numbers3 = [1, 2, 3];
let sum3 = 0;
for (let i = 0; i < numbers3.length; i++) {
  sum3 += numbers3[i];
}
console.log("合計:", sum3);
// (4) 配列を分割してください
const A4 = [1, 'hoge', 2, 'huga', 3, 'piyo'];
const numbers = [];
const strings = [];
for (let i = 0; i < A4.length; i++) {
  if (typeof A4[i] === "number") {
    numbers.push(A4[i]);
  } else if (typeof A4[i] === "string") {
    strings.push(A4[i]);
  }
}
console.log("数値:", numbers);
console.log("文字列:", strings);
// (5) 奇数のみ足し算してください（continue と break を使用）
let sum = 0;

for (let i = 1; i <= 100; i++) {
  if (i > 100) {
    break;
  }
  if (i % 2 === 0) {
    continue;
  }
  sum += i;
}
console.log("奇数の合計:", sum);
// ・・・・・・・・・・・・・・・・・・・・他の繰り返し文を使ってみましょう
// (1) foreachを使ってループ処理を試してみましょう
const items = ['apple', 'banana', 'cat'];
items.forEach(function(item) {
  console.log(item);
});
// (2) while文を使ってループ処理を試してみましょう
let i = 0;
while (i < 10) {
  console.log("実行");
  i++;
}
// (3)繰り返し文の用途を調べてみましょう
// for
for (let i = 0; i < 10; i++) {
  console.log("実行");
}
// foreach
const foreachItems = ["apple", "banana", "cat"];
foreachItems.forEach(items => {
  console.log(items);
});
// while
let total = 0;
while (total < 100) {
  total += 20;
  console.log("合計:", total);
}
// ・・・・・・・・・・・・・・・・・・・・・・・・・・・・・課題: 配列メソッドを練習しましょう
// (1) mapメソッドを使用してください
const originalArray = [2, 4, 6, 8];
const doubledArray = originalArray.map(num => num * 2);
console.log("元の配列:", originalArray);
console.log("2倍:", doubledArray);
// (2) someメソッドを使用してください
const array = [2, 4, 6, 7];
const hasOdd = array.some(num => num % 2 !== 0);
console.log("奇数:", hasOdd);
// (3) everyメソッドを使用してください
const submissions3 = [
  { id: 2, hasSubmitted: true },
  { id: 3, hasSubmitted: false },
  { id: 4, hasSubmitted: true },
];
const allSubmitted = submissions3.every(item => item.hasSubmitted === true);
console.log("hasSubmittedがすべてtrue", allSubmitted);
// (4) filterメソッドを使用してください
const submissions = [
  { id: 2, hasSubmitted: true },
  { id: 3, hasSubmitted: false },
  { id: 4, hasSubmitted: true },
];
const submittedOnly = submissions.filter(item => item.hasSubmitted === true);
console.log("hasSubmittedがtrue", submittedOnly);
// (5) sortメソッドを使用してください
const data = [
  { id: 323, hasSubmitted: true },
  { id: 111, hasSubmitted: false },
  { id: 268, hasSubmitted: true },
];
const sortedById = data.sort((a, b) => a.id - b.id);
console.log(sortedById);