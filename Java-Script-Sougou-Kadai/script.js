window.onload = () => {
  // 画面の要素入手
  const gameScreen = document.getElementById("gameScreen");
  // プレイヤーステータスの要素を入手
  const playerHP = document.getElementById("playerHP");
  const playerAttacP = document.getElementById("playerAttacP");
  const playerLevel = document.getElementById("playerLevel");
  // ボタンの要素を入手
  const upButton = document.getElementById("upButton");
  const downButton = document.getElementById("downButton");
  const rightButton = document.getElementById("rightButton");
  const leftButton = document.getElementById("leftButton");
  // キャラクターを設置するdivを入手
  const characterImg = document.getElementById("characterImg");
  // キャラクター表示
  charImg = document.createElement('img');
  charImg.classList.add("charImg");
  charImg.src = heroImg;
  charImg.alt = ('charImg');
  characterImg.appendChild(charImg);
  // ボタンのイベント作成
  // 上
  upButton.addEventListener('click', () => {
    positionY = upOrRightMoveEvent(positionY, 9, "上に進んだ", "これ以上、上には進めない");
  });
  // 下
  downButton.addEventListener('click',() => {
    positionY = downOrLeftMoveEvent(positionY, 0, "下に進んだ", "これ以上、下には進めない");
  })
  // 右
  rightButton.addEventListener('click', () => {
    positionX = upOrRightMoveEvent(positionX, 9, "右に進んだ", "これ以上、右には進めない");
  });
  // 左
  leftButton.addEventListener('click',() => {
    positionX = downOrLeftMoveEvent(positionX, 0, "左に進んだ", "これ以上、左には進めない");
  })
}