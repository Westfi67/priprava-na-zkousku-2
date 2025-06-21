/**
 * Write your code below!
 */


class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Ahoj, jsem ${this.name} a je mi ${this.age} let.`)
    }
}



const zvire = new Animal('Pepik', 3);
const zvire2 = new Animal('Klára', 73);

zvire.sayHello()
zvire2.sayHello()

console.log(zvire)
console.log(zvire2)


class Cat extends Animal {
    constructor(name, age, color, lifes) {
        super(name, age)
        this.color = color;
        this.lifes = lifes;
    }

    meow() {
        console.log('Mňau, chci jíst')
    }

    die() {
        this.lifes -=1
        console.log(`Zbývá mi ${this.lifes} životů.`)
    }

    sayHello() {
        console.log(`Ahoj,já jsem ${this.name}, jsem ${this.color} kočka a mám ${this.lifes} životů`)
    }
}

const kocka = new Cat('Mourek',6 , 'strakatá', 7)

console.log(kocka);
kocka.sayHello()
kocka.meow()
kocka.die()
kocka.die()
kocka.die()
kocka.sayHello()





