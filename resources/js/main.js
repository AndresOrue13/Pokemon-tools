/* lista de tipos*/

var Types = {
        bug: "bug",
        dark: "dark",
        dragon: "dragon",
        electric: "electric",
        fairy: "fairy",
        fighting: "fighting",
        fire: "fire",
        flying: "flying",
        ghost: "ghost",
        grass: "grass",
        ground: "ground",
        ice: "ice",
        normal: "normal",
        poison: "poison",
        psychic: "psychic",
        rock: "rock",
        steel: "steel",
        water: "water"
}

/* objetos tipos */
function BugType() {
        var name = Types.bug;
        var hardness = [Types.fighting, Types.ground, Types.grass];
        var weakness = [Types.flying, Types.rock, Types.fire];
        var inmmunity = [];

        this.getName = function () {
                return name;
        };
        this.getHardness = function () {
                return hardness;
        };
        this.getWeakness = function () {
                return weakness;
        };
        this.getInmmunity = function () {
                return inmmunity;
        };
}

function DarkType() {
        var name = Types.dark;
        var hardness = [Types.ghost, Types.dark];
        var weakness = [Types.fighting, Types.bug, Types.fairy];
        var inmmunity = [Types.psychic];

        this.getName = function () {
                return name;
        };
        this.getHardness = function () {
                return hardness;
        };
        this.getWeakness = function () {
                return weakness;
        };
        this.getInmmunity = function () {
                return inmmunity;
        };
}

function DragonType() {
        var name = Types.dragon;
        var hardness = [Types.fire, Types.water, Types.grass, Types.electric];
        var weakness = [Types.ice, Types.dragon, Types.fairy];
        var inmmunity = [];

        this.getName = function () {
                return name;
        };
        this.getHardness = function () {
                return hardness;
        };
        this.getWeakness = function () {
                return weakness;
        };
        this.getInmmunity = function () {
                return inmmunity;
        };
}

function ElectricType() {
        var name = Types.electric;
        var hardness = [Types.flying, Types.steel, Types.electric];
        var weakness = [Types.ground];
        var inmmunity = [];

        this.getName = function () {
                return name;
        };
        this.getHardness = function () {
                return hardness;
        };
        this.getWeakness = function () {
                return weakness;
        };
        this.getInmmunity = function () {
                return inmmunity;
        };
}

function FairyType() {
        var name = Types.fairy;
        var hardness = [Types.fighting, Types.bug, Types.dark];
        var weakness = [Types.poison, Types.steel];
        var inmmunity = [Types.dragon];

        this.getName = function () {
                return name;
        };
        this.getHardness = function () {
                return hardness;
        };
        this.getWeakness = function () {
                return weakness;
        };
        this.getInmmunity = function () {
                return inmmunity;
        };
}

function FightingType() {
        var name = Types.fighting;
        var hardness = [Types.rock, Types.bug, Types.dark];
        var weakness = [Types.flying, Types.psychic, Types.fairy];
        var inmmunity = [];

        this.getName = function () {
                return name;
        };
        this.getHardness = function () {
                return hardness;
        };
        this.getWeakness = function () {
                return weakness;
        };
        this.getInmmunity = function () {
                return inmmunity;
        };
}

function FireType() {
        var name = Types.fire;
        var hardness = [Types.bug, Types.grass, Types.flying, Types.steel, Types.fire, Types.ice, Types.fairy];
        var weakness = [Types.ground, Types.rock, Types.water];
        var inmmunity = [];

        this.getName = function () {
                return name;
        };
        this.getHardness = function () {
                return hardness;
        };
        this.getWeakness = function () {
                return weakness;
        };
        this.getInmmunity = function () {
                return inmmunity;
        };
}

function FlyingType() {
        var name = Types.flying;
        var hardness = [Types.fighting, Types.bug, Types.grass];
        var weakness = [Types.rock, Types.electric, Types.ice];
        var inmmunity = [Types.ground];

        this.getName = function () {
                return name;
        };
        this.getHardness = function () {
                return hardness;
        };
        this.getWeakness = function () {
                return weakness;
        };
        this.getInmmunity = function () {
                return inmmunity;
        };
}

function GhostType() {
        var name = Types.ghost;
        var hardness = [Types.poison, Types.bug];
        var weakness = [Types.ghost, Types.dark];
        var inmmunity = [Types.normal, Types.fighting];

        this.getName = function () {
                return name;
        };
        this.getHardness = function () {
                return hardness;
        };
        this.getWeakness = function () {
                return weakness;
        };
        this.getInmmunity = function () {
                return inmmunity;
        };
}

function GrassType() {
        var name = Types.grass;
        var hardness = [Types.ground, Types.water, Types.grass, Types.electric];
        var weakness = [Types.flying, Types.poison, Types.bug, Types.fire, Types.ice];
        var inmmunity = [];

        this.getName = function () {
                return name;
        };
        this.getHardness = function () {
                return hardness;
        };
        this.getWeakness = function () {
                return weakness;
        };
        this.getInmmunity = function () {
                return inmmunity;
        };
}

function GroundType() {
        var name = Types.ground;
        var hardness = [Types.poison, Types.rock];
        var weakness = [Types.water, Types.grass, Types.ice];
        var inmmunity = [Types.electric];
        this.getName = function () {
                return name;
        };
        this.getHardness = function () {
                return hardness;
        };
        this.getWeakness = function () {
                return weakness;
        };
        this.getInmmunity = function () {
                return inmmunity;
        };
}

