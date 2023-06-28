socket = io();
var side = 25;
var n = 25;
var m = 25;
var classGrassColor = "#green";
var classGrassEater = "red";
var classFireColor = "orange";
var classPredator = "black";
var classWaterColor = "blue";
function setup() {
    createCanvas(n * side, m * side)
    frameRate(20)
    background('#e8e8e8'); 

    // button1.addEventListener("click", onColorChange);
    // button1 = document.getElementById('summer').addEventListener("click", onColorChange);
    // button2 = document.getElementById('spring'.addEventListener("click", onColorChange));
    // button3 = document.getElementById('autumn').addEventListener("click", onColorChange);
    // button4 = document.getElementById('winter').addEventListener("click", onColorChange);

const infoButton = document.getElementById("infoButton");
const infoText = document.getElementById("infoText");

infoButton.addEventListener("click", function() {
  if (infoText.style.display === "none") {
    infoText.style.display = "block";
  } else {
    infoText.style.display = "none";
  }
});


mul = 5; 
 
    function onColorChange() {
        if (event.target.id == "summer") {
            mul = 10
            classGrassColor = "#12D804"
        } else if (event.target.id == "spring") {
           classGrassColor = "#118B08"
        } else if (event.target.id == "autumn") {
            classGrassColor = "#809F18"
        } else if (event.target.id == "autumn") {
           classGrassColor = "#white"
        }
        socket.on("matrix", drawMatrix);
        io.socket.emit("createObjectAfterLick", mul)

    }

function drawMatrix(data) {
    matrix = data.matrix;
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            var toBot = side - side * 0.1
            textSize(toBot);
            if (matrix[y][x] == 1) {    
                rect(x * side, y * side, side, side);
                text('🌿', x * side, y * side + toBot);
                fill("#12D804");
            } else if (matrix[y][x] == 2) {
                // fill(classGrassEaterColor)
                rect(x * side, y * side, side, side);
                text('👾', x * side, y * side + toBot);
            } else if (matrix[y][x] == 3) {
                // fill(classPredatorColor)
                rect(x * side, y * side, side, side);
                text('👻', x * side, y * side + toBot);
            } else if (matrix[y][x] == 4) {
                // fill(classFireColor)
                rect(x * side, y * side, side, side);
                text('🔥', x * side, y * side + toBot);
            } else if (matrix[y][x] == 5) {
                // fill(classWaterColor)
                rect(x * side, y * side, side, side);
                text('💧', x * side, y * side + toBot);
            } else {
                fill("gray")
                rect(x * side, y * side, side, side);

            }
            // socket.on("matrix", drawMatrix);


            if (frameCount % 60 == 0) {
     console.log(frameCount);
   let sendData = {
      grasses: grassArr.length,
      grassEaters: grassEaterArr.length,
      predators: predatorArr.length,
      fire: fireArr.length,
      water: waterArr.length,
   }

     socket.emit("sendStatistics", stateGenerator);
     console.log("Խոտ - " + classGrass + ", " + "Խոտակեր - " + classGrassEater + ", " + "Գիշատիչ - " + classPredator + ", " + "Ջուր- " + classWater + ", " + "Կրակ - " + classFire);
}

        }
    }
}

socket.on("matrix", drawMatrix);

// if (frameCount % 60 == 0) {
//      console.log(frameCount);
//      let classGrass = grassArr.length;
//      let classGrassEater = grassEaterArr.length;
//      let classPredator = predatorArr.length;
//      let classFire = fireArr.length;
//      let classWater = waterArr.length;
//      let statistic = {
//           grass,
//           grassEater,
//           predator,
//           kind,
//           important
//      }
//      socket.emit("send static", statistic);
//      console.log("Խոտ - " + grass + ", " + "Խոտակեր - " + grassEater + ", " + "Գիշատիչ - " + predator + ", " + "Բարի կերպար - " + kind + ", " + "Թագուհի - " + important);
// }

// function matrixGenerator(matrixSize, grassCount,grassEaterCount,predatorCount, fireCount, waterCount) {

//      var matrix = []

