const mapBiome = [
  [0,0,0,0,0,0,0,0,0,0],//0
  [0,0,0,0,0,0,0,0,0,0],//1
  [0,0,0,0,0,0,0,0,0,0],//2
  [0,0,0,0,0,0,0,0,0,0],//3
  [0,0,0,0,4,0,0,0,0,0],//4
  [0,0,0,0,0,0,0,0,0,0],//5
  [0,0,0,0,0,0,0,0,0,0],//6
  [0,0,0,0,0,0,0,0,0,0],//7
  [0,0,0,0,0,0,0,0,0,0],//8
  [0,0,0,0,0,0,0,0,0,0],//9
]
// キャラクターの位置
let positionY = 4;
let positionX = 4;
let playerPosition = mapBiome[positionY][positionX];
const enableControl = () => {
  upButton.disabled = false;
  downButton.disabled = false;
  rightButton.disabled = false;
  leftButton.disabled = false;
  fightButton.style.display = 'none';
  runButton.style.display = 'none';
  charImg.src = hero.Img;
}
const disableControl = () => {
  upButton.disabled = true;
  downButton.disabled = true;
  rightButton.disabled = true;
  leftButton.disabled = true;
  fightButton.style.display = 'block';
  runButton.style.display = 'block';
}
const upOrRightMoveEvent = (position,maxNum,moveLog,stopLog) => {
  //エンカウント率
  const encounterRate = 0.4;
  if(position < maxNum){
    position++;
    console.log(position);
    log(moveLog);
    if(Math.random() < encounterRate){
      disableControl();
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
      disableControl();
      startBattle();
    }
    return position;
  }else if (position === maxNum){
    log(stopLog);
    return position;
  }
}
