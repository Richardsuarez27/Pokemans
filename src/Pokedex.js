"use strict";
export class Pokedex {
    constructor() {
        this.pokemonEncountered = []
        this.pokemonCaught = []
    }
    // view(Pokemon)
    // TODO view method (need to make pokemon class)
    // TODO toString method (make nice)
    toString() {
        return ` ${this.pokemonEncountered} ${this.pokemonCaught} `;

    }
}

let pokedex = new Pokedex()

console.log(pokedex.toString())