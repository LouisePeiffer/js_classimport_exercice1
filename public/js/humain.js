class Humain {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }
}

let humain1 = new Humain("Louise", 22)
let humain2 = new Humain("Léa", 25)

console.log(humain1);
console.log(humain2);

export{Humain}