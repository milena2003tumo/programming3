var express = require("express");
var fs = require('fs');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("../client"));

app.get("/", function(req, res) {
    res.redirect("index.html");
});

server.listen(7000, function() {
    console.log("App is running on port 7000");
});

grassArr = [];
grassEaterArr = [];
predatorArr = [];
fireArr = [];
waterArr = [];

LivingCreature = require("./modules/classLivingCreature");
Grass = require("./modules/classGrass");
GrassEater = require("./modules/classGrassEater");
Predator = require("./modules/classPredator");
Fire = require("./modules/classFire");
Water = require("./modules/classWater");

var flag = false;
io.on("connection", function(socket) {
    if (flag) {
        setInterval(drawForBackend, 5000);
        flag = true;
    }
});


function matrixGenerator(matrixSize, grassCount, grassEaterCount, predatorCount, fireCount, waterCount) {

    let matrix = []

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

matrix = matrixGenerator(25, 25, 10, 6, 8, 4)

for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y, 1);
            grassArr.push(gr);
        } else if (matrix[y][x] == 2) {

            var grEat = new GrassEater(x, y, 2);
            grassEaterArr.push(grEat);
        } else if (matrix[y][x] == 3) {

            var pre = new Predator(x, y, 3);
            predatorArr.push(pre);
        } else if (matrix[y][x] == 4) {
            var fire = new Fire(x, y, 4);
            fireArr.push(fire);
        } else if (matrix[y][x] == 5) {
            var water = new Water(x, y, 5);
            waterArr.push(water)
        }

    }
}


function drawForBackend() {

    for (var i in grassArr) {
        grassArr[i].mul()
    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].mul()
        grassEaterArr[i].eat()
    }

    for (let j in predatorArr) {
        predatorArr[j].mul()
        predatorArr[j].eat()
    }
    for (let j in fireArr) {
        fireArr[j].mul()
        fireArr[j].eat()
    }
    for (let j in waterArr) {
        waterArr[j].mul()
        waterArr[j].eat()
    }

    let sendData = {
        matrix: matrix
    }
    statistics = {
        grasses: grassArr.length,
        grassEaters: grassEaterArr.length,
        predators: predatorArr.length,
        fire: fireArr.length,
        water: waterArr.length,
    }
    fs.writeFileSync('statistics.json', JSON.stringify(statistics, undefined, 2))
    mystatistics = fs.readFileSync('statistics.json').toString()

    io.sockets.emit("sendStatistics", JSON.parse(mystatistics))
    io.sockets.emit("matrix", sendData)
}
setInterval(drawForBackend, 500)

//    let sendData = {
//       grasses: grassArr.length,
//       grassEaters: grassEaterArr.length,
//       predators: predatorArr.length,
//       fire: fireArr.length,
//       water: waterArr.length,
//    }

// }


// var express = require("express");
// var app = express();

// app.use(express.static("game"));

// app.get("/", function(req, res){
//    res.redirect("index.html");
// });

// app.listen(7000, function(){
//    console.log("Example is running on port 7000");
// });