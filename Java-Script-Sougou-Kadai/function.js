window.enableButton = () => {
  window.upButton.disabled = false;
  window.downButton.disabled = false;
  window.rightButton.disabled = false;
  window.leftButton.disabled = false;
  fightButton.style.display = 'none';
  runButton.style.display = 'none';
  charImg.src = ('https://i.pinimg.com/736x/9d/6b/4a/9d6b4ad803f473dbddf9daaeedda49b1.jpg');
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
    charImg.src = ('https://i.pinimg.com/736x/9d/6b/4a/9d6b4ad803f473dbddf9daaeedda49b1.jpg');
  }
}