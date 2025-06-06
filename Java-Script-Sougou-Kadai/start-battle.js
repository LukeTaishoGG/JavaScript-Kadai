let onFight = null;//グローバルとしてonFightとonRunを宣言
let onRun = null;
const startBattle = () => {
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
    monsterDamage = metalSlime.Attack;
  } else if (random < dragonRate) {//dragon
    monster = dragon;
    monsterImg = drogonImg;
    monsterName = "ドラゴン";
    monsterDamage = dragon.Attack;
  } else {//slime
    monster = slime;
    monsterImg = slimeImg;
    monsterName = "スライム";
    monsterDamage = slime.Attack;
  }
  monsterAttack = monster.Attack;
  monsterEP = monster.EP;
  log(`${monsterName}が現れた！`);
  charImg.src = monsterImg;
  let monsterLife = monster.HP;
  fightButton.removeEventListener('click', onFight);//イベント解除,初期化
  runButton.removeEventListener('click', onRun);
  onFight = () => {
    if (monsterLife > 0) {
      monsterLife -= hero.Attack;
      log(`${monsterName}に${monsterDamage}ダメージ！`);
      hero.HP -= monsterAttack;
      log(`${monsterDamage}ダメージ受けた！`);
      playerStatus();
      if (hero.HP <= 0) {
        log('Your Dead');
        result();
        return;
      }
      if(monsterLife <= 0) {
        hero.EP += monsterEP;
        log(`${monsterName}を倒した！`);
        result();
        playerStatus();
      }
    }
  };
  onRun = () => {
    let runRandom = Math.random();
    if(runRandom < runRate) {
      log("逃げれなかった！");
    }else {
      log("逃げれた！");
      result();
      playerStatus();
    }
  };
  fightButton.addEventListener('click', onFight);
  runButton.addEventListener('click', onRun);
}