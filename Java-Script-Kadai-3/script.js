// < JSONとJavaScriptオブジェクトの相互変換 >
//                                (1)JSON文字列をJavaScriptオブジェクトに変換しましょう
const obj1 = '{"Name":"Taro", "Age":42, "gender": "male"}';
const jsonChanger = JSON.parse(obj1);
console.log(jsonChanger);
//                                (2)JavaScriptオブジェクトをJSON文字列に変換しましょう
const obj2 = { Name: "Taro", Age: 13, gender: "male" };
const jsChanger = JSON.stringify(obj2);
console.log(jsChanger);
// < フォームバリデーションを実装しましょう >
// 名前（テキストエリア）
// inputの値を入手
const nameInput = document.getElementById("textarea");
// エラーメッセージのPを持ってくる
const errorName = document.getElementById("errorName");
// イベント設置
nameInput.addEventListener('input', (event) => {
// 宣言
  const value = event.target.value;
  const firstRegex = /^[\u30a0-\u30ff\u3040-\u309f\u3005-\u3006\u30e0-\u9fcf]+$/;
  const secondRegex = /[！-\uff5e]/g;
// 条件分岐
  if (value === "" || !value.match(firstRegex) || value.match(secondRegex)) {
    errorName.style.display = "block";
  } else {
    errorName.style.display = "none";
  }
});
// 年齢（テキストエリア）
// inputの値を入手
const formYear = document.getElementById("year");
// エラーメッセージのPを持ってくる
const errorYear = document.getElementById("errorYear");
// イベント設置
formYear.addEventListener('input',(event) => {
// 入力チェック用コンソールログ
  console.log(event.target.value);
// もしインプットの中身が空ならば
  if (event.target.value === "") {
    errorYear.style.display="block";
// もしNotNumberなら
  }else if (isNaN(event.target.value)) {
    errorYear.style.display="block";
  }else {
    errorYear.style.display="none";
  }
})
// メールアドレス（テキストエリア）
// inputの値を入手
const emailAdress = document.getElementById("email");
// エラーメッセージのPを持ってくる
const errorEmail = document.getElementById("errorEmail");
// イベント設置
emailAdress.addEventListener('input',(event) => {
// 入力チェック用コンソールログ
  console.log(event.target.value);
// ここから条件分岐
// 空 or "@"が0 or 全角 の場合は エラーを表示
  if (event.target.value === "" ||
    event.target.value.indexOf("@") === 0 ||
    event.target.value.match(/^[\u30a0-\u30ff\u3040-\u309f\u3005-\u3006\u30e0-\u9fcf]+$/) || event.target.value.match(/[！-\uff5e]/g) ||
    !event.target.value.match(/^\w+@\w+\.\w+$/)) {
    errorEmail.style.display="block";
  }else{
    errorEmail.style.display="none";
  }
})
// 電話番号（テキストエリア）
// ID入手
const phoneNumber = document.getElementById("phoneNumber");
const errorNumber = document.getElementById("errorNumber");
// イベント設置
phoneNumber.addEventListener('input',(event) => {
  if (event.target.value === "" ||
    isNaN(event.target.value) ||
    event.target.value.length !== 11) {
      errorNumber.style.display="block";
  }else{
    errorNumber.style.display="none";
  }
})