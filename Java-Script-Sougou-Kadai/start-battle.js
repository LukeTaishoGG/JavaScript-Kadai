window.startBattle = () => {
  console.log("startBattle 実行");
  window.disableButton();
  const fightButton = document.getElementById("fightButton");
  const runButton = document.getElementById("runButton");
  const random = Math.random();

  if(random < 0.10) { //metalSlime
    let newMetalslimeLife = metalSlime.HP;
    console.log("metal-slime");
    window.charImg.src = "https://front.cheercareer.jp/img/personal/2980_69845_message.jpg?updated_at=1579588291";
    metalSlimeAppear();
    fightButton.addEventListener('click',() => {
      if ( newMetalslimeLife > 0) {
        newMetalslimeLife -= hero.Attack
        metalSlimeAttack();
        hero.HP -= metalSlime.Attack
        metalSlimeDamage();
        window.playerStatus();
        if(newMetalslimeLife <= 0) {
          hero.EP += metalSlime.EP;
          window.result();
          window.playerStatus();
        }
      }
    })
    runButton.addEventListener('click', () => {
      if(random < 0.5) {
        failureRun();
        if ( newMetalslimeLife > 0) {
          newMetalslimeLife -= hero.Attack
          metalSlimeAttack();
          hero.HP -= metalSlime.Attack
          metalSlimeDamage();
          window.playerStatus();
          if(newMetalslimeLife <= 0) {
            hero.EP += metalSlime.EP;
            window.result();
            window.playerStatus();
          }
        }
      }else{
        window.result();
        window.playerStatus();
      }
    })
  } else if (random < 0.35) { //dragon
    let newDragonLife = dragon.HP;
    console.log("dragon");
    window.charImg.src = "https://koboldpress.com/wp-content/uploads/2024/06/DQVIII_Hacksaurus.png"
    dragonAppear();
    fightButton.addEventListener('click',() => {
      if ( newDragonLife > 0) {
        newDragonLife -= hero.Attack
        dragonAttack();
        hero.HP -= dragon.Attack
        dragonDamage();
        window.playerStatus();
        if(newDragonLife <= 0) {
          hero.EP += dragon.EP;
          window.result();
          window.playerStatus();
        }
      }
    })
    runButton.addEventListener('click', () => {
      if(random < 0.5) {
        failureRun();
        newDragonLife -= hero.Attack
        dragonAttack();
        hero.HP -= dragon.Attack
        dragonDamage();
        window.playerStatus();
        if(newDragonLife <= 0) {
          hero.EP += dragon.EP;
          window.result();
          window.playerStatus();
        }
      }else{
        window.result();
        window.playerStatus();
      }
    })
  } else { //slime
    let newSlimeLife = slime.HP;
    console.log("slime");
    window.charImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDLFPKhqCLGpPLuelOSbqks8UB05FA9Jhj-A&s";
    slimeAppear();
    fightButton.addEventListener('click',() => {
      if ( newSlimeLife > 0) {
        newSlimeLife -= hero.Attack
        slimeAttack();
        hero.HP -= slime.Attack
        slimeDamage();
        window.playerStatus();
        if(newSlimeLife <= 0) {
          hero.EP += slime.EP;
          window.result();
          window.playerStatus();
        }
      }
    })
    runButton.addEventListener('click', () => {
      if(random < 0.5) {
        failureRun();
        newSlimeLife -= hero.Attack
        slimeAttack();
        hero.HP -= slime.Attack
        slimeDamage();
        if(newSlimeLife <= 0){
          hero.EP += slime.EP;
          window.result();
          window.playerStatus();
        }
      }else {
        window.result();
        window.playerStatus();
      }
    })
  }
}