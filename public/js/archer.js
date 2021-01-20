import {Humain} from './humain.js'

class Archer extends Humain {
    constructor(nom, age, fleches) {
        super(nom,age);
        this.fleches = fleches;
    } 
}

let archer1 = new Archer("Alexandru", 23, "en bois")
let archer2 = new Archer("Maxence", 26, "en fer")

console.log(archer1);
console.log(archer2);