function IceType() {
        var name = Types.ice;
        var hardness = [Types.ice];
        var weakness = [Types.fighting, Types.rock, Types.steel, Types.fire];
        var inmmunity = [];
        this.getName = function () {
                return name;
        };
        this.getHardness = function () {
                return hardness;
        };
        this.getWeakness = function () {
                return weakness;
        };
        this.getInmmunity = function () {
                return inmmunity;
        };
}

function NormalType() {
        var name = Types.normal;
        var hardness = [];
        var weakness = [Types.fighting];
        var inmmunity = [Types.ghost];

        this.getName = function () {
                return name;
        };
        this.getHardness = function () {
                return hardness;
        };
        this.getWeakness = function () {
                return weakness;
        };
        this.getInmmunity = function () {
                return inmmunity;
        };
}

function PoisonType() {
        var name = Types.poison;
        var hardness = [Types.fighting, Types.poison, Types.bug, Types.grass, Types.fairy];
        var weakness = [Types.ground, Types.psychic];
        var inmmunity = [];

        this.getName = function () {
                return name;
        };
        this.getHardness = function () {
                return hardness;
        };
        this.getWeakness = function () {
                return weakness;
        };
        this.getInmmunity = function () {
                return inmmunity;
        };
}

function PsychicType() {
        var name = Types.psychic;
        var hardness = [Types.fighting, Types.psychic];
        var weakness = [Types.bug, Types.ghost, Types.dark];
        var inmmunity = [];
        this.getName = function () {
                return name;
        };
        this.getHardness = function () {
                return hardness;
        };
        this.getWeakness = function () {
                return weakness;
        };
        this.getInmmunity = function () {
                return inmmunity;
        };
}

function RockType() {
        var name = Types.rock;
        var hardness = [Types.normal, Types.flying, Types.poison, Types.fire];
        var weakness = [Types.fighting, Types.ground, Types.steel, Types.water, Types.grass];
        var inmmunity = [];
        this.getName = function () {
                return name;
        };
        this.getHardness = function () {
                return hardness;
        };
        this.getWeakness = function () {
                return weakness;
        };
        this.getInmmunity = function () {
                return inmmunity;
        };
}

function SteelType() {
        var name = Types.steel;
        var hardness = [Types.normal, Types.flying, Types.rock, Types.bug, Types.steel, Types.grass, Types.psychic, Types.ice, Types.dragon, Types.fairy];
        var weakness = [Types.fighting, Types.ground, Types.fire];
        var inmmunity = [Types.poison];
        this.getName = function () {
                return name;
        };
        this.getHardness = function () {
                return hardness;
        };
        this.getWeakness = function () {
                return weakness;
        };
        this.getInmmunity = function () {
                return inmmunity;
        };
}

function WaterType() {
        var name = Types.water;
        var hardness = [Types.steel, Types.fire, Types.water, Types.ice];
        var weakness = [Types.grass, Types.electric];
        var inmmunity = [];
        this.getName = function () {
                return name;
        };
        this.getHardness = function () {
                return hardness;
        };
        this.getWeakness = function () {
                return weakness;
        };
        this.getInmmunity = function () {
                return inmmunity;
        };
}

var TypeMap = {
        bug: new BugType(),
        dark: new DarkType(),
        dragon: new DragonType(),
        electric: new ElectricType(),
        fairy: new FairyType(),
        fighting: new FightingType(),
        fire: new FireType(),
        flying: new FlyingType(),
        ghost: new GhostType(),
        grass: new GrassType(),
        ground: new GroundType(),
        ice: new IceType(),
        normal: new NormalType(),
        poison: new PoisonType(),
        psychic: new PsychicType(),
        rock: new RockType(),
        steel: new SteelType(),
        water: new WaterType()
};

/* funcionamiento */

function mergeList(list1, list2){
     list1=list1.concat(list2);
        return list1.filter(function(elem, index, list2){
                return (index === list2.indexOf(elem));
        });
        
}

function sendDataToHtml(elementId, data) {
        var element = document.getElementById(elementId);
        if (element !== null) {
                element.innerText = data;
        }
}

function getPokemonData(type1) {
        var type1 = document.querySelector('select[name="type1"]');
        var type2 = document.querySelector('select[name="type2"]');

        if (type1 !== null && type2 !== null) {

                var IsType1Valid = (type1.value !== "none");
                var IsType2Valid = (type2.value !== "none");

                if (IsType1Valid && IsType2Valid) {
                        /* unifica a los 2 tipos */
                          var selectedType1 = TypeMap[type1.value];
                          var selectedType2 = TypeMap[type2.value];

                                if (selectedType1 !== undefined && selectedType2 !== undefined) {
                                        sendDataToHtml('hardness', mergeList(selectedType1.getHardness(), selectedType2.getHardness()));
                                        sendDataToHtml('weakness', mergeList(selectedType1.getWeakness(), selectedType2.getWeakness()));
                                        sendDataToHtml('inmmunity', mergeList(selectedType1.getInmmunity(), selectedType2.getInmmunity()));
                                }

                        
                } else {
                        if (IsType1Valid) {
                                // devolver la informacion de type1
                                var selectedType = TypeMap[type1.value];

                                if (selectedType !== undefined) {
                                        sendDataToHtml('hardness', selectedType.getHardness());
                                        sendDataToHtml('weakness', selectedType.getWeakness());
                                        sendDataToHtml('inmmunity', selectedType.getInmmunity());
                                }


                        }
                }

        }
}
