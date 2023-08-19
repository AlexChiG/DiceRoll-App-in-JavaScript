"use strict";

function getRandomInt(max) {
  return (Math.floor(Math.random() * max) + 1);
}

function visibilityHidden() {
    document.getElementById("die").style.visibility = "hidden";
    document.getElementById("dot-center").style.visibility = "hidden";
    document.getElementById("dot-1").style.visibility = "hidden";
    document.getElementById("dot-2").style.visibility = "hidden";
    document.getElementById("dot-3").style.visibility = "hidden";
    document.getElementById("dot-4").style.visibility = "hidden";
    document.getElementById("dot-5").style.visibility = "hidden";
    document.getElementById("dot-6").style.visibility = "hidden";
}

function roll() {
    visibilityHidden();
    let result = getRandomInt(6);
    document.getElementById("result").innerHTML = "You rolled: " + result;
    document.getElementById("die").style.visibility = "visible";
    switch (result) {
        case 1:
            document.getElementById("dot-center").style.visibility = "visible";
            break;
        case 2:
            document.getElementById("dot-2").style.visibility = "visible";
            document.getElementById("dot-5").style.visibility = "visible";
            break;
        case 3:
            document.getElementById("dot-center").style.visibility = "visible";
            document.getElementById("dot-2").style.visibility = "visible";
            document.getElementById("dot-5").style.visibility = "visible";
            break;
        case 4:
            document.getElementById("dot-1").style.visibility = "visible";
            document.getElementById("dot-2").style.visibility = "visible";
            document.getElementById("dot-5").style.visibility = "visible";
            document.getElementById("dot-6").style.visibility = "visible";
            break;
        case 5:
            document.getElementById("dot-center").style.visibility = "visible";
            document.getElementById("dot-1").style.visibility = "visible";
            document.getElementById("dot-2").style.visibility = "visible";
            document.getElementById("dot-5").style.visibility = "visible";
            document.getElementById("dot-6").style.visibility = "visible";
            break;
        case 6:
            document.getElementById("dot-1").style.visibility = "visible";
            document.getElementById("dot-2").style.visibility = "visible";
            document.getElementById("dot-3").style.visibility = "visible";
            document.getElementById("dot-4").style.visibility = "visible";
            document.getElementById("dot-5").style.visibility = "visible";
            document.getElementById("dot-6").style.visibility = "visible";
            break;
    }
}

function reset() {
    visibilityHidden();
    document.getElementById("result").innerHTML = "";
}