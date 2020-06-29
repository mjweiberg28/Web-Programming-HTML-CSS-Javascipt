function changeColors() {
    var colors = ['blue', 'royalblue', 'navy'];
    var colors2 = ['darkorange', 'red', 'maroon'];

    var randColor = colors[Math.floor(Math.random() * colors.length)];
    var randColor2 = colors2[Math.floor(Math.random() * colors2.length)];

    document.body.style.background = randColor;
    document.getElementById("background").style.background = randColor2;
    document.body.style.color = "white";
}

function changeDivider() {
    var randWidth = Math.floor(Math.random() * 101);

    document.getElementById("background").style.width = randWidth + "%";
}

window.onload = function () {
    document.getElementById("color-change").onclick = changeColors;
    document.getElementById("divider-change").onclick = changeDivider;
}