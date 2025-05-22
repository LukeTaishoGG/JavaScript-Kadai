window.onload = () => {
  // デフォルトの色配列を設定
  let defultBox = ["red", "blue", "yellow", "pink"];
  // 1. 色のボックスを入手
  const box0 = document.getElementById("box0");
  const box1 = document.getElementById("box1");
  const box2 = document.getElementById("box2");
  const box3 = document.getElementById("box3");
  // 正解数のPタグ要素取得
  let result = document.getElementById("result");
  // リセットボタンを入手
  const reset = document.getElementById("reset");
  // 色ボックスを配列にして代入
  let colorBoxArry = [box0, box1, box2, box3];
  // マジックナンバーを定数定義
  const CORRECT_ANSWER_ONE = 1;
  const CORRECT_ANSWER_TWO = 2;
  const CORRECT_ANSWER_FOUR = 4;
  // シャッフル関数を定義
  const shuffle = (array) => {
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
  // 上下の配列シャッフル処理を定義
  // 上の色のシャッフルの処理を定義
  let newColor = shuffle(defultBox);
  // 下の色のシャッフルの処理を定義
  let newSecret = shuffle(defultBox);
  // 一致しているインデックスを返す関数を定義
  const checkSameNum = (color1, color2) => {
    let result = [];
    for (let i = 0; i <= 3; i++) {
      if (color1[i] === color2[i]) {
        result.push(i);
      }
    }
    return result;
  }
  // 正解数を表示の関数を定義
  const resultReroad = (color1, color2) => {
    let sameNumArray = checkSameNum(color1, color2);
    result.textContent = `${sameNumArray.length}個正解してます`;
  };
  // ボックスの色移動の関数を定義
  let reflectionColor = () => {
    // 上の色を表示
    for (let i = 0; i < colorBoxArry.length; i++) {
      colorBoxArry[i].style.backgroundColor = newColor[i];
    }
  }
  // 色移動反映
  reflectionColor();
  // 答えがゼロになるように完全シャッフルする関数を定義
  let zeroResult = () =>{
    let sameNumArray = checkSameNum(newColor, newSecret);
    // 1つが同じ 場合
    if (sameNumArray.length === CORRECT_ANSWER_ONE){
      let sameNumArray = checkSameNum(newColor, newSecret);
      // Indexが0 または Indexが3
      if (sameNumArray[0] === 0 || sameNumArray[0] === 3){
        [newSecret[0],newSecret[3]] = [newSecret[3],newSecret[0]];
      }else if(sameNumArray[0] === 1 || sameNumArray[0] === 2){
        [newSecret[1],newSecret[2]] = [newSecret[2],newSecret[1]];
        resultReroad(newColor, newSecret); //正解数反映
        reflectionColor();//色移動反映
      }
    }
    // // 2つが同じ場合
    if (sameNumArray.length === CORRECT_ANSWER_TWO){
      let sameNumArray = checkSameNum(newColor, newSecret);
      let indexNum0 = sameNumArray[0];//二つの場合のインデックスの[0]の宣言
      let indexNum1 = sameNumArray[1];//二つの場合のインデックスの[1]の宣言
      [newSecret[indexNum0],newSecret[indexNum1]] = [newSecret[indexNum1],newSecret[indexNum0]];
      resultReroad(newColor, newSecret); //正解数反映
      reflectionColor();//色移動反映
    }
    // 4つが同じ場合
    if (sameNumArray.length === CORRECT_ANSWER_FOUR){
      let sameNumArray = checkSameNum(newColor, newSecret);
      let numIndex4 = sameNumArray[0];
      let secretTemp2 = newSecret[sameNumArray[0]];
      newSecret.splice(numIndex4, 1); //削除
      newSecret.push(secretTemp2); //後ろに追加
      resultReroad(newColor, newSecret); //正解数反映
      reflectionColor();//色移動反映
    }
  }
  zeroResult(); //正解数反映
  resultReroad(newColor, newSecret); //正解数反映
  // console.log(newSecret,newColor);
  // ボタン移動のイベント
  // 0 と 1 入れ替え
  document.querySelectorAll(".change01").forEach(change01 => {
    change01.addEventListener('click', () => {
      checkSameNum(newColor, newSecret);
      [newColor[0],newColor[1]] = [newColor[1],newColor[0]];
      resultReroad(newColor, newSecret); //正解数反映
      reflectionColor();//色移動反映
      // console.log(newColor,newSecret);
    });
  });
  // 1 と 2 入れ替え
  document.querySelectorAll(".change12").forEach(change12 => {
    change12.addEventListener('click', () => {
      checkSameNum(newColor, newSecret);
      [newColor[1],newColor[2]] = [newColor[2],newColor[1]];
      resultReroad(newColor, newSecret); //正解数反映
      reflectionColor();//色移動反映
      // console.log(newColor,newSecret);
    });
  });
  // 2 と 3 入れ替え
  document.querySelectorAll(".change23").forEach(change23 => {
    change23.addEventListener('click', () => {
      checkSameNum(newColor, newSecret);
      [newColor[2],newColor[3]] = [newColor[3],newColor[2]];
      resultReroad(newColor, newSecret); //正解数反映
      reflectionColor();//色移動反映
      // console.log(newColor,newSecret);
    });
  });
  // リセットボタンの処理
  reset.addEventListener('click', () => {
    // シャッフル
    newColor = shuffle(defultBox);
    newSecret = shuffle(defultBox);
    zeroResult();
    resultReroad (newColor, newSecret) //正解数反映
    reflectionColor();//色移動反映
  });
}