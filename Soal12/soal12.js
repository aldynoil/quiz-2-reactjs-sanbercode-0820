class BangunDatar {
    constructor(name, luas, keliling) {
    this._name = name;
    this._luas = "";
    this._keliling = false;      
    }
get name() {
    return this._name;
    }
set name(name){
    this._name = name;
    }
}


// Inheritance
class Lingkaran extends BangunDatar {
    constructor(name, pi, r){
    super(name);  
    this.pi = 3.14;
    
        }
        hasil(){
            return "";
    }
}
var sungokong = new Ape("kera sakti");
sungokong.hasil()
console.log(sungokong)

class Persegi extends BangunDatar {
    constructor(name){
    super(name);
    this.legs = 2;  
        }
        jump(){
            return "hop hop";
    }
}
var kodok = new Frog("buduk");
kodok.jump()
console.log(kodok)