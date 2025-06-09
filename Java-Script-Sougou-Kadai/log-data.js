// ログの要素を入手
const gameLog = document.getElementById("gameLog");
const log = (text) => {
  const logElement = document.createElement("p");
  logElement.textContent = text;
  gameLog.appendChild(logElement);
  gameLog.scrollTop = gameLog.scrollHeight;
}