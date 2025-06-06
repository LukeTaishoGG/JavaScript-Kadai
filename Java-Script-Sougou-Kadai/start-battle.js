const fightButton = document.getElementById("fightButton");
const runButton = document.getElementById("runButton");
let currentMonster = undefined;
let monsterLife = 0; // グローバルで管理
const runRate = 0.5;
const result = (currentMonster) => {
  if (hero.HP <= 0) {
    playerStatus();
    log('ゲームオーバー！');
    alert("GameOver");
    location.reload();
  } else {
    hero.EP += currentMonster.EP;
    enableControl();
  }
}
const onFight = () => {
  if (monsterLife > 0) { //戦闘処理
    monsterLife -= hero.Attack;
    log(`${currentMonster.Name}に${hero.Attack}ダメージ！`);
    hero.HP -= currentMonster.Attack;
    log(`${currentMonster.Attack}ダメージ受けた！`);
    playerStatus();
    if (hero.HP <= 0) {
      result(currentMonster);
    }else if(monsterLife <= 0) {
      log(`${currentMonster.Name}を倒した！`);
      result(currentMonster);
      log(`EP: ${currentMonster.EP} +`);
      log(`EP: ${hero.EP} now`);
      playerStatus();
      enableControl();
    }
  }
};
const onRun = () => {
  let runRandom = Math.random();
  if(runRandom < runRate) { //逃げる処理
    log("逃げれなかった！");
    hero.HP -= currentMonster.Attack;
    log(`${currentMonster.Attack}ダメージ受けた！`);
    playerStatus();
    result();
  }else {
    log("逃げれた！");
    result(currentMonster);
    playerStatus();
  }
};
fightButton.addEventListener('click', ()=>{
  onFight();
});
runButton.addEventListener('click', ()=>{
  onRun();
});
const startBattle = () => {
  let random = Math.random();
  if(random < metalSlime.SpawnRate) {//metalSlime
    currentMonster = metalSlime;
  } else if (random < dragon.SpawnRate) {//dragon
    currentMonster = dragon;
  } else {//slime
    currentMonster = slime;
  }
  log(`${currentMonster.Name}が現れた！`);
  charImg.src = currentMonster.Img;
  monsterLife = currentMonster.HP;
}