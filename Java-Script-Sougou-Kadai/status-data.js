let hero = {
  HP: 100,
  Attack: 10,
  EP: 0,
  Level: 1,
}
// モンスターのステータス
const slime = {
  HP: 20,
  Attack: 10,
  EP: 10,
  SpawnRate: 0.65,
}
const dragon = {
  HP: 40,
  Attack: 20,
  EP: 15,
  SpawnRate: 0.25,
}
const metalSlime = {
  HP: 20,
  Attack: 10,
  EP: 10,
  SpawnRate: 0.10,
}

// プレイヤーのステータスを表示
window.playerStatus = () => {
  playerHP.textContent = `HP: ${hero.HP}`;
  playerAttacP.textContent = `Attack: ${hero.Attack}`;
  playerLevel.textContent = `Level: ${hero.Level}`;
}
window.playerStatus();