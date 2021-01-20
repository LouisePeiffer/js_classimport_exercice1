import {Humain} from './humain.js'

class Mage extends Humain {
    constructor(nom, age, magie) {
        super(nom, age);
        this.magie = magie;
    }
}

let mage1 = new Mage ("Mufasa", 19, "sale type")
let mage2 = new Mage ("Saïd", 23, "calme")

console.log(mage1);
console.log(mage2);