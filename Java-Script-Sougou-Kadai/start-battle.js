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
    let metalSlimeAppear = document.createElement("p");  // 新しいp要素を作る
    metalSlimeAppear.textContent = "メタルスライムが現れた";
    gameLog.appendChild(metalSlimeAppear);
    fightButton.addEventListener('click',() => {
      if ( newMetalslimeLife > 0) {
        newMetalslimeLife -= hero.Attack
        hero.HP -= metalSlime.Attack
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
        if ( newMetalslimeLife > 0) {
          newMetalslimeLife -= hero.Attack
          hero.HP -= metalSlime.Attack
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
    fightButton.addEventListener('click',() => {
      if ( newDragonLife > 0) {
        newDragonLife -= hero.Attack
        hero.HP -= dragon.Attack
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
        newDragonLife -= hero.Attack
        hero.HP -= dragon.Attack
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
    fightButton.addEventListener('click',() => {
      if ( newSlimeLife > 0) {
        newSlimeLife -= hero.Attack
        hero.HP -= slime.Attack
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
        newSlimeLife -= hero.Attack
        hero.HP -= slime.Attack
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