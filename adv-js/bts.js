const person = { age: 32 };

function getAdultYears(p) {
    p.age -= 18;
    return p.age;
}

console.log(getAdultYears({ ...person }));

console.log(person);