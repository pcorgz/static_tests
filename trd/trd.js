//var sph = document.getElementById("sph"); sph.innerHTML = "";

//<div class="rad"></div>
var sph = document.getElementById("sph");

for (var i = 0; i <= 180; i += 30) {
  var rad = document.createElement("div");
  var rad2 = document.createElement("div");
  
  rad.className = "rad";
  rad2.className = "rad";
  
  rad.style.transform = "rotateX(" + i + "deg)";
  rad2.style.transform = "rotateY(" + i + "deg)";
  
  sph.appendChild(rad);
  sph.appendChild(rad2);
}