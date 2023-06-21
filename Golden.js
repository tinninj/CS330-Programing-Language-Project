import Dog from './Dog.js'; //import Dog class

export default class Golden extends Dog{ //export Golden class
    constructor(name,age,breed,favoriteToy){//added an additional attribute called favoriteToy
        super(name,age,breed); //imports the three attributes from the Dog class
        this.favoriteToy = favoriteToy;
    }

    toString() {
        return `${super.toString()}They love to play with ${this.favoriteToy}.`; //imports the describe function from the Dog class
    }

    rollOver(){
        return (`${this.name} rollovered when I asked him to.`)
    }

    get favoriteToy(){
        return this._favoriteToy;
    }

    set favoriteToy(newFavoriteToy){
        this._favoriteToy = newFavoriteToy
    }
}