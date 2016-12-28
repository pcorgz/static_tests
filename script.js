changeFrame = function (obj) {
  var value = obj.value;

  var iframe = document.getElementById("view");

  iframe.src = value + "/" + value + ".html";
}