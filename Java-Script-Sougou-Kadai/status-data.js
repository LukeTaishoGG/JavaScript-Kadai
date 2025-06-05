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
playerStatus = () => {
  playerHP.textContent = `HP: ${hero.HP}`;
  playerAttacP.textContent = `Attack: ${hero.Attack}`;
  playerLevel.textContent = `Level: ${hero.Level}`;
}
playerStatus();
//キャラクターイメージ
const heroImg = 'https://i.pinimg.com/736x/9d/6b/4a/9d6b4ad803f473dbddf9daaeedda49b1.jpg';
const MetalSlimeImg = "https://front.cheercareer.jp/img/personal/2980_69845_message.jpg?updated_at=1579588291";
const drogonImg = "https://koboldpress.com/wp-content/uploads/2024/06/DQVIII_Hacksaurus.png";
const slimeImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDLFPKhqCLGpPLuelOSbqks8UB05FA9Jhj-A&s";