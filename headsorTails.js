
var btn = document.getElementById("submitButton");
var coins = document.querySelector(".coins");
var text = document.querySelector("h1");

btn.addEventListener("click", () => {
  let result = Math.floor(Math.random() * 2);
  
  setTimeout(() => {
    setTimeout
    coins.style.animation = result
    ? "spin-tail 2s forwards" 
    : "spin-head 2s forwards"

    setTimeout(() => {
      text.textContent = `The coin landed on ${result > 0 ? "tails" : "heads"}`;
    }, 2000);
  
  }, 100);
  
});
