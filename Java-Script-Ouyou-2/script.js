window.onload = () => {
  // 1. 色のボックスを入手
  let box0 = document.getElementById("box0");
  let box1 = document.getElementById("box1");
  let box2 = document.getElementById("box2");
  let box3 = document.getElementById("box3");
  // 2. デフォルトの色配列を設定
  let defultBox = ["red", "blue", "yellow", "pink"];

  // 3. シャッフル関数を定義
  function shuffle (array){
    let colorBox = [...array]; // ["red", "blue", "yellow", "pink"]
    for (let i = defultBox.length -1; i >= 0; i--) {
      let random = Math.floor(Math.random() * (i + 1));
      // colorBoxにランダムにする対象を決めてる
      // tmpStorageにインデックスを一時保存
      let tmpStorage = colorBox[i];
      colorBox[i] = colorBox[random];
      colorBox[random] = tmpStorage;
      }
    return colorBox;
  }
  // 4. 上下の配列シャッフル処理を定義
  // 上の色のシャッフルの処理を定義
  let newColor = shuffle(defultBox);
  // 下の色のシャッフルの処理を定義
  let newSecret = shuffle(defultBox);


  // 5. 一致しているインデックスを返す関数
  function checkSameNum() {
    let result = [];
    for (let i = 0; i <= 3; i++) {
      if (newColor[i] === newSecret[i]) {
        result.push(i);
      }
    }
    return result;
  }
  // 6. 正解数のPタグの要素取得
  let result = document.getElementById("result");
  let sameNumArray = checkSameNum(); // 5. の関数を取得
  // 7. 正解数を表示の関数を定義
  function resultReroad (){
    let sameNumArray = checkSameNum();
    result.textContent = `${sameNumArray.length}個正解してます`;
  };
  resultReroad();//実行
  // 8. 色ボックスを配列にして代入
  let colorBoxArry = [box0, box1, box2, box3];
  // 9. ボックスの色移動の関数を定義
  function reflectionColor() {
    // 上の色を表示
    for (let i = 0; i < colorBoxArry.length; i++) {
      colorBoxArry[i].style.backgroundColor = newColor[i];
    }
  }
  // 10. 答えがゼロになるように完全シャッフルする関数を定義
  function zeroResult(){
    // // 2つが同じ場合
    if (sameNumArray.length === 2){
      sameNumArray = checkSameNum();// 5. の関数を取得
      let numIndex21 = sameNumArray[0];//二つの場合のインデックスの[0]の宣言
      let numIndex22 = sameNumArray[1];//二つの場合のインデックスの[1]の宣言
      [newSecret[numIndex21],newSecret[numIndex22]] = [newSecret[numIndex22],newSecret[numIndex21]];
      resultReroad(); //正解数反映
      reflectionColor();//色移動反映
      // console.log("2つが同じ場合");
    }
    // 4つが同じ場合
    if (sameNumArray.length === 4){
      sameNumArray = checkSameNum();// 5. の関数を取得
      let numIndex4 = sameNumArray[0];
      let secretTemp2 = newSecret[sameNumArray[0]];
      newSecret.splice(numIndex4, 1); //削除
      newSecret.push(secretTemp2); //後ろに追加
      resultReroad(); //正解数反映
      reflectionColor();//色移動反映
      // console.log("4つが同じ場合");
    }
    // 1つが同じ 場合
    if (sameNumArray.length === 1){
      sameNumArray = checkSameNum();// 5. の関数を取得
      // Indexが0 または Indexが3
      if (sameNumArray[0] === 0 || sameNumArray[0] === 3){
        [newSecret[0],newSecret[3]] = [newSecret[3],newSecret[0]];
        // console.log("ひとつが同じで Indexが0 or Indexが3");
      }else if(sameNumArray[0] === 1 || sameNumArray[0] === 2){
        [newSecret[1],newSecret[2]] = [newSecret[2],newSecret[1]];
        resultReroad(); //正解数反映
        reflectionColor();//色移動反映
        // console.log("ひとつが同じで Indexが1 or Indexが2");
      }
    }
  }
  zeroResult(); //正解数反映
  reflectionColor(); //色移動反映
  
  // 11. ボタン移動のイベント
  // // 0 と 1 入れ替え
  document.querySelectorAll(".change01").forEach(change01 => {
    change01.addEventListener('click', () => {
      sameNumArray = checkSameNum();// 5. の関数を取得
      [newColor[0],newColor[1]] = [newColor[1],newColor[0]];
      resultReroad(); //正解数反映
      reflectionColor();//色移動反映
      console.log(newColor);
      console.log(newSecret);
    });
  });
  // // 1 と 2 入れ替え
  document.querySelectorAll(".change12").forEach(change12 => {
    change12.addEventListener('click', () => {
      sameNumArray = checkSameNum();// 5. の関数を取得
      [newColor[1],newColor[2]] = [newColor[2],newColor[1]];
      resultReroad(); //正解数反映
      reflectionColor();//色移動反映
      console.log(newColor);
      console.log(newSecret);
    });
  });
  // // 2 と 3 入れ替え
  document.querySelectorAll(".change23").forEach(change23 => {
    change23.addEventListener('click', () => {
      sameNumArray = checkSameNum();// 5. の関数を取得
      [newColor[2],newColor[3]] = [newColor[3],newColor[2]];
      resultReroad(); //正解数反映
      reflectionColor();//色移動反映
      console.log(newColor);
      console.log(newSecret);
    });
  });
  resultReroad(); //正解数反映
  // 12. 答えをコンソールに表示
  console.log(newColor); //上の色
  console.log(newSecret); //下の色
  console.log(sameNumArray);// 10.の完全シャッフル前の被ったインデックスを表示
  // 13. リセットボタンを入手
  const reset = document.getElementById("reset");
  // 14. リセットボタンの処理
  reset.addEventListener('click', () => {
    // シャッフル
    newColor = shuffle(defultBox);
    newSecret = shuffle(defultBox);
    sameNumArray = checkSameNum();// 5. の関数を取得
    zeroResult();
    resultReroad () //正解数反映
    reflectionColor();//色移動反映
    // 答えをコンソールに表示
    console.log(newColor);//上の色
    console.log(newSecret);//下の色
    console.log(sameNumArray);// 10.の完全シャッフル前の被ったインデックスを表示
  });
  }