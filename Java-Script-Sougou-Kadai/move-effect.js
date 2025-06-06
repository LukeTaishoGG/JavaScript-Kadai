// キャラクターの位置
let positionY = 4;
let positionX = 4;
let playerPosition = mapBiome[positionY][positionX];
const upOrRightMoveEvent = (position,maxNum,moveLog,stopLog) => {
  //エンカウント率
  const encounterRate = 0.4;
  if(position < maxNum){
    position++;
    console.log(position);
    log(moveLog);
    if(Math.random() < encounterRate){
      startBattle();
    }
    return position;
  }else if (position === maxNum){
    log(stopLog);
    return position;
  }
}
const downOrLeftMoveEvent = (position,maxNum,moveLog,stopLog) => {
  //エンカウント率
  const encounterRate = 0.4;
  if(position > maxNum){
    position--;
    console.log(position);
    log(moveLog);
    if(Math.random() < encounterRate){
      startBattle();
    }
    return position;
  }else if (position === maxNum){
    log(stopLog);
    return position;
  }
}
const enableButton = () => {
  upButton.disabled = false;
  downButton.disabled = false;
  rightButton.disabled = false;
  leftButton.disabled = false;
  fightButton.style.display = 'none';
  runButton.style.display = 'none';
  charImg.src = heroImg;
}
const disableButton = () => {
  upButton.disabled = true;
  downButton.disabled = true;
  rightButton.disabled = true;
  leftButton.disabled = true;
  fightButton.style.display = 'block';
  runButton.style.display = 'block';
}
const result = () => {
  // 戦闘結果
  if (hero.HP <= 0) {
    playerStatus();
    alert("GameOver");
    location.reload();
  } else {
    upButton.disabled = false;
    downButton.disabled = false;
    rightButton.disabled = false;
    leftButton.disabled = false;
    fightButton.style.display = 'none';
    runButton.style.display = 'none';
    charImg.src = heroImg;
  }
}