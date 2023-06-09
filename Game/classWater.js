class Water extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 10;
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

    chooseCell(char3) {
        this.getNewCoordinates()
        return super.chooseCell(char3)
    }

    mul() {
        this.multiply++
        var emptyCells = this.chooseCell(0)
        var newCell = random(emptyCells)

        if (newCell && this.multiply >= 20) {

            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = 5
            var water = new Water(newX, newY)
            waterArr.push(water)

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
        var emptyCells = this.chooseCell(4)
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

        for (var i in waterArr) {
            if (this.x == waterArr[i].x && this.y == waterArr[i].y) {

                waterArr.splice(i, 1)
                break
            }
        }

    }

}



// [
//     [this.x, this.y - 4],
//     [this.x, this.y - 3],
//     [this.x, this.y - 2],
//     [this.x, this.y - 1],
//     [this.x, this.y],
//     [this.x - 1, this.y + 1],
//     [this.x, this.y + 2],
//     [this.x, this.y + 3]
// ];