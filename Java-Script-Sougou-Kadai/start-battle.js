window.startBattle = () => {
  console.log("startBattle 実行");
  window.disableButton();
  const fightButton = document.getElementById("fightButton");
  const runButton = document.getElementById("runButton");
  const metalSlimeRate = 0.10;
  const dragonRate = 0.35;
  const runRate = 0.5;
  let monster, monsterImg, damageLog, monsterAttack, attackLog, monsterEP, killLog;
  let random = Math.random();
  if(random < metalSlimeRate) { //metalSlime
    monster = metalSlime;
    monsterImg = MetalSlimeImg;
    log("メタルスライムが現れた！");
    damageLog = "メタルスライムに10ダメージ！";
    monsterAttack = metalSlime.Attack;
    attackLog = "10ダメージ受けた！";
    monsterEP = metalSlime.EP;
    killLog = "メタルスライムを倒した！";
  } else if (random < dragonRate) { //dragon
    monster = dragon;
    monsterImg = drogonImg;
    log("ドラゴンが現れた！");
    damageLog = "ドラゴンに10ダメージ！";
    monsterAttack = dragon.Attack;
    attackLog = "20ダメージ受けた！";
    monsterEP = dragon.EP;
    killLog = "ドラゴンを倒した！";
  } else { //slime
    monster = slime;
    monsterImg = slimeImg;
    log("スライムが現れた！");
    damageLog = "スライムに5ダメージ！";
    monsterAttack = slime.Attack;
    attackLog = "5ダメージ受けた！";
    monsterEP = slime.EP;
    killLog = "スライムを倒した！";
  }
  window.charImg.src = monsterImg;
  let monsterLife = monster.HP;
  let onFight = () => {
    if (monsterLife > 0) {
      monsterLife -= hero.Attack;
      log(damageLog);
      hero.HP -= monsterAttack;
      log(attackLog);
      window.playerStatus();
      if(monsterLife <= 0) {
        hero.EP += monsterEP;
        log(killLog);
        window.result();
        window.playerStatus();
      }
    }
  }
  let onRun = () => {
    let runRandom = Math.random();
    if(runRandom < runRate) {
      log("逃げれなかった！");
    }else {
      log("逃げれた！");
      window.result();
      window.playerStatus();
    }
  }
  // 前回のイベントを解除
  fightButton.removeEventListener('click', window.onFight);
  runButton.removeEventListener('click', window.onRun);
  // 新しいイベントを登録
  fightButton.addEventListener('click', onFight);
  runButton.addEventListener('click', onRun);
  // 次のremove用に保存
  window.onFight = onFight;
  window.onRun = onRun;
}