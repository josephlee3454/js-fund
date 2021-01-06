class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayname(){
      console.log(this.name);
      return this;

    }

    showstats(){
        console.log('Name: ' + this.name + ' , Health: ' + this.health + ' , Speed: ' + this.speed + ' , strength: ' + this.strength);
        return this;
    }
    drinksake(){
        this.health += 10;
        console.log('New Health after getting turnt ' + this.health);
        return this;

    }

}

class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.name = name;
        this.health = 200; 
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakwise(){
        console.log("What one programmer can do in one month, two programmers can do in two months.")
        return this
    }

}

const ninja1 = new Ninja("Tom");
ninja1.sayname();
ninja1.showstats();
ninja1.drinksake();


const sensei1 = new Sensei("Master Joe Lee");
sensei1.speakwise();
sensei1.drinksake();
sensei1.showstats();
