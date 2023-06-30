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

let snowflakesCount = 200; // Snowflake count, can be overwritten by attrs
let baseCss = ``;


// set global attributes
if (typeof SNOWFLAKES_COUNT !== 'undefined') {
  snowflakesCount = SNOWFLAKES_COUNT;
}
if (typeof BASE_CSS !== 'undefined') {
  baseCss = BASE_CSS;
}

let bodyHeightPx = null;
let pageHeightVh = null;

function setHeightVariables() {
  bodyHeightPx = document.body.offsetHeight;
  pageHeightVh = (100 * bodyHeightPx / window.innerHeight);
}

// get params set in snow div
function getSnowAttributes() {
  const snowWrapper = document.getElementById('snow');
  if (snowWrapper) {
    snowflakesCount = Number(
      snowWrapper.attributes.count.value || snowflakesCount
    );
  }
}

// This function allows you to turn on and off the snow
function showSnow(value) {
  if (value) {
    document.getElementById('snow').style.display = "block";
  }
  else {
    document.getElementById('snow').style.display = "none";
  }
}

// Creating snowflakes
function spawnSnow(snowDensity = 200) {
  snowDensity -= 1;

  for (let i = 0; i < snowDensity; i++) {
    let board = document.createElement('div');
    board.className = "snowflake";

    document.getElementById('snow').appendChild(board);
  }
}

// Append style for each snowflake to the head
function addCss(rule) {
  let css = document.createElement('style');
  css.appendChild(document.createTextNode(rule)); // Support for the rest
  document.getElementsByTagName("head")[0].appendChild(css);
}

// Math
function randomInt(value = 100) {
  return Math.floor(Math.random() * value) + 1;
}

function randomIntRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// Create style for snowflake
function spawnSnowCSS(snowDensity = 200) {
  let snowflakeName = "snowflake";
  let rule = baseCss;

  for (let i = 1; i < snowDensity; i++) {
    let randomX = Math.random() * 100; // vw
    let randomOffset = Math.random() * 10 // vw;
    let randomXEnd = randomX + randomOffset;
    let randomXEndYoyo = randomX + (randomOffset / 2);
    let randomYoyoTime = getRandomArbitrary(0.3, 0.8);
    let randomYoyoY = randomYoyoTime * pageHeightVh; // vh
    let randomScale = Math.random();
    let fallDuration = randomIntRange(10, pageHeightVh / 10 * 3); // s
    let fallDelay = randomInt(pageHeightVh / 10 * 3) * -1; // s
    let opacity = Math.random();

    rule += `
      .${snowflakeName}:nth-child(${i}) {
        opacity: ${opacity};
        transform: translate(${randomX}vw, -10px) scale(${randomScale});
        animation: fall-${i} ${fallDuration}s ${fallDelay}s linear infinite;
      }
      @keyframes fall-${i} {
        ${randomYoyoTime * 100}% {
          transform: translate(${randomXEnd}vw, ${randomYoyoY}vh) scale(${randomScale});
        }
        to {
          transform: translate(${randomXEndYoyo}vw, ${pageHeightVh}vh) scale(${randomScale});
        }
      }
    `
  }
  addCss(rule);
}

// Load the rules and execute after the DOM loads
createSnow = function () {
  setHeightVariables();
  getSnowAttributes();
  spawnSnowCSS(snowflakesCount);
  spawnSnow(snowflakesCount);
};


// export createSnow function if using node or CommonJS environment
if (typeof module !== 'undefined') {
  module.exports = {
    createSnow,
    showSnow,
  };
}
else {
  window.onload = createSnow;
}

// TODO add option to easily re-render scenery. For example when window resizes.
// this should be easy as CSS rerenders after display block -> none -> block;
// TODO add progress bar for slower clients
