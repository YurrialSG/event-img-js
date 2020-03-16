var userSelection = document.getElementsByClassName('texto');
var userSelectionImage = document.getElementsByClassName('card');


for (var i = 0; i < userSelectionImage.length; i++) {
    (function (index) {
        userSelectionImage[index].addEventListener("mouseover", function () {
            userSelectionImage[index].style.backgroundColor = "#bbdefb";
        })

        userSelectionImage[index].addEventListener("mouseout", function () {
            userSelectionImage[index].style.backgroundColor = "white";
        })
    })(i);
}

for (var i = 0; i < userSelection.length; i++) {
    (function (index) {
        userSelection[index].addEventListener("mouseover", function () {
            userSelection[index].style.color = "blue";
        })

        userSelection[index].addEventListener("mouseout", function () {
            userSelection[index].style.color = "black";
        })
    })(i);
}

document.getElementById("demo").addEventListener("mouseover", mouseOver);
document.getElementById("demo").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("demo").style.color = "red";
}

function mouseOut() {
    document.getElementById("demo").style.color = "black";
}