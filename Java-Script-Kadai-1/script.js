// < 変数を宣言してみよう >
//                    1文字列を格納する変数を宣言してください
const moji = "hoge";
//                    2数値を格納する変数を宣言してください
const suuji = 69;
//                    3真偽値を格納する変数を宣言してください
const isSunny = false;
const isRaining = true;
//                    4未定義の状態で変数を宣言してください
let miteigi;
//                    5null を格納する変数を宣言してください
const unknown = null;
//                    6文字列の配列を作ってみよう
const jpn_names = ["田中","佐藤","久保田","鈴木","河本"];
//                    7オブジェクトを宣言してみよう
const obj_7 ={
  id: 1,
  name: "yourName",
  old: 20,
}
//                    8作成した変数をコンソールに表示してください
//1
console.log(moji);
//2
console.log(suuji);
//3
console.log(isSunny);
console.log(isRaining);
//4
console.log(miteigi);
//5
console.log(unknown);
//6
console.log(jpn_names);
//7
console.log(obj_7);
// < 関数を作ってみよう >
//                    1関数を作ってみよう
function myFunction() {}
//                    2アロー関数を宣言してみよう
const ArrowFunction = () => {};
//                    引数を受け取って表示する関数を作りましょう
function myName(namae) {
  console.log("私の名前は" + namae);
}
myName("Taisho");
//                    4計算をする関数を作りましょう
function add(a, b) {
  return a + b;
}
console.log(add(4,5));
//                    5文字列を結合する関数を作りましょう
function text5 (sweet,juce) {
  console.log(sweet + juce);
}
text5(["Creap", "Donut"], ["MountainDew", "RedBull"]);
// < DOM操作を練習してみよう >
//                    1IDを使ってDOMを取得しましょう
const box1 = document.getElementById("domBox");
console.log(box1);
//                    2セレクターを使ってDOMを取得しましょう
const item2 = document.querySelector("#domBox");
console.log(item2);
//                    3新しい要素を作成しましょう
const newP = document.createElement("p");
newP.textContent = "This is text";
//                    4作成した要素を追加してみよう
const textParent = document.getElementById("div4");
textParent.appendChild(newP);
// < イベントハンドリングの練習 >
//                    1ボタンにクリックイベントを付与しましょう
//ボタン作った
const newButton = document.createElement("button");
newButton.textContent = "Button";
div4.appendChild(newButton);
newButton.addEventListener("click", () => {
  alert("クリックされました");
});
//                    2スクロールイベントを設定しましょう
window.addEventListener("scroll", () => {
  alert("あなたはスクロールしました");
});
//                    3ボタンクリックで子要素を追加しましょう
//                    4ボタンクリックで子要素を追加しましょう
const addChildButton  = document.createElement("button");
addChildButton.textContent = "小要素追加";
//div3 を取得してボタンを追加
const div3 = document.getElementById("div3");
div3.appendChild(addChildButton);
//ボタンをクリックしたら p 要素を追加
addChildButton.addEventListener("click", () => {
  const addChildElement = document.createElement("p");
  addChildElement.textContent = "小要素が追加された";
  div3.appendChild(addChildElement);
})