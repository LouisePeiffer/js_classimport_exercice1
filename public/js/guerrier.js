import {Humain} from './humain.js'

class Guerrier extends Humain {
    constructor(nom, age, force, vie) {
        super(nom, age);
        this.force = force;
        this.vie = vie;
    }
}

let guerrier1 = new Guerrier ("Dawid", 47, "forceur", 6)
let guerrier2 = new Guerrier ("Béné", 24, "mahseub", 3)

console.log(guerrier1);
console.log(guerrier2);