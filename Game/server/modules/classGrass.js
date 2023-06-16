const LivingCreature = require("./classLivingCreature");
let random = require("./random");

module.exports = class Grass extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.multiply = 0;
    }
    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));
        if (newCell && this.multiply >= 8) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.multiply = 0;
        }
    }
}
