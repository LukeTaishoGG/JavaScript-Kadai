window.startBattle = () => {
  console.log("startBattle 実行");
  window.disableButton();
  // イベントの重複防止
  const fightButton = document.getElementById("fightButton");
  const runButton = document.getElementById("runButton");
  // バトルごとに使う関数を定義
  let onFight;
  let onRun;
  let random = Math.random();
  let runRandom = Math.random();
  if(random < 0.10) { //metalSlime
    let newMetalslimeLife = metalSlime.HP;
    console.log("metal-slime");
    window.charImg.src = "https://front.cheercareer.jp/img/personal/2980_69845_message.jpg?updated_at=1579588291";
    metalSlimeAppear();
    onFight = () => {
      if ( newMetalslimeLife > 0) {
        newMetalslimeLife -= hero.Attack
        metalSlimeAttack();
        hero.HP -= metalSlime.Attack
        metalSlimeDamage();
        window.playerStatus();
        if(newMetalslimeLife <= 0) {
          hero.EP += metalSlime.EP;
          metalSlimeKill();
          window.result();
          window.playerStatus();
        }
      }
    };
    onRun = () => {
      let runRandom = Math.random();
      if(random < 0.5) {
        failureRun();
        if ( newMetalslimeLife > 0) {
          hero.HP -= metalSlime.Attack
          metalSlimeDamage();
          window.playerStatus();
          if(newMetalslimeLife <= 0) {
            hero.EP += metalSlime.EP;
            metalSlimeKill();
            window.result();
            window.playerStatus();
          }
        }
      }else{
        successRun();
        window.result();
        window.playerStatus();
      }
    };
  } else if (random < 0.35) { //dragon
    let newDragonLife = dragon.HP;
    console.log("dragon");
    window.charImg.src = "https://koboldpress.com/wp-content/uploads/2024/06/DQVIII_Hacksaurus.png"
    dragonAppear();
    onFight = () => {
      if ( newDragonLife > 0) {
        newDragonLife -= hero.Attack
        dragonAttack();
        hero.HP -= dragon.Attack
        dragonDamage();
        window.playerStatus();
        if(newDragonLife <= 0) {
          hero.EP += dragon.EP;
          dragonKill();
          window.result();
          window.playerStatus();
        }
      }
    };
    onRun = () => {
      let runRandom = Math.random();
      if(runRandom < 0.5) {
        failureRun();
        hero.HP -= dragon.Attack
        dragonDamage();
        window.playerStatus();
        if(newDragonLife <= 0) {
          hero.EP += dragon.EP;
          dragonKill();
          window.result();
          window.playerStatus();
        }
      }else{
        successRun();
        window.result();
        window.playerStatus();
      }
    };
  } else { //slime
    let newSlimeLife = slime.HP;
    console.log("slime");
    window.charImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDLFPKhqCLGpPLuelOSbqks8UB05FA9Jhj-A&s";
    slimeAppear();
    onFight = () => {
      if ( newSlimeLife > 0) {
        newSlimeLife -= hero.Attack
        slimeAttack();
        hero.HP -= slime.Attack
        slimeDamage();
        window.playerStatus();
        if(newSlimeLife <= 0) {
          hero.EP += slime.EP;
          slimeKill();
          window.result();
          window.playerStatus();
        }
      }
    };
    onRun = () => {
      let runRandom = Math.random();
      if(runRandom < 0.5) {
        failureRun();
        if(newSlimeLife <= 0){
          hero.EP += slime.EP;
          slimeKill();
          window.result();
          window.playerStatus();
        }
      }else {
        successRun();
        window.result();
        window.playerStatus();
      }
    };
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