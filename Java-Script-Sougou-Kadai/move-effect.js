// キャラクターの位置
let positionY = 4;
let positionX = 4;
let playerPosition = mapBiome[positionY][positionX];
const upOrRightMoveEvent = (position,maxNum,moveLog,stopLog) => {
  //エンカウント率
  const encounterRate = 0.4;
  if(position < maxNum){
    position++;
    console.log(position)
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
window.enableButton = () => {
  window.upButton.disabled = false;
  window.downButton.disabled = false;
  window.rightButton.disabled = false;
  window.leftButton.disabled = false;
  fightButton.style.display = 'none';
  runButton.style.display = 'none';
  charImg.src = heroImg;
}
window.disableButton = () => {
  window.upButton.disabled = true;
  window.downButton.disabled = true;
  window.rightButton.disabled = true;
  window.leftButton.disabled = true;
  fightButton.style.display = 'block';
  runButton.style.display = 'block';
}
window.result = () => {
  // 戦闘結果
  if (hero.HP <= 0) {
    window.playerStatus();
    alert("GameOver");
    window.location.reload();
  } else {
    window.upButton.disabled = false;
    window.downButton.disabled = false;
    window.rightButton.disabled = false;
    window.leftButton.disabled = false;
    fightButton.style.display = 'none';
    runButton.style.display = 'none';
    charImg.src = heroImg;
  }
}