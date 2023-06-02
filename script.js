function matrixGenerator(matrixSize, grassCount,grassEaterCount,predatorCount, fireCount, waterCount) {

     var matrix = []

     for (let i = 0; i < matrixSize; i++) {
          matrix[i] = []
          for (let j = 0; j < matrixSize; j++) {
               matrix[i][j] = 0

          }
     }

     for (let i = 0; i < grassCount; i++) {

          let x = Math.floor(Math.random() * matrixSize)
          let y = Math.floor(Math.random() * matrixSize)

          if (matrix[y][x] == 0) {
               matrix[y][x] = 1
          }
     }

     for (let i = 0; i < grassEaterCount; i++) {

          let x = Math.floor(Math.random() * matrixSize)
          let y = Math.floor(Math.random() * matrixSize)

          if (matrix[y][x] == 0) {
               matrix[y][x] = 2
          }
     }

     for (let i = 0; i < predatorCount; i++) {

          let x = Math.floor(Math.random() * matrixSize)
          let y = Math.floor(Math.random() * matrixSize)

          if (matrix[y][x] == 0) {
               matrix[y][x] = 3
          }

     for (let i = 0; i < fireCount; i++) {

          let x = Math.floor(Math.random() * matrixSize)
          let y = Math.floor(Math.random() * matrixSize)

          if (matrix[y][x] == 0) {
               matrix[y][x] = 4
          }
     }

     for (let i = 0; i < waterCount; i++) {

          let x = Math.floor(Math.random() * matrixSize)
          let y = Math.floor(Math.random() * matrixSize)

          if (matrix[y][x] == 0) {
               matrix[y][x] = 5
          }
     }

     return matrix
}
}

let matrix = matrixGenerator(25, 25, 10, 6, 8,4)

console.log(matrix);

var side = 25


var grassArr = []
var grassEaterArr = []
var predatorArr = []
var fireArr = []
var waterArr = []


function setup() {
     createCanvas(matrix[0].length * side, matrix.length * side)
     frameRate(20)
     for (var y = 0; y < matrix.length; y++) {
          for (var x = 0; x < matrix[y].length; x++) {
               if (matrix[y][x] == 1) {
                    var gr = new Grass(x, y);
                    grassArr.push(gr);
               }
               else if (matrix[y][x] == 2) {

                    var grEat = new GrassEater(x, y);
                    grassEaterArr.push(grEat);
               } else if (matrix[y][x] == 3) {

                    var pre = new Predator(x, y);
                    predatorArr.push(pre);
               } else if (matrix[y][x] == 4) {
                    var fire = new Fire (x, y);
                    fireArr.push(fire);
               } else if (matrix[y][x] == 5) {
                    var water = new Water (x,y);
                    waterArr.push (water)
               }

          }
     }
}


function draw() {
     for (var y = 0; y < matrix.length; y++) {
          for (var x = 0; x < matrix[y].length; x++) {
              var toBot = side - side * 0.1
              textSize(toBot);
              
               if (matrix[y][x] == 1) {

                    fill("green")
                    rect(x * side, y * side, side, side);
                    text('🌿', x * side  , y * side + toBot  );
               }else  if (matrix[y][x] == 2) {
                    fill("yellow")
                    rect(x * side, y * side, side, side);
                    text('👾', x * side, y * side + toBot );
               }else  if (matrix[y][x] == 3) {
                    fill("blue")
                    rect(x * side, y * side, side, side);
                    text('👻', x * side, y * side + toBot);
               }else if (matrix[y][x] == 4) {
                    fill ("#e25822")
                    rect(x * side, y * side, side, side);
                    text('🔥', x * side, y * side + toBot);
               }else if (matrix[y][x] == 5) {
                    fill ("#d4f1f9")
                    rect(x * side, y * side, side, side);
                    text('💧', x * side, y * side + toBot );
               }else {
                    fill("gray")
                    rect(x * side, y * side, side, side);

               }

          }
     }



     for( var i in grassArr){
          grassArr[i].mul()
     }

     for(let i in grassEaterArr){
          grassEaterArr[i].mul()
          grassEaterArr[i].eat()
     }

     for(let j in predatorArr){
          predatorArr[j].mul()
          predatorArr[j].eat()
     }
     for(let j in fireArr){
          fireArr[j].mul()
          fireArr[j].eat()
     }
     for (let j in waterArr) {
          waterArr[j].mul ()
          waterArr[j].eat ()
     }
}
