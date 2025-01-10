let vertreketijd = "9:59"
let resterendeMinuten = "1 minuut"
document.getElementById("tijd_text").innerHTML = resterendeMinuten;

setInterval(veranderweergave, 5000);

function veranderweergave() {
  if (document.getElementById("tijd_text").innerHTML == resterendeMinuten) {
    document.getElementById("tijd_text").innerHTML = vertreketijd;
  } else if (document.getElementById("tijd_text").innerHTML == vertreketijd) {
    document.getElementById("tijd_text").innerHTML = resterendeMinuten;
  }
}