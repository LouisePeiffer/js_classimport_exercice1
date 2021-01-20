import {Humain} from './humain.js'

class Mage extends Humain {
    constructor(nom, age, magie) {
        super(nom, age);
        this.magie = magie;
    }
}

export {Mage}