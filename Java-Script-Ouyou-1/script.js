// const saikoro = Math.floor(Math.random()*11);
// console.log(saikoro);

const onload = window.onload;
const ready = document.getElementById("ready");

// 読み込み時のイベント
window.onload = () => {
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

  const round = document.getElementById("round");
  let roundNumber = 0;
  round.textContent = `ラウンド数: ${roundNumber}ポイント`;
  const point1 = document.getElementById("point1");
  let player1P = 0;
  point1.textContent = `プレイヤー1: ${player1P}ポイント`;
  const point2 = document.getElementById("point2");
  let player2P = 0;
  point2.textContent = `プレイヤー2: ${player2P}ポイント`;
// ボタンクリック時のイベント
  ready.addEventListener('click',() => {
    round.textContent = `ラウンド数: ${++roundNumber}ポイント`;
// ランダムの数字シャッフル
    const random1 = Math.floor(Math.random()*6);
    const random2 = Math.floor(Math.random()*6);
// 数字によって画像が変わるように定義1
    if (random1 === 0) {
      saikoro1.src=Number1;
    }else if (random1 === 1) {
      saikoro1.src=Number2;
    }else if (random1 === 2) {
      saikoro1.src=Number3;
    }else if (random1 === 3) {
      saikoro1.src=Number4;
    }else if (random1 === 4) {
      saikoro1.src=Number5;
    }else if (random1 === 5) {
      saikoro1.src=Number6;
    }
// 数字によって画像が変わるように定義2
    if (random2 === 0) {
      saikoro2.src=Number1;
    }else if (random2 === 1) {
      saikoro2.src=Number2;
    }else if (random2 === 2) {
      saikoro2.src=Number3;
    }else if (random2 === 3) {
      saikoro2.src=Number4;
    }else if (random2 === 4) {
      saikoro2.src=Number5;
    }else if (random2 === 5) {
      saikoro2.src=Number6;
    }
// 結果をresultに表示
    const result = document.getElementById("result");
    if (random1 < random2) {
      console.log("win");
      point1.textContent = `プレイヤー1: ${++player1P}ポイント`
      result.textContent = "勝ち"
    }else if (random1 > random2) {
      console.log("lose");
      point2.textContent = `プレイヤー1: ${++player1P}ポイント`
      result.textContent = "負け"
    }else if (random1 === random2) {
      console.log("tie");
      result.textContent = "同点"
    }
    if (roundNumber === 3) {
      ready.disabled = true;
      if (player1P > player2P) {
        alert("You Lose");
      } else if (player1P < player2P) {
        alert("You Win");
      } else {
        alert("No Contest");
      }
    }
  });
}