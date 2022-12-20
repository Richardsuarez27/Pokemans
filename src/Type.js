"use strict";

export const Typage = {
    Bug: "Bug",
    Dark: "Dark",
    Dragon: "Dragon",
    Electric: "Electric",
    Fairy: "Fairy",
    Fighting: "Fighting",
    Fire: "Fire",
    Flying: "Flying",
    Ghost: "Ghost",
    Grass: "Grass",
    Ground: "Ground",
    Ice: "Ice",
    Normal: "Normal",
    Poison: "Poison",
    Psychic: "Psychic",
    Rock: "Rock",
    Steel: "Steel",
    Water: "Water"
}


export class Type {
    constructor(name, advantages, disadvantages) {
        this.name = name;
        this.advantages = advantages;
        this.disadvantages = disadvantages;
    }
    toString() {
        return ` ${this.name} ${this.advantages} ${this.disadvantages}`
        // TODO Make nice ^
    }
}

