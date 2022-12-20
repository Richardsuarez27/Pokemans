"use strict";

export class Move {
    constructor(name, type, power, pp, accuracy = 99) {
        this.name = name;
        this.type = type;
        this.power = power;
        this.pp = pp;
        this.accuracy = accuracy;
    }
    
    isSuperEffective(pokemon) {
        // TODO make the black box to return if the effectiveness of the move
    }

    toString() {
        return ` ${this.name} ${this.type} ${this.power} ${this.pp} ${this.accuracy} `
        // TODO make nice^
    }
}
