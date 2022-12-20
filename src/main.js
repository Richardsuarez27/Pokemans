import {Badge} from "./Badge.js"

import {Pokedex} from "./Pokedex.js"

import {Type, Typage} from "./Type.js"

import {Move} from "./Move.js"

import {Pokemon} from "./Pokemon.js"


let boulderBadge = new Badge("Boulder Badge")
let cascadeBadge = new Badge("Cascade Badge")
let thunderBadge = new Badge("Thunder Badge")
let rainbowBadge = new Badge("Rainbow Badge")
let soulBadge = new Badge("Soul Badge")
let marshBadge = new Badge("Marsh Badge")
let volcanoBadge = new Badge("Volcano Badge")
let earthBadge = new Badge("Earth Badge")

// console.log(boulderBadge.toString())

let pokedex = new Pokedex()



let bug = new Type(Typage.Bug, [Typage.Dark, Typage.Grass, Typage.Psychic], [Typage.Fire, Typage.Flying, Typage.Rock])

let fire = new Type(Typage.Fire, [Typage.Bug, Typage.Grass, Typage.Ice, Typage.Steel], [Typage.Ground, Typage.Rock, Typage.Water])

let ember = new Move("Ember", fire, 45, 25)
let fireSpin = new Move("Fire Spin", fire, 35, 15, 85)
let bubble = new Move("Bubble", bug, 40, 30)
//TODO Make water type ^
let charmander = new Pokemon(1, "Charmander", "Char", 7, 15, {}, fire, [ember, fireSpin], 50, 50 ,50 ,50 ,50 ,50)

let vulpix = new Pokemon(1, "Vulpix", null, 7, 15, {}, fire, [ember], 50, 50 ,50 ,50 ,50 ,50)

// for (let count = 0; count < 100; count++) {
//     console.log(charmander.useMove(fireSpin, vulpix))
// } THIS WAS TO TEST THAT THE hasMoveHit HELPER METHOD WORKED.


console.log(charmander.useMove(ember, vulpix))
