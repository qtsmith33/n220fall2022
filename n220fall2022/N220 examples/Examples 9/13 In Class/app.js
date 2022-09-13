//Variables = String, Number, Boolean
let name = "Quinn";
let age = 31;
let hungry = true;

//Object
//identifyer: attribute or property
let me = {
    name: "Quinn",
    age: 36,
    hungry: true,
    fashionSense: 2,
    teach: function() {
        console.log(this.name + " learns")
    }
};

//Changing properties of an object
me.age ++;
me.fashionSense= 3;
