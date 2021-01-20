import {Humain} from './humain.js'

class Guerrier extends Humain {
    constructor(nom, age, force, vie) {
        super(nom, age);
        this.force = force;
        this.vie = vie;
    }
}

export {Guerrier}
