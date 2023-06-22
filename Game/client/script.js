socket = io();
var side = 25;
var n = 25;
var m = 25;

document.addEventListener('DOMContentLoaded', function() {
   // Get the button element and the info text element
const infoButton = document.getElementById("infoButton");
const infoText = document.getElementById("infoText");

// Add click event listener to the button
infoButton.addEventListener("click", function() {
  // Toggle the display of the info text
  if (infoText.style.display === "none") {
    infoText.style.display = "block";
  } else {
    infoText.style.display = "none";
  }
});
  });
  



function setup() {
    createCanvas(n * side, m * side)
    frameRate(20)
    background('#e8e8e8');
}

function drawMatrix(data) {
    matrix = data.matrix;
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            var toBot = side - side * 0.1
            textSize(toBot);

            if (matrix[y][x] == 1) {

                fill("yellowgreen")
                rect(x * side, y * side, side, side);
                text('🌿', x * side, y * side + toBot);
            } else if (matrix[y][x] == 2) {
                fill("yellow")
                rect(x * side, y * side, side, side);
                text('👾', x * side, y * side + toBot);
            } else if (matrix[y][x] == 3) {
                fill("blue")
                rect(x * side, y * side, side, side);
                text('👻', x * side, y * side + toBot);
            } else if (matrix[y][x] == 4) {
                fill("#e25822")
                rect(x * side, y * side, side, side);
                text('🔥', x * side, y * side + toBot);
            } else if (matrix[y][x] == 5) {
                fill("#d4f1f9")
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
socket.on("sendStatistics", stateGenerator)

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



//      for( var i in grassArr){
//           grassArr[i].mul()
//      }

//      for(let i in grassEaterArr){
//           grassEaterArr[i].mul()
//           grassEaterArr[i].eat()
//      }

//      for(let j in predatorArr){
//           predatorArr[j].mul()
//           predatorArr[j].eat()
//      }
//      for(let j in fireArr){
//           fireArr[j].mul()
//           fireArr[j].eat()
//      }
//      for (let j in waterArr) {
//           waterArr[j].mul ()
//           waterArr[j].eat ()
//      }
// }