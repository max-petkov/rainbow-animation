function restartRainbowAnimation() {
  let paths = document.querySelectorAll(".svg-tolstoy-logo path");
  paths.forEach((path, i) => {
    path.addEventListener("animationend", function () {
      path.style.animationName = "none";
    });

    setInterval(function () {
      path.style.animationName = "rainbow";
    }, 4500);
  });
}

restartRainbowAnimation();
