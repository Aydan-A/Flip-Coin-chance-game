
var btn = document.getElementById("submitButton");
var coins = document.querySelector(".coins");
var text = document.querySelector("h1");


btn.addEventListener("click", () => {

  let result = Math.floor(Math.random() * 2);

  coins.style.animation = result
  ? "-webkit-animation: spin-tail 2s forward;" 
  : "-webkit-animation: spin-head 2s forward;";

  text.textContent = `The coin landed on ${result > 0 ? "tails" : "heads"}`;
});
