$(".balance").html(localStorage.balance_b91);

for (let i = 0; i < 7; i++) {
  let bets = JSON.parse(localStorage.bets_b91);

  if (bets.includes(i)) {
    $(".wins").append(
      $(`
        <div class="bet">
            <img src="../png/l${i + 1}.png" alt="" class="bet_line" />
            <div class="bet_text">${
              randInt(1, 2) == 1 ? "Вы выиграли" : "Вы проиграли"
            }!</div>
        </div>
    `)
    );
  }
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
