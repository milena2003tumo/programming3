socket = io();
var side = 25;
var n = 25;
var m = 25;
var classGrassColor = "yellowgreen";
var classGrassEaterColor = "red";
var classFireColor = "orange";
var classPredatorColor = "black";
var classWaterColor = "blue";
mul = 5;
function setup() {
    createCanvas(n * side, m * side)
    frameRate(20)
    background('#e8e8e8');
    Spring = document.getElementById('Spring').addEventListener("click", onColorChange);
    Summer = document.getElementById('Summer').addEventListener("click", onColorChange);
    Winter = document.getElementById('Winter').addEventListener("click", onColorChange);
    // Snow = document.getElementById('Snow').addEventListener();

    const infoButton = document.getElementById("infoButton");
    const infoText = document.getElementById("infoText");

    infoButton.addEventListener("click", function () {
        if (infoText.style.display === "none") {
            infoText.style.display = "block";
        } else {
            infoText.style.display = "none";
        }
    });

}

function onColorChange() {
    if (event.target.id == "Summer") {
        mul = 10
        classGrassColor = "#ADF802"
        classGrassEaterColor = "pink"
        classPredatorColor = "3B2F2F"
        classWaterColor = ("#16E2F5")

    } else if (event.target.id == "Spring") {
        mul = 4
        classGrassColor = "#59E817"
        classGrassEaterColor = "#800080"
        classPredatorColor = "blue"
        classWaterColor = "##77BFC7"
    } else if (event.target.id == "Winter") {
        mul = 12
        classGrassColor = "#white"
        classGrassEaterColor = "white"
        classPredatorColor = "#white"
        classWaterColor = "#43C6DB"
    }
    let data = {
        multForGrass: mul
       

    }



    socket.on("matrix", drawMatrix);
    socket.emit("createObjectAfterLick", data)

}

function drawMatrix(data) {
    matrix = data.matrix;
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            var toBot = side - side * 0.1
            textSize(toBot);
            if (matrix[y][x] == 1) {
                fill(classGrassColor);
                rect(x * side, y * side, side, side);
                text('🌿', x * side, y * side + toBot);
            } else if (matrix[y][x] == 2) {
                fill(classGrassEaterColor)
                rect(x * side, y * side, side, side);
                text('🐏', x * side, y * side + toBot);
            } else if (matrix[y][x] == 3) {
                fill(classPredatorColor)
                rect(x * side, y * side, side, side);
                text('👾', x * side, y * side + toBot);
            } else if (matrix[y][x] == 4) {
                fill(classFireColor)
                rect(x * side, y * side, side, side);
                text('🔥', x * side, y * side + toBot);
            } else if (matrix[y][x] == 5) {
                fill(classWaterColor)
                rect(x * side, y * side, side, side);
                text('💧', x * side, y * side + toBot);
            } else {
                fill("gray")
                rect(x * side, y * side, side, side);

            }

        }
    }
}

socket.on("matrix", drawMatrix);