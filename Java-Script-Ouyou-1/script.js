const ready = document.getElementById("ready");

// 読み込み時のイベント
window.onload = () => {
  function setSaikoroImage(saikoro, randomNumber, imageSource) {
    saikoro.src = imageSource[randomNumber];
  }
  // サイコロのID参照、関数定義
  const saikoro1 = document.getElementById("saikoro1");
  const saikoro2 = document.getElementById("saikoro2");
  // サイコロの画像定義
  const Number1 = "https://chicodeza.com/wordpress/wp-content/uploads/saikoro-illust1.png";
  const Number2 = "https://chicodeza.com/wordpress/wp-content/uploads/saikoro-illust2.png";
  const Number3 = "https://chicodeza.com/wordpress/wp-content/uploads/saikoro-illust3.png";
  const Number4 = "https://chicodeza.com/wordpress/wp-content/uploads/saikoro-illust4.png";
  const Number5 = "https://chicodeza.com/wordpress/wp-content/uploads/saikoro-illust5.png";
  const Number6 = "https://chicodeza.com/wordpress/wp-content/uploads/saikoro-illust6.png";
  // 初期画面
  saikoro1.src = Number1;
  saikoro2.src = Number1;
  const round = document.getElementById("round");
  let roundNumber = 0;
  round.textContent = `ラウンド数: ${roundNumber}`;
  const point1 = document.getElementById("point1");
  let player1P = 0;
  point1.textContent = `プレイヤー1: ${player1P}ポイント`;
  const point2 = document.getElementById("point2");
  let player2P = 0;
  point2.textContent = `プレイヤー2: ${player2P}ポイント`;
  // ボタンクリック時のイベント
  ready.addEventListener('click',() => {
    round.textContent = `ラウンド数: ${++roundNumber}`;
    // ランダムの数字シャッフル
    const random1 = Math.floor(Math.random()*6);
    const random2 = Math.floor(Math.random()*6);
    const imageSource = [Number1, Number2, Number3, Number4, Number5, Number6];
    setSaikoroImage(saikoro1, random1, imageSource);
    setSaikoroImage(saikoro2, random2, imageSource);
    // プレイヤーの1、2のDivのID入手
    let player1 = document.getElementById("player1")
    let player2 = document.getElementById("player2")
    // 結果をresultに表示
    const result = document.getElementById("result");
    if (random1 > random2) {
      point1.textContent = `プレイヤー1: ${++player1P}ポイント`;
      result.textContent = "負け";
    } else if (random1 < random2) {
      point2.textContent = `プレイヤー2: ${++player2P}ポイント`;
      result.textContent = "勝ち";
    } else {
      result.textContent = "同点";
    }
    if (roundNumber === 3) {
      ready.disabled = true;
      if (player1P < player2P) {
        setTimeout(() => alert("Player2 Win"),500);
        player2.style.backgroundColor="red";
      }else if (player1P > player2P) {
        setTimeout(() => alert("Player1 Win"),500);
        player1.style.backgroundColor="red";
      }else {
        setTimeout(() => alert("No Contest"),500);
      }
    }
  });
}