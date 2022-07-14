"use strict";
var Profession;
(function (Profession) {
    Profession[Profession["Actress"] = 0] = "Actress";
    Profession[Profession["Baker"] = 1] = "Baker";
})(Profession || (Profession = {}));
let people1 = {
    name: 'Maria',
    age: 29,
    profission: Profession.Actress
};
let people2 = {
    name: 'Roberto',
    age: 19,
    profission: Profession.Baker
};
let people3 = {
    name: 'Laura',
    age: 32,
    profission: Profession.Actress
};
let people4 = {
    name: 'Carlos',
    age: 19,
    profission: Profession.Baker
};
