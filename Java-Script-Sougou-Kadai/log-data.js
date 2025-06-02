// ログの要素を入手
const gameLog = document.getElementById("gameLog");
upLog = () => {
  let upLog = document.createElement("p");  // 新しいp要素を作る
  upLog.textContent = "上に進んだ";
  gameLog.appendChild(upLog);
}
downLog = () => {
  let downLog = document.createElement("p");  // 新しいp要素を作る
  downLog.textContent = "下に進んだ";
  gameLog.appendChild(downLog);
}
rightLog = () => {
  let rightLog = document.createElement("p");  // 新しいp要素を作る
  rightLog.textContent = "右に進んだ";
  gameLog.appendChild(rightLog);
}
leftLog = () => {
  let leftLog = document.createElement("p");  // 新しいp要素を作る
  leftLog.textContent = "左に進んだ";
  gameLog.appendChild(leftLog);
}
//battleEvent
metalSlimeAppear = () => {
  let metalSlimeAppear = document.createElement("p");  // 新しいp要素を作る
  metalSlimeAppear.textContent = "メタルスライムが現れた！";
  gameLog.appendChild(metalSlimeAppear);
}
dragonAppear = () => {
  let dragonAppear = document.createElement("p");  // 新しいp要素を作る
  dragonAppear.textContent = "ドラゴンが現れた！";
  gameLog.appendChild(dragonAppear);
}
slimeAppear = () => {
  let slimeAppear = document.createElement("p");  // 新しいp要素を作る
  slimeAppear.textContent = "スライムが現れた！";
  gameLog.appendChild(slimeAppear);
}
failureRun = () => {
  let failureRun = document.createElement("p");  // 新しいp要素を作る
  failureRun.textContent = "逃げれなかった！";
  gameLog.appendChild(failureRun);
}
metalSlimeAttack = () => {
  const metalSlimeAttack = document.createElement("p");  // 新しいp要素を作る
  metalSlimeAttack.textContent = "メタルスライムに10ダメージ！";
  gameLog.appendChild(metalSlimeAttack);
}
metalSlimeDamage = () => {
  const metalSlimeDamage = document.createElement("p");  // 新しいp要素を作る
  metalSlimeDamage.textContent = "10ダメージうけた！";
  gameLog.appendChild(metalSlimeDamage);
}
dragonAttack = () => {
  const dragonAttack = document.createElement("p");  // 新しいp要素を作る
  dragonAttack.textContent = "ドラゴンに10ダメージ！";
  gameLog.appendChild(dragonAttack);
}
dragonDamage = () => {
  const dragonDamage = document.createElement("p");  // 新しいp要素を作る
  dragonDamage.textContent = "20ダメージうけた！";
  gameLog.appendChild(dragonDamage);
}
slimeAttack = () => {
  const slimeAttack = document.createElement("p");  // 新しいp要素を作る
  slimeAttack.textContent = "スライムに10ダメージ！";
  gameLog.appendChild(slimeAttack);
}
slimeDamage = () => {
  const slimeDamage = document.createElement("p");  // 新しいp要素を作る
  slimeDamage.textContent = "20ダメージうけた！";
  gameLog.appendChild(slimeDamage);
}