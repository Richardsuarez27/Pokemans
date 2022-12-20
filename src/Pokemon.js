"use strict";



export class Pokemon {
    constructor(id, name, nickname, level, evolvingLevel, moveLevels, types, 
        moves, hp, attack, defense, specialAttack, specialDefense, speed) {

        this.id = id;
        this.name = name;
        
        if (nickname === null) {
            this.nickname = this.name
        } else {
            this.nickname = nickname
        }

        this.level = level;
        this.exp = 0;
        this.evolvingLevel = evolvingLevel;
        this.moveLevels = moveLevels;
        this.types = types;
        this.moves = moves;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.specialAttack = specialAttack;
        this.specialDefense = specialDefense;
        this.speed = speed;
    }
    viewMoves() {
        return ` ${this.moves} `
    }
    useMove(move, defendingPokemon) {
       if (this.hasMove(move)) {
            if (this.hasMoveHit(move)) {
                return `${this.nickname}'s ${move.name} hit ${defendingPokemon.name}!`
            }
        //  return `${move.name} hit ${defendingPokemon.name}!`
       }
   
    }
    hasMove(move) {
        for (let index = 0; index < this.moves.length; index++) {
            const element = this.moves[index];            
            if(move === element) {
                return true
            }
        }
        return false
    }
    hasMoveHit(move) {
        const randomOutput = Math.random()
        if(randomOutput < move.accuracy / 100) {
            // it hit
            return true
        }
        // it missed
        return false  
    }
}
