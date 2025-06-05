startBattle = () => {
  disableButton();
  const fightButton = document.getElementById("fightButton");
  const runButton = document.getElementById("runButton");
  const metalSlimeRate = 0.10;
  const dragonRate = 0.35;
  const runRate = 0.5;
  let monster, monsterImg, monsterName, monsterDamage, monsterAttack, monsterEP;
  let random = Math.random();
  if(random < metalSlimeRate) {//metalSlime
    monster = metalSlime;
    monsterImg = MetalSlimeImg;
    monsterName = "メタルスライム";
    monsterDamage = 10;
  } else if (random < dragonRate) {//dragon
    monster = dragon;
    monsterImg = drogonImg;
    monsterName = "ドラゴン";
    monsterDamage = 10;
  } else {//slime
    monster = slime;
    monsterImg = slimeImg;
    monsterName = "スライム";
    monsterDamage = 5;
  }
  monsterAttack = monster.Attack;
  monsterEP = monster.EP;
  log(`${monsterName}が現れた！`);
  charImg.src = monsterImg;
  let monsterLife = monster.HP;
  let onFight = () => {
    if (monsterLife > 0) {
      monsterLife -= hero.Attack;
      log(`${monsterName}に${monsterDamage}ダメージ！`);
      hero.HP -= monsterAttack;
      log(`${monsterDamage}ダメージ受けた！`);
      playerStatus();
      if(monsterLife <= 0) {
        hero.EP += monsterEP;
        log(`${monsterName}を倒した！`);
        result();
        playerStatus();
      }
    }
  }
  let onRun = () => {
    let runRandom = Math.random();
    if(runRandom < runRate) {
      log("逃げれなかった！");
    }else {
      log("逃げれた！");
      result();
      playerStatus();
    }
  }
  fightButton.removeEventListener('click', onFight);
  runButton.removeEventListener('click', onRun);
  fightButton.addEventListener('click', onFight);
  runButton.addEventListener('click', onRun);
  onFight = onFight;
  onRun = onRun;
}