var colors = randomcolors(6);

var quadrat = document.querySelectorAll(".quadrat");
var farbwahl = randomfarbe();
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = farbwahl;

for (var i = 0; i < quadrat.length; i++) {
    quadrat[i].style.background = colors[i];

    quadrat[i].addEventListener("click", function () {
        var clickedColor = this.style.background;
        if (clickedColor === farbwahl) {
            alert("CORRECT!");
        } else {
            this.style.background = "blue";
        }


    })
}
function randomfarbe() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function randomcolors(num) {
    var arr = []
    for (var i = 0; i < num; i++) {
        arr.push(farbe())
    }
    return arr;
}
function farbe() {
    var rot = Math.floor(Math.random() * 256);
    var gruen = Math.floor(Math.random() * 256);
    var blau = Math.floor(Math.random() * 256);

    return "rgb(" + rot + ", " + gruen + ", " + blau + ")";
}