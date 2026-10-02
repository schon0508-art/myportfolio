// 점토 표면의 결을 일정 간격으로 바꿔서, 스톱모션 영화처럼 표면이 미세하게 떨리게 한다
(function () {
  var noise = document.getElementById("clay-noise");
  var card = document.querySelector(".card");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (noise && !reduceMotion) {
    var seed = 3;
    setInterval(function () {
      seed = (seed % 9) + 1;
      noise.setAttribute("seed", String(seed));
    }, 180); // 약 초당 5~6번
  }

  // 카드를 누르면 점토가 꾹 눌리는 느낌을 잠깐 준 뒤 이동 (링크 이동은 그대로 진행)
  if (card) {
    card.addEventListener("click", function () {
      card.classList.add("squish");
      setTimeout(function () {
        card.classList.remove("squish");
      }, 250);
    });
  }
})();
