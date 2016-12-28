function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRaindrop() {
  var dropCount = document.getElementsByClassName("drop-container").length;
  if (dropCount >= 30) return;

  var d1 = document.createElement("div");
  d1.className = "drop-container";
  d1.style.left = getRandomInt(5, 95) + "%";

  var d2 = document.createElement("div");
  d2.className = "drop-drop" + " drop-drop" + getRandomInt(1, 3);

  d1.appendChild(d2);
  document.body.appendChild(d1);
  setTimeout(function(){ d1.remove(); }, 3100);
};


var in1, in2;

setInterval(createRaindrop, getRandomInt(300, 1000));
setInterval(createRaindrop, getRandomInt(400, 1000));
setInterval(createRaindrop, getRandomInt(500, 1000));
setInterval(createRaindrop, getRandomInt(1000, 2000));
setInterval(createRaindrop, getRandomInt(1100, 2000));
setInterval(createRaindrop, getRandomInt(1200, 2000));
setInterval(createRaindrop, getRandomInt(1300, 2000));
setInterval(createRaindrop, getRandomInt(1400, 2000));
setInterval(createRaindrop, getRandomInt(1500, 2000));