//      for (let i = 0; i < matrixSize; i++) {
//           matrix[i] = []
//           for (let j = 0; j < matrixSize; j++) {
//                matrix[i][j] = 0

//           }
//      }

//      for (let i = 0; i < grassCount; i++) {

//           let x = Math.floor(Math.random() * matrixSize)
//           let y = Math.floor(Math.random() * matrixSize)

//           if (matrix[y][x] == 0) {
//                matrix[y][x] = 1
//           }
//      }

//      for (let i = 0; i < grassEaterCount; i++) {

//           let x = Math.floor(Math.random() * matrixSize)
//           let y = Math.floor(Math.random() * matrixSize)

//           if (matrix[y][x] == 0) {
//                matrix[y][x] = 2
//           }
//      }

//      for (let i = 0; i < predatorCount; i++) {

//           let x = Math.floor(Math.random() * matrixSize)
//           let y = Math.floor(Math.random() * matrixSize)

//           if (matrix[y][x] == 0) {
//                matrix[y][x] = 3
//           }

//      for (let i = 0; i < fireCount; i++) {

//           let x = Math.floor(Math.random() * matrixSize)
//           let y = Math.floor(Math.random() * matrixSize)

//           if (matrix[y][x] == 0) {
//                matrix[y][x] = 4
//           }
//      }

//      for (let i = 0; i < waterCount; i++) {

//           let x = Math.floor(Math.random() * matrixSize)
//           let y = Math.floor(Math.random() * matrixSize)

//           if (matrix[y][x] == 0) {
//                matrix[y][x] = 5
//           }
//      }

//      return matrix
// }
// }

// let matrix = matrixGenerator(25, 25, 10, 6, 8,4)

// var side = 25


// var grassArr = []
// var grassEaterArr = []
// var predatorArr = []
// var fireArr = []
// var waterArr = []


// function setup() {
//      createCanvas(matrix[0].length * side, matrix.length * side)
//      frameRate(20)
//      for (var y = 0; y < matrix.length; y++) {
//           for (var x = 0; x < matrix[y].length; x++) {
//                if (matrix[y][x] == 1) {
//                     var gr = new Grass(x, y, 1);
//                     grassArr.push(gr);
//                }
//                else if (matrix[y][x] == 2) {

//                     var grEat = new GrassEater(x, y, 2);
//                     grassEaterArr.push(grEat);
//                } else if (matrix[y][x] == 3) {

//                     var pre = new Predator(x, y, 3);
//                     predatorArr.push(pre);
//                } else if (matrix[y][x] == 4) {
//                     var fire = new Fire (x, y, 4);
//                     fireArr.push(fire);
//                } else if (matrix[y][x] == 5) {
//                     var water = new Water (x, y, 5);
//                     waterArr.push (water)
//                }

//           }
//      }
// }


// function draw() {
//      for (var y = 0; y < matrix.length; y++) {
//           for (var x = 0; x < matrix[y].length; x++) {
//               var toBot = side - side * 0.1
//               textSize(toBot);

//                if (matrix[y][x] == 1) {

//                     fill("green")
//                     rect(x * side, y * side, side, side);
//                     text('🌿', x * side  , y * side + toBot  );
//                }else  if (matrix[y][x] == 2) {
//                     fill("yellow")
//                     rect(x * side, y * side, side, side);
//                     text('👾', x * side, y * side + toBot );
//                }else  if (matrix[y][x] == 3) {
//                     fill("blue")
//                     rect(x * side, y * side, side, side);
//                     text('👻', x * side, y * side + toBot);
//                }else if (matrix[y][x] == 4) {
//                     fill ("#e25822")
//                     rect(x * side, y * side, side, side);
//                     text('🔥', x * side, y * side + toBot);
//                }else if (matrix[y][x] == 5) {
//                     fill ("#d4f1f9")
//                     rect(x * side, y * side, side, side);
//                     text('💧', x * side, y * side + toBot );
//                }else {
//                     fill("gray")
//                     rect(x * side, y * side, side, side);

//                }

//           }
//      }
}