// ログの要素を入手
const gameLog = document.getElementById("gameLog");
upLog = () => {
  let upLog = document.createElement("p");  // 新しいp要素を作る
  upLog.textContent = "上に進んだ";
  gameLog.appendChild(upLog);
  gameLog.scrollTop = gameLog.scrollHeight;
}
downLog = () => {
  let downLog = document.createElement("p");  // 新しいp要素を作る
  downLog.textContent = "下に進んだ";
  gameLog.appendChild(downLog);
  gameLog.scrollTop = gameLog.scrollHeight;
}
rightLog = () => {
  let rightLog = document.createElement("p");  // 新しいp要素を作る
  rightLog.textContent = "右に進んだ";
  gameLog.appendChild(rightLog);
  gameLog.scrollTop = gameLog.scrollHeight;
}
leftLog = () => {
  let leftLog = document.createElement("p");  // 新しいp要素を作る
  leftLog.textContent = "左に進んだ";
  gameLog.appendChild(leftLog);
  gameLog.scrollTop = gameLog.scrollHeight;
}
cantUpLog = () => {
  let cantUpLog = document.createElement("p");  // 新しいp要素を作る
  cantUpLog.textContent = "これ以上、上には進めない";
  gameLog.appendChild(cantUpLog);
  gameLog.scrollTop = gameLog.scrollHeight;
}
cantDownLog = () => {
  let cantDownLog = document.createElement("p");  // 新しいp要素を作る
  cantDownLog.textContent = "これ以上、下には進めない";
  gameLog.appendChild(cantDownLog);
  gameLog.scrollTop = gameLog.scrollHeight;
}
cantRightLog = () => {
  let cantUpLog = document.createElement("p");  // 新しいp要素を作る
  cantUpLog.textContent = "これ以上、右には進めない";
  gameLog.appendChild(cantUpLog);
  gameLog.scrollTop = gameLog.scrollHeight;
}
cantLeftLog = () => {
  let cantLeftLog = document.createElement("p");  // 新しいp要素を作る
  cantLeftLog.textContent = "これ以上、左には進めない";
  gameLog.appendChild(cantLeftLog);
  gameLog.scrollTop = gameLog.scrollHeight;
}
//battleEvent
metalSlimeAppear = () => {
  let metalSlimeAppear = document.createElement("p");  // 新しいp要素を作る
  metalSlimeAppear.textContent = "メタルスライムが現れた！";
  gameLog.appendChild(metalSlimeAppear);
  gameLog.scrollTop = gameLog.scrollHeight;
}
dragonAppear = () => {
  let dragonAppear = document.createElement("p");  // 新しいp要素を作る
  dragonAppear.textContent = "ドラゴンが現れた！";
  gameLog.appendChild(dragonAppear);
  gameLog.scrollTop = gameLog.scrollHeight;
}
slimeAppear = () => {
  let slimeAppear = document.createElement("p");  // 新しいp要素を作る
  slimeAppear.textContent = "スライムが現れた！";
  gameLog.appendChild(slimeAppear);
  gameLog.scrollTop = gameLog.scrollHeight;
}
failureRun = () => {
  let failureRun = document.createElement("p");  // 新しいp要素を作る
  failureRun.textContent = "逃げれなかった！";
  gameLog.appendChild(failureRun);
  gameLog.scrollTop = gameLog.scrollHeight;
}
successRun = () => {
  let successRun = document.createElement("p");  // 新しいp要素を作る
  successRun.textContent = "逃げれた！";
  gameLog.appendChild(successRun);
  gameLog.scrollTop = gameLog.scrollHeight;
}
metalSlimeAttack = () => {
  const metalSlimeAttack = document.createElement("p");  // 新しいp要素を作る
  metalSlimeAttack.textContent = "メタルスライムに10ダメージ！";
  gameLog.appendChild(metalSlimeAttack);
  gameLog.scrollTop = gameLog.scrollHeight;
}
metalSlimeDamage = () => {
  const metalSlimeDamage = document.createElement("p");  // 新しいp要素を作る
  metalSlimeDamage.textContent = "10ダメージうけた！";
  gameLog.appendChild(metalSlimeDamage);
  gameLog.scrollTop = gameLog.scrollHeight;
}
metalSlimeKill = () => {
  const metalSlimeKill = document.createElement("p");  // 新しいp要素を作る
  metalSlimeKill.textContent = "メタルスライムを倒した！";
  gameLog.appendChild(metalSlimeKill);
  gameLog.scrollTop = gameLog.scrollHeight;
}

dragonAttack = () => {
  const dragonAttack = document.createElement("p");  // 新しいp要素を作る
  dragonAttack.textContent = "ドラゴンに10ダメージ！";
  gameLog.appendChild(dragonAttack);
  gameLog.scrollTop = gameLog.scrollHeight;
}
dragonDamage = () => {
  const dragonDamage = document.createElement("p");  // 新しいp要素を作る
  dragonDamage.textContent = "20ダメージうけた！";
  gameLog.appendChild(dragonDamage);
  gameLog.scrollTop = gameLog.scrollHeight;
}
slimeAttack = () => {
  const slimeAttack = document.createElement("p");  // 新しいp要素を作る
  slimeAttack.textContent = "スライムに10ダメージ！";
  gameLog.appendChild(slimeAttack);
  gameLog.scrollTop = gameLog.scrollHeight;
}
slimeDamage = () => {
  const slimeDamage = document.createElement("p");  // 新しいp要素を作る
  slimeDamage.textContent = "20ダメージうけた！";
  gameLog.appendChild(slimeDamage);
  gameLog.scrollTop = gameLog.scrollHeight;
}