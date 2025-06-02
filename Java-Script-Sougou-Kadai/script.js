window.onload = () => {
  // 画面の要素入手
  const gameScreen = document.getElementById("gameScreen");
  // プレイヤーステータスの要素を入手
  const playerHP = document.getElementById("playerHP");
  const playerAttacP = document.getElementById("playerAttacP");
  const playerLevel = document.getElementById("playerLevel");
  // ボタンの要素を入手
  window.upButton = document.getElementById("upButton");
  window.downButton = document.getElementById("downButton");
  window.rightButton = document.getElementById("rightButton");
  window.leftButton = document.getElementById("leftButton");
  // キャラクターを設置するdivを入手
  window.characterImg = document.getElementById("characterImg");
  // キャラクター表示
  window.charImg = document.createElement('img');
  window.charImg.classList.add("charImg");
  window.charImg.src = ('https://i.pinimg.com/736x/9d/6b/4a/9d6b4ad803f473dbddf9daaeedda49b1.jpg');
  window.charImg.alt = ('charImg');
  characterImg.appendChild(window.charImg);
  // キャラクターの位置
  let positionY = 4;
  let positionX = 4;
  let playerPosition = mapBiome[positionY][positionX];
  // ボタンのイベント作成
  // 上
  upButton.addEventListener('click',() => {
    if(positionY < 9){
      positionY++;
      console.log("Y=",positionY);
      upLog();
      if(Math.random() < 0.4){
        startBattle();
      }
    }
  })
  // 下
  downButton.addEventListener('click',() => {
    if(positionY > 0){
      positionY--;
      console.log("Y=",positionY);
      downLog();
      if(Math.random() < 0.4){
        startBattle();
      }
    }
  })
  // 右
  rightButton.addEventListener('click',() => {
    if(positionX < 9){
      positionX++;
      console.log("X=",positionX);
      rightLog();
      if(Math.random() < 0.4){
        startBattle();
      }
    }
  })
  // 左
  leftButton.addEventListener('click',() => {
    if(positionX > 0){
      positionX--;
      console.log("X=",positionX);
      leftLog();
      if(Math.random() < 0.4){
        startBattle();
      }
    }
  })
  // プレイヤーのステータスを表示
  playerHP.textContent = `HP: ${hero.HP}`;
  playerAttacP.textContent = `Attack: ${hero.Attack}`;
  playerLevel.textContent = `Level: ${hero.Level}`;
}