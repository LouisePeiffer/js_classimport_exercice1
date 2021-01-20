import {Humain} from './humain.js'

class Archer extends Humain {
    constructor(nom, age, fleches) {
        super(nom,age);
        this.fleches = fleches;
    } 
}

export {Archer}