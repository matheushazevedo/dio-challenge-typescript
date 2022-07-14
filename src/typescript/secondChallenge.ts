enum Profession {
    Actress,
    Baker
}

interface People {
    name: string,
    age: number,
    profission: Profession
}

let people1: People = {
    name: 'Maria',
    age: 29,
    profission: Profession.Actress
}

let people2: People = {
    name: 'Roberto',
    age: 19,
    profission: Profession.Baker 
}

let people3: People = {
    name: 'Laura',
    age: 32,
    profission: Profession.Actress
}

let people4: People = {
    name: 'Carlos',
    age: 19,
    profission: Profession.Baker
}
