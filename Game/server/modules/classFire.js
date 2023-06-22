const LivingCreature = require("./classLivingCreature");
let random = require("./random");

module.exports = class Fire extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.multiply = 0;
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(char, char1, char2) {
        this.getNewCoordinates();
        return super.chooseCell(char, char1, char2);
    }

    mul() {
        this.multiply++
            var emptyCells = this.chooseCell(0)
        var newCell = random(emptyCells)

        if (newCell && this.multiply >= 20) {

            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = 4
            var fire = new Fire(newX, newY)
            fireArr.push(fire)

            this.multiply = 0
        }
  
    }
    move() {
        this.energy--
            var emptyCells = this.chooseCell(0)
        var newCell = random(emptyCells)

        if (newCell && this.energy >= 0) {

            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = matrix[this.y][this.x]

            matrix[this.y][this.x] = 0


            this.x = newX
            this.y = newY
        } else {
            if (this.energy < 0) {
                this.die()
            }
        }
    }


    eat() {
        var emptyCells = this.chooseCell(1, 2, 3)
        var newCell = random(emptyCells)

        if (newCell) {
            this.energy++

                var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = matrix[this.y][this.x]

            matrix[this.y][this.x] = 0


            this.x = newX
            this.y = newY



        }

    }

    die() {
        matrix[this.y][this.x] = 0

        for (var i in fireArr) {
            if (this.x == fireArr[i].x && this.y == fireArr[i].y) {

                fireArr.splice(i, 1)
                break
            }
        }

    }

}