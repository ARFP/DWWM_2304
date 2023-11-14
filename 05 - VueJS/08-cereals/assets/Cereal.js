class Cereal {
    constructor(_objetCereal){
        this.id = _objetCereal.id;
        this.name = _objetCereal.name;
        this.calories = _objetCereal.calories;
        this.protein = _objetCereal.protein;
        this.sodium = _objetCereal.sodium;
        this.fiber = _objetCereal.fiber;
        this.carbo = _objetCereal.carbo;
        this.sugars = _objetCereal.sugars;
        this.potass = _objetCereal.potass;
        this.vitamins = _objetCereal.vitamins;
        this.rating = _objetCereal.rating;
        this.ns = this.setNS(_objetCereal.rating);
    }
    setNS(rate){
        if(rate < 35){
            return "E";
        }
        else if(rate >= 35 && rate < 55){
            return "D";
        }
        else if(rate >= 55 && rate < 70){
            return "C";
        }
        else if(rate >= 70 && rate < 80){
            return "B";
        }
        else{
            return "A";
        }
    }
}

export { Cereal